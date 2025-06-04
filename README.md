# API-AUTH-MYSQL

A simple authentication API built with **Express.js** and **MySQL**. This project provides a foundation for secure user authentication using JWT tokens and password hashing.

## Features

- User registration and login
- Password hashing with bcrypt
- JWT-based authentication
- Express middleware for route protection
- MySQL database integration

## Prerequisites

- [Node.js](https://nodejs.org/) (v16+ recommended)
- [MySQL](https://www.mysql.com/)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

## Installation

1. **Clone the repository:**
    ```bash
    git clone https://github.com/yourusername/your-repo-name.git
    cd your-repo-name
    ```

2. **Install dependencies:**
    ```bash
    npm install
    ```
    or
    ```bash
    yarn install
    ```

3. **Configure environment variables:**

    Create a `.env` file in the root directory and add:
    ```
    DB_HOST=localhost
    DB_USER=root
    DB_PASSWORD=yourpassword
    DB_NAME=yourdbname
    JWT_SECRET=your_jwt_secret
    PORT=3000
    ```

4. **Set up the MySQL database:**

    Run the following SQL to create a users table:
    ```sql
    CREATE TABLE users (
      id INT AUTO_INCREMENT PRIMARY KEY,
      username VARCHAR(255) NOT NULL UNIQUE,
      password VARCHAR(255) NOT NULL,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );
    ```

5. **Start the server:**
    ```bash
    npm start
    ```
    or
    ```bash
    yarn start
    ```

## Project Structure

```
├── src/
│   ├── controllers/
│   ├── middleware/
│   ├── routes/
│   ├── db.js
│   └── app.js
├── .env
├── package.json
└── README.md
```

## Customization

- Extend the user model (e.g., add email, roles)
- Add additional authentication features (password reset, account verification, etc.)
- Adjust environment variables for different environments

## License

MIT

---

**Made by [Manuel Pires Luis]**
