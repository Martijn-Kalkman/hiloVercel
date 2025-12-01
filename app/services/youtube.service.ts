import { YoutubePlaylistDto } from '@/app/types/youtube';

async function getVideoPlaylist(playlistId: string): Promise<YoutubePlaylistDto> {
  const apiKey = process.env.YOUTUBE_API || process.env.NEXT_PUBLIC_YOUTUBE_API;
  
  if (!apiKey) {
    console.warn('YOUTUBE_API not found.');
    return {
      kind: 'youtube#playlistItemListResponse',
      etag: '',
      items: [],
      pageInfo: {
        totalResults: 0,
        resultsPerPage: 0,
      },
    };
  }

  const url = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=50&playlistId=${playlistId}&key=${apiKey}`;
  
  try {
    const response = await fetch(url, {
      next: { revalidate: 3600 },
    });

    if (!response.ok) {
      throw new Error(`YouTube API error: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error('Error fetching YouTube playlist:', error);
    return {
      kind: 'youtube#playlistItemListResponse',
      etag: '',
      items: [],
      pageInfo: {
        totalResults: 0,
        resultsPerPage: 0,
      },
    };
  }
}
export async function getYoutubePlaylists(): Promise<{
  djset: YoutubePlaylistDto;
  heldeep: YoutubePlaylistDto;
}> {
  const [djset, heldeep] = await Promise.all([
    getVideoPlaylist('PLoVPdGdbdII0a3kQnlZXG95LlUBup1EUL'),
    getVideoPlaylist('PLoVPdGdbdII3XrN-6CvLoHGRHM5jz_OGZ'),
  ]);

  return { djset, heldeep };
}

