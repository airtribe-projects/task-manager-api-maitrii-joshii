# Task Manager API

A simple RESTful API built using **Node.js** and **Express.js** that allows users to manage tasks.
Users can create, read, update, and delete tasks.  
This project demonstrates clean backend architecture, validation, and API design principles.

---

## Features

- Create a task
- Get all tasks
- Get tasks by priority level
- Get a task by ID
- Update a task
- Delete a task
- Input validation using Zod
- In-memory storage (can be replaced with DB)

---

## Tech Stack

- Node.js
- Express.js
- Zod (validation)
- JavaScript
- Postman (API testing)

---

## Project Structure

```
src/
│
├── app.js
│
├── routers/
├── controllers/
├── services/
├── middlewares/
├── repositories/
├── utils/
├── errors/
├── schemas/
```

---

## Setup Instructions


```bash
# 1. Clone the repository
git clone https://github.com/airtribe-projects/task-manager-api-maitrii-joshii

# 2. Navigate to repository
cd task-manager-api-maitrii-joshii

# 3. Install necessary NPM packages
npm install

# 4. Start the server
npm run start-dev
```

---

## API Documentation

Base URL:

```
http://localhost:3000
```

---

### 1. Create a Task

**POST** `/tasks`

Creates a new task.

#### Request Body

```json
{
  "title": "Learn Node.js",
  "description": "Understand Express controllers",
  "completed": false,
  "priority": "high"
}
```

#### Response (201 Created)

```json
{
  "data": {
    "id": 1,
    "title": "Learn Node.js",
    "description": "Understand Express controllers",
    "completed": false,
    "priority": "high"
  }
}
```

---

### 2. Get All Tasks

**GET** `/tasks`

Fetches all tasks.

#### Optional Query Parameters

* `completed=true`
* `completed=false`

#### Example

```
GET /tasks?completed=false
```

#### Response (200 OK)

```json
[
  {
    "id": 1,
    "title": "Learn Node.js",
    "description": "Understand Express controllers",
    "completed": false,
    "priority": "high"
  }
]
```

---

### 3. Get Tasks by Priority Level

**GET** `/tasks/priority/:level`

Fetches tasks based on priority level.

#### URL Parameter

* `level`: low | medium | high

#### Example

```
GET /tasks/priority/high
```

#### Response (200 OK)

```json
[
  {
    "id": 2,
    "title": "Write README",
    "description": "Document all endpoints",
    "completed": false,
    "priority": "high"
  }
]
```

---

### 4. Get Task by ID

**GET** `/tasks/:id`

Fetches a task by its ID.

#### Example

```
GET /tasks/1
```

#### Response (200 OK)

```json
{
  "id": 1,
  "title": "Learn Node.js",
  "description": "Understand Express controllers",
  "completed": false,
  "priority": "high"
}
```

---

### 5. Update a Task

**PUT** `/tasks/:id`

Updates an existing task.

#### Request Body

```json
{
  "title": "Learn Express.js",
  "description": "Middleware deep dive",
  "completed": true
}
```

#### Response (200 OK)

```
No Content
```

---

### 6. Delete a Task

**DELETE** `/tasks/:id`

Deletes a task by ID.

#### Example

```
DELETE /tasks/1
```

#### Response (200 OK)

```
No Content
```

---

## How to Test the API

### Using Postman

1. Open Postman
2. Select HTTP method (GET / POST / PUT / DELETE)
3. Enter the API URL
4. Add request body (JSON) if required
5. Click **Send**

---

### Using CLI

```bash
npm run test
```

---

## Author

**MJ**
Backend Developer (Node.js | Express.js)
