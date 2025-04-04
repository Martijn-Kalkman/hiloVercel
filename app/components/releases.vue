<script setup lang="ts">
import { onClickOutside } from '@vueuse/core';

const target = ref(null);
const { djset } = await $fetch<{ djset: YoutubePlaylistDto }>(
  '/api/songs/latest',
);

// Video playback state
const isVideoPlaying = ref(false);
const currentVideoId = ref('');

// Open the video player with the selected video
const openVideoPopup = (videoId: string) => {
  currentVideoId.value = videoId;
  isVideoPlaying.value = true;
};

// Close video player
const closePlayer = () => {
  isVideoPlaying.value = false;
  currentVideoId.value = '';
};

onClickOutside(target, (event) => {
  closePlayer();
});
</script>

<template>
  <section class="relative px-4 py-12 bg-[url('/releasesbg.png')] bg-cover text-white flex flex-col">
    <div class="lg:w-11/12 mx-auto">
      <div class="flex justify-between flex-col lg:flex-row">
        <div class="lg:w-5/12 flex flex-col lg:flex-row justify-start mb-8 lg:mb-0">
          <h2 id="releases" class="lg:text-7xl text-4xl font-bold">MUSIC</h2>

          <div class="flex flex-col lg:flex-row lg:ml-8 lg:absolute lg:top-0 lg:right-0 lg:p-6 p-4">
            <div class="flex justify-center gap-4 flex-wrap mb-24 lg:mb-0">
              <a target="_blank" href="https://open.spotify.com/artist/0ETJQforv5OXgDgidQv9qd">
                <Icon class="lg:h-16 lg:w-16 h-12 w-12 px-5 lg:px-10" name="icons:spotify" color="black" />
              </a>
              <a target="_blank" href="https://music.apple.com/us/artist/hi-lo/1008492024">
                <Icon class="lg:h-16 lg:w-16 h-12 w-12 px-5 lg:px-10" name="icons:soundcloud" color="black" />
              </a>
              <a target="_blank" href="https://music.apple.com/us/artist/oliver-heldens/608826395">
                <Icon class="lg:h-16 lg:w-16 h-12 w-12 lg:px-10" name="icons:apple" color="black" />
              </a>
              <a target="_blank" href="https://www.youtube.com/@HILOofficial">
                <Icon class="lg:h-16 lg:w-16 h-12 w-12 lg:px-10" name="icons:youtube" color="black" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="w-full items-center mx-auto flex flex-col lg:flex-row lg:mt-12 gap-8 lg:gap-12 transition-all duration-300">
      <!-- Spotify embed for an artist -->
      <div class="w-full lg:w-6/12 flex flex-col items-center lg:items-start lg:p-6 rounded-lg shadow-lg transition-all duration-300">
        <div class="w-full lg:w-auto ml-auto rounded-xl">
          <iframe src="https://open.spotify.com/embed/artist/0ETJQforv5OXgDgidQv9qd?utm_source=generator"
            class="lg:w-[40vw] w-[93vw] rounded-xl h-[850px]" frameborder="0"
            referrerpolicy="no-referrer-when-downgrade"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
        </div>
      </div>

      <!-- DJset Playlist -->
      <div class="bg-[#045A6A] lg:w-[40vw] w-[93vw]  p-4 rounded-xl overflow-scroll lg:h-[850px] no-scrollbar">
        <div class="flex flex-row justify-between">
          <div>
            <h3 class="lg:text-4xl my-auto text-4xl font-bold">LIVE SETS</h3>
          </div>
          <div class="">
            <a target="_blank" href="https://www.youtube.com/playlist?list=PLoVPdGdbdII0a3kQnlZXG95LlUBup1EUL">
              <Icon class="lg:h-16 lg:w-16 h-12 w-12 lg:px-10" name="icons:youtube" color="black" />
            </a>
          </div>
        </div>
        <div
          v-for="video in djset.items.filter(v => v.snippet.thumbnails?.default?.url && v.snippet.resourceId?.videoId)"
          :key="video.id"
          class="flex items-center justify-between gap-4 cursor-pointer hover:bg-gray-700 rounded-lg p-2 transition-all duration-200"
          @click="openVideoPopup(video.snippet.resourceId.videoId)">
          <img class="w-16 h-16 object-cover rounded-lg" :src="video.snippet.thumbnails.default.url"
            alt="Video Thumbnail" />
          <div class="flex-1 pl-4 flex items-center">
            <p class="text-white text-sm font-medium overflow-hidden text-ellipsis whitespace-normal mr-2">
              {{ video.snippet.title }}
            </p>
          </div>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M5.5827 11.9816L11.1797 8.75006C11.8947 8.33806 11.8947 7.66256 11.1797 7.25006L5.5822 4.01856C4.8672 3.60556 4.2832 3.94356 4.2832 4.76856V11.2316C4.2832 12.0566 4.8682 12.3946 5.5822 11.9816H5.5827Z"
              fill="white" />
          </svg>
        </div>
      </div>
    </div>

    <!-- YouTube Video Player -->
    <div v-if="isVideoPlaying" class="mx-auto sm:w-3/4 md:w-2/4 fixed inset-0 flex items-center z-50">
      <div ref="target" class="relative w-full max-w-5xl h-[36%]">
        <iframe :src="`https://www.youtube.com/embed/${currentVideoId}?autoplay=1`" class="w-full h-full"
          frameborder="0" referrerpolicy="no-referrer-when-downgrade" allow="autoplay; encrypted-media; fullscreen"
          allowfullscreen></iframe>
        <button @click="closePlayer" class="absolute top-4 right-4 text-white text-xl bg-black rounded-full p-2 z-10">
          X
        </button>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Optional styling for video */
.video-item:hover {
  background-color: #333;
}

.no-scrollbar::-webkit-scrollbar {
  display: none;
}

.no-scrollbar {
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
}
</style>