# V17 Backend

Node.js API server for V17 Clean Energy Dashboard.

## Setup

```bash
npm install
cp .env.example .env
# Edit .env with your MySQL credentials
mysql -u root -p < database/schema.sql
npm start
```

Server runs on port 3000.

## API Endpoints

- `POST /api/login` - Authenticate user
- `GET /api/chart-data` - Get chart data (JWT required)
- `GET /api/health` - Health check
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
