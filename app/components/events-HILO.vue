<script setup lang="ts">
import type { BandsInTownEventDto } from '~~/shared/types';

const events = await $fetch<BandsInTownEventDto[]>('/api/bandsintown');
</script>

<template>
  <section class="w-11/12 mx-auto">
    <h2 id="events" class="lg:text-7xl justify-end mt-6 flex text-4xl font-bold w-full text-white">
      EVENTS
    </h2>
    <div class="flex flex-col items-center xl:flex-row w-full mx-auto justify-between">
      <div class="xl:ml-10 xl:w-6/12 max-h-[450px] overflow-y-auto overflow-x-hidden">
        <div
          class="flex flex-col xl:flex-row hover:bg-gray-100/10 p-2 justify-between items-start w-12/12 xl:w-12/12 mx-auto border-b-2 pb-4"
          v-for="event in events"
          :key="event.id"
        >
          <div class="flex flex-col xl:flex-row xl:items-center gap-x-4 mb-4 xl:mb-0 w-full">
            <div class="flex flex-col w-[80vw] xl:w-8/12">
              <p class="text-gray-300 text-lg font-semibold">
                {{ event.title || event.venue.location }}
              </p>
              <!-- <p class="text-gray-400">
                <FormattedDateComponent :value="event.datetime" />
              </p> -->
              <p class="text-gray-400">
                {{ event.venue.location }}
              </p>
            </div>
            <div
              class="flex gap-x-3 xl:gap-x-4 mt-4 xl:mt-0 w-full xl:w-4/12 justify-center xl:justify-end"
            >
              <a
                :href="event.rsvpUrl"
                target="_blank"
                class="text-white border border-white py-2 px-4 rounded-xl w-full xl:w-auto font-bold text-center text-lg hover:bg-white hover:text-black"
              >
                RSVP
              </a>
              <a
                :href="event.url"
                target="_blank"
                class="bg-white text-black border border-gray-300 py-2 px-4 rounded-xl w-full xl:w-auto font-bold text-center text-lg hover:bg-gray-100 hover:bg-transparent hover:text-white"
              >
                TICKET
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="2xl:w-6/12 xl:flex hidden justify-center">
        <div id="globeViz" class="overflow-hidden pointer-events-none"></div>
      </div>
    </div>
  </section>
</template>
