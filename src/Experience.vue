<template>
  <v-layout>
    <v-flex xs12>
      <div v-for="employer in experience" :key="employer._id">
        <v-card class="employer">
          <v-card-title>
            <v-card-title primary-title>
              <h5 class="headline">
                {{ employer.title }}
                <external-link :link="employer.link" :title="employer.title"/>
                <timespan
                  :date-from="employer.dateFrom"
                  :date-until="employer.dateUntil"
                  :text="employer.location"
                />
              </h5>
            </v-card-title>
            <v-card-text>{{ employer.description }}</v-card-text>
          </v-card-title>
        </v-card>
        <projects
          v-if="employer.projects.length !== 0"
          :clients="clients"
          :projects="employer.projects"
          class="projects"
        />
      </div>
    </v-flex>
  </v-layout>
</template>

<script>
import { asArray, mapValues, matchesProperty, newToOld } from './utils';
import ExternalLink from './components/ExternalLink.vue';
import Timespan from './components/Timespan.vue';
import Projects from './Projects.vue';

export default {
  components: { ExternalLink, Projects, Timespan },
  props: {
    clients: { required: true, type: Object },
    employers: { required: true, type: Object },
    projects: { required: true, type: Object },
    skills: { required: true, type: Object },
  },
  data() {
    return {
      experience: asArray(this.employers)
        .sort(newToOld)
        .map((employer) => ({
          ...employer,
          projects: asArray(this.projects)
            .filter(matchesProperty('employerId', employer._id))
            .sort(newToOld)
            .map((project) => ({
              ...project,
              skills: mapValues((_, skillId) =>
                project.skills.includes(skillId),
              )(this.skills),
            })),
        })),
    };
  },
};
</script>

<style scoped>
.employer {
  margin-top: 16px;
}
.projects {
  margin-top: 8px;
}
</style>
