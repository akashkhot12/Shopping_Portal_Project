
# Shopping Portal Project

This project is a simple shopping portal implemented with a RESTful API using Node.js, Express and Mongo DB. The API enables basic CRUD (Create, Read, Update, Delete) operations for managing tasks. Each task in the shopping portal consists of a title, description, status, and timestamps for creation and last update.

##  Base Url

The base URL for this API is - http://localhost:3000/shopping-portal/details


## Features

- Create Details: Users can create new details with a title, description, and status.
- Read Details: Users can retrieve all details or a specific details by its ID.
- Update Details: Users can update existing details, including modifying the title, description, and status.
- Delete Details: Users can delete details by their ID.


## Endpoints

- `POST /shopping-portal/add-details` : Create a new task.
    
Response- 

    `201 Created`: if successfull.

    `400 Bad Request` : if invalid input.

- `GET /shopping-portal/details`  : Retrieve all tasks.


 Response- 

    `404 Not found `: if resource not found.

    `200 success` : if successfull.

    `500 Internal server error` : if internal server error.

- `GET /shopping-portal/details/:id`: Retrieve a specific task by its ID.

Response- 

    `404 Not found `: if resource not found.

    `200 success` : if successfull.

    `500 Internal server error` : if internal server error.


- `PUT /shopping-portal/edit-detail/:id`: Update an existing task.

Response- 

    `404 Not found `: if resource not found.

    `200 success` : if successfull.

    `500 Internal server error` : if internal server error.


- `DELETE /shopping-portal/delete-details/:id`: Delete a task by its ID.

Response- 

    `404 Not found `: if resource not found.

    `200 success` : if successfull.

    `500 Internal server error` : if internal server error.
    
## Task Schema

- `title`: Title of the task (required).
- `description`: Title of the task (required).
- `status` : Status of the task (e.g., Available, Not available).
- `createdAt` : Timestamp for when the task was created.
- `updatedAt` : Timestamp for when the task was last updated.

  
## Technologies Used

- `Node.js`
- `Express.js`
- `MongoDB`
- `Mongoose`



## Usage

You can interact with the API using tools like Postman or by sending requests from your frontend application. The API endpoints follow RESTful conventions for managing tasks in the shopping portal.

# Database 
## Database 
![Database Data](https://github.com/akashkhot12/Shopping_Portal_Project/tree/main/Images/database.png)
