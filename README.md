# Vels Institutions Booking Application

This project is a comprehensive booking application designed for Vels Institutions. The application provides functionalities for room and facility bookings, equipment reservations, event scheduling, and user management. The project utilizes a modern monorepo setup to manage multiple packages and applications efficiently.

## Table of Contents

1. [Project Structure](#project-structure)
2. [Technologies Used](#technologies-used)
3. [Getting Started](#getting-started)
4. [Development Guide](#development-guide)
5. [Adding New Components](#adding-new-components)
6. [Contributing](#contributing)
7. [License](#license)

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

## Adding New Components

To add new components to the project, follow these steps:

1. **Shadcn UI Components**: 

   - Copy the relevant code from the Shadcn UI component into the `components/ui` folder.
   - Ensure the component is properly styled and integrated with Tailwind CSS.

2. **Custom Components**:

   - Place custom components in the `components` directory.
   - Refer to the example provided by the `Counter` component for structure and conventions.

3. **Component Integration**:

   - Import and use the new components in the appropriate files under `apps/web` or `packages/ui`.
   - Ensure all components are properly tested and documented.

Note: Look at ```components/ui/button.tsx``` for the changes to be done when copying the shadcn component.

For guidance on component structure, refer to the `Counter` component example in the `components` directory.

## Contributing

Contributions are welcome! Please read our [contributing guidelines](CONTRIBUTING.md) to get started.

## License

This project is licensed under the [MIT License](LICENSE).
