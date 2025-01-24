<script setup>
import Card from './Card.vue';

defineProps({
  cardsData: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <div id="experience-container">
    <div id="experience-title">
      <h1>{{ cardsData.headerTitle }}</h1>
    </div>
    <div
      v-for="(obj) in cardsData.listArray"
      id="experience-list"
      class="experience-card"
    >
      <Card :cardData="obj" />
    </div>
  </div>
</template>

<style>
#experience-title {
  display: flex;
  justify-content: center;
}

#experience-container {
  margin-top: 3.5rem;
}

#experience-list {
  margin-bottom: 1rem;
}
</style>