# Task

- Create a NodeJS Server with following features.

## Features to build

1. Create CRUD api's for `/users`
   - `GET /users`: get list of users
   - `GET /users/:id` : get one user where id matches.
   - `DELETE /users/:id` : delete one user where id matches.
   - `POST /users` : add one user where with dynamic id.
2. Create CRUD api's for `/products`.

   - `GET /products`: get list of products

     - `GET /products?tags=black` : get products where tags has `black`.
     - `GET /products?sizes=lg` : get products where size `lg` is applicable.
     - `GET /products?tags=black&sizes=lg` : get products where tags has `black` and where size `lg` is applicable.

     **Note** - Query filters applicable for `tags`, `size` and `colors`.

   - `GET /products/:id` : get one product where id matches.
   - `DELETE /products/:id` : delete one product where id matches.
   - `POST /products` : add one product where with dynamic id.

**Note** - `Make sure you implelement features one by one and deploy the app correctly`

## Mandatory:

1. Initialize NPM.
2. Use of ExpressJS.
3. Use go nodemon.
4. server should run on port: `8000`.
5. Command: `npm run start` should start the server.
6. Should not update schema file while performing following features.

## Schema Files

- [Users](./data/users.json) : check `data/users.json` file.
- [Products](./data/products.json.json) : check `data/products.json` file.

## General Instructions (**_IMPORTANT_**)

1. Make sure you follow `masai-repo` standards.
2. Do not change/update Schema files, we will test your code agains the same files.
3. Expected use of routing to seperate out user and product code.

## Optional

1. [Heroku Deployment of NodeJS](https://devcenter.heroku.com/articles/deploying-nodejs)
