import { BandsInTownEvent } from '@/app/types/bandsintown';

interface EventStructuredDataProps {
  events: BandsInTownEvent[];
}

export default function EventStructuredData({ events }: EventStructuredDataProps) {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://officialhilo.com";

  if (!events || events.length === 0) {
    return null;
  }

  const eventStructuredData = events.map((event) => {
    const eventDate = event.datetime ? new Date(event.datetime) : null;
    
    return {
      "@context": "https://schema.org",
      "@type": "MusicEvent",
      "name": event.title || `HI-LO Live Performance`,
      "startDate": eventDate ? eventDate.toISOString() : undefined,
      "eventStatus": "https://schema.org/EventScheduled",
      "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
      "location": {
        "@type": "Place",
        "name": event.venue?.name || event.venue?.location,
        "address": {
          "@type": "PostalAddress",
          "addressLocality": event.venue?.location?.split(',')[0] || "",
          "addressCountry": event.venue?.location?.split(',').pop()?.trim() || ""
        }
      },
      "performer": {
        "@type": "MusicGroup",
        "name": "HI-LO"
      },
      "offers": event.url ? {
        "@type": "Offer",
        "url": event.url,
        "price": "0",
        "priceCurrency": "USD",
        "availability": "https://schema.org/InStock"
      } : undefined,
      "url": event.url || `${baseUrl}#events`
    };
  }).filter(event => event.startDate); // Only include events with valid dates

  if (eventStructuredData.length === 0) {
    return null;
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(eventStructuredData.length === 1 ? eventStructuredData[0] : eventStructuredData) }}
    />
  );
}

