<script setup>
import { ref } from 'vue';

defineProps({
  cardData: {
    type: Object,
    required: true,
  },
});

const showDescription = ref(false);

let isHovered = ref(false);

const handleMouseEnter = () => {
  isHovered.value = true;
}

const handleMouseLeave = () => {
  isHovered.value = false;
}
</script>

<template>
  <div
    class="logo-and-job-info"
    :class="{ 'rounded-bottom': !showDescription }"
    @click="showDescription = !showDescription"
    :style="{ backgroundColor: isHovered ? cardData.hoverColor : '' }"
    @mouseenter="handleMouseEnter"
    @mouseleave="handleMouseLeave"
  >
    <div>
      <img class="logo" :src="cardData.imageSource" alt="Experience Logo" />
    </div>

    <div class="position-employer">
      {{ cardData.title }}
    </div>
  </div>
  <div v-show="showDescription" class="description">
    <div class="dates">
      {{ cardData.dates }}
    </div>
    <div v-if="cardData.link" class="link">
      <a :href="cardData.link" target="_blank" rel="noopener noreferrer">
        <button class="link-button">{{ cardData.linkTitle }}</button>
      </a>
    </div>
    <div class="ask-about-header">
      Ask About:
    </div>
    <div
      v-if="cardData.descriptionArray"
      v-for="description in cardData.descriptionArray"
      class="bullet-text"
    >
      {{ description }}
    </div>
  </div>
</template>

<style scoped>
.ask-about-header {
  margin-top: 1rem;
  font-weight: bold;
}

.link-button {
  background-color: white;
  padding: 0.5rem;
  border: 0.085rem solid #bec3c6;
  border-radius: 0.5rem;
}

.link-button:hover {
  background-color: #CCECFF;
}

.logo-and-job-info.rounded-bottom {
  border-radius: 0.5rem;
}

.link {
  margin-top: 1rem;
}

.dates {
  font-weight: bold;
}

.bullet-text {
  position: relative;
  padding-left: 1rem;
  margin-top: 0.5rem;
}

.bullet-text::before {
  content: '∙';
  position: absolute;
  left: 0;
}

.logo-and-job-info {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
}

.logo-and-job-info {
  border: 0.085rem solid #bec3c6;
  border-radius: 0.5rem 0.5rem 0 0;
}

.description {
  border-left: 0.085rem solid #bec3c6;
  border-right: 0.085rem solid #bec3c6;
  border-bottom: 0.085rem solid #bec3c6;
  border-radius: 0 0 0.5rem 0.5rem;
  padding: 1rem;
}

@media (max-width: 768px) {
  .logo-and-job-info {
    flex-direction: column;
    align-items: start;
  }
}

.position-employer {
  font-size: large;
  font-weight: bold;
}

.logo {
  height: 4rem;
}
</style>