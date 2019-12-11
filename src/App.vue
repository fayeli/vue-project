<template>
  <v-app>
    <v-content>
      <Notifications/>
      <HelloWorld/>
    </v-content>
  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld';
import Notifications from './components/Notifications';

export default {
  name: 'App',

  components: {
    HelloWorld,
    Notifications,
  },

  data: () => ({
    //
  }),
};
</script>
