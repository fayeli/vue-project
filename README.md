# vue-project

A Vue.js project that consumes an API and display results in a table. It also has a simple notification system 
that shows toast notifications for the API responses. 

For the API call, axio is used and it is currently pointing to a mock endpoint with data represented by `db.json`. Vuex was used for statem management, ensuring that the API call response is a single source of data for the rest of the applicaion componetns. At the moment, the repolling of the API is triggered by the "Refresh Data". However, in the future we might want to schedule the repolling periodically, or implement other mechanism such as pull-to-refresh.

Vuetify was used for its Material design-based package of UI components, allowing quick prototyping of the notification toasts, unread count, and table data display. For future development, we might want to consider more customized styling and formatting of the different type of data, e.g. progress bar for percentage completion, star icons for featured projects etc.

For automated testing, we are using Cypress for its ease of use and its capabilty to stub API calls with mock data.


## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Run automated tests
```
yarn test:e2e
```


