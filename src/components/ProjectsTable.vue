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
    
    data: () => ({
        headers: [
            { text: 'Name', value: 'projectName' },
            { text: 'Description', value: 'projectDescription' },
            { text: 'Featured?', value: 'featured' },
            { text: 'Category', value: 'categoryName' },
            { text: 'Funding Goal ($)', value: 'fundingGoal' },
            { text: 'Completion (%)', value: 'percentageComplete' },
        ],
        projects: [
            {
                projectName: 'Test title 1',
                projectDescription: 'Test description',
                featured: 1,
                categoryName: 'Test Category',
                fundingGoal: '100000',
                percentageComplete: '50'
            },
            {
                projectName: 'Test title 2',
                projectDescription: 'Test description',
                featured: 0,
                categoryName: 'Test Category',
                fundingGoal: '100000',
                percentageComplete: '90'
            },
            {
                projectName: 'Test title 3',
                projectDescription: 'Test description',
                featured: 0,
                categoryName: 'Test Category',
                fundingGoal: '100000',
                percentageComplete: '20'
            }
        ]
    }),
}
</script>
