<script setup>
import { ref } from 'vue';

defineProps({
  skillObj: {
    type: Object,
    required: true,
  },
});

let skillTextDisplayed = ref(false);

let isHovered = ref(false);

const handleMouseEnter = () => {
  isHovered.value = true;
  skillTextDisplayed = true;
};

const handleMouseLeave = () => {
  isHovered.value = false;
  skillTextDisplayed = false;
}

/* REMOVED DIV FOR DISPLAYING A DESCRIPTION
    <div class="skill-text" v-show="skillTextDisplayed">
      <div class="skill-title">
        {{ skillObj.title }}
      </div>
      <!-- <div>{{ skillObj.description }}</div> -->
    </div>
*/
</script>

<!-- @click="skillTextDisplayed = !skillTextDisplayed" -->
<template>
  <div
    class="skill-display"
    :style="{ backgroundColor: isHovered ? skillObj.hoverColor : '' }"
    
    @mouseenter="handleMouseEnter"
    @mouseleave="handleMouseLeave"
  >
    <div>
      <img class="skill-logo" :src="skillObj.imageSource" alt="Skill Obj" />
    </div>
  </div>
</template>

<style scoped>

.skill-text {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 1rem;
  margin: 1rem;
}

.skill-title {
  font-weight: bold;
}

.skill-display {
  display: flex;
  justify-content: center;
  align-items: center;
  border: 0.085rem solid #bec3c6;
  border-radius: 0.5rem;
  width: 12rem;
  min-height: 6rem;
}

.skill-logo {
  display: block;
  width: 4rem;
  height: 4rem;
}
</style>