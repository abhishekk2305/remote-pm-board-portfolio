# Remote PM Board — SaaS Kanban Project Management (Portfolio Demo)

**Live Demo:**  
https://remote-pm-board-portfolio.vercel.app/

---

## 📋 Project Overview

Remote PM Board is a lightweight SaaS Kanban board app and portfolio demonstration for remote product management and SDLC documentation.

> **Goal:**  
Prove my practical knowledge of the SDLC, SaaS workflows, cloud deployment, and modern product team habits—**no coding experience needed**—in a format easily usable by anyone.

---

## 🛠️ Features

- **Simple Login Demo**
- **Multiple Projects**: Selectable Kanban projects
- **Tasks with Status Drag-and-Drop**: Move tasks between columns
- **Wireframes and Documentation**: Design and flow shown in `/wireframes`
- **Separation of Frontend & Backend**: Folders show React/Flask code
- **Cloud Deployment**: Live on Vercel

---

## 🖼️ Wireframes & User Flows

<details>
<summary>See my design wireframes</summary>

- For full design process, see the [`/wireframes`](./wireframes) folder.
- ![Wireframe Example](./wireframes/ProjectHive%20-%20Dashboard.pdf)
- Add/replace with JPG/PNG for inline images if you want high recruiter visibility!
</details>

---

## 🚦 Project Structure
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
│ └── your_wireframe_files-here.pdf
└── README.md


---

## 🚀 How to Run

### **Frontend (React)**
cd frontend
npm install
npm start


### **Backend (Flask)**
cd backend
pip install -r requirements.txt
python app.py


### **Tests**
Backend (adjust as needed for your local API base URL):
cd tests
pytest test_backend.py


Frontend (from `/frontend`):
npm test


---

## 🧭 User Stories & Flows

- **As a remote PM,** I want to log in with any email so I can see my projects (demo).
- **As a user,** I want to select a project and see its Kanban board.
- **As a user,** I can add a task and move tasks between "To Do," "In Progress," and "Done" statuses.
- **As a PM,** I can view wireframes and user flows for the product development process.

---

## 📝 Notes

- *Wireframes and product design process are included for review in the repo, not the live app.*
- *Backend is a demo Flask API with sample endpoints. Not currently wired to live frontend.*
- *This project is a solo proof-of-concept, not a commercial SaaS.*

---

## 🙋 About

 Abhishek Dhama  
- [LinkedIn](https://www.linkedin.com/in/abhishekkdhama/)
 Senior Project Manager
---

> _Inspired by SaaS application best practices, SDLC/Agile flow, and modern product team habits. Deployed and organized independently for remote-friendly teams!

