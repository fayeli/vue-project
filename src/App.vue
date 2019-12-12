<template>
  <v-app>
    <v-content>
      <NotificationSystem/>
      <ProjectsTable/>
      <v-container fluid>
        <v-btn
          class="mx-1"
          color="primary"
          @click="refreshData()"
        >
          Refresh Data
        </v-btn>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>

import NotificationSystem from './components/NotificationSystem';
import ProjectsTable from './components/ProjectsTable'

export default {
  name: 'App',

  components: {
    NotificationSystem,
    ProjectsTable,
  },

  data: () => ({
    //
  }),

  created() {
    this.$store.dispatch('getData');
  },

  methods: {
    refreshData: function() {
      this.$store.dispatch('getData');
    }
  }
};
</script>
