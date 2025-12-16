# Fastify TypeScript REST API

A simple REST API built with Fastify and TypeScript.

## Features

- ✅ TypeScript support
- ✅ Fast and lightweight (Fastify)
- ✅ CORS enabled
- ✅ Structured error handling
- ✅ Logging
- ✅ Hot reload for development

## Prerequisites

- Node.js 18+ 
- npm or yarn

## Setup

1. Install dependencies:
```bash
npm install
```

2. Create `.env` file (optional):
```bash
cp .env.example .env
```

## Development

Run the development server with hot reload:

```bash
npm run dev
```

Server will start on `http://localhost:3000`

## Production

Build and run:

```bash
npm run build
npm start
```

## API Endpoints

### Health Check
- `GET /health` - Server health status

### Users
- `GET /api/users` - Get all users
- `GET /api/users/:id` - Get user by ID
- `POST /api/users` - Create new user
  ```json
  {
    "name": "John Doe",
    "email": "john@example.com"
  }
  ```
- `PUT /api/users/:id` - Update user
- `DELETE /api/users/:id` - Delete user

## Example Requests

```bash
# Get all users
curl http://localhost:3000/api/users

# Create user
curl -X POST http://localhost:3000/api/users \
  -H "Content-Type: application/json" \
  -d '{"name":"John Doe","email":"john@example.com"}'

# Get user by ID
curl http://localhost:3000/api/users/1
```

## Project Structure

```
.
├── src/
│   └── index.ts       # Main application file
├── dist/              # Compiled JavaScript (after build)
├── package.json
├── tsconfig.json
└── .env.example
```

## Environment Variables

- `PORT` - Server port (default: 3000)
- `HOST` - Server host (default: 0.0.0.0)
- `LOG_LEVEL` - Logging level (default: info)
