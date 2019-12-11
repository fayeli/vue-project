<template>
  <v-app>
    <v-content>
      <NotificationSystem/>
      <ProjectsTable/>
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
};
</script>
