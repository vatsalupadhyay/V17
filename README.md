# V17 - Clean Energy Dashboard

**Student:** Vatsal Kalpesh Upadhyay  
**Student ID:** 801478817  
**Live App:** http://147.182.220.28

## Overview

Full-stack web application analyzing the historic milestone where renewables surpassed coal in global electricity generation (H1 2025).

## Tech Stack

- Frontend: Angular 19
- Backend: Node.js + Express
- Database: MySQL
- Authentication: JWT
- Charts: Chart.js
- Server: NGINX

## Setup

### Backend
```bash
cd v17-backend
npm install
cp .env.example .env
mysql -u root -p < database/schema.sql
npm start
```

### Frontend
```bash
cd v17-frontend
npm install
ng serve
```

## Login

- Username: `Vatsal`
- Password: `Vatsal`

## Data Source

Global Electricity Mid-Year Insights 2025 - Ember Energy  
https://ember-energy.org/latest-insights/global-electricity-mid-year-insights-2025/
- **DEPLOYMENT.md** - Production deployment instructions
- **TESTING.md** - Testing guide and checklist
- **SUBMISSION_CHECKLIST.md** - Pre-submission verification

## 🌐 Deployment

For production deployment with NGINX:
```bash
# Build frontend
cd v17-frontend
ng build --configuration production

# Configure NGINX (see nginx.conf)
# Start backend as service (use PM2)
```

See `DEPLOYMENT.md` for detailed instructions.

## 📝 Default Credentials

- Username: `Vatsal`
- Password: `Vatsal`

## 🛠️ Development

```bash
# Backend
cd v17-backend
npm run dev  # With nodemon for auto-reload

# Frontend  
cd v17-frontend
ng serve --open  # Opens browser automatically
```

**Built by Vatsal Kalpesh Upadhyay (801478817)**

