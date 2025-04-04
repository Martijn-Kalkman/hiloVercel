<template>
  <section>
    <div class="flex flex-col sm:flex-row justify-between">
      <div>
        <h2 class="w-11/12 mx-auto lg:text-7xl text-4xl mb-4 ml-4 mt-4 font-bold text-white">
          SOCIALS
        </h2>
      </div>
      <div class="flex m-4 lg:m-0 flex-row mx-auto sm:justify-end mr-4 lg:mr-32">
        <div class="flex items-center gap-x-4 lg:gap-x-8 ml-8">
          <NuxtLink
            to="https://www.instagram.com/hilo_ofc/"
            target="_blank"
            class="flex items-center"
          >
            <Icon class="lg:h-16 lg:w-16 h-12 w-12" name="icons:instagram" color="white" />
          </NuxtLink>

          <NuxtLink
            to="https://www.youtube.com/@HILOofficial"
            target="_blank"
            class="flex items-center"
          >
            <Icon class="lg:h-16 lg:w-16 h-12 w-12" name="icons:youtube" color="white" />
          </NuxtLink>

          <NuxtLink
            to="https://x.com/official_hilo"
            target="_blank"
            class="flex items-center gap-x-2"
          >
          
            <Icon class="lg:h-14 lg:w-14 h-12 w-12" name="icons:x" color="white" />
          </NuxtLink>

            <h3 class="text-white lg:block hidden font-bold text-2xl lg:text-4xl">
              @hilo_ofc
            </h3>
        </div>
      </div>
    </div>
  </section>

  <swiper
    :breakpoints="{
      1: {
        slidesPerView: 1,
      },
      1024: {
        slidesPerView: 2,
      },
      1424: {
        slidesPerView: 4,
      },
    }"
    :spaceBetween="30"
    :loop="true"
    :autoplay="{
      delay: 2500,
      disableOnInteraction: false,
    }"
    :pagination="{
      clickable: true,
    }"
    :modules="modules"
    class="mySwiper w-[95vw] mb-12 mx-auto h-[600px]"
  >
    <swiper-slide
      ><img class="object-cover w-full h-[600px]" src="/HI-LOinsta1.jpg"
    /></swiper-slide>
    <swiper-slide>
      <video autoplay muted loop class="w-full object-cover h-[600px]">
        <source src="/HI-LOinsta2.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </swiper-slide>

    <swiper-slide>
      <video autoplay muted loop class="w-full object-cover h-[600px]">
        <source src="/HI-LOinsta4.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </swiper-slide>
    <swiper-slide>
      <video autoplay muted loop class="w-full object-cover h-[600px]">
        <source src="/HI-LOinsta5.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </swiper-slide>
    <swiper-slide>
      <video autoplay muted loop class="w-full object-cover h-[600px]">
        <source src="/HI-LOinsta6.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </swiper-slide>
    <swiper-slide>
      <video autoplay muted loop class="w-full object-cover h-[600px]">
        <source src="/HI-LOinsta7.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </swiper-slide>
    <swiper-slide>
      <video autoplay muted loop class="w-full object-cover h-[600px]">
        <source src="/HI-LOinsta8.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </swiper-slide>
    <swiper-slide>
      <video autoplay muted loop class="w-full object-cover h-[600px]">
        <source src="/HI-LOinsta9.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </swiper-slide>
  </swiper>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";

import "swiper/css";

import "swiper/css/pagination";

import { Autoplay, Pagination } from "swiper/modules";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      isPlaying: false,
    };
  },
  setup() {
    return {
      modules: [Autoplay, Pagination],
    };
  },
};
</script>

<style>
.swiper-pagination-bullets {
  display: none;
}
</style>
