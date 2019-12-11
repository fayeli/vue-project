<template>
    <v-container fluid>
        <v-card>
            <v-card-title>
                Projects
            </v-card-title>
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
            return this.$store.state.displayedProjects;
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
    }),
}
</script>
