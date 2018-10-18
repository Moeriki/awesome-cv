<template>
  <v-expansion-panel :value="Number(0)">
    <v-expansion-panel-content v-for="project in projectTree" :key="project._id">
      <h6 slot="header" class="title font-weight-light">
        {{ project.title }}
        <external-link :link="project.link" :title="project.client.title" small/>
        <timespan
          :date-from="project.dateFrom"
          :date-until="project.dateUntil"
          :text="project.client.title"
        />
      </h6>
      <v-card class="project-detail">
        <v-layout wrap>
          <v-flex xs12>{{ project.description }}</v-flex>
          <v-flex xs12>
            <strong>Role:</strong>
            {{ project.role }}
          </v-flex>
          <v-flex xs12>
            <strong>Stack:</strong> …
          </v-flex>
          <v-flex xs12>
            <strong>Tools:</strong> …
          </v-flex>
        </v-layout>
      </v-card>
    </v-expansion-panel-content>
  </v-expansion-panel>
</template>

<script>
import ExternalLink from './components/ExternalLink.vue';
import Timespan from './components/Timespan.vue';

export default {
  components: { ExternalLink, Timespan },
  props: {
    clients: { required: true, type: Object },
    defaultLink: { default: null, type: String },
    projects: { required: true, type: Array },
  },
  data() {
    return {
      projectTree: this.projects.map((project) => {
        const client = this.clients[project.clientId];
        return {
          ...project,
          client: {
            ...client,
            title: client.title === project.title ? undefined : client.title,
          },
          link: project.link || this.clients[project.clientId].link,
          stack: {},
          tools: {},
        };
      }),
    };
  },
};
</script>

<style scoped>
.project-detail {
  padding: 12px 24px;
}
</style>
