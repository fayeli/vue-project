// https://docs.cypress.io/api/introduction/api.html

describe('My First Test', () => {
  it('Should consume an API and display the results', () => {
    cy.server()
    
    cy.route('https://jsonplaceholder.typicode.com/posts', [
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
    )
    cy.visit('/')
    cy.contains('div', 'Projects')
  })
  
})
