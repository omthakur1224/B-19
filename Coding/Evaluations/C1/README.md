# Getting Started

1. Download the zip of the repository in masai-repo.
2. Unzip and rename the folder as per masai-repo standards.
3. All set to start.

# Task

- Create a NodeJS Server with the following features.

## Features to build

1. Create CRUD api's for `/users`
   - `GET /users`: get list of users
   - `GET /users/:id` : get one user where id matches.
   - `DELETE /users/:id` : delete one user where id matches.
   - `POST /users` : add one user where with dynamic id.
2. Create CRUD api's for `/products`.

   - `GET /products`: get list of products

     - `GET /products?colors=black` : get products where colors has `black`.
     - `GET /products?sizes=lg` : get products where size `lg` is applicable.
     - `GET /products?colors=black&sizes=lg` : get products where colors has `black` and where size `lg` is applicable.

     **Note** - Query filters applicable for `sizes` and `colors`.

   - `GET /products/:id` : get one product where id matches.
   - `DELETE /products/:id` : delete one product where id matches.
   - `POST /products` : add one product where with dynamic id.

**Note** - `Make sure you implelement features one by one and deploy the app correctly`

## Mandatory:

1. Initialize NPM.
2. Use of ExpressJS.
3. Use of nodemon.
4. server should run on port: `8000`.
5. Command: `npm run start` should start the server.
6. Should not update schema file while performing following features.

## Schema Files

- [Users](https://github.com/riteshf/NEM-101.E1-boilerplate/blob/main/data/users.json) : check `data/users.json` file.
- [Products](https://github.com/riteshf/NEM-101.E1-boilerplate/blob/main/data/products.json.json) : check `data/products.json` file.

## [Video Explanation](https://drive.google.com/file/d/1I_6W1Q8yy7cSEpzNJl7yHkTCqxYZNhHi/view?usp=sharing)

## General Instructions (**_IMPORTANT_**)

1. Make sure you follow `masai-repo` standards.
2. Do not change/update Schema files, we will test your code against the same files.
3. Expected use of routing to seperate out user and product code.
