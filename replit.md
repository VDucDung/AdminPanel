# Overview

This is an admin dashboard application built with React, TypeScript, and Node.js/Express for managing users, tools, VPS servers, and proxies. The application provides a comprehensive interface for system administration with features like data visualization, CRUD operations, authentication, and responsive design. It uses a modern tech stack with shadcn/ui components, Tailwind CSS for styling, and PostgreSQL with Drizzle ORM for data management.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **Framework**: React 18 with TypeScript and Vite for build tooling
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack Query for server state and React Context for auth state
- **UI Components**: shadcn/ui component library built on Radix UI primitives
- **Styling**: Tailwind CSS with custom design system following Material Design principles
- **Design System**: Custom color palette supporting light/dark modes with consistent spacing and typography

## Backend Architecture
- **Runtime**: Node.js with Express.js server framework
- **Database Layer**: Drizzle ORM with PostgreSQL using Neon serverless database
- **API Design**: RESTful API structure with `/api` prefix for all endpoints
- **Development**: Hot module replacement with Vite middleware integration

## Authentication & Authorization
- **Authentication**: Simple localStorage-based session management with mock user credentials
- **Authorization**: Role-based access control (admin/user roles)
- **Session Handling**: Client-side session persistence with context provider pattern

## Data Management
- **Database**: PostgreSQL with Neon serverless hosting
- **ORM**: Drizzle ORM for type-safe database operations
- **Schema**: Four main entities - users, tools, vps, and proxies with UUID primary keys
- **Migrations**: Drizzle Kit for database schema management and migrations

## Component Architecture
- **Layout**: Sidebar-based dashboard layout with collapsible navigation
- **Data Tables**: Reusable DataTable component with search, filtering, and CRUD operations
- **Forms**: Dynamic EntityForm component for create/edit operations
- **Status Management**: StatusBadge component for consistent status visualization
- **Theme System**: Dark/light mode support with system preference detection

## Development Workflow
- **Build System**: Vite for frontend bundling and esbuild for backend compilation
- **Development Server**: Integrated development environment with HMR and error overlays
- **Code Quality**: TypeScript for type safety with strict configuration
- **Asset Management**: Organized component library with examples and UI primitives

# External Dependencies

## Core Frameworks
- **React**: Frontend framework with hooks and context
- **Express.js**: Backend web server framework
- **Vite**: Build tool and development server
- **TypeScript**: Type system for JavaScript

## Database & ORM
- **Neon Database**: Serverless PostgreSQL hosting
- **Drizzle ORM**: Type-safe database toolkit
- **connect-pg-simple**: PostgreSQL session store

## UI & Styling
- **Radix UI**: Headless component primitives for accessibility
- **Tailwind CSS**: Utility-first CSS framework
- **Lucide React**: Icon library
- **shadcn/ui**: Pre-built component library

## State Management & Data Fetching
- **TanStack Query**: Server state management and caching
- **React Hook Form**: Form state management and validation
- **Zod**: Runtime type validation

## Development Tools
- **Wouter**: Lightweight routing library
- **date-fns**: Date manipulation utilities
- **clsx**: Conditional className utility
- **class-variance-authority**: Component variant management

## Chart & Visualization
- **Recharts**: React charting library for dashboard analytics

## Additional Libraries
- **cmdk**: Command palette component
- **embla-carousel**: Carousel component
- **input-otp**: OTP input component
- **vaul**: Drawer component library