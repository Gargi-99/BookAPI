# Book Store API

The Book Store API provides a simple and efficient way to manage books and user interactions. It features rate limiting, caching, and role-based access control (RBAC) to optimize performance and ensure secure access to resources.

## Technologies Used
- **Primary Database**: MongoDB Atlas
- **Caching**: Redis Cloud
- **Backend**: Node.js with Express
- **Features**: Rate Limiting, Caching, RBAC
- **Functions** : Fetch, Add, Update, Delete Books

---

## How to Set Up and Run the API

### Clone the Repository
1. Open a terminal on your system.
2. Clone the repository using the following command:
```git clone https://github.com/Gargi-99/BookAPI.git```

### Install Dependencies
1. Ensure Node.js (v14 or higher) is installed on the system. If not, download it from [ Node.js official website](https://nodejs.org/en/download).
2. Run the following command to install the required dependencies:
``` npm install ```

### Set Up Environment Variables
1. Create a .env file in the root directory of the project.
2. Add the following environment variables to the .env file:
``` MONGO_URI= mongodb+srv://dropforgargi:7xjC0Pr8yJ7YCvRd@cluster0.e6a0m.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0 ```

### Start the API Server
Run the following command to start the server:
``` node app.js ```
The server will start on http://localhost:3000 <br>
Root Endpoint: http://localhost:3000/api/books

### Test the API Using Postman
1. Set Up Headers
For each request, you need to include the following headers:
x-user-id: A unique identifier for the user : 12345 <br>
x-role: The role of the user : Admin

2. Follow the Postman API Docummentation for more details: [Gargi's BookAPI](https://documenter.getpostman.com/view/34504612/2sAYJAfyJQ).


