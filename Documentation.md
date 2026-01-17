# Petrichor Tech Lab - Project Documentation

## 1. Project Overview
**Petrichor Tech Lab** is a technology consultancy firm website designed to showcase services, share expertise, and facilitate client consultations. The system is built with a modern decoupled architecture, featuring a reactive **Frontend** for an engaging user experience and a robust **Backend** for data management and API services.

## 2. Technology Stack

### Frontend Application
- **Framework**: [React 19](https://react.dev/) via [Vite](https://vitejs.dev/)
- **Language**: TypeScript (TSX)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) + PostCSS
- **Routing**: React Router DOM v7
- **Icons**: Lucide React
- **HTTP Client**: Native Fetch API (communicates with Laravel API)

### Backend API
- **Framework**: [Laravel 11/12](https://laravel.com/) (PHP Framework)
- **Database**: SQLite (File-based, lightweight) (on production MySQL)
- **Authentication**: Laravel Sanctum (API Token Authentication)
- **Image Handling**: Laravel Storage (Public Disk)
- **API Standard**: RESTful JSON API

## 3. System Architecture
The application runs as two separate services:
1.  **Frontend (Client)**: Runs on `http://localhost:3000`. It consumes the Backend API to fetch services and submit forms.
2.  **Backend (Server)**: Runs on `http://127.0.0.1:8000`. It exposes endpoints under `/api` and serves stored images under `/storage`.

**Data Flow:**
User Interface -> React Components -> Fetch API -> Laravel Routes -> Controllers -> Models -> SQLite Database.

## 4. Key Features

### Public Interface
- **Home/Landing Page**: Introduction to the firm.
- **Services Page**: Dynamic list of services fetched from the backend.
- **Consultancy Page**: A form for potential clients to request a strategy session.
    - Submits data to `POST /api/consultation`.
    - Returns a success message upon completion.

### Admin Panel
- **Login**: Secure access for administrators (`/login`).
- **Dashboard**: Overview of system status (`/admin`).
- **Service Management**: Create, Read, Update, and Delete (CRUD) services.
- **Consultation Reviews**: View and manage submitted client requests.

### Backend Services
- **API Routes**:
    - `POST /api/consultation`: Handle form submissions.
    - `GET /api/services`: Retrieve all services.
    - `POST /api/services`: Create new service (with image upload).
    - `POST /api/services/{id}`: Update service (using POST method override for FormData).
    - `DELETE /api/services/{id}`: Remove service.
- **Image Storage**: Uploaded images are stored in `storage/app/public/services` and served via `public/storage` symlink.

## 5. Folder Structure Overview

### Root Directory
- `src/`: Frontend source code.
    - `components/`: Reusable UI components.
    - `pages/`: Route page views (Home, Services, Admin, etc.).
    - `layouts/`: Main application wrappers.
- `laravel_backend/`: Backend source code.
    - `app/Http/Controllers/Api/`: API logic (ConsultationController, ServiceManagementController).
    - `routes/api.php`: API endpoint definitions.
    - `database/`: Migrations, Seeders, and SQLite file (`tech_db`).
    - `public/`: Public entry point and storage symlink.

## 6. Setup & Installation Guide

### Prerequisites
- [Node.js](https://nodejs.org/) (for Frontend)
- [PHP](https://www.php.net/) & [Composer](https://getcomposer.org/) (for Backend)

### Step 1: Backend Setup
1.  Navigate to the backend directory:
    ```bash
    cd laravel_backend
    ```
2.  Install PHP dependencies:
    ```bash
    composer install
    ```
3.  Set up environment:
    *   Copy `.env.example` to `.env`.
    *   Set `DB_CONNECTION=sqlite` and `DB_DATABASE` to the absolute path of your `database/database.sqlite` (or `tech_db`).
4.  Generate application key:
    ```bash
    php artisan key:generate
    ```
5.  Run migrations (create database tables):
    ```bash
    php artisan migrate
    ```
    *   *Note: If `tech_db` does not exist, touch it first: `touch database/tech_db`*
6.  Create Admin User (Seeder):
    ```bash
    php artisan db:seed
    ```
    *   **Default Admin**: `test@example.com` / `password`
7.  Link Storage (for images):
    ```bash
    php artisan storage:link
    ```
8.  Start Server:
    ```bash
    php artisan serve
    ```

### Step 2: Frontend Setup
1.  Navigate to the root directory (where `package.json` is):
    ```bash
    cd ..
    ```
2.  Install Node dependencies:
    ```bash
    npm install
    ```
3.  Configure Environment:
    *   Ensure `.env` exists.
    *   Set `VITE_API_URL=http://127.0.0.1:8000/api`.
4.  Start Development Server:
    ```bash
    npm run dev
    ```

## 7. Troubleshooting Common Issues

### 500 Internal Server Error
*   **Check Logs**: Look at `laravel_backend/storage/logs/laravel.log`.
*   **Database**: Ensure the SQLite file path in `.env` is absolute and correct.
*   **Permissions**: Ensure `storage/` and `bootstrap/cache/` are writable.

### 403 Forbidden on Images
*   **Cause**: Missing symbolic link.
*   **Fix**: Run `php artisan storage:link` in the `laravel_backend` directory.

### CORS Errors (Cross-Origin)
*   If frontend cannot reach backend:
    *   Check `config/cors.php`. Ensure `allowed_origins` includes `http://localhost:3000`.
    *   Ensure `VITE_API_URL` points to the correct backend port (default 8000).

---
**Generated by Petrichor Tech Lab Assistant**
