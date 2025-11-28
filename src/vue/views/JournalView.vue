<template>
  <div class="bg-black text-amber-50 min-h-screen flex flex-col">
    <MainNavbar :pages="pages" />

    <main class="flex-1 pt-24">
      <section class="max-w-6xl mx-auto px-4 md:px-6 py-12 md:py-20">
        <p class="text-[10px] tracking-[0.35em] uppercase text-amber-300/80 mb-4">
          Journal
        </p>
        <h1
          class="text-3xl md:text-5xl lg:text-6xl font-light tracking-[0.2em] uppercase mb-4"
        >
          Notities uit de <span class="text-amber-300">machinekamer</span>.
        </h1>
        <p class="text-sm md:text-base text-amber-100/80 max-w-2xl mb-10">
          Geen gladde blogs, maar werk-in-progress notities over campagnes,
          tooling, AEO, data-sets en experimenten. Dingen waar je morgen iets
          mee kunt.
        </p>

        <div class="grid md:grid-cols-2 gap-8">
          <article
            v-for="entry in entries"
            :key="entry.slug"
            class="border border-amber-900/60 rounded-2xl bg-gradient-to-b from-black/70 to-black/25 p-6 flex flex-col gap-3 hover:border-amber-500/70 transition-colors"
          >
            <p class="text-[10px] tracking-[0.28em] uppercase text-amber-300/80">
              {{ entry.tag }}
            </p>
            <h2 class="text-lg md:text-xl text-amber-50">
              {{ entry.title }}
            </h2>
            <p class="text-xs text-amber-300/70">
              {{ entry.meta }}
            </p>
            <p class="text-sm text-amber-100/80 mt-1">
              {{ entry.excerpt }}
            </p>
            <button
              class="mt-3 text-[11px] uppercase tracking-[0.22em] text-amber-300/90 inline-flex items-center gap-2"
            >
              Lees notitie
              <span aria-hidden="true">↗</span>
            </button>
          </article>
        </div>
      </section>
    </main>

    <MainFooter :sections="[]" :scroll-to-section="scrollToTop" />
  </div>
</template>

<script setup>
import MainNavbar from '@/vue/layout/MainNavbar.vue';
import MainFooter from '@/vue/layout/MainFooter.vue';
import { pages } from '@/vue/composables/useScrollStory';

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

const entries = [
  {
    slug: 'mixed-marketing-model',
    tag: 'DATA • MMM',
    title: 'Een mixed marketing model bouwen zonder meteen 6 cijfers te spenderen',
    meta: 'ROAS vs. POAS, marginale kosten en wat je wél kunt modelleren met beperkte data.',
    excerpt:
      'Een simpel MMM waarmee je al ziet welke kanalen nog marge overhouden, zonder academische papers of 2 jaar aan data.',
  },
  {
    slug: 'answer-engine-optimization',
    tag: 'SEO • AEO',
    title: 'SEO anno 2025: schrijven voor mensen, meten voor machines',
    meta: 'Van klassiek bloggen naar clusters, entiteiten en answer-blocks.',
    excerpt:
      'Waarom je content straks eerder begint bij “welke vraag wil ik beantwoorden?” dan bij “welk keyword moet er in mijn H1?”.',
  },
  {
    slug: 'ai-assistants',
    tag: 'AI • WORKFLOWS',
    title: 'Waar AI-assistants wél (en vooral niet) het verschil maken',
    meta: 'Customer service, campagne-ops en data-clean-up als drie logische startpunten.',
    excerpt:
      'Niet weer een losse chatbot, maar agents die een stukje proces overnemen. Inclusief valkuilen.',
  },
  {
    slug: 'feeds-en-structuur',
    tag: 'PPC • FEEDS',
    title: 'Feed first: hoe je shoppingcampagnes winstgevend houdt',
    meta: 'Structuur, naming en filters zijn belangrijker dan 100 nieuwe ads.',
    excerpt:
      'Een goede feed + duidelijke naming geeft rust in je account en maakt experimenten opeens een stuk makkelijker.',
  },
];
</script>
