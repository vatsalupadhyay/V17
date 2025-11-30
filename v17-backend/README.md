# V17 Backend - Clean Energy Dashboard API

**Student**: Vatsal Kalpesh Upadhyay  
**Student ID**: 801478817

## Installation

```bash
npm install
```

## Database Setup

1. Make sure MySQL is running
2. Update `.env` file with your MySQL credentials
3. Run the schema:
```bash
mysql -u root -p < database/schema.sql
```

## Running the Server

```bash
npm start
```

Or for development with auto-reload:
```bash
npm run dev
```

Server will run on `http://localhost:3000`

## API Endpoints

### POST /api/login
Authenticate user and receive JWT token.

**Request:**
```json
{
  "username": "Vatsal",
  "password": "Vatsal"
}
```

**Response:**
```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "message": "Login successful",
  "username": "Vatsal"
}
```

### GET /api/chart-data
Get visualization data (requires JWT token).

**Headers:**
```
Authorization: Bearer <your-jwt-token>
```

**Response:**
```json
{
  "growthChart": { ... },
  "mixChart": { ... }
}
```

### GET /api/health
Health check endpoint.

## Environment Variables

See `.env` file for configuration options.
