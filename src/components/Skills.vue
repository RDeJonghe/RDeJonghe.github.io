<script setup>
import Skill from './Skill.vue';

defineProps({
  skills: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <div id="skills-container">
    <div id="skill-header">
      <h1>{{ skills.headerTitle }}</h1>
    </div>
    <div id="skills-list">
      <div v-for="skillObj in skills.skillsArray">
          <Skill :skillObj="skillObj" />
      </div>
    </div>
  </div>
</template>

<style scoped>
#skills-list {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: space-around;
}

#skills-container {
  margin-top: 3.5rem;
}

#skill-header {
  display: flex;
  justify-content: center;
}
</style>