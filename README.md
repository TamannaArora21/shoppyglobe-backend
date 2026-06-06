# ShoppyGlobe Backend API

## Project Overview

ShoppyGlobe Backend is an e-commerce REST API built using Node.js, Express.js, MongoDB Atlas, and JWT Authentication. The API allows users to view products, register and login, and manage shopping cart items securely.

---

## Technologies Used

* Node.js
* Express.js
* MongoDB Atlas
* Mongoose
* JWT Authentication
* bcryptjs
* Thunder Client
* dotenv
* cors

---

## Features

### Product APIs

* Get all products
* Get product details by ID

### Authentication

* User Registration
* User Login
* JWT Token Generation

### Cart Management

* Add item to cart
* Update cart quantity
* Remove item from cart

### Security

* Protected cart routes using JWT Authentication

---

## API Endpoints

### Products

#### Get All Products

GET /api/products

#### Get Product By ID

GET /api/products/:id

---

### Authentication

#### Register User

POST /api/register

#### Login User

POST /api/login

---

### Cart

#### Add Item To Cart

POST /api/cart

#### Update Cart Item

PUT /api/cart/:id

#### Delete Cart Item

DELETE /api/cart/:id

---

## MongoDB Collections

### Products

Stores product information:

* title/name
* price
* description
* category
* image

### Users

Stores registered users:

* name
* email
* password

### Cart

Stores cart items:

* productId
* quantity
* userId

---

## Installation


 Install dependencies

npm install

 Create .env file

MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
PORT=5000

Note: The `.env` file is not included in this repository for security reasons. Create a `.env` file in the project root and add your MongoDB connection string and JWT secret before running the application.

 Run the application


npm run dev


Server will start on:


http://localhost:5000

---

## Testing

All APIs were tested using Thunder Client.

Tested Endpoints:

* GET /api/products
* GET /api/products/:id
* POST /api/register
* POST /api/login
* POST /api/cart
* PUT /api/cart/:id
* DELETE /api/cart/:id

---
## GitHub Link
https://github.com/TamannaArora21/shoppyglobe-backend.git

---

## Author

Tamanna Arora

Backend Project – ShoppyGlobe E-commerce Application
