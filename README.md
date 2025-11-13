<<<<<<< HEAD

=======
# 🌟 Mind Ease - Mental Wellness Application

A full-stack MERN application designed to provide accessible mental wellness tools through mood tracking, journaling, and gratitude practices.

## 🚀 Live Demo


## 📋 Table of Contents
- Features
- Tech Stack
- Installation
- Usage
- API Endpoints
- Project Structure
- Contributing
- License

## ✨ Features

### 🔐 Authentication
- User registration and login
- Secure password hashing with bcrypt
- Session-based authentication
- Protected routes

### 📱 Core Functionality
- **Mood Tracking** - Visualize emotional patterns over time
- **Journaling** - Private space for thoughts and reflections
- **Gratitude Journal** - Daily practice of appreciation
- **Responsive Design** - Works seamlessly on all devices

### 🎨 User Experience
- Beautiful, calming color scheme
- Smooth animations and transitions
- Mobile-first responsive design
- Intuitive navigation
- Professional error handling

## 🛠️ Tech Stack

### Frontend
- **React** - Component-based UI library
- **CSS3** - Custom styling with animations
- **Axios** - HTTP client for API calls
- **React Router** - Navigation (ready for implementation)

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web application framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB object modeling
- **bcryptjs** - Password hashing
- **CORS** - Cross-origin resource sharing

## 💻 Installation

### Prerequisites
- Node.js (v14 or higher)
- MongoDB (local or Atlas)
- npm or yarn


## Project Structure
``
Mind-Ease/
├── Backend/
│   ├── models/
│   │   ├── User.js
│   │   └── Gratitude.js
│   ├── routes/
│   │   ├── auth.js
│   │   └── gratitude.js
│   ├── middleware/
│   │   └── auth.js
│   ├── server.js
│   └── package.json
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Header.js & .css
│   │   │   ├── Hero.js & .css
│   │   │   ├── Features.js & .css
│   │   │   ├── GratitudeJournal.js & .css
│   │   │   ├── LoginModal.js & .css
│   │   │   └── Footer.js & .css
│   │   ├── services/
│   │   │   └── api.js
│   │   ├── App.js
│   │   ├── App.css
│   │   └── index.js
│   └── package.json
└── README.md
``

### Navigate to backend
cd Backend
# Install dependencies
npm install

# Environment Configuration
# Create a .env file in the Backend directory with:
# MONGODB_URI=mongodb://localhost:27017/mindease
# PORT=5000
# JWT_SECRET=your_secret_key_here

# Start the backend server
npm run dev

### Navigate to frontend
cd Frontend
# Install dependencies
npm install
# Start the frontend server
npm start

"Taking care of your mental health is an act of self-love"

Built with ❤️ for better mental wellness!
>>>>>>> e841628 (Mind Ease Update)
