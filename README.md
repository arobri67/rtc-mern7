# MERN7 API Project

This repository contains the backend API for managing mice and cages in a laboratory environment. The API is built using the MERN (MongoDB, Express.js, React, Node.js) stack. It provides endpoints to perform CRUD (Create, Read, Update, Delete) operations on mice and cages. This is a project from the RocktheCode bootcamp

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Endpoints](#endpoints)
- [Authentication](#authentication)
- [Data Seeding](#data-seeding)
- [Error Handling](#error-handling)

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/rtc-mern7.git
   ```

Certainly! Here's the README in Markdown format:

markdown
Copy code

# MERN7 API Project

This repository contains the backend API for the MERN7 project. The API is built using Express.js and MongoDB for data storage. It includes authentication, rate limiting, and various endpoints for managing mice, cages, and user accounts.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Endpoints](#endpoints)
- [Authentication](#authentication)
- [Data Seeding](#data-seeding)
- [Error Handling](#error-handling)

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/MERN7-API.git
   ```

2. Navigate to the project directory:

```bash
cd rtc-mern7
```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Create a .env file in the project root and configure the environment variables based on the provided .env.dist.

## Usage

```bash
 npm install
```

## Endpoints

### Mice Endpoints

- `GET /mice`: Get all mice
- `GET /mice/<mouse id>`: Get a mouse by ID
- `GET /mice/cage/<mouse id>`: Get the cage of a mouse
- `POST /mice`: Create a new mouse (requires authentication)
- `POST /mice/add-picture/<mouse id>`: Add a picture to a mouse (requires authentication and file upload)
- `PUT /mice/<mouse id>`: Update a mouse (requires authentication)
- `PUT /mice/update-mouse-cage/<mouse id>`: Update or delete the cage from a mouse (requires authentication)
- `DELETE /mice/<mouse id>`: Delete a mouse (requires authentication)

### Cages Endpoints

- `GET /cages`: Get all cages
- `GET /cages/<cage id>`: Get a cage by ID
- `GET /cages/mice-list/<cage id>`: Get all mice in a cage by ID
- `POST /cages`: Create a new cage (requires authentication)
- `PUT /cages/<cage id>`: Update a cage (requires authentication)
- `PUT /cages/add-mouse-to-cage/<cage id>`: Add a mouse to a cage by ID (requires authentication)
- `DELETE /cages/<cage id>`: Delete a cage (requires authentication)

### Auth Endpoint

- `POST /auth/register`: Register a new user
- `POST /auth/login`: Login and get a JWT token
- `POST /auth/add-avatar`: Add an avatar to the user account (requires authentication and file upload)

### Base Endpoint

- `GET /`: Welcome message

## Authentication

The API uses JSON Web Tokens (JWT) for authentication. To access protected endpoints, include the JWT token in the `Authorization` header.

## Data Seeding

The API initializes the database with initial data upon startup. You can customize the seeding process in the `seedDataInitDB` function in the `seedFunctions` module.

## Error Handling

- `404 Not Found`: Wrong URL request
- `500 Internal Server Error`: General internal server error

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvement, please contact me.
