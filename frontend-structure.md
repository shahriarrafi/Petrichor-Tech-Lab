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