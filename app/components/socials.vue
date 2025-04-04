<template>
  <section>
    <div class="flex flex-row">
      <div>
        <h2
          class="w-11/12 mx-auto lg:text-9xl text-4xl mb-12 font-bold text-white"
        >
          SOCIALS
        </h2>
      </div>
      <div class="my-auto ml-8">
        <Icon
          class="lg:h-16 lg:w-16 px-5 h-8 w-8 lg:px-10"
          name="icons:instagram"
          color="white"
        />
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
