<template>
  <section
    id="home-contact"
    class="border-t border-amber-900/40 bg-gradient-to-b from-black via-[#0b0906] to-black py-16 md:py-20 px-4"
  >
    <div class="max-w-5xl mx-auto grid md:grid-cols-[1.2fr,1fr] gap-10 items-start">
      <!-- Copy / pitch -->
      <div>
        <p class="text-[10px] tracking-[0.35em] uppercase text-amber-300/80 mb-3">
          Contact
        </p>
        <h2
          class="text-2xl md:text-4xl lg:text-[2.6rem] font-light tracking-[0.18em] uppercase mb-4"
        >
          Een idee, <span class="text-amber-300">account</span> of
          <span class="text-amber-300">platform</span> in je hoofd?
        </h2>
        <p class="text-sm md:text-base text-amber-100/80 mb-4 max-w-xl">
          Schrijf in één of twee alinea’s waar je tegenaan loopt, welke stack je
          nu gebruikt en wat je grofweg zou willen bereiken. Dan kan ik gericht
          meedenken of er een goede match is.
        </p>
        <ul class="text-sm text-amber-100/75 space-y-1">
          <li>• E-commerce &amp; campagnes die “onrustig” voelen</li>
          <li>• Data / dashboards waar je meer uit wilt halen</li>
          <li>• Ideeën voor tooling, configurators of AI-assistants</li>
        </ul>
        <p class="mt-5 text-xs text-amber-300/80">
          Liever direct mailen?&nbsp;
          <a
            href="mailto:info@luminx.ai"
            class="underline-offset-2 underline hover:text-amber-100"
          >
            info@luminx.ai
          </a>
        </p>
      </div>

      <!-- Form -->
      <form
        class="border border-amber-900/60 rounded-2xl bg-gradient-to-b from-black/80 to-black/40 p-5 md:p-6 space-y-4 shadow-[0_0_40px_rgba(0,0,0,0.9)]"
        @submit.prevent="handleSubmit"
      >
        <div class="flex items-center gap-2 mb-1">
          <div
            class="h-8 w-8 rounded-full border border-amber-500/60 flex items-center justify-center bg-black/60"
          >
            <Mail class="w-4 h-4 text-amber-300" />
          </div>
          <p class="text-[11px] tracking-[0.22em] uppercase text-amber-300/80">
            Stuur een bericht
          </p>
        </div>

        <div>
          <label
            for="name"
            class="block text-[11px] uppercase tracking-[0.22em] text-amber-300/80 mb-1"
          >
            Naam
          </label>
          <input
            id="name"
            v-model="form.name"
            type="text"
            required
            class="w-full rounded-md border border-amber-900/60 bg-black/70 px-3 py-2 text-sm text-amber-50 outline-none focus:border-amber-400"
          />
        </div>

        <div>
          <label
            for="email"
            class="block text-[11px] uppercase tracking-[0.22em] text-amber-300/80 mb-1"
          >
            E-mail
          </label>
          <input
            id="email"
            v-model="form.email"
            type="email"
            required
            class="w-full rounded-md border border-amber-900/60 bg-black/70 px-3 py-2 text-sm text-amber-50 outline-none focus:border-amber-400"
          />
        </div>

        <div>
          <label
            for="message"
            class="block text-[11px] uppercase tracking-[0.22em] text-amber-300/80 mb-1"
          >
            Waar wil je over sparren?
          </label>
          <textarea
            id="message"
            v-model="form.message"
            rows="4"
            required
            class="w-full rounded-md border border-amber-900/60 bg-black/70 px-3 py-2 text-sm text-amber-50 outline-none focus:border-amber-400 resize-none"
          />
        </div>

        <button
          type="submit"
          class="mt-1 inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-md border border-amber-300/80 text-[11px] uppercase tracking-[0.25em] text-amber-100 hover:bg-amber-300 hover:text-black transition-colors"
        >
          Verstuur
          <span aria-hidden="true">↗</span>
        </button>

        <p
          v-if="submitted"
          class="mt-3 text-[11px] text-emerald-400/90"
        >
          Thanks! Dit formulier is nu front-end only — hier kun je later een mail
          service, serverless functie of API-koppeling achter hangen.
        </p>
      </form>
    </div>
  </section>
</template>

<script setup>
import { reactive, ref } from 'vue';
import { Mail } from 'lucide-vue-next';

const form = reactive({
  name: '',
  email: '',
  message: '',
});

const submitted = ref(false);

const handleSubmit = () => {
  submitted.value = true;
  // hier kun je later een echte submit aan koppelen (fetch/XHR naar backend)
};
</script>
