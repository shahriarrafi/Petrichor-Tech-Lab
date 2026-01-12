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