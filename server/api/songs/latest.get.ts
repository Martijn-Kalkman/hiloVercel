import { defineEventHandler } from 'h3';
import { refreshYoutubeSongs } from '~~/server/service/youtube.service';

export default defineEventHandler(async () => {
  const cached = await useStorage().getItem<{
    djset: YoutubePlaylistDto;
    heldeep: YoutubePlaylistDto;
  }>('youtube');

  if (!cached) {
    await refreshYoutubeSongs();
  }

  return useStorage().getItem<{
    djset: YoutubePlaylistDto;
    heldeep: YoutubePlaylistDto;
  }>('youtube');
});
