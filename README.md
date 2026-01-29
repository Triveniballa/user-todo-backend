User–Todo Management System (Backend)

This project is a backend User–Todo Management System built using Node.js, Express.js, and Supabase (PostgreSQL).
It demonstrates relational database design, foreign key usage, cascade delete, and complete CRUD operations.

Objective

To design and implement a backend system that:

Uses a relational schema

Links todos to users (one-to-many relationship)

Enforces cascade delete at the database level

Supports full CRUD operations

Follows a clean backend project structure

Tech Stack

Node.js

Express.js

Supabase (PostgreSQL)

JavaScript (ES Modules)

Postman (API testing)

Project Structure
user-todo-backend/
│
├── config/
│   └── supabase.js
│
├── controllers/
│   ├── user.controller.js
│   └── todo.controller.js
│
├── routes/
│   ├── user.routes.js
│   └── todo.routes.js
│
├── validations/
│   ├── user.validation.js
│   └── todo.validation.js
│
├── .gitignore
├── index.js
├── package.json
└── package-lock.json

Database Schema
Users Table

id (UUID, Primary Key)

name (TEXT, NOT NULL)

email (TEXT, UNIQUE, NOT NULL)

password (TEXT, NOT NULL)

created_at (TIMESTAMP)

Todos Table

id (UUID, Primary Key)

title (TEXT, NOT NULL)

description (TEXT)

is_completed (BOOLEAN, default: false)

user_id (UUID, Foreign Key → users.id)

created_at (TIMESTAMP)

Relationship Rule

One User can have multiple Todos

Each Todo belongs to one User

When a User is deleted, all related todos are deleted automatically using
ON DELETE CASCADE

How to Run the Project
Install dependencies
npm install

Start the server
npm run dev

API Endpoints
User APIs
Signup User

POST /users/signup

{
  "name": "Triveni",
  "email": "triveni@test.com",
  "password": "123456"
}

Todo APIs (User-Linked)
Create Todo

POST /todos/add-todo

{
  "title": "Complete assignment",
  "description": "User–Todo backend",
  "userId": "USER_ID"
}

Get User Todos

GET /todos/get-my-todo/:userId

Update Todo

PUT /todos/update-todo/:todoId

{
  "is_completed": true
}

Delete Todo

DELETE /todos/delete-todo/:todoId

Validations & Error Handling

Required field validation

Email format validation

Password length validation

Invalid user ID and todo ID handling

Proper HTTP status codes with clear error messages

Cascade Delete

Cascade delete is implemented at the database level using foreign key constraints.
Deleting a user automatically deletes all their associated todos, ensuring data integrity.

Testing

All APIs were tested using Postman.
Responses are returned in JSON format only.

Author

Triveni
B.Tech (ECE)
