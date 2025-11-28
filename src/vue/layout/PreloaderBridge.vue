<template>
  <!-- Jouw bestaande Preloader.vue animatie -->
  <Preloader v-if="visible" />
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';
import Preloader from './Preloader.vue';

const visible = ref(true);

onMounted(() => {
  // Preloader tonen bij eerste mount
  visible.value = true;

  // Na 1 seconde netjes weg laten faden
  setTimeout(() => {
    visible.value = false;
  }, 1000);
});

// Voor nu geen extra listeners; onBeforeUnmount alleen als je later wil uitbreiden
onBeforeUnmount(() => {
  // no-op
});
</script>
