# .NET Hub Kathmandu — Backend API

Node.js + Express.js + MySQL REST API backend.

## Stack

| Layer | Technology |
|---|---|
| Runtime | Node.js (ESM modules) |
| Framework | Express.js |
| Database | MySQL 8+ via `mysql2` |
| Config | dotenv |

## Setup

### 1. Install dependencies

```bash
cd backend
npm install
```

### 2. Configure environment

Copy `.env.example` to `.env` and fill in your MySQL credentials:

```bash
cp .env.example .env
```

Edit `.env`:

```
PORT=5000
NODE_ENV=development
DB_HOST=localhost
DB_PORT=3306
DB_USER=root
DB_PASSWORD=your_password
DB_NAME=nethub_db
```

### 3. Create database & seed

Run the SQL script against your MySQL instance:

```bash
mysql -u root -p < database/schema.sql
```

### 4. Start the server

Development (with auto-reload):
```bash
npm run dev
```

Production:
```bash
npm start
```

## API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| GET | `/api/health` | Health check |
| GET | `/api/stats` | Community stats |
| GET | `/api/events` | Past & upcoming events |
| GET | `/api/leaders` | Leadership team |
| GET | `/api/tech-stack` | Tech ecosystem items |

## Architecture

```
backend/src/
├── config/         → MySQL connection pool
├── controllers/    → Request handlers
├── data/           → Fallback seed data (no DB)
├── middleware/     → Error + 404 handlers
├── models/         → MySQL query methods
├── routes/         → Express route definitions
├── app.js          → Express app (middleware + routing)
└── server.js       → HTTP server bootstrap
```

## Connecting to the Frontend

Set `VITE_API_URL` in `frontend/.env`:

```
VITE_API_URL=http://localhost:5000/api
```

The frontend services (`src/services/`) automatically use the API when `VITE_API_URL` is set, otherwise fall back to the bundled local data files seamlessly.
