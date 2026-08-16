# ArthaNova Accounts Backend

Production-ready backend foundation for ArthaNova Accounts. Built with Node.js, Express, and MongoDB.

## Folder Structure

```
backend/
├── .env.example
├── .gitignore
├── package.json
├── README.md
└── src/
    ├── app.js               # Express app configuration & middleware setup
    ├── server.js            # Server entry point
    ├── config/              # Configuration files (Database, etc.)
    ├── controllers/         # Route handlers / Logic
    ├── middleware/          # Custom Express middleware (Error handling, rate limiting)
    ├── models/              # Mongoose database models
    ├── routes/              # API routes
    ├── services/            # Business logic and external API integrations
    ├── utils/               # Utility functions and helpers
    └── validators/          # Request validation schemas
```

## Installation

1. Navigate to the backend directory:
   ```bash
   cd backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```

## Environment Variables

Copy the example environment file to `.env` and fill in your actual credentials.

```bash
cp .env.example .env
```

Required variables:
- `PORT`: Port for the server to run on (default 5000).
- `NODE_ENV`: Environment (`development` or `production`).
- `MONGODB_URI`: MongoDB Atlas connection string.
- `JWT_SECRET`: Secret key for JWT generation (if used later).
- `RESEND_API_KEY`: API key for email service (if used later).
- `FROM_EMAIL`: Default sender email.
- `ADMIN_EMAIL`: Administrator email address.
- `CLIENT_URL`: URL of the frontend application (e.g., `http://localhost:5173`).

## Running Locally

To start the server in development mode (with file watching):

```bash
npm run dev
```

## Starting Production

To start the server in production mode:

```bash
npm start
```
