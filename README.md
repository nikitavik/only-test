# Only Test

A React + TypeScript web application built with Feature-Sliced Design architecture.

## 🚀 Tech Stack

- **React 18** - UI framework
- **TypeScript** - Type-safe JavaScript
- **Webpack 5** - Module bundler
- **SCSS** - Styling with Sass
- **Swiper** - Touch slider component
- **Faker.js** - Mock data generation

## 📁 Project Structure

The project follows **Feature-Sliced Design (FSD)** architecture:

```
src/
├── app/          # Application initialization and global providers
├── pages/        # Page-level components
├── widgets/      # Complex UI blocks
├── features/     # User interactions and business logic
├── entities/     # Business entities
└── shared/       # Reusable utilities, UI kit, types
    ├── ui/       # Shared UI components
    ├── lib/      # Utilities and helpers
    ├── model/    # Shared state and types
    ├── api/      # API clients
    └── config/   # Configuration
```

## 🛠️ Getting Started

### Installation

```bash
npm install
```

### Development

Start the development server:

```bash
npm run start
```

The app will be available at `http://localhost:8080`

### Build

Production build:

```bash
npm run build:prod
```

Development build:

```bash
npm run build:dev
```

### Code Quality

Run linters and type checking:

```bash
npm run lint
```

Auto-fix linting issues:

```bash
npm run lint:fix
```

Type checking only:

```bash
npm run compile
```

### Deployment

Deploy to GitHub Pages:

```bash
npm run deploy
```

## 📦 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run start` | Start development server |
| `npm run build:prod` | Build for production |
| `npm run build:dev` | Build for development |
| `npm run compile` | TypeScript type checking |
| `npm run lint` | Run ESLint, Stylelint, and TypeScript checks |
| `npm run lint:fix` | Auto-fix linting issues |
| `npm run deploy` | Deploy to GitHub Pages |

## 🔧 Development Tools

- **ESLint** - Code linting (Airbnb config)
- **Stylelint** - Style linting
- **Prettier** - Code formatting
- **TypeScript** - Static type checking

## 📝 License

ISC
