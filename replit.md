# AIP-Asia

## Overview

AIP-Asia is a corporate website for an AI consulting and training company. The platform showcases AI-related services including AI Builders (custom AI development), AI Trainers (education programs), AI Workforce (career placement), and an AI Store (pre-built AI agents). The site features multi-language support (English/Japanese), a contact form, and factory tour scheduling functionality.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 19 with TypeScript
- **Build Tool**: Vite with hot module replacement
- **Routing**: Wouter (lightweight client-side routing)
- **State Management**: TanStack React Query for server state
- **Styling**: Tailwind CSS with CSS custom properties for theming
- **UI Components**: Radix UI primitives wrapped with shadcn/ui patterns
- **Animations**: Framer Motion for page transitions and interactive elements
- **Internationalization**: Custom context-based language system supporting English and Japanese

### Backend Architecture
- **Runtime**: Node.js with Express
- **API Pattern**: REST endpoints prefixed with `/api`
- **Development**: Concurrent server (tsx) and client (Vite) processes
- **Production**: Built with esbuild, serves static files from dist folder

### Data Storage
- **ORM**: Drizzle ORM with PostgreSQL dialect
- **Schema Location**: `shared/schema.ts` (shared between client and server)
- **Validation**: Zod schemas generated from Drizzle schemas using drizzle-zod
- **Current Storage**: In-memory storage implementation with interface ready for database migration

### Project Structure
```
├── client/           # React frontend application
│   ├── src/
│   │   ├── components/ui/  # shadcn/ui components
│   │   ├── components/layout/  # Layout components (navbar, footer)
│   │   ├── pages/         # Route page components
│   │   ├── lib/           # Utilities, translations, contexts
│   │   └── hooks/         # Custom React hooks
├── server/           # Express backend
│   ├── index.ts      # Server entry point
│   ├── routes.ts     # API route definitions
│   └── storage.ts    # Data storage interface
├── shared/           # Shared code between client/server
│   └── schema.ts     # Database schema definitions
```

### Key Design Decisions
- **Monorepo Structure**: Client and server share types through the `shared` directory
- **Path Aliases**: `@/` maps to client source, `@shared/` maps to shared directory
- **Theme System**: JSON-based theme configuration with CSS variable injection
- **Maintenance Mode**: Toggle flag in `client/src/lib/maintenance.ts` for site-wide maintenance page

## External Dependencies

### Database
- **PostgreSQL**: Primary database (via Neon serverless driver)
- **Connection**: Uses `DATABASE_URL` environment variable

### Third-Party Services
- **Google Analytics**: Tracking ID G-6S49J17N3E integrated via gtag
- **Formspree**: Contact form submissions (endpoint: xvgaqoao)
- **Google Forms**: Factory tour registration integration

### Deployment
- **Vercel**: Static deployment configuration in `vercel.json`
- **Replit**: Development environment with custom Vite plugins for error overlay and cartographer