1. Clone & Setup
git clone https://github.com/shahriarrafi/Petrichor-Tech-Lab.git
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
cp .env.example .env
php artisan key:generate
php artisan migrate --seed
php artisan serve

📡 Primary API Endpoints
Resource,Endpoint,Method,Access
Authentication, /api/login,POST,Public
Services, /api/services,GET,Public
Admin Services, /api/admin/services,POST/PUT,Admin (Token)
Consultations, /api/admin/consultations,GET,Admin (Token)