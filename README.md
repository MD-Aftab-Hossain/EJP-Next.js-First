# 🎨 Artify – Project Overview & Route Summary

## 📌 Short Project Description

Artify is a modern and responsive artwork showcase platform built using **Next.js (App Router)** and **NextAuth.js**.  
Users can explore artworks, view full details, authenticate using Google or credentials, and access protected pages to add, manage, or save favorite artworks.  
The platform focuses on clean UI, consistent spacing, and a fully responsive user experience.

---

## 📁 Route Summary

### **Public Routes**
| Route | Description |
|-------|-------------|
| `/` | Landing page with hero and multiple sections. |
| `/explore` | Public artwork gallery page showing all artworks. |
| `/login` | Login page with Google & credentials authentication. |
| `/register` | User registration page. |

---
### **Dynamic Routes**
| Route | Description |
|-------|-------------|
| `/explore/[id]` | Single artwork details page showing full description, image, meta info, etc. |


### **Protected Routes (Requires Login)**
| Route | Description |
|-------|-------------|
| `/add` | Add Product page — create a new artwork. |
| `/manage` | Manage Products page — view/delete uploaded artworks. |
| `/favorite` | User's favorite artworks page. |
| `/explore/[id]` | Artwork details page — full description, banner, and meta info. |


# Project Setup & Full Documentation

A modern, responsive, and feature-rich web application built using **Next.js 16**, **Next-Auth**, **React 19**, **TailwindCSS v4**, and multiple UI/UX enhancement libraries.  
The platform ensures clean UI, smooth animations, protected routing, and optimized performance for a seamless user experience.

---

## 🚀 Live Demo
🔗 **Live Website:** https://ejp-next-js-first.vercel.app/  
🔗 **GitHub Repository:** https://github.com/MD-Aftab-Hossain/EJP-Next.js-First

---

## 📌 Features Overview

### 🔐 Authentication (Next-Auth)
- Google OAuth login  
- Credentials login  
- Fully protected routes (Add, Manage, Favorite, Explore/[id])  
- Secure redirect logic  

### 🎨 Artwork & Content Management
- Add new items (form + validation)  
- Manage items (update/delete)  
- Favorite system  
- Protected dynamic page (**/explore/[id]**)  

### 🔎 Explore Section
- Public items list  
- Dynamic details view  
- Clean grid layout  
- Smooth animations  

### 🧩 UI/UX Enhancements
- React Toastify notifications  
- SweetAlert2 modals  
- TailwindCSS v4 responsive UI  
- Swiper sliders  
- Typewriter text animation  
- React Icons  
- Animation using react-awesome-reveal  

### ⚙️ Additional Functionalities
- Auth-based navbar dropdown  
- Loading states  
- Reusable components  
- Environment variable support  

---

## 🛠️ Tech Stack

### Frontend
- Next.js 16 (App Router)
- React 19
- TailwindCSS v4  
- DaisyUI  
- Swiper  
- React Icons  
- React Toastify  
- SweetAlert2  
- React Awesome Reveal  
- React Simple Typewriter  

### Server / Backend
- Next.js Route Handlers  
- Next-Auth (OAuth + Credentials)  

### Hosting
- Vercel

---

## 📦 Dependencies Used

```json
"dependencies": {
  "next": "16.0.3",
  "next-auth": "4.24.13",
  "react": "19.2.0",
  "react-dom": "19.2.0",
  "react-awesome-reveal": "4.3.1",
  "react-icons": "5.5.0",
  "react-simple-typewriter": "5.0.1",
  "react-toastify": "11.0.5",
  "sweetalert2": "11.26.3",
  "swiper": "12.0.3"
},
"devDependencies": {
  "tailwindcss": "^4",
  "daisyui": "5.5.5",
  "eslint": "9.17.0",
  "eslint-config-next": "15.1.4",
  "babel-plugin-react-compiler": "1.0.0"
}
```

---

## 🧪 Project Setup & Run Locally

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/MD-Aftab-Hossain/EJP-Next.js-First.git
cd EJP-Next.js-First
```

### 2️⃣ Install Dependencies
```bash
npm install
```

### 3️⃣ Create `.env.local` File
```env
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
NEXTAUTH_SECRET=your_nextauth_secret
NEXTAUTH_URL=http://localhost:3000
```

### 4️⃣ Run Development Server
```bash
npm run dev
```
Local: http://localhost:3000

### 5️⃣ Build for Production
```bash
npm run build
npm start
```

---

## 📁 Project Structure

```
/
├── app/
│   ├── add/
│   ├── manage/
│   ├── favorite/
│   ├── explore/[id]/
│   └── api/auth/[...nextauth]/
├── components/
├── public/
├── styles/
├── .env.local
├── package.json
└── README.md
```

---

## 🤝 Author
**Md. Aftab Hossain**  
GitHub: https://github.com/MD-Aftab-Hossain

