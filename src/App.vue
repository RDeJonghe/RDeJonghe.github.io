<script setup>
import Profile from './components/Profile.vue';
import List from './components/List.vue';
import Skills from './components/Skills.vue'
import info from './helper/info.js';
</script>

<template>

  <!-- <h1>Info</h1> -->
 <div id="app-container">
  <Profile :profileData="info.profile" />
  <List :cardsData="info.experience" />
  <Skills :skills="info.skills" />
  <List :cardsData="info.education" />
 </div>
</template>

<style scoped>
@media (min-width: 769px) {
  #app-container {
    margin-right: 28rem;
  }
}

@media (max-width: 768px) {
  #app-container {
    margin-right: 4rem;
  }
}

#app-container {
  margin-left: 4rem;
  padding-bottom: 20rem;
}
</style>
