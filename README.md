# Vels Institutions Booking Application

This project is a comprehensive booking application designed for Vels Institutions. The application provides functionalities for room and facility bookings, equipment reservations, event scheduling, and user management. The project utilizes a modern monorepo setup to manage multiple packages and applications efficiently.

## Table of Contents

1. [Project Structure](#project-structure)
2. [Technologies Used](#technologies-used)
3. [Getting Started](#getting-started)
4. [Development Guide](#development-guide)
5. [Contributing](#contributing)
6. [License](#license)

## Project Structure

```
Vels Institutions Booking Application
├── apps
│   ├── api                  # Backend service
│   │   ├── src              # Source code for API
│   │   ├── package.json     # NPM configuration for API
│   │   └── tsconfig.json    # TypeScript configuration for API
│   └── web                  # Frontend application
│       ├── app              # Next.js app directory
│       ├── public           # Static files
│       ├── package.json     # NPM configuration for Web
│       ├── next.config.mjs  # Next.js configuration
│       ├── postcss.config.mjs  # PostCSS configuration
│       ├── tailwind.config.ts  # Tailwind CSS configuration
│       └── tsconfig.json    # TypeScript configuration for Web
├── packages
│   ├── eslint-config        # Shared ESLint configuration
│   ├── typescript-config    # Shared TypeScript configurations
│   └── ui                   # Shared UI components and utilities
│       ├── src              # Source code for UI components
│       ├── globals.css      # Global styles
│       └── tailwind.config.ts # Tailwind CSS configuration
├── package.json             # Root package configuration
├── turbo.json               # Turborepo configuration
└── README.md                # Project documentation
```

## Technologies Used

- **Turborepo**: For managing the monorepo and optimizing build processes.
- **Next.js**: A React framework for building the frontend.
- **Shadcn UI**: Component library for consistent UI design.
- **Supabase**: Backend as a Service for database and authentication.
- **Hono.js**: Lightweight web framework for API development.
- **TypeScript**: For type-safe JavaScript development.
- **Zod**: For runtime type checking and validation.
- **Tailwind CSS**: Utility-first CSS framework for styling.

## Getting Started

### Prerequisites

- **Node.js** (v14 or higher)
- **Yarn** (preferred) or **npm**

### Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/Coding-Club-VISTAS/booking-hall-repo.git
   cd booking-hall-repo
   ```

2. **Install dependencies**:

   ```bash
   yarn install
   ```

### Running the Application

To start the development servers for both the frontend and backend:

1. **Start the API server**:

   ```bash
   yarn turbo run dev --filter=api
   ```

2. **Start the Web server**:

   ```bash
   yarn turbo run dev --filter=web
   ```

Both servers will be accessible locally, typically at `http://localhost:3000` for the frontend.

## Development Guide

### API Development (`apps/api`)

- **Location**: `apps/api/src`
- **Start**: `yarn turbo run dev --filter=api`
- **Main file**: `index.ts`

The API is developed using Hono.js, with Supabase handling data storage and authentication. Routes and services are defined in the respective directories under `src`.

### Web Development (`apps/web`)

- **Location**: `apps/web`
- **Start**: `yarn turbo run dev --filter=web`
- **Main files**: `app/page.tsx`, `app/layout.tsx`

The frontend uses Next.js, with Shadcn UI components for a consistent design and Tailwind CSS for styling.

### Shared Packages

- **UI Components**: Located in `packages/ui`
- **Configurations**: Shared ESLint and TypeScript configurations in `packages/eslint-config` and `packages/typescript-config`.

## Contributing

Contributions are welcome! Please read our [contributing guidelines](CONTRIBUTING.md) to get started.

## License

This project is licensed under the [MIT License](LICENSE).
