export interface BandsInTownVenue {
  location: string;
  name: string;
  latitude?: string;
  longitude?: string;
  street?: string;
  postal_code?: string;
  city?: string;
  country?: string;
  region?: string;
}

export interface BandsInTownEvent {
  id: string;
  title: string;
  datetime: string;
  venue: BandsInTownVenue;
  url: string;
  rsvpUrl: string;
}