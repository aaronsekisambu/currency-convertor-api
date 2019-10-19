
# Currency Convertor api
[![Reviewed by Hound](https://img.shields.io/badge/Reviewed_by-Hound-8E64B0.svg)](https://houndci.com)

 A simple app converting common currencies
> Simple but powerful made .

> Evaluation Criteria:
   1. Speed of Execution(Time Complexity)
   2. User Friendly
   3. Responsiveness 

## Documentation
Instructions:
  1. Create a Calculator
  2. Calculator Should be able to calculate the following:-
      Currency Converter-INR, USD and EUR (Must Use APIs to fetch currency rate) - For Reference follow this [link](https://m.economictimes.com/markets/forex/currency-converter)
  3. Application must be able to show History of maximum 5 activities performed by users-Use Local Storage or any Database for storing data.

## Features
- User can enter a few selected currencies.
- Users can enter amount to convert.
- Users can see their history.

## Tools
Tools used for development of this API are;
- Database: [PostgreSQL](https://www.postgresql.org)
- Framework: [ExpressJS](http://expressjs.com/)
- Code Editor/IDE: [VSCode](https://code.visualstudio.com)
- Programming language: [JavaScript(ES6)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/)
- API Testing environment: [Postman](https://www.getpostman.com)


## Getting Started
1. After cloning the repository from [here](https://github.com/aaronsekisambu/currency-convertor-api), install requirements by running this command in the root of the repo folder
```sh
    $ npm install
```

2. Create a PostgreSQL database and take note of the database configurations.

3. Make a copy of `.env.sample` and rename it to `.env`. Edit the file replacing the respective configuration values.

4. Run the following commands in the projects root to set up migrations and to seed the database 
```sh 
    $ npm run migrate
    $ npm run seed
 ```
5. Run the following command to start the API server:
```sh
    $ npm start
```

## Running the tests

To run tests, use the following commands in your terminal to apply migrations, seed the database and then run tests
```sh
   NODE_ENV=test && npm run migrate
   npm run seed
   npm test 
 ``` 


### Key Contributors
- [Aaron Sekisambu](https://github.com/aaronsekisambu)