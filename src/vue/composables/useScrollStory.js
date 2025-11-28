// src/vue/composables/useScrollStory.js
import { ref, computed, onMounted, onUnmounted } from 'vue';

const clamp = (value, min = 0, max = 1) =>
  Math.min(max, Math.max(min, value));

export const sections = [
  { id: 'top', label: 'Intro' },
  { id: 'potion', label: 'Potion' },
  { id: 'vial', label: 'Vial' },
  { id: 'ingredients', label: 'Ingredients' },
  { id: 'brewing', label: 'Brewing' },
  { id: 'experience', label: 'Experience' },
  { id: 'final', label: 'Final' },
];

export const pages = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Cases', href: '/cases' },
  { label: 'Journal', href: '/journal' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

export function useScrollStory() {
  const scrollY = ref(0);
  const activeSection = ref('top');
  const viewportWidth = ref(
    typeof window !== 'undefined' ? window.innerWidth : 1024,
  );

  const isMobile = computed(() => viewportWidth.value < 768);
  const scaleFactor = computed(() => (isMobile.value ? 0.00005 : 0.00015));

  const heroFogIntensity = computed(
    () => 0.7 - clamp(scrollY.value / 600) * 0.7,
  );

  const brewFogIntensity = computed(
    () => 0.8 - clamp((scrollY.value - 2000) / 800) * 0.8,
  );

  const getOpacity = (start, end) =>
    clamp((scrollY.value - start) / (end - start));

  const getTranslateY = (start, end, distance = 80) => {
    if (scrollY.value < start) return distance;
    if (scrollY.value > end) return 0;
    return distance - (distance * (scrollY.value - start)) / (end - start);
  };

  const getScale = (start, end, minScale = 0.9) => {
    if (scrollY.value < start) return minScale;
    if (scrollY.value > end) return 1;
    return (
      minScale +
      (1 - minScale) * ((scrollY.value - start) / (end - start))
    );
  };

  const scrollToSection = (id) => {
    if (typeof window === 'undefined') return;
    const el = document.getElementById(id);
    if (!el) return;
    const top = el.getBoundingClientRect().top + window.scrollY - 80;
    window.scrollTo({ top, behavior: 'smooth' });
  };

  const handleScroll = () => {
    if (typeof window === 'undefined') return;
    scrollY.value = window.scrollY;

    const vh = window.innerHeight;
    let current = 'top';

    sections.forEach((section) => {
      const el = document.getElementById(section.id);
      if (!el) return;
      const rect = el.getBoundingClientRect();
      if (rect.top <= vh * 0.5 && rect.bottom >= vh * 0.5) {
        current = section.id;
      }
    });

    activeSection.value = current;
  };

  const handleResize = () => {
    if (typeof window === 'undefined') return;
    viewportWidth.value = window.innerWidth;
  };

  onMounted(() => {
    if (typeof window === 'undefined') return;
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleResize);
    handleScroll();
    handleResize();
  });

  onUnmounted(() => {
    if (typeof window === 'undefined') return;
    window.removeEventListener('scroll', handleScroll);
    window.removeEventListener('resize', handleResize);
  });

  return {
    scrollY,
    activeSection,
    heroFogIntensity,
    scaleFactor,
    getOpacity,
    getTranslateY,
    getScale,           // 👈 BELANGRIJK: deze MOET in de return
    brewFogIntensity,
    scrollToSection,
  };
}
