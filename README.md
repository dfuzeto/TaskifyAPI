# Taskify-API

This is a project of a task management API built in Node.js. The API allows for creating, updating, deleting, listing, and completing tasks. Each task includes a title, description, completion status, and timestamps for creation and update.

Main Features:

    Task Creation: Users can create new tasks by specifying a title and, optionally, a description.

    Task Listing: All existing tasks can be listed. Additionally, tasks can be filtered based on their title.

    Task Update: Existing tasks can be updated, allowing for the modification of the title, description, and completion status.

    Task Deletion: Users can delete tasks based on their unique IDs.

    Marking Tasks as Completed: Tasks can be marked as completed or unmarked to indicate their completion status.

Examples of Routes Using Thunder Client:

    Task Creation (POST /tasks)

        URL: http://localhost:your-port/tasks

        Method: POST

        Request Body:

    {
      "title": "Task 1",
      "description": "Task 1 description"
    }

Task Listing (GET /tasks)

    URL: http://localhost:your-port/tasks
    Method: GET

Task Update (PUT /tasks/:id)

    URL: http://localhost:your-port/tasks/TASK_ID

    Method: PUT

    Request Body:

        {
          "title": "New Title"
        }

Task Deletion (DELETE /tasks/:id)
  
        URL: http://localhost:your-port/tasks/TASK_ID
        Method: DELETE

Marking Task as Completed (PATCH /tasks/:id/complete)
   
        URL: http://localhost:your-port/tasks/TASK_ID/complete
        Method: PATCH

These examples represent HTTP requests for each of the functionalities mentioned in the project description. You can customize the request body and URL as needed, depending on your local development environment and API structure. Be sure to replace "your-port" and "TASK_ID" with the appropriate values in your development environment.
