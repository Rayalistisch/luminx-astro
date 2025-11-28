<template>
  <div
    class="bg-black text-amber-50 overflow-x-hidden relative"
    style="font-family: var(--font-luminx);"
  >
    <!-- particles -->
    <div class="fixed inset-0 pointer-events-none z-0">
      <div
        v-for="i in 26"
        :key="i"
        class="absolute rounded-full"
        :style="{
          width: '2px',
          height: '2px',
          left: Math.random() * 100 + '%',
          top: Math.random() * 100 + '%',
          background: 'rgba(251,191,36,0.5)',
          opacity: 0.15 + Math.random() * 0.25,
          boxShadow: '0 0 10px rgba(251,191,36,0.6)',
        }"
      />
    </div>

    <SideDotNav
      :sections="sections"
      :active-section="activeSection"
      :scroll-to-section="scrollToSection"
    />

    <MagicWand :active-section="activeSection" :scroll-y="scrollY" />

    <MainNavbar :pages="pages" />

    <HeroSection
      :scroll-y="scrollY"
      :scale-factor="scaleFactor"
      :hero-fog-intensity="heroFogIntensity"
    />

    <ChapterPotion
      :get-opacity="getOpacity"
      :get-translate-y="getTranslateY"
    />

    <ChapterVial
      :get-opacity="getOpacity"
      :get-translate-y="getTranslateY"
      :get-scale="getScale"
    />

    <ChapterIngredients
      :get-opacity="getOpacity"
      :get-translate-y="getTranslateY"
    />

    <ChapterBrewing
      :get-opacity="getOpacity"
      :get-scale="getScale"
      :brew-fog-intensity="brewFogIntensity"
    />

    <ChapterExperience
      :get-opacity="getOpacity"
      :get-translate-y="getTranslateY"
    />

    <ChapterFinal :scroll-to-section="scrollToSection" />

     <HomeContactSection />

    <MainFooter
      :sections="sections"
      :scroll-to-section="scrollToSection"
    />
  </div>
</template>


<script setup>
import {
  useScrollStory,
  sections,
  pages,
} from '../composables/useScrollStory';  // let op: ../ in plaats van @

import SideDotNav from '../layout/SideDotNav.vue';
import MagicWand from '../layout/MagicWand.vue';
import MainNavbar from '../layout/MainNavbar.vue';
import MainFooter from '../layout/MainFooter.vue';

import HeroSection from '../sections/HeroSection.vue';
import ChapterPotion from '../sections/ChapterPotion.vue';
import ChapterVial from '../sections/ChapterVial.vue';
import ChapterIngredients from '../sections/ChapterIngredients.vue';
import ChapterBrewing from '../sections/ChapterBrewing.vue';
import ChapterExperience from '../sections/ChapterExperience.vue';
import ChapterFinal from '../sections/ChapterFinal.vue';
import HomeContactSection from '../sections/HomeContactSection.vue';


const {
  scrollY,
  activeSection,
  heroFogIntensity,
  scaleFactor,
  getOpacity,
  getTranslateY,
  getScale,
  brewFogIntensity,
  scrollToSection,
} = useScrollStory();
</script>

