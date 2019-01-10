Usage:
---
Step 1: install dependencies
```
yarn install
```
Step 2: run the project and view it via http://localhost:3000/
```
yarn install
```


Folder Structure
---
```
/
|- actions/         // redux actions
|- api/             // APIs fetchers
|- components/      // shared components
|- constants/       // constant values for actions&reducers
|- pages/           // pages
|- reducers/        // reducer
|- next.config.js
|- store.js
|- package.json
|- ...
```

Major Dependencies
---
- [Next.js](https://github.com/zeit/next.js)
  - helps code spliting
  - helps me handle the routing(pages)
- [Redux Thunk](https://github.com/reduxjs/redux-thunk)
  - helps me setup redux
- [Ant Design](https://ant.design/)
  - layout, grid
- [React Chart JS 2](https://github.com/reactjs/react-chartjs)
  - helps me draw graphs

P.S.
---
I use next.js becaus I want to save time. In fact, I also know how to setup react-router for routing and webpack for code-spliting. If you are interested, please feel free to read my previous boilerplats [SPA2017](https://github.com/calvinchankf/SPA2017) and [React-SPA-Starter](https://github.com/calvinchankf/React-SPA-Starter)