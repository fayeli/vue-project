<template>
    <v-container fluid>
        <v-card>
            <v-card-title>
                Projects
                
            </v-card-title>
            <v-toolbar flat>
                <v-switch v-model="showFeaturedOnly" label="Show Featured Projects Only" class="mt-2"></v-switch>
            </v-toolbar>
            <v-data-table
                :headers="headers"
                :items="projects"
                :items-per-page="5"
                class="elevation-1"
            ></v-data-table>
        </v-card>
    </v-container>
</template>
<script>
export default {
    name: 'ProjectsTable',

    computed: {
        projects() {
            if (this.showFeaturedOnly) {
                return this.$store.state.data.filter(project => project.featured === '1');
            } 

            return this.$store.state.data;
        }
    },

    data: () => ({
        headers: [
            { text: 'Name', value: 'projectName' },
            { text: 'Description', value: 'projectDescription' },
            { text: 'Featured?', value: 'featured' },
            { text: 'Category', value: 'categoryName' },
            { text: 'Funding Goal ($)', value: 'fundingGoal' },
            { text: 'Completion (%)', value: 'percentageComplete' },
        ],
        showFeaturedOnly: false,
    }),
}
</script>
