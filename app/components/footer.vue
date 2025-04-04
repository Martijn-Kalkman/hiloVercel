<script setup lang="ts">
const isMobileMenuOpen = ref(false);

const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({
      behavior: 'smooth',
    });
  }
};
</script>

<template>
  <footer id="contact" class="relative text-white">
    <div class="lg:flex lg:flex-row w-11/12 mx-auto">
      <div class=""></div>
      <div class="lg:text-lg mb-6 text-xl grid grid-cols-1 lg:grid-cols-3 gap-8 mx-auto">
        <!-- First UL -->

        <!-- Second UL -->
        <div>
          <ul>
            <li class="text-center">
              <p>MANAGEMENT</p>
              <p>Milk & Honey</p>
              <a href="mailto:heldens@milkhoneyla.com" class="underline"> dave@milkhoneyla.com </a>
            </li>
          </ul>
        </div>

        <!-- Third UL -->
        <div>
          <ul>
            <div class="text-center">
              <p>BOOKING ROW</p>
              <p>CAA</p>
              <a href="mailto:jennifer.hammel@caa.com" class="underline">jennifer.hammel@caa.com</a>
            </div>
          </ul>
        </div>

        <!-- Fourth UL -->
        <div>
          <ul>
            <div class="text-center">
              <p>BOOKINGS N/S AMERICA</p>
              <p>UTA</p>
              <a href="mailto:KEVIN.GIMBLE@UNITEDTALENT.COM" class="underline"
                >kevin.gimble@unitedtalent.com</a
              >

              <br />
              <a href="mailto:MATT.MEYER@UNITEDTALENT.COM" class="underline"
                >matt.meyer@unitedtalent.com</a
              >
            </div>
          </ul>
        </div>
      </div>
    </div>
    <div class="flex flex-row">
      <div class="w-11/12 mx-auto">
        <!-- <ul
          class="flex space-x-4 mt-8 lg:mt-0 text-xs lg:text-lg lg:justify-center"
        >
          <li class="mr-32 lg:block hidden">@2024 Oliver Heldens</li>

          <NuxtLink target="_blank" to="https://www.leafylines.com/"
            ><li class="lg:block hidden">Created by LeafyLines</li></NuxtLink
          >
        </ul> -->
        <!-- <ul class="flex mt-2 space-x-4 ml-4 lg:mt-0 text-xs lg:justify-center">
          <NuxtLink target="_blank" to="https://www.leafylines.com/">
            <li class="lg:hidden">Created by LeafyLines</li></NuxtLink
          >
        </ul> -->
      </div>
    </div>
    <div class="mx-auto text-center mb-4">
      <a target="_blank" href="/Privacy_statement_OH_Feb_2025.pdf"> Privacy policy </a> |
      <a target="_blank" href="/Cookie_statement_Website_OH_feb_2025.pdf"> Cookie policy </a> |
      <a target="_blank" href="/Terms_and_Conditions_OH_2025.pdf"> Terms & conditions </a>
    </div>

    <!-- <p class="block lg:hidden text-center text-xs mt-8">@2024 Oliver Heldens</p> -->

    <!-- <div class="mx-auto text-white">
      <div class="absolute right-0 bottom-0 z-10">
        <img
          class="xl:h-60 2xl:h-[130px] p-4 h-32 2xl:block hidden"
          src="/logo.webp"
          alt="Oliver Heldens logo"
        />
        <img
          class="lg:h-80 w-52 p-4 visible lg:hidden"
          src="/logo.webp"
          alt="Oliver Heldens logo mobile"
        />
      </div>
    </div> -->
  </footer>
</template>
