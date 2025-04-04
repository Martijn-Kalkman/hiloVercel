import { refreshYoutubeSongs } from '~~/server/service/youtube.service';

export default defineTask({
  meta: {
    name: 'youtube:refresh',
    description: 'Refresh Youtube playlist songs',
  },
  run() {
    refreshYoutubeSongs().then(() => console.log('Youtube songs refreshed'));
    return { result: 'Success' };
  },
});
