Remote PM Board — Full-Stack Kanban Project Management (Portfolio Demo)

**Live Demo:**  
Frontend: [remote-pm-board-portfolio.vercel.app](https://remote-pm-board-portfolio.vercel.app/)  
Backend API: [remote-pm-backend.onrender.com/projects](https://remote-pm-backend.onrender.com/projects)

---

## 📋 Project Overview

Remote PM Board is a mini SaaS Kanban tool that demonstrates **full SDLC skills**—from planning and wireframes to modern cloud deployment—without requiring advanced coding skills.

> **Goal:**  
Showcase practical product/SDLC deployment know-how, automation, and the ability to deliver a working portfolio.

---

## 🛠️ Features

- **User login demo (any email/password)**
- **Dashboard listing all projects (fetched from live backend)**
- **Add new, persistent projects (saved for all users)**
- **Kanban board for tasks (per project; tasks are session-local for demo)**
- **Live Flask API backend (Render) and React frontend (Vercel)**
- **Wireframes and planning docs for PM/SDLC process**
- **Minimal tests and CI logic in /tests**

---

## 🌐 Architecture

- **Frontend:** React, deployed via Vercel
- **Backend:** Flask REST API, deployed via Render.com  
    - `/projects` (GET, POST)
    - `/projects/<id>/tasks` (not yet API-integrated for tasks—currently demo only)

---

## 🚦 File Structure
root/
├── backend/
│ ├── app.py
│ └── requirements.txt
├── frontend/
│ ├── public/
│ │ └── index.html
│ ├── src/
│ │ ├── App.js
│ │ ├── App.css
│ │ └── index.js
│ ├── package.json
│ └── README.md
├── tests/
│ ├── test_backend.py
│ └── test_frontend.js
├── wireframes/
│ └── your_wireframes.pdf/png
└── README.md


---

## 🚀 How to Run

**Frontend (React):**
cd frontend
npm install
npm start


**Backend (Flask):**
cd backend
pip install -r requirements.txt
python app.py


---

## 🧪 Tests

**Backend:**
pytest tests/test_backend.py

**Frontend:**
cd frontend
npm test


---

## 🖼️ Wireframes & SDLC Docs

See `/wireframes` in this repo for planning process, user flows, and design screenshots.

---

## 🎬 Demo 

- **Try it live:** [remote-pm-board-portfolio.vercel.app](https://remote-pm-board-portfolio.vercel.app/)
- Log in with any email and password
- View and add projects (persisted for all users)
- Add tasks to your demo project  
- *Sample API: [remote-pm-backend.onrender.com/projects](https://remote-pm-backend.onrender.com/projects)*

---

## 🙋 About

**Abhishek Dhama**  
- [LinkedIn] https://www.linkedin.com/in/abhishekkdhama/
- Senior Project Manager

---

> _"This project proves my practical SaaS, remote workflow, PM/SDLC, and cloud deployment skills—even before learning advanced programming."_  


