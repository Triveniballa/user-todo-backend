User–Todo Management System (Backend)

This repository contains a backend User–Todo Management System demonstrating CRUD operations with relationships using Node.js, Express.js, and Supabase (PostgreSQL).

The project focuses on implementing a One-to-Many relationship between two entities: Users and Todos, along with cascade delete behavior enforced at the database level.

📌 Assignment Overview

Designed a relational database schema

Implemented foreign key constraints

Enforced cascade delete at the database level

Built RESTful APIs for complete CRUD operations

Linked todos to users with proper ownership handling

Validated inputs and handled errors gracefully

🗂️ Database Design
Tables Used

users

Stores user account information

todos

Stores todo items created by users

References users.id using a foreign key

Relationship

One User → Many Todos

Implemented using a foreign key
todos.user_id → users.id

Cascade delete enabled using ON DELETE CASCADE

⚙️ Operations Performed
CREATE

Created users and todos tables in Supabase

Defined primary keys and foreign key constraints

Created users using signup API

Created todos linked to users

READ

Fetch all todos belonging to a specific user

Fetch user-specific data using relational queries

UPDATE

Update todo title and description

Update todo completion status

DELETE

Delete individual todo items

Delete a user and automatically delete all associated todos (cascade delete)

🔌 API Endpoints
User APIs

POST /users/signup
Creates a new user account

Todo APIs (User-Linked)

POST /todos/add-todo
Create a new todo for a user

GET /todos/get-my-todo/:userId
Fetch all todos for a user

PUT /todos/update-todo/:todoId
Update todo details

DELETE /todos/delete-todo/:todoId
Delete a specific todo

🛡️ Validations & Error Handling

Required field validation for user and todo creation

Email format validation

Password length validation

Invalid user ID and todo ID handling

Proper HTTP status codes with meaningful error messages

🔥 Cascade Delete Behavior

Cascade delete is handled at the database level

When a user is deleted, all related todos are deleted automatically

This ensures data integrity and prevents orphan records

🛠️ Technologies Used

Node.js

Express.js

Supabase (PostgreSQL)

JavaScript (ES Modules)

Postman (API Testing)

🧪 Testing

All APIs were tested using Postman

Requests and responses were validated for correctness

All responses are returned in JSON format

📂 Project Structure
user-todo-backend/
│
├── config/
├── controllers/
├── routes/
├── validations/
├── index.js
├── package.json
└── package-lock.json

✅ Notes

Database operations were performed using Supabase

Foreign key constraints enforce relational integrity

Cascade delete behavior is implemented at the database level

No frontend interface was used

👩‍💻 Author

Triveni Balla
B.Tech (ECE)
