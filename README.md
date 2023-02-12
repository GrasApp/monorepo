
PROJECT STRUCTURE
The project is a monorepo using yarn workspaces. the workspaces are the subdirectories in apps, packages, and server directory.
The project scripts are available in root 'package.json' file
To run the project after cloning, run yarn dev:init command.
yarn dev:init will build the dependency projects and create the dependency containers with docker

PROJECT REQUIREMENTS
The work for supertokens functions will be done in this file: /packages/data-access/src/supertokens.ts

Use and modify supertokens built in functions query the applications MYSQL database.
You can test the functions in development by querying these api routes with postman API

Function Name       Test with this endpoint:
login               POST 'http://localhost:6001/api/v1/auth/login'
sign up
forgot email,
forgot password
getUserSession

CODING STANDARDS

1. For any function that you create, please accept one parameter only. If you need to pass multiples to the function, please use destructure object properties.
There is an example in the /packages/data-access/src/supertokens.ts file login function.

2. Please use async await syntax for asynchronous code.
3. Please wrap all the functions in try catch block.

4. For /packages/data-access/src/supertokens.ts file, there should be only imports from the supertokens library built in functions.
Dont place other dependencies here.
The server routes functions will be dependent on the functions you create.
