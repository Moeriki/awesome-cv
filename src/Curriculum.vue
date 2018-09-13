<template>
  <v-container>
    <v-layout class="main" wrap>
      <v-flex xs12>
        <intro :name="profile.name" :title="profile.title"/>
      </v-flex>
      <v-flex xs12>
        <profile :contacts="profile.contacts"/>
      </v-flex>
      <v-flex xs12>
        <education v-bind="education"/>
      </v-flex>
      <v-flex xs12>
        <h4 id="experience" class="display-1">Experience</h4>
      </v-flex>
      <v-flex xs12>
        <experience
          :clients="experience.clients"
          :employers="experience.employers"
          :projects="experience.projects"
          :skills="experience.skills"
          aria-labelledby="experience"
          role="main"
        />
      </v-flex>
      <v-flex xs12>
        <h4 class="display-1">Skills</h4>
      </v-flex>
      <v-flex xs12>
        <skills :categories="experience.categories" :skills="experience.skills"/>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import Education from './Education.vue';
import Experience from './Experience.vue';
import Intro from './Intro.vue';
import Profile from './Profile.vue';
import Skills from './Skills.vue';

export default {
  components: { Education, Experience, Intro, Profile, Skills },
  props: {
    education: { required: true, type: Object },
    experience: { required: true, type: Object },
    profile: { required: true, type: Object },
  },
};
</script>

<style scoped>
.main > div {
  margin-top: 16px;
}
h4 {
  margin-top: 32px;
}
</style>
