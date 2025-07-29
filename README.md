# 🗂️ RemotePM Board – SaaS Kanban Project Management (Portfolio Demo)

A lightweight SaaS app for remote project managers: Kanban boards, team invites, progress reporting, and real-time collaboration—all built as a proof of work to showcase modern SDLC, SaaS, and project management skills.

---

## 🚀 Project Summary

**Why:** Remote teams often struggle with tracking tasks, status, and deadlines across time zones and tools. RemotePM Board solves this with simple Kanban boards, team invites, access roles, and project reporting—entirely online.

**Who is this for:**  
- Remote project managers  
- Distributed teams  
- Startups and freelancers  
- Recruiters seeking SaaS-savvy Project Managers

---

## 🛣️ Project Charter

**Background:**  
Remote work and SaaS tools have changed how PMs coordinate teams across distance and time zones. Clear, collaborative workflows and automated reminders are now essential.

**Purpose:**  
Provide a simple, cloud-based solution to:
- Create/manage projects
- Visualize work tasks on Kanban boards
- Invite teammates and set roles
- Download project progress reports

**Objectives:**
- Kanban (To Do/In Progress/Done)
- Team invitations & permissions
- File uploads/comments per task
- Dashboard reporting & exports
- Mobile-friendly UI

---

## 📋 User Stories

1. As a Project Manager, I want to create project boards, so I can organize work for every initiative.
2. As a Project Manager, I want to invite team members by email, so they can collaborate on tasks.
3. As a Team Member, I want to see projects I’m assigned to, so I can access and update my work.
4. As a Team Member, I want to add, edit, or move tasks on a Kanban board, so I can reflect work progress visually.
5. As a Team Member, I want to upload files and comment on tasks, so discussion is centralized.
6. As a Project Manager, I want to set due dates, so everyone knows deadlines.
7. As a Team Member, I want automated email reminders for overdue tasks, so I stay on track.
8. As a PM, I want to generate/download progress reports, so I can share updates with stakeholders.
9. As an Observer, I want to view project progress without changing tasks or data.
10. As an Admin, I want to manage project and member permissions for security.

---

## 🔄 User Flows

### 1. Login Page
- User visits app URL → sees login screen
- Enters email/password OR chooses social login
- On success, lands on dashboard

### 2. Project Dashboard
- See/filter all projects
- Click “+ Create New Project” to add one
- Click “View Details” for project Kanban board

### 3. Download Progress Report
- Navigate to “Reports”
- Pick a project and date range
- Click “Generate Report” and download PDF

### 4. Invite Team Member
- Click “Invite Team Member”
- Enter email, choose user role
- Invite is sent, new member joins

### 5. Kanban Board
- Open project → Kanban board view
- Add/drag tasks between columns
- Click task for details

### 6. Task Details & Collaboration
- View assignee, deadlines, attachments, and comments
- Team collaborates directly in each task

---

## 🎨 Wireframes

*All wireframes below were created using Visily for rapid prototyping (no coding/design experience required):*

- **Login Page:**  
  ![Login](wireframes/KanbanFlow-Login-Page.png)
- **Dashboard:**  
  ![Dashboard](wireframes/ProjectHive-Dashboard.png)
- **Report Download:**  
  ![Report](wireframes/ProjectMaster-Progress-Report-Download.png)
- **Invite Team Member:**  
  ![Invite](wireframes/ProjectSync-Invite-Team-Member.png)
- **Kanban Board:**  
  ![Kanban](wireframes/TaskFlow-Kanban-Board.png)
- **Task Details:**  
  ![Task Detail](wireframes/TaskMaster-Task-Details.png)

*(Upload your PNG screenshots or PDFs as images/files in the `wireframes/` repo folder and reference as above.)*

---

## 💻 How To Run This Project

### 1. Try the Live Demo

- [Frontend on Vercel](https://your-vercel-url-here)
- [API on Render](https://your-render-url-here)

### 2. Run Locally

- **Backend (Python Flask):**
  - Install Python + Flask (`pip install flask`)
  - Run: `python app.py`

- **Frontend (React):**
  - Install Node.js, npm
  - Run: `npm install` then `npm start` in the `/frontend` folder

*(See /backend and /frontend README for details)*

---

## ✅ Automated Testing and CI/CD

- Unit tests (Python/Jest) available in `/tests`
- This repo uses GitHub Actions for CI (auto-runs tests on code update—see [ci.yml](.github/workflows/ci.yml))

---

## 📣 Contact

- Abhishek Dhama | Project Manager – SaaS/Remote Ready
- [LinkedIn](https://www.linkedin.com/in/abhishekkdhama)
- [Email](mailto:abhishekkdhama@gmail.com)

---

