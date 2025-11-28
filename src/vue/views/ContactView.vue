<template>
  <div class="bg-black text-amber-50 min-h-screen flex flex-col">
    <MainNavbar :pages="pages" />

    <main class="flex-1 pt-24">
      <section class="max-w-5xl mx-auto px-4 md:px-6 py-12 md:py-20">
        <p class="text-[10px] tracking-[0.35em] uppercase text-amber-300/80 mb-4">
          Contact
        </p>
        <div class="grid md:grid-cols-2 gap-10 items-start">
          <div>
            <h1
              class="text-3xl md:text-5xl lg:text-6xl font-light tracking-[0.2em] uppercase mb-6"
            >
              Laten we <span class="text-amber-300">tweaken</span>.
            </h1>
            <p class="text-sm md:text-base text-amber-100/80 mb-4">
              Of je nu een bestaande setup hebt die onrustig voelt, of een
              nieuw idee waar je een marketing- / data- / dev-hybride bij zoekt:
              stuur gerust een bericht met wat context.
            </p>
            <div class="mt-6 space-y-2 text-sm text-amber-100/80">
              <p>
                Mail:
                <a
                  href="mailto:info@luminx.ai"
                  class="text-amber-300 hover:text-amber-100 underline-offset-2 hover:underline"
                >
                  info@luminx.ai
                </a>
              </p>
              <p>
                Based in:
                <span class="text-amber-300/90">Nederland</span> (remote first)
              </p>
            </div>
          </div>

          <!-- Simple form (front-end only) -->
          <form
            class="border border-amber-900/60 rounded-2xl bg-gradient-to-b from-black/70 to-black/20 p-6 space-y-4"
            @submit.prevent="handleSubmit"
          >
            <div>
              <label
                for="name"
                class="block text-[11px] uppercase tracking-[0.22em] text-amber-300/80 mb-1"
              >
              </label>
              <input
                id="name"
                v-model="form.name"
                type="text"
                required
                placeholder="Naam"
                class="w-full rounded-md border border-amber-900/60 bg-black/60 px-3 py-2 text-sm text-amber-50 outline-none focus:border-amber-400"
              />
            </div>

            <div>
              <label
                for="email"
                class="block text-[11px] uppercase tracking-[0.22em] text-amber-300/80 mb-1"
              >
              </label>
              <input
                id="email"
                v-model="form.email"
                type="email"
                required
                placeholder="Email"
                class="w-full rounded-md border border-amber-900/60 bg-black/60 px-3 py-2 text-sm text-amber-50 outline-none focus:border-amber-400"
              />
            </div>

            <div>
              <label
                for="message"
                class="block text-[11px] uppercase tracking-[0.22em] text-amber-300/80 mb-1"
              >
              </label>
              <textarea
                id="message"
                v-model="form.message"
                rows="5"
                required
                placeholder="Waar wil je over sparren?"
                class="w-full rounded-md border border-amber-900/60 bg-black/60 px-3 py-2 text-sm text-amber-50 outline-none focus:border-amber-400 resize-none"
              />
            </div>

            <button
              type="submit"
              class="mt-2 inline-flex items-center justify-center px-6 py-2.5 rounded-md border border-amber-300/80 text-[11px] uppercase tracking-[0.25em] text-amber-100 hover:bg-amber-300 hover:text-black transition-colors"
            >
              Verstuur bericht
            </button>

            <p
              v-if="submitted"
              class="mt-3 text-xs text-emerald-400/90"
            >
              Thanks – dit formulier doet nu nog niets met een backend, maar de
              basis staat. Hier kun je later een mailservice of API aan koppelen.
            </p>
          </form>
        </div>
      </section>
    </main>

    <MainFooter :sections="[]" :scroll-to-section="scrollToTop" />
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue';
import MainNavbar from '@/vue/layout/MainNavbar.vue';
import MainFooter from '@/vue/layout/MainFooter.vue';
import { pages } from '@/vue/composables/useScrollStory';

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

const form = reactive({
  name: '',
  email: '',
  message: '',
});

const submitted = ref(false);

const handleSubmit = () => {
  submitted.value = true;
  // hier later: echte submit (API, email service, etc.)
};
</script>
