<template>
    <v-container fluid class="text-center">
      <v-snackbar
				v-model="snackbar"
			>
				{{ toastText }}
				<v-btn
					color="blue"
					text
					@click="markToastAsRead()"
				>
					Mark as Read
				</v-btn>
			</v-snackbar>
      <v-row
        justify="space-around"
      >
        <div>
          <v-btn
            class="mx-1"
            color="primary"
            @click="createNotification('Testing')"
          >
            Create Test Notification
          </v-btn>
          <v-btn
            class="mx-1"
            color="error"
            @click="unread = 0"
          >
            Clear Unread Notifications
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
import { mapState } from 'vuex';

const fieldsMap = {
  'projectName'          : 'project name',
  'fundingGoal'          : 'funding goal',
  'percentageComplete'   : 'percentage of completion',
  'categoryName'         : 'category',
};

export default {
    name: 'NotificationSystem',

    data: () => ({
      unread: 0,
      snackbar: false,
      projectIds: [],
      notifications: [],
      toastText: ''
    }),
    
    computed: mapState(['data']),
    watch: {
      data(newValue, oldValue) {

        // Keep track of the projects on the first time data is loaded
        if (oldValue.length === 0) {
          this.projectIds = newValue.map(element => element.projectId);
          return;
        }

        newValue.forEach(element => {
          if (this.projectIds.includes(element.projectId)) {

            // Compare against old data to see if an existing project was updated
            let oldElement = oldValue.find(value => value.projectId === element.projectId);
            for (let field in fieldsMap) {
              if (element[field] !== oldElement[field]) {
                this.createNotification(`The ${fieldsMap[field]} of ${oldElement.projectName} was updated to ${element[field]}.`);
              }
            }

          } else {
            // New project is detected, create notification for it
            this.projectIds.push(element.projectId);
            this.createNotification(`New project ${element.projectName} was added.`);
          }
        });
      }
    },
    
		methods: {
			createNotification: function(text) {
				this.snackbar = false;
        this.unread++;
        this.toastText = text;
        this.notifications.push(text);
				setTimeout(() => {
					this.snackbar = true;
				}, 500);
			},
			markToastAsRead: function() {
				this.unread--;
				this.snackbar = false;
			}
		}
};
</script>
