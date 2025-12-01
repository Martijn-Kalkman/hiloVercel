export interface YoutubePlaylistThumbnailDto {
  url: string;
  width: number;
  height: number;
}

export interface YoutubePlaylistThumbnailsDto {
  default?: YoutubePlaylistThumbnailDto;
  medium?: YoutubePlaylistThumbnailDto;
  high?: YoutubePlaylistThumbnailDto;
}

export interface YoutubePlaylistResourceIdDto {
  kind: string;
  videoId: string;
}

export interface YoutubePlaylistSnippetDto {
  publishedAt: string;
  channelId: string;
  title: string;
  description: string;
  thumbnails: YoutubePlaylistThumbnailsDto;
  channelTitle: string;
  playlistId: string;
  position: number;
  resourceId: YoutubePlaylistResourceIdDto;
}

export interface YoutubePlaylistItemDto {
  isDeleted?: any;
  kind: string;
  etag: string;
  id: string;
  snippet: YoutubePlaylistSnippetDto;
}

export interface YoutubePlaylistDto {
  kind: string;
  etag: string;
  items: YoutubePlaylistItemDto[];
  pageInfo: {
    totalResults: number;
    resultsPerPage: number;
  };
  nextPageToken?: string;
}