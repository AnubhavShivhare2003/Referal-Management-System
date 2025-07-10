# Referral Management System

## Live Demo
- **Frontend:** [https://referal-management-system.vercel.app/](https://referal-management-system.vercel.app/)
- **Backend:** [https://referal-management-system-2pby.onrender.com](https://referal-management-system-2pby.onrender.com)

A full-stack web application for managing employee referrals, built with React (Vite) for the frontend and Node.js/Express for the backend.

## Features
- User authentication (signup, login, JWT-based)
- Refer candidates with details and resume upload
- View all referred candidates (dashboard)
- **Admin-only:** Change the status of candidates (Pending, Reviewed, Hired)
- Responsive, modern UI

## Getting Started

### Prerequisites
- Node.js (v16 or above recommended)
- npm

### Backend Setup
1. Navigate to the `backend` folder:
   ```sh
   cd backend
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the backend server:
   ```sh
   npm start
   ```
   The backend will run on `http://localhost:3000` by default.

### Frontend Setup
1. Navigate to the frontend Vite project folder:
   ```sh
   cd frontend/vite-project
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the frontend dev server:
   ```sh
   npm run dev
   ```
   The frontend will run on `http://localhost:5173` by default.

## Admin Functionality
- **Only the admin can change the status of candidates.**
- Use the following admin credentials to log in as admin:
  - **Email:** `admin@gmail.com`
  - **Password:** `Admin@123`

## Tech Stack
- **Frontend:** React, Vite, Axios, modern CSS
- **Backend:** Node.js, Express, MongoDB, JWT

## Folder Structure
```
Referal Management System/
  backend/
    ...
  frontend/
    vite-project/
      ...
```

## License
This project is for educational/demo purposes. 