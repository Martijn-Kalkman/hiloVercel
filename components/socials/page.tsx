"use client";

import Link from "next/link";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faYoutube,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

import "swiper/css";

export default function SocialsSection() {
  return (
    <>
      <section>
        <div className="flex flex-col sm:flex-row justify-between">
          <div>
            <h2 className="w-11/12 mx-auto lg:text-7xl text-4xl mb-4 ml-4 mt-4 font-bold text-white">
              SOCIALS
            </h2>
          </div>
          <div className="flex m-4 lg:m-0 flex-row mx-auto sm:justify-end mr-4 lg:mr-32">
            <div className="flex items-center gap-x-4 lg:gap-x-8 ml-8">
              <Link
                href="https://www.instagram.com/hilo_ofc/"
                target="_blank"
                className="flex items-center"
                aria-label="Instagram"
              >
                <FontAwesomeIcon
                  icon={faInstagram}
                  className="lg:h-16 lg:w-16 h-12 w-12 text-white"
                />
              </Link>
              <Link
                href="https://www.youtube.com/@HILOofficial"
                target="_blank"
                className="flex items-center"
                aria-label="YouTube"
              >
                <FontAwesomeIcon
                  icon={faYoutube}
                  className="lg:h-16 lg:w-16 h-12 w-12 text-white"
                />
              </Link>
              <Link
                href="https://x.com/official_hilo"
                target="_blank"
                className="flex items-center gap-x-2"
                aria-label="X (Twitter)"
              >
                <FontAwesomeIcon
                  icon={faTwitter}
                  className="lg:h-16 lg:w-16 h-12 w-12 text-white"
                />
              </Link>
              <h3 className="text-white lg:block hidden font-bold text-2xl lg:text-4xl">
                @hilo_ofc
              </h3>
            </div>
          </div>
        </div>
      </section>

      <Swiper
        breakpoints={{
          1: {
            slidesPerView: 1,
          },
          1024: {
            slidesPerView: 2,
          },
          1424: {
            slidesPerView: 4,
          },
        }}
        spaceBetween={30}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        className="mySwiper w-[95vw] mb-12 mx-auto h-[600px]"
      >
        <SwiperSlide>
          <img
            className="object-cover w-full h-[600px]"
            src="/images/hi-lo-insta1.jpg"
            alt="Social media post 1"
          />
        </SwiperSlide>

        {[2, 4, 5, 6, 7, 8, 9].map((i) => (
          <SwiperSlide key={i}>
            <video
              autoPlay
              muted
              loop
              className="w-full object-cover h-[600px]"
            >
              <source src={`/videos/hi-lo-insta${i}.mp4`} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
