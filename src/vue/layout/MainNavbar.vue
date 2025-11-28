<template>
  <nav
    class="fixed top-0 left-0 right-0 z-40 bg-black/40 backdrop-blur-md border-b border-amber-900/40"
  >
    <div class="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
      <!-- LOGO -->
      <a href="/" class="flex items-center gap-3 group">
        <img
          src="/logo-luminx.png"
          alt="Ray Huffenreuter"
          class="h-8 w-auto opacity-90 group-hover:opacity-100 transition-opacity"
        />
        <span
          class="hidden sm:block text-[11px] tracking-[0.35em] uppercase text-amber-200/80"
        >
          LuminX
        </span>
      </a>

      <!-- DESKTOP MENU -->
      <ul class="hidden md:flex items-center gap-8">
        <li v-for="page in pages" :key="page.href">
          <a
            :href="page.href"
            class="text-xs tracking-[0.25em] uppercase text-amber-100/80 hover:text-amber-50 transition-colors relative after:block after:h-[1px] after:bg-amber-300 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:origin-left"
          >
            {{ page.label }}
          </a>
        </li>
      </ul>

      <!-- MOBILE MENU BUTTON -->
      <button
        class="md:hidden text-amber-200"
        @click="menuOpen = true"
        aria-label="Open menu"
      >
        ☰
      </button>
    </div>

    <!-- MOBILE MENU -->
    <div
      v-if="menuOpen"
      class="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm"
    >
      <button
        class="absolute top-6 right-6 text-amber-200 text-xl"
        @click="menuOpen = false"
        aria-label="Close menu"
      >
        ✕
      </button>

      <ul class="flex flex-col items-center justify-center gap-8 h-full">
        <li v-for="page in pages" :key="page.href">
          <a
            :href="page.href"
            @click="menuOpen = false"
            class="text-sm tracking-[0.3em] uppercase text-amber-100"
          >
            {{ page.label }}
          </a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue';

defineProps({
  pages: {
    type: Array,
    required: true,
  },
});

const menuOpen = ref(false);
</script>
