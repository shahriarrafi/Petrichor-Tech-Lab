
### Frontend Structure
src/
├── components/           # Reusable UI building blocks
│   ├── admin/            # Dashboard-specific components
│   │   ├── Layout.tsx    # Admin Shell (Sidebar/Header)
│   │   └── LoginForm.tsx # Admin Auth portal logic
│   ├── Footer.tsx        # Global site footer
│   └── Navbar.tsx        # Global site navigation
├── layouts/              # High-level Structural Wrappers
│   ├── AdminLayout.tsx   # Restricted shell for Auth users
│   └── PublicLayout.tsx  # Marketing shell (Nav + Footer)
├── pages/                # Top-level Page Views
│   ├── admin/            # Dashboard views (State-swapped)
│   │   ├── Dashboard.tsx
│   │   ├── ServiceManager.tsx
│   │   └── ConsultationManager.tsx
│   ├── Home.tsx          # Landing Page
│   ├── Services.tsx      # All Service Catalog
│   ├── ServiceDetail.tsx # Dynamic Service View (:serviceId)
│   ├── Consultancy.tsx   # Consultancy info
│   ├── Contact.tsx       # Lead generation forms
│   └── About.tsx         # Brand story
├── styles/               # Global Design System
│   └── base.css          # Tailwind resets & custom utilities
├── App.tsx               # Main Router & Auth Guard logic
└── main.tsx              # React mounting point

# 🎨 Petrichor Tech Lab: Frontend Guide

This document is a comprehensive guide for developers working on the Petrichor Tech Lab frontend. It covers the architecture, state management, and integration patterns required to maintain or scale the application.

## 🛠 Tech Stack
* **Framework:** React 18 (Vite)
* **Language:** TypeScript
* **Styling:** Tailwind CSS
* **Routing:** React Router DOM (v6)
* **State Management:** React Hooks (useState/useEffect)
* **Backend Communication:** Axios / Fetch API

## 🚀 Getting Started

### 1. Installation
Ensure you have **Node.js (v18+)** installed. Run the following commands:
```bash
# Install dependencies
npm install

# Start development server
npm run dev

### 2. Environment Variables (.env)
VITE_API_URL=http://localhost:8000/api

---

### Section 3: High-Level Architecture
This explains the "Layout" pattern you used in your code.

```markdown
## 🏗 Architecture & Design Patterns

The application follows a **Layout-Driven Architecture**. We separate the "Shell" (header/footer/sidebar) from the "Content" (pages).

### 1. Persistent Layouts (`src/layouts/`)
* **`PublicLayout.tsx`**: Wraps all marketing pages. It includes the `Navbar` and `Footer`.
* **`AdminLayout.tsx`**: A minimalist shell for the dashboard. It removes public navigation to provide a workspace for administrators.

### 2. Routing Strategy (`App.tsx`)
The app uses **Nested Routing**:
* **Public Routes**: Defined inside the `PublicLayout` route group.
* **Protected Routes**: Defined inside the `AdminLayout` route group.

---

## 🔐 Admin Dashboard & Authentication

### 1. Authentication Logic
Access to the Admin panel is managed via **Token Persistence**:
1.  **Login**: User submits credentials through `LoginForm.tsx`.
2.  **Storage**: On success, the backend returns a Bearer Token, which is saved in `localStorage` as `adminToken`.
3.  **Guard**: `App.tsx` checks for this token. If `adminToken` is null, the app renders the Login screen instead of the Dashboard.

### 2. State-Driven View Management
Inside the Admin dashboard, we use a **State-Driven View Switcher** instead of URL sub-routes.
* **Variable**: `currentView` (Type: `View`)
* **Logic**: Clicking a sidebar link updates the state (e.g., `setView('services')`).
* **Performance**: This allows instantaneous switching between managers (ServiceManager, ConsultationManager) without a browser reload.

---

## 📡 API Integration

All API calls should point to the base URL defined in the `.env`.

### 1. Public Requests
Standard `GET` requests to fetch services or `POST` requests for contact forms.
* **Endpoint**: `/api/services`

### 2. Admin (Protected) Requests
Any request to an `/api/admin/*` endpoint **must** include the Bearer Token.
```javascript
const token = localStorage.getItem('adminToken');

const response = await fetch(`${import.meta.env.VITE_API_URL}/admin/services`, {
  headers: {
    'Authorization': `Bearer ${token}`,
    'Content-Type': 'application/json'
  }
});

---

## 📂 Folder Reference

| Path | Purpose |
| :--- | :--- |
| `src/components/admin` | Dashboard-specific UI (LoginForm, Layout) |
| `src/pages/admin` | Management logic (ServiceManager, ConsultationManager) |
| `src/pages/` | Public views (Home, About, Services) |
| `src/layouts/` | Wrapper components for UI consistency |
| `src/styles/` | Global Tailwind and CSS configurations |
| `App.tsx` | The Router hub and Auth guard logic |