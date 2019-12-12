// https://docs.cypress.io/api/introduction/api.html
mockData = [
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
];

describe('My First Test', () => {

  it('Should consume an API and display the results', () => {
    cy.server()
    cy.route('https://jsonplaceholder.typicode.com/posts', mockData)
    cy.visit('/')
    cy.contains('td', 'Test Title 1')
    cy.contains('td', 'Test Title 2')
    cy.contains('td', 'Test Title 3')
  })

  it('Should display new results after repolling API', () => {
    cy.server()
    mockData.push({
        projectName: 'Test title 4',
        projectDescription: 'Test description',
        featured: 0,
        categoryName: 'Test Category',
        fundingGoal: '100000',
        percentageComplete: '20'
    })
    cy.route('https://jsonplaceholder.typicode.com/posts', mockData)
    cy.contains('Refresh Data').click()
    cy.contains('td', 'Test Title 1')
    cy.contains('td', 'Test Title 2')
    cy.contains('td', 'Test Title 3')
    cy.contains('td', 'Test Title 4')
  })
  
})
