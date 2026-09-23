# 🌍 Wanderlust — Client

> **Discover Your Next Adventure** — A modern full-stack travel booking web application built with Next.js 16, React 19, and Better Auth.

[![Next.js](https://img.shields.io/badge/Next.js-16-black?logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-blue?logo=react)](https://react.dev/)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4-38bdf8?logo=tailwindcss)](https://tailwindcss.com/)
[![MongoDB](https://img.shields.io/badge/MongoDB-Atlas-47A248?logo=mongodb)](https://www.mongodb.com/)
[![Deployed on Vercel](https://img.shields.io/badge/Deployed-Vercel-black?logo=vercel)](https://wanderlust-client-nine-rosy.vercel.app/)

---

## 🔗 Live Demo

**[DEMO](https://wanderlust-client-sigma-two.vercel.app/)**

---

## ✨ Features

- 🏖️ **Browse Destinations** — Explore a curated grid of travel destinations with images, pricing, and duration
- 🔍 **Destination Details** — Full detail page per destination with booking capability
- 📅 **Booking Management** — Book destinations and manage/cancel your bookings from a personal dashboard
- ➕ **Add Destinations** — Authenticated users can submit new travel destinations
- 🔐 **Authentication** — Email/password & Google OAuth via [Better Auth](https://better-auth.com/)
- 🔒 **Protected Routes** — Middleware-level route protection for sensitive pages
- 📱 **Fully Responsive** — Mobile-first layout with a collapsible navbar

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 16 (App Router) |
| UI Library | React 19 |
| Styling | Tailwind CSS v4 |
| Auth | Better Auth v1 + JWT Plugin |
| Database | MongoDB Atlas (via MongoDB Driver) |
| Icons | React Icons, Gravity UI Icons |
| Notifications | React Toastify |
| Deployment | Vercel |

---

## 📁 Project Structure

```
src/
├── app/
│   ├── page.js                  # Home page
│   ├── layout.js                # Root layout (Navbar + Footer)
│   ├── destinations/
│   │   ├── page.jsx             # All destinations listing
│   │   └── [id]/page.jsx        # Single destination detail & booking
│   ├── my-bookings/page.jsx     # User bookings dashboard
│   ├── add-destination/         # Add new destination form
│   ├── login/                   # Login page
│   ├── signup/                  # Sign up page
│   └── api/auth/[...all]/       # Better Auth API handler
├── components/
│   ├── Banner.jsx               # Hero section
│   ├── FeaturedDestinations.jsx # Homepage destination cards
│   ├── Navbar.jsx               # Responsive navigation
│   ├── Footer.jsx               # Footer
│   ├── Booking.jsx              # Booking form component
│   ├── EditModal.jsx            # Edit destination modal
│   ├── DeleteModal.jsx          # Delete destination confirmation
│   └── DeleteBooking.jsx        # Cancel booking button
└── lib/
    ├── auth.js                  # Better Auth server config
    └── auth-client.js           # Better Auth client config
```

---

## ⚙️ Getting Started

### Prerequisites

- Node.js 18+
- A MongoDB Atlas cluster
- Google OAuth credentials (optional)

### 1. Clone the repository

```bash
git clone https://github.com/mdsnbabor330/Wanderlust-fronted.git
cd wanderlust-client
```

### 2. Install dependencies

```bash
npm install
```

### 3. Set up environment variables

Create a `.env` file in the project root:

```env
BETTER_AUTH_SECRET=your_secret_here
BETTER_AUTH_URL=http://localhost:3000

DB_URL=your_mongodb_connection_string

GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret

NEXT_PUBLIC_SERVER_URL=http://localhost:5001
```

### 4. Run the development server

```bash
npm run dev
```

Open http://localhost:3000 in your browser.

---

## 🚀 Deployment (Vercel)

1. Push your code to GitHub
2. Import the project on https://vercel.com
3. Add all environment variables from `.env` in the Vercel dashboard — replace localhost URLs with production URLs:
   - `BETTER_AUTH_URL` → your Vercel app URL
   - `NEXT_PUBLIC_SERVER_URL` → your deployed backend URL
4. Deploy!

> **Note:** Add your Vercel URL to Google Cloud Console Authorized redirect URIs if using Google OAuth:
> https://your-app.vercel.app/api/auth/callback/google

---

## 📜 Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |

---

## 🤝 Related

- **Backend API:** [wanderlust-server](../wanderlust-server) — Express.js REST API

---

## 📄 License

This project is open source and available under the MIT License.
