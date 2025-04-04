import { defineEventHandler } from 'h3';
import { refreshBandsInTown } from '~~/server/service/bandsintown.service';
import { BandsInTownEventDto } from '~~/shared/types';

export default defineEventHandler(async () => {
  const cachedBandsInTown = await useStorage().getItem<BandsInTownEventDto[]>('bandsintown');

  if (!cachedBandsInTown?.length) {
    await refreshBandsInTown();
  }

  return useStorage().getItem<BandsInTownEventDto[]>('bandsintown');
});
    