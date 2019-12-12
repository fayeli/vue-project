// https://docs.cypress.io/api/introduction/api.html
let mockData = [
  {
      "projectId": "8182fad6-06df-4af4-9fad-311578efb835",
      "projectName": "Test title 1",
      "projectDescription": "Some description",
      "categoryId": "1",
      "categoryName": "Test Category",
      "fundingGoal": "100000",
      "percentageComplete": "50",
      "createdAt": "2019-10-01T1313:45:30"
  },
  {
      "projectId": "8182fad6-06df-4af4-9fad-311578efb836",
      "projectName": "Test title 2",
      "projectDescription": "Some description",
      "categoryId": "1",
      "categoryName": "Test Category",
      "fundingGoal": "100000",
      "percentageComplete": "100",
      "createdAt": "2019-10-01T1313:45:30"
  },
  {
      "projectId": "8182fad6-06df-4af4-9fad-311578efb837",
      "projectName": "Test title 3",
      "projectDescription": "Some description",
      "categoryId": "1",
      "categoryName": "Test Category",
      "fundingGoal": "100000",
      "percentageComplete": "90",
      "createdAt": "2019-10-01T1313:45:30"
  }
];

describe('API Consumer Test', () => {

  it('Should consume an API and display the results', () => {
    cy.server()
    cy.route('https://my-json-server.typicode.com/fayeli/vue-project/projects', mockData)
    cy.visit('/')
    cy.contains('td', 'Test title 1')
    cy.contains('td', 'Test title 2')
    cy.contains('td', 'Test title 3')
  })

  it('Should display new results after repolling API', () => {
    cy.server()
    mockData.push({
      "projectId": "8182fad6-06df-4af4-9fad-311578efb838",
      "projectName": "Test title 4",
      "projectDescription": "Some description",
      "categoryId": "1",
      "categoryName": "Test Category",
      "fundingGoal": "100000",
      "percentageComplete": "90",
      "createdAt": "2019-10-01T1313:45:30"
    })
    cy.route('https://my-json-server.typicode.com/fayeli/vue-project/projects', mockData)
    cy.contains('Refresh Data').click()
    cy.contains('td', 'Test title 1')
    cy.contains('td', 'Test title 2')
    cy.contains('td', 'Test title 3')
    cy.contains('td', 'Test title 4')
  })

})

describe('Notifications Test', () => {
  
  it('Should display toast notification for project creation', () => {
    cy.server()
    mockData.push({
      "projectId": "8182fad6-06df-4af4-9fad-311578efb839",
      "projectName": "Test title 5",
      "projectDescription": "Some description",
      "categoryId": "1",
      "categoryName": "Test Category",
      "fundingGoal": "100000",
      "percentageComplete": "90",
      "createdAt": "2019-10-01T1313:45:30"
    })
    cy.route('https://my-json-server.typicode.com/fayeli/vue-project/projects', mockData)
    cy.contains('Refresh Data').click()
    cy.contains('div', 'New project Test title 5 was added.')
  })

  it('Should display toast notification for project updates', () => {
    cy.server()
    mockData[0] = {
      "projectId": "8182fad6-06df-4af4-9fad-311578efb835",
      "projectName": "Test title 1",
      "projectDescription": "Some description",
      "categoryId": "1",
      "categoryName": "Test Category",
      "fundingGoal": "120000",
      "percentageComplete": "50",
      "createdAt": "2019-10-01T1313:45:30"
    }
    cy.route('https://my-json-server.typicode.com/fayeli/vue-project/projects', mockData)
    cy.contains('Refresh Data').click()
    cy.contains('div', 'The funding goal of Test title 1 was updated to 120000.')
  })

  it('Should show a count for the number of unread notifications', () => {
    cy.contains('span.v-badge__badge.green', 3)
  })
})
