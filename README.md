# Book Store API with Rate Limiting, Caching, and RBAC

This is a Node.js-based API for a Book Store, implementing the following features:

- **Rate Limiting**: To prevent users from making excessive requests.
- **Caching**: To optimize performance by caching GET requests.
- **Role-Based Access Control (RBAC)**: Differentiates the functionality based on user roles (Admin and User).

## Table of Contents

- [Technologies Used](#technologies-used)
- [Setup and Installation](#setup-and-installation)
- [Running the API](#running-the-api)
- [API Endpoints](#api-endpoints)
- [Rate Limiting Implementation](#rate-limiting-implementation)
- [Caching Implementation](#caching-implementation)
- [RBAC Implementation](#rbac-implementation)
- [Testing](#testing)

## Technologies Used

- **Node.js**: JavaScript runtime environment for building the API.
- **Express.js**: Web framework for building the RESTful API.
- **MongoDB Atlas**: Cloud database service for storing book data.
- **Redis**: In-memory data store used for caching API responses.
- **express-rate-limit**: Middleware for implementing rate limiting.
- **ioredis**: Redis client for managing Redis connections.
- **Mongoose**: ODM for MongoDB to interact with the database.
- **dotenv**: For managing environment variables.

## Setup and Installation

### Clone the repository:

```bash
git clone https://github.com/yourusername/book-store-api.git
cd book-store-api
