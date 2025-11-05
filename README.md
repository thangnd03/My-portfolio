# My Portfolio

Developer portfolio showcasing my work, skills, and experience in web and mobile development.

This project uses React and Tailwind CSS.

## Tech Stack

- **React 18** - UI Library
- **TypeScript** - Type Safety
- **Vite** - Build Tool
- **Tailwind CSS** - Styling
- **React Router** - Routing (Optional)

## Project Structure

```
src/
├── components/     # Reusable components
│   ├── Sidebar.jsx           # Sidebar navigation
│   ├── MobileHeader.jsx      # Mobile header
│   ├── AboutSection.jsx      # About section
│   ├── ResumeSection.jsx     # Resume section (Education, Experience, Skills)
│   ├── PortfolioSection.jsx  # Portfolio section (with filtering)
│   ├── BlogSection.jsx       # Blog section
│   └── ContactSection.jsx    # Contact section (form)
├── hooks/          # Custom hooks (side effects)
│   ├── useActiveSection.js   # Active section management
│   └── useMobileMenu.js      # Mobile menu state management
├── data/           # Data files
│   └── portfolioData.js      # Portfolio data (About, Resume, Portfolio, Blog)
├── assets/         # Images, fonts, static files
├── utils/          # Utility functions
└── App.jsx         # Main app component
```

## Key Features

- **vCard Style Layout**: Fixed sidebar with main content area
- **Responsive Design**: Hamburger menu for sidebar on mobile
- **Section Navigation**: About, Resume, Portfolio, Blog, Contact
- **Portfolio Filtering**: Filter projects by category
- **Skills Display**: Progress bars for skill levels

## Getting Started

### Installation

```bash
npm install
```

### Development Server

```bash
npm run dev
```

Development server runs at `http://localhost:3000`.

### Build

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Development Rules

- Use functional components with hooks
- `useEffect` should only be used in custom hooks (`src/hooks/`), not in components
- Use Tailwind CSS for all styling
- Follow accessibility guidelines (semantic HTML, aria-labels, keyboard navigation)
- Optimize performance (React.memo, lazy loading, etc.)
