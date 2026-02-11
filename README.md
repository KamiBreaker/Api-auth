# Secure Task API

A robust and secure RESTful API built with Node.js, Express, and PostgreSQL. This API provides a backend for a task management application with user authentication and task CRUD operations.

## 🚀 Features

- **User Authentication:** Secure registration and login using JWT (JSON Web Tokens) and password hashing with Bcrypt.
- **Task Management:** Full CRUD (Create, Read, Update, Delete) functionality for user-specific tasks.
- **Security First:**
  - **Helmet.js:** Sets various HTTP headers for security.
  - **Rate Limiting:** Prevents brute-force attacks on login endpoints.
  - **Validation:** Request data validation using Zod.
  - **Error Handling:** Centralized error management and logging with Winston.
- **Database:** PostgreSQL integration with automatic table initialization on startup.

## 🛠 Tech Stack

- **Backend:** Node.js, Express.js
- **Database:** PostgreSQL
- **Authentication:** JWT, Bcrypt
- **Logging:** Winston, Morgan
- **Validation:** Zod
- **Deployment:** Optimized for Render.com

## 📋 API Endpoints

### Auth
| Method | Endpoint | Description |
| :--- | :--- | :--- |
| POST | `/api/auth/register` | Register a new user |
| POST | `/api/auth/login` | Login and receive JWT token |

### Tasks (Protected)
| Method | Endpoint | Description |
| :--- | :--- | :--- |
| GET | `/api/tasks` | Get all tasks for the authenticated user |
| POST | `/api/tasks` | Create a new task |
| PATCH | `/api/tasks/:id` | Update task completion status |
| DELETE | `/api/tasks/:id` | Delete a task |

## ⚙️ Installation & Setup

1. **Clone the repository:**
   ```bash
   git clone <your-repo-url>
   cd Backend-API
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Environment Variables:**
   Create a `.env` file in the root directory:
   ```env
   PORT=5000
   DATABASE_URL=postgresql://user:password@localhost:5432/db_name
   JWT_SECRET=your_jwt_secret_key
   ```

4. **Run the application:**
   ```bash
   # Development mode
   npm run dev

   # Production mode
   npm start
   ```

## 🔮 Future Implementations

- **Refresh Tokens:** Implement a more robust session management system using refresh tokens.
- **Task Categories/Labels:** Allow users to organize tasks into categories.
- **Search & Filtering:** Add query parameters to filter tasks by completion status or search by title.
- **Email Notifications:** Integrate a service like SendGrid to send reminders for pending tasks.
- **User Profiles:** Allow users to update their profile information and change passwords.
- **API Documentation:** Integrate Swagger/OpenAPI for interactive API documentation.
