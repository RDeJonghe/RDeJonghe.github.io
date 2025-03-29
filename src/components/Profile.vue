<script setup>
defineProps({
  profileData: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <div id="header-container">
    <h1>{{ profileData.name }}</h1>
     <!-- <h1>{{ profileData.firstName }}</h1>
     <h1>{{ profileData.lastName }}</h1> -->
  </div>

  <div id="profile-container">
    <div id="profile-photo">
      <img 
        id="profile-image"
        :src="profileData.photoSource"
        alt="Profile Photo"
      />
    </div>
    <div id="summary-container">
      <div id="summary-intro">
        <span
          v-for="(obj, idx) in profileData.introBoldArray"
          :key="idx"
          :class="{ bold: obj.isBold }"
        >
          {{ obj.text }}
        </span>
      </div>
      <div id="summary-text">
        {{  profileData.summary }}
      </div>
    </div>
  </div>
</template>

<style scoped>
.bold {
  font-weight: bold;
}

#header-container {
  display: flex;
  justify-content: center;
  margin-top: 2rem;
}

#profile-container {
  display: flex;
  justify-content: flex-start;
  border: 0.085rem solid #bec3c6;
  border-radius: 0.5rem;
  margin-top: 2rem;
  align-items: center;
}

@media (max-width: 999px) {
  #profile-container {
    flex-direction: column;
  }
}

#summary-container {
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  font-size: large;
  margin: 1rem;
}

#summary-intro {
  font-size: large;
}

#profile-image {
  border: 0.025rem solid #bec3c6;
  width: 10rem;
  height: 10rem;
  border-radius: 50%;
  display: block;
}

#profile-photo {
  padding-left: 1rem;
  padding-top: 1rem;
  padding-bottom: 1rem;
  /* border: 0.125rem solid red; */
}

@media (min-width: 1000px) {
  #profile-photo {
    padding-right: 0rem;
    padding-left: 1rem;
  }
}

@media (max-width: 999px) {
  #profile-photo {
    padding-bottom: 0rem;
    padding-right: 1rem;
  }
}

#summary-text {
  margin-top: 2rem;
  font-size: large;
}
</style>