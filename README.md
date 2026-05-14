# Meeting Room Manager

A Node.js / Express web application for booking and managing office meeting rooms, with role-based access control, booking approval workflows, email notifications, and automated scheduled reminders.

## Features

- User authentication with JWT stored in HTTP-only cookies
- Role-based permissions: regular users book rooms; admins and managers view all meetings, approve requests, and manage rooms
- Meeting booking with room selection, start/end date-time, booking reason, and optional candidate attendees with per-attendee acceptance tracking
- Room availability check endpoint — query whether a room is free for a given time slot before booking
- Booking approval workflow — meetings require admin or manager approval before confirmation
- Email notifications via Nodemailer for booking events (confirmations, approvals, rejections)
- Automated reminders using node-cron scheduled jobs
- Server-side rendered views with EJS templates
- Full CRUD for rooms (admin only) and meetings

## Tech Stack

- Node.js / Express 4
- MongoDB + Mongoose (User, Room, Meeting schemas)
- JSON Web Tokens (`jsonwebtoken`) for stateless auth
- Nodemailer for transactional email
- node-cron for scheduled reminder jobs
- EJS templating engine
- cookie-parser, dotenv

## Getting Started

### Prerequisites

- Node.js 18+
- A running MongoDB instance (local or Atlas)
- An SMTP email account for Nodemailer

### Installation

```bash
git clone https://github.com/amanshakya2001/meeting-room-manager-project.git
cd meeting-room-manager-project
npm install
```

Create a `.env` file:

```env
MONGO_URI=mongodb://localhost:27017/meeting-room-manager
JWT_SECRET=your-jwt-secret
EMAIL_HOST=smtp.example.com
EMAIL_PORT=587
EMAIL_USER=your@email.com
EMAIL_PASS=your-password
PORT=8000
```

### Running

```bash
# Development (with auto-restart via nodemon)
npm run dev

# Production
npm start
```

App runs on [http://localhost:8000](http://localhost:8000).

## Project Structure

```
index.js                  # App entry — Express setup, middleware, route mounting
connection.js             # Mongoose connection helper
models/
  users.js                # User schema (name, email, password, role)
  rooms.js                # Room schema (name, capacity)
  meetings.js             # Meeting schema (room, user, candidates, reason, start/end, isApproved)
routers/
  staticRouter.js         # EJS page routes
  userRouter.js           # /api/auth/ — register, login, logout
  roomRouter.js           # /api/room/ — CRUD and availability check
  meetingRouter.js        # /api/meeting/ — CRUD and approve
controllers/              # Route handler business logic
middelwares/
  auth.js                 # retrieveUser middleware, checkPermission factory
views/                    # EJS templates
public/                   # Static assets
```

## License

MIT
