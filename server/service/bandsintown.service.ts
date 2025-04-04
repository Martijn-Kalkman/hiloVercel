import { useRuntimeConfig } from '#imports';
import { BandsInTownEventDto } from '~~/shared/types';

export const refreshBandsInTown = async () => {
  const bit = await $fetch<any[]>(
    `https://rest.bandsintown.com/V3.1/artists/id_383858/events/?app_id=${useRuntimeConfig().public.bandsintown}`,
  );

  const result: BandsInTownEventDto[] = bit.map((event) => {
    return {
      id: event.id,
      title: event.title,
      datetime: event.datetime,
      venue: {
        location: event.venue.location,
        name: event.venue.name,
        latitude: event.venue.latitude,
        longitude: event.venue.longitude,
        street: event.venue.street,
        postal_code: event.venue.postal_code,
        city: event.venue.city,
        country: event.venue.country,
        region: event.venue.region,
      },
      url: event.url,
      rsvpUrl: getRsvpUrl(event.id),
    };
  });
  await useStorage().setItem('bandsintown', result);
};

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
