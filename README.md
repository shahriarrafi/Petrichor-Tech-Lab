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

### Frontend Structure
src/
├── components/
│   ├── admin/
│   │   ├── Layout.tsx        # Persistent Sidebar/Header for Admin
│   │   └── LoginForm.tsx     # Handles auth logic and token storage
│   ├── Footer.tsx            # Public site footer
│   └── Navbar.tsx            # Public site navigation with links
├── layouts/
│   ├── AdminLayout.tsx       # Root wrapper for /admin routes
│   └── PublicLayout.tsx      # Root wrapper with Nav/Footer for visitors
├── pages/
│   ├── admin/                # Views toggled via 'currentView' state
│   │   ├── ConsultationManager.tsx
│   │   ├── Dashboard.tsx
│   │   └── ServiceManager.tsx
│   ├── About.tsx             # About Page
│   ├── Home.tsx              # Home Page
│   └── ServiceDetail.tsx     # Dynamic Page (expects :serviceId)
│   └── Services.tsx          # All Services
│   └── Contact.tsx           # Contact Page
│   └── Consultancy.tsx       # Consultancy Page
├── styles/
│   └── base.css              # Tailwind directives and global overrides
├── App.tsx                   # Entry point for Routing & Admin Auth logic
└── main.tsx                  # React DOM mounting point

Backend:
1. Backend Installation (Laravel)
cd laravel_backend
composer install
cp .env.example .env
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