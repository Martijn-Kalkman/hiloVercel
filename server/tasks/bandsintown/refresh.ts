import { refreshBandsInTown } from '~~/server/service/bandsintown.service';

export default defineTask({
  meta: {
    name: 'bandsintown:refresh',
    description: 'Refresh Bands in Town events',
  },
  run() {
    refreshBandsInTown().then(() => console.log('Bands in town refreshed'));
    return { result: 'Success' };
  },
});
