import { BandsInTownEvent } from '@/app/types/bandsintown';

interface BandsInTownApiResponse {
    id: string;
    title?: string;
    datetime: string;
    venue: {
        location: string;
        name: string;
        latitude?: string;
        longitude?: string;
        street?: string;
        postal_code?: string;
        city?: string;
        country?: string;
        region?: string;
    };
    url: string;
}

function getRsvpUrl(eventId: string): string {
    const baseUrl = 'https://www.bandsintown.com/artist-rsvp/383858';
    const params = new URLSearchParams({
        event_id: eventId,
        utm_campaign: 'rsvp',
        utm_medium: 'web',
        app_id: 'js_oliverheldens.com',
        affil_code: 'js_oliverheldens.com',
        utm_source: 'widget',
        came_from: '242',
        spn: '0',
        signature: 'ZZb22c422ff79bcf81120dc193a43501cf08ae7acbe3b47edb190794106c3d3a93',
    });
    return `${baseUrl}?${params.toString()}`;
}

function transformApiEvent(apiEvent: BandsInTownApiResponse): BandsInTownEvent {
    const { venue } = apiEvent;

    return {
        id: apiEvent.id,
        title: apiEvent.title ?? '',
        datetime: apiEvent.datetime,
        venue: {
            location: venue.location ?? '',
            name: venue.name ?? '',
            latitude: venue.latitude,
            longitude: venue.longitude,
            street: venue.street,
            postal_code: venue.postal_code,
            city: venue.city,
            country: venue.country,
            region: venue.region,
        },
        url: apiEvent.url ?? '',
        rsvpUrl: getRsvpUrl(apiEvent.id),
    };
}

export async function getBandsInTownEvents(): Promise<BandsInTownEvent[]> {
    const appId = process.env.BANDSINTOWN_API;

    if (!appId) {
        console.error('BandsInTown API App ID not found in environment variables.');
        return [];
    }

    const apiUrl = `https://rest.bandsintown.com/V3.1/artists/id_383858/events/?app_id=${appId}`;

    try {
        const response = await fetch(apiUrl, {
            next: { revalidate: 300 },
        });

        if (!response.ok) {
            const errorText = await response.text();
            console.error(
                `BandsInTown API fetch failed: ${response.status} ${response.statusText}. Details: ${errorText.substring(0, 100)}`
            );
            return [];
        }

        const data = (await response.json()) as BandsInTownApiResponse[];

        if (!Array.isArray(data)) {
            console.error('BandsInTown API returned malformed data (not an array).');
            return [];
        }

        return data.map(transformApiEvent);
    } catch (error) {
        console.error('An unexpected error occurred while fetching BandsInTown events:', error);
        return [];
    }
}