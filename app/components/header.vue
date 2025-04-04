<script setup lang="ts">
const isMobileMenuOpen = ref(false);

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
};

const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({
      behavior: "smooth",
    });
  }
};

const beforeEnter = (el) => {
  el.style.transform = "translateX(100%)";
};

const enter = (el, done) => {
  el.offsetHeight;
  el.style.transition = "transform 0.3s ease-in-out";
  el.style.transform = "translateX(0)";
  done();
};

const leave = (el, done) => {
  el.style.transition = "transform 0.3s ease-in-out";
  el.style.transform = "translateX(-100%)";
  done();
};
</script>

<template>
  <nav class="sticky lg:h-14 lg:backdrop-blur-md w-full z-50 top-0 left-0">
    <div class="hidden lg:flex items-center justify-between mx-auto p-4">
      <ul
        class="flex flex-col top-0 text-white text-xl z-50 md:flex-row p-0 md:space-x-4 font-medium text-center bg-opacity-90 backdrop-blur-md md:rounded-lg"
      >
        <li>
          <a
            href="#home"
            @click.prevent="scrollToSection('home')"
            class="block py-2 px-3 hover:text-gray-300 rounded md:p-0 relative after:content-[''] after:absolute after:left-0 after:bottom-[-4px] after:h-[2px] after:w-0 after:bg-current after:transition-all after:duration-300 hover:after:w-full"
          >
            HOME
          </a>
        </li>
        <li>
          <a
            href="#events"
            @click.prevent="scrollToSection('events')"
            class="block py-2 px-3 hover:text-gray-300 rounded md:p-0 relative after:content-[''] after:absolute after:left-0 after:bottom-[-4px] after:h-[2px] after:w-0 after:bg-current after:transition-all after:duration-300 hover:after:w-full"
          >
            EVENTS
          </a>
        </li>
        <li>
          <a
            href="#releases"
            @click.prevent="scrollToSection('releases')"
            class="block py-2 px-3 hover:text-gray-300 rounded md:p-0 relative after:content-[''] after:absolute after:left-0 after:bottom-[-4px] after:h-[2px] after:w-0 after:bg-current after:transition-all after:duration-300 hover:after:w-full"
          >
            MUSIC
          </a>
        </li>
        <li>
          <a
            href="#merch"
            @click.prevent="scrollToSection('merch')"
            class="block py-2 px-3 hover:text-gray-300 rounded md:p-0 relative after:content-[''] after:absolute after:left-0 after:bottom-[-4px] after:h-[2px] after:w-0 after:bg-current after:transition-all after:duration-300 hover:after:w-full"
          >
            MERCH
          </a>
        </li>
      </ul>
      <ul
        class="flex flex-col text-xl md:flex-row p-0 md:p-0 text-white font-medium rounded-lg md:space-x-4 mt-4 md:mt-0 ml-auto"
      >
        <li>
          <a
            href="https://oliverheldensshop.com/collections/hilomatik"
            target="_blank"
            class="block py-2 px-3 hover:text-gray-300 rounded md:p-0 relative after:content-[''] after:absolute after:left-0 after:bottom-[-4px] after:h-[2px] after:w-0 after:bg-current after:transition-all after:duration-300 hover:after:w-full"
          >
            HILOMATIK
          </a>
        </li>
        <li>
          <a
            href="#contact"
            @click.prevent="scrollToSection('contact')"
            class="block py-2 px-3 hover:text-gray-300 rounded md:p-0 relative after:content-[''] after:absolute after:left-0 after:bottom-[-4px] after:h-[2px] after:w-0 after:bg-current after:transition-all after:duration-300 hover:after:w-full"
          >
            CONTACT
          </a>
        </li>
      </ul>
    </div>

    <div class="lg:hidden flex justify-end p-4">
      <!--      <img src="/logo.webp" class="w-64" alt="Logo" />-->
      <button
        @click="toggleMobileMenu"
        class="flex items-center px-3 py-2 text-white"
      >
        <svg
          class="h-6 w-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16m-7 6h7"
          ></path>
        </svg>
      </button>

      <transition
        name="slide-fade"
        @before-enter="beforeEnter"
        @enter="enter"
        @leave="leave"
      >
        <div
          v-if="isMobileMenuOpen"
          class="fixed inset-0 bg-black bg-opacity-75 z-50"
        >
          <div
            class="flex h-screen flex-col items-center justify-center w-full absolute bg-black/70 text-white h-full"
          >
            <button
              @click="toggleMobileMenu"
              class="absolute top-4 right-4 text-white"
            >
              <svg
                class="h-8 w-8 m-10 mr-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </button>

            <ul class="text-center text-2xl space-y-4">
              <li>
                <a
                  href="#home"
                  @click.prevent="
                    scrollToSection('home');
                    toggleMobileMenu();
                  "
                  class="block py-2 px-3 bg-gray-500/30 rounded md:p-0"
                >
                  HOME
                </a>
              </li>
              <li>
                <a
                  href="#events"
                  @click.prevent="
                    scrollToSection('events');
                    toggleMobileMenu();
                  "
                  class="block py-2 px-3 bg-gray-500/30 rounded md:p-0"
                >
                  EVENTS
                </a>
              </li>
              <li>
                <a
                  href="#releases"
                  @click.prevent="
                    scrollToSection('releases');
                    toggleMobileMenu();
                  "
                  class="block py-2 px-3 bg-gray-500/30 rounded md:p-0"
                >
                  MUSIC
                </a>
              </li>
              <li>
                <a
                  href="#merch"
                  @click.prevent="
                    scrollToSection('merch');
                    toggleMobileMenu();
                  "
                  class="block py-2 px-3 bg-gray-500/30 rounded md:p-0"
                >
                  MERCH
                </a>
              </li>
              <li>
                <a
                  href="https://oliverheldensshop.com/"
                  target="_blank"
                  class="block py-2 px-3 bg-gray-500/30 rounded md:p-0"
                >
                  SHOP
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  @click.prevent="
                    scrollToSection('contact');
                    toggleMobileMenu();
                  "
                  class="block py-2 px-3 bg-gray-500/30 rounded md:p-0"
                >
                  CONTACT
                </a>
              </li>
            </ul>
          </div>
        </div>
      </transition>
    </div>
  </nav>
</template>

<style scoped>
.slide-fade-enter-active {
  transition: transform 0.3s ease-in-out;
}

.slide-fade-enter {
  transform: translateX(100%);
}
</style>
