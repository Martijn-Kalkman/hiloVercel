export type SongDto = {
    name: string;
    image: string;
    preview_url: string;
    release_date: Date;
    album_type: string;
    artists: string;
  
    // Gui control
    isPlaying?: boolean;
  };
  
  export type BandsInTownEventDto = {
    id: string;
    title: string;
    datetime: string;
    venue: {
      location: string;
      name: string;
      latitude: string;
      longitude: string;
      street: string;
      postal_code: string;
      city: string;
      country: string;
      region?: string;
    };
    url: string;
    rsvpUrl: string;
  };
  
  export type YoutubePlaylistItemDto = {
    isDeleted: any;
    kind: string;
    etag: string;
    id: string;
    snippet: {
      publishedAt: string;
      channelId: string;
      title: string;
      description: string;
      thumbnails: {
        default: {
          url: string;
          width: number;
          height: number;
        };
        medium: {
          url: string;
          width: number;
          height: number;
        };
        high: {
          url: string;
          width: number;
          height: number;
        };
      };
      channelTitle: string;
      playlistId: string;
      position: number;
      resourceId: {
        kind: string;
        videoId: string;
      };
    };
  }
  
  export type YoutubePlaylistDto = {
    kind: string;
    etag: string;
    items: YoutubePlaylistItemDto[];
    pageInfo: {
      totalResults: number;
      resultsPerPage: number;
    };
    nextPageToken: string;
  }
  