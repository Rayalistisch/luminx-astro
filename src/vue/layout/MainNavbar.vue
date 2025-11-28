<template>
  <nav
    class="fixed top-0 left-0 right-0 z-40 bg-black/40 backdrop-blur-md border-b border-amber-900/40"
  >
    <div class="max-w-6xl mx-auto px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between">
      <!-- LOGO -->
      <a href="/" class="flex items-center gap-3 group">
        <img
          src="/logo-luminx.png"
          alt="LuminX"
          class="h-8 w-auto opacity-90 group-hover:opacity-100 transition-opacity"
        />
        <span
          class="hidden sm:block text-[10px] sm:text-[11px] tracking-[0.35em] uppercase text-amber-200/80"
        >
          LuminX
        </span>
      </a>

      <!-- DESKTOP MENU -->
      <ul class="hidden md:flex items-center gap-7">
        <li v-for="page in pages" :key="page.href">
          <a
            :href="page.href"
            class="text-[10px] tracking-[0.26em] uppercase text-amber-100/80 hover:text-amber-50 transition-colors relative after:block after:h-[1px] after:bg-amber-300 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:origin-left"
          >
            {{ page.label }}
          </a>
        </li>
      </ul>

      <!-- MOBILE MENU BUTTON -->
      <button
        class="md:hidden inline-flex items-center justify-center h-9 w-9 rounded-full border border-amber-500/40 bg-black/60 text-amber-100 shadow-[0_0_16px_rgba(251,191,36,0.35)]"
        @click="toggleMenu"
        aria-label="Open menu"
      >
        <span class="sr-only">Open menu</span>
        <div class="relative h-3 w-4">
          <span
            class="absolute left-0 top-0 h-[2px] w-full bg-amber-200 rounded-full transition-transform duration-200"
            :class="menuOpen ? 'translate-y-[6px] rotate-45' : ''"
          />
          <span
            class="absolute left-0 top-1/2 h-[2px] w-full bg-amber-200 rounded-full -translate-y-1/2 transition-opacity duration-150"
            :class="menuOpen ? 'opacity-0' : 'opacity-80'"
          />
          <span
            class="absolute left-0 bottom-0 h-[2px] w-full bg-amber-200 rounded-full transition-transform duration-200"
            :class="menuOpen ? '-translate-y-[6px] -rotate-45' : ''"
          />
        </div>
      </button>
    </div>

    <!-- MOBILE OVERLAY MENU -->
    <transition name="mobile-nav">
      <div
        v-if="menuOpen"
        class="fixed inset-0 z-50 h-screen bg-black backdrop-blur-md flex flex-col"
      >
        <!-- top bar -->
        <div class="flex items-center justify-between px-5 pt-4 pb-3 border-b border-amber-900/60">
          <div class="flex items-center gap-3">
            <div
              class="h-8 w-8 rounded-full border border-amber-500/40 flex items-center justify-center bg-black/70 shadow-[0_0_18px_rgba(251,191,36,0.4)]"
            >
              <span class="block h-2 w-2 rounded-full bg-amber-300 shadow-[0_0_12px_rgba(251,191,36,0.9)]" />
            </div>
            <div class="flex flex-col">
              <span class="text-[15px] tracking-[0.32em] uppercase text-amber-200/85">
                Menu
              </span>
              <span class="text-[15px] text-amber-400/70">
                Navigate the story
              </span>
            </div>
          </div>

          <button
            class="h-9 w-9 rounded-full border border-amber-500/40 flex items-center justify-center text-amber-100 bg-black/60"
            @click="toggleMenu"
            aria-label="Close menu"
          >
            ✕
          </button>
        </div>

        <!-- links -->
        <div class="flex-1 h-screen flex flex-col bg-black items-stretch justify-center px-6 space-y-8">
          <a
            v-for="page in pages"
            :key="page.href"
            :href="page.href"
            @click="closeMenu"
            class="group block text-center"
          >
            <span
              class="block text-2xl tracking-[0.35em] uppercase text-amber-300/80 mb-2"
            >
              {{ page.label }}
            </span>
            <span
              class="block text-sm font-light text-amber-50 tracking-[0.12em] group-hover:text-amber-200 transition-colors"
            >
              {{ getPageSubtitle(page.label) }}
            </span>
            <span
              class="mt-3 mx-auto block h-[1px] w-12 bg-amber-500/40 group-hover:w-16 group-hover:bg-amber-300 transition-all duration-200"
            />
          </a>
        </div>

        <!-- bottom meta -->
        <div class="px-6 pb-6 flex items-center justify-between text-[10px] text-amber-300/70">
          <span class="tracking-[0.22em] uppercase">
            Based in NL
          </span>
          <span class="opacity-60">
            LuminX · {{ currentYear }}
          </span>
        </div>
      </div>
    </transition>
  </nav>
</template>

<script setup>
import { ref, computed } from 'vue';

const props = defineProps({
  pages: {
    type: Array,
    required: true,
  },
});

const menuOpen = ref(false);

const toggleMenu = () => {
  menuOpen.value = !menuOpen.value;
};

const closeMenu = () => {
  menuOpen.value = false;
};

const currentYear = computed(() => new Date().getFullYear());

/**
 * Kleine subtitels per pagina voor extra sfeer in het mobiele menu
 */
const getPageSubtitle = (label) => {
  switch (label.toLowerCase()) {
    case 'home':
      return 'The origin of the potion';
    case 'services':
      return 'Spells we cast for clients';
    case 'cases':
      return 'Experiments that escaped the lab';
    case 'journal':
      return 'Field notes & observations';
    case 'about':
      return 'Who is stirring the cauldron';
    case 'contact':
      return 'Send an owl or a brief';
    default:
      return 'Step into the story';
  }
};
</script>

<style scoped>
.mobile-nav-enter-active,
.mobile-nav-leave-active {
  transition:
    opacity 0.25s ease,
    transform 0.35s cubic-bezier(0.4, 0, 0.2, 1);
}

.mobile-nav-enter-from,
.mobile-nav-leave-to {
  opacity: 0;
  transform: translateY(12px);
}
</style>
