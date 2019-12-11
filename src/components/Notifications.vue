<template>
    <v-container fluid class="text-center">
      <v-snackbar
				v-model="snackbar"
			>
				New Notification: Hello World
			</v-snackbar>
      <v-row
        justify="space-around"
      >
        <div>
          <v-btn
            class="mx-1"
            color="primary"
            @click="createNotification()"
          >
            Create Notification
          </v-btn>
          <v-btn
            class="mx-1"
            color="error"
            @click="unread = 0"
          >
            Read All
          </v-btn>
        </div>
        <v-badge
          color="green"
          overlap
        >
          <template v-slot:badge>
            <span v-if="unread > 0">{{ unread }}</span>
          </template>
          <v-icon large>mdi-bell</v-icon>
        </v-badge>
      </v-row>
    </v-container>
</template>

<script>
export default {
    name: 'Notifications',

    data: () => ({
      unread: 0,
      snackbar: false,
		}),
		
		methods: {
			createNotification: function() {
				this.unread++;
				this.snackbar = true;
			}
		}
};
</script>
