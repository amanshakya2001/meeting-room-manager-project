# Meeting Room Manager

A full-stack conference room booking system with email notifications and scheduled reminders.

## Tech Stack

- **Backend:** Node.js, Express.js
- **Database:** MongoDB with Mongoose
- **Templating:** EJS
- **Auth:** JWT + Cookie-based sessions
- **Email:** Nodemailer
- **Scheduler:** node-cron

## Features

- User registration, login, and profile management
- Admin and user roles
- Create and manage conference rooms
- Book meetings in available rooms
- Automated email notifications for bookings
- Scheduled reminders via cron jobs
- Update and cancel existing meetings

## Project Structure

```
meeting-room-manager-project/
├── controllers/       # Route handler logic
├── models/            # Mongoose schemas (User, Room, Meeting)
├── routers/           # Express route definitions
├── utils/             # Auth, email, cron helpers
├── views/             # EJS templates
├── index.js           # App entry point
└── connection.js      # MongoDB connection
```

## Getting Started

### Prerequisites

- Node.js
- MongoDB

### Installation

```bash
npm install
```

### Environment Variables

Create a `.env` file:

```env
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
EMAIL_HOST=smtp.example.com
EMAIL_USER=your_email
EMAIL_PASS=your_password
PORT=8000
```

### Run

```bash
node index.js
```

App runs on [http://localhost:8000](http://localhost:8000)
