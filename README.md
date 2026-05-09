# 🚗 DriveNow – Car Rental Application

**DriveNow** is a full-stack **Car Rental Application** built using the **MERN stack**.  
It allows users to browse cars, book rentals, and manage reservations, while admins can manage cars and bookings through a secure dashboard.

---

## ✨ Features

### 👤 User
- Authentication (Login / Register)
- Browse available cars
- Book cars for selected dates
- Manage bookings
- View booking history

### 🧑‍💼 Admin
- Add / Update / Delete cars
- Manage bookings
- View all users
- Control car availability

---

## 🛠️ Tech Stack

### Frontend
- React.js (Vite)
- Axios
- React Router
- Tailwind CSS

### Backend
- Node.js
- Express.js
- MongoDB + Mongoose
- JWT Authentication
- ImageKit (Image Storage)

---

## 📂 Project Structure

## 🚀 Deployment — Vercel

## 🚀 Live Demo

🌐 Click this: [Live Demo](https://drive-now-k2dq.vercel.app/)

---

## Getting Started

To get started with the DriveNow project, follow these steps:

1. Clone the repository from GitHub:

2. **Set Environment Variables**: Navigate to the `frontend` and `backend` folders and add necessary environment variables. You may need to create a `.env` file and configure it with required variables:
   In the backend/.env file:

   ```
   MONGODB_URI = your-mongo-url
   JWT_SECRET = your-jwt-secret
   IMAGEKIT_PUBLIC_KEY=your_imagekit_public_key
   IMAGEKIT_PRIVATE_KEY=your_imagekit_private_key
   IMAGEKIT_URL_ENDPOINT=https://ik.imagekit.io/your_id
   ```

   In the frontend/.env file:

   ```
   VITE_CURRENCY=$ 
   VITE_BASE_URL = your-server-url
   ```

3. **Install Dependencies**: Install dependencies in the `frontend` and `backend` folders using npm or yarn:

   ```
   cd frontend
   npm install
   cd ../backend
   npm install
   ```

4. **Start the Backend Server**: In the `backend` folder, start the development server using npm:

   ```
   npm run server
   ```

5. **Start the Frontend**: In the `frontend` folder, start the frontend application:

   ```
   npm run dev
   ```
