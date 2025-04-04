async function getVideoPlaylist(playlistId: string): Promise<YoutubePlaylistDto[]> {
  const url = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=9&playlistId=${playlistId}&key=${useRuntimeConfig().public.youtube}`;
  return $fetch<YoutubePlaylistDto[]>(url);
}

export const refreshYoutubeSongs = async () => {
  const djset = await getVideoPlaylist('PLoVPdGdbdII0a3kQnlZXG95LlUBup1EUL'); // DJ Set;
  const heldeep = await getVideoPlaylist('PLoVPdGdbdII3XrN-6CvLoHGRHM5jz_OGZ'); // Heldeep;
  await useStorage().setItem('youtube', { djset, heldeep });
};
