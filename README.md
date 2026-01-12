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