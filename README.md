# 🍽️ Retro Recipes - Recipe Browsing App

A modern recipe browsing application built with Next.js, featuring a retro-styled UI and powered by TheMealDB API. Search for recipes, discover random meals, and enjoy a delightful cooking experience!

## ✨ Features

- 🔍 **Recipe Search**: Search for recipes by name with real-time results
- 🎲 **Random Recipes**: Discover new recipes with random suggestions
- 📱 **Responsive Design**: Fully responsive retro-styled interface
- 🎨 **Retro UI**: Beautiful vintage-inspired design with bold borders and vibrant colors
- 💬 **Feedback System**: User feedback collection system
- 🚨 **Error Handling**: Comprehensive error states and loading indicators

## 🚀 Getting Started

### Prerequisites

Make sure you have the following installed on your machine:

- **Node.js** (version 18.0 or higher)
- **npm**, **yarn**, **pnpm**, or **bun** package manager

### Installation

1. **Clone the repository:**

   ```bash
   git clone <repository-url>
   cd recipe-browsing-app
   ```

2. **Install dependencies:**

   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   # or
   bun install
   ```

3. **Run the development server:**

   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   # or
   bun dev
   ```

4. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000) to see the application.

### Build for Production

```bash
npm run build
npm start
```

## 🏗️ Data-Fetching Approach

### API Integration

- **External API**: [TheMealDB API](https://www.themealdb.com/api.php)
- **Endpoints Used**:
  - Search recipes: `https://www.themealdb.com/api/json/v1/1/search.php?s={query}`
  - Random recipes: `https://www.themealdb.com/api/json/v1/1/random.php`

### State Management & Data Fetching

- **TanStack Query (React Query)**: For server state management, caching, and data synchronization
- **Custom Zustand Atoms**: For local state management with a custom atom system
- **Query Keys**: Organized query invalidation and caching strategies

### Key Data Flow

1. **Search Flow**: User input → `presearch` state → `executeSearch()` → API call → results cached
2. **Random Recipes**: Automatic fetch on component mount → cached for performance
3. **State Sync**: Results stored in global atoms for cross-component access

### Error Handling Strategy

- **Network Errors**: Graceful fallbacks and retry mechanisms
- **Empty States**: User-friendly no-results messaging
- **Loading States**: Spinner indicators during data fetching
- **Partial Errors**: Non-blocking error banners for partial failures

## 📁 Folder Structure

```
src/
├── app/
│   ├── (dashboard)/
│   │   ├── home/
│   │   │   ├── _components/
│   │   │   │   ├── context.ts          # Global state atoms definition
│   │   │   │   ├── hooks.ts            # Custom hooks for data fetching
│   │   │   │   ├── header.tsx          # Search header component
│   │   │   │   └── recipeList.tsx      # Main recipe display component
│   │   │   ├── details/
│   │   │   │   └── [id]/               # Dynamic recipe detail pages
│   │   │   └── page.tsx                # Home page layout
│   │   └── feedback/
│   │       ├── _components/
│   │       │   ├── context.ts          # Feedback state atoms
│   │       │   ├── hooks.ts            # Feedback submission logic
│   │       │   └── action.ts           # Server actions for feedback
│   │       └── page.tsx                # Feedback page
│   ├── globals.css                     # Global styles
│   └── layout.tsx                      # Root layout with providers
├── components/
│   ├── common/
│   │   └── queryProvider.tsx           # React Query provider setup
│   └── retroui/                        # Custom UI component library
│       ├── Button.tsx
│       ├── Card.tsx
│       ├── Badge.tsx
│       ├── Input.tsx
│       └── Sonner.tsx                  # Toast notifications
├── lib/
│   └── atom.ts                         # Custom Zustand-based atom system
└── types/                              # TypeScript type definitions
```

## 🛠️ Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **State Management**: Zustand (custom atom system)
- **Data Fetching**: TanStack Query (React Query)
- **UI Components**: Custom RetroUI library
- **Icons**: Lucide React
- **Notifications**: Sonner (toast notifications)

## 🙏 Acknowledgments

- [TheMealDB](https://www.themealdb.com/) for providing the recipe API
- [Lucide](https://lucide.dev/) for beautiful icons
- [Tailwind CSS](https://tailwindcss.com/) for utility-first styling
- [TanStack Query](https://tanstack.com/query) for excellent data fetching
