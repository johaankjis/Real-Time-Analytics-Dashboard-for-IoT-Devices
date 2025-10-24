# IoT Real-Time Analytics Dashboard - Documentation

## 📋 Table of Contents
- [Overview](#overview)
- [Technology Stack](#technology-stack)
- [Project Structure](#project-structure)
- [Key Components](#key-components)
- [Getting Started](#getting-started)
- [Development](#development)
- [Building and Deployment](#building-and-deployment)
- [Customization Guide](#customization-guide)
- [Features](#features)
- [Configuration](#configuration)

## 🎯 Overview

The IoT Real-Time Analytics Dashboard is a modern, interactive web application designed to monitor and visualize real-time data from IoT sensor devices. The dashboard provides comprehensive insights into device status, sensor metrics (temperature, humidity, pressure), and event throughput with beautiful, responsive charts and metrics displays.

### Key Capabilities
- **Real-time Data Visualization**: Live updating charts showing sensor data trends
- **Device Monitoring**: Track the status and metrics of multiple IoT devices
- **Responsive Design**: Fully responsive interface that works on desktop, tablet, and mobile
- **Dark Theme**: Modern dark-themed UI for reduced eye strain
- **Interactive Components**: Hover tooltips, dropdown menus, and interactive charts

## 🛠 Technology Stack

### Core Framework
- **Next.js 16.0.0** - React framework with App Router for server-side rendering and routing
- **React 19.2.0** - UI component library
- **TypeScript 5.x** - Type-safe JavaScript superset

### UI Libraries
- **Radix UI** - Accessible, unstyled UI component primitives including:
  - Dialog, Dropdown Menu, Tooltip, Tabs
  - Select, Switch, Slider, Progress
  - Accordion, Avatar, Badge, and more
- **Tailwind CSS 4.1.9** - Utility-first CSS framework
- **Lucide React** - Beautiful icon library
- **class-variance-authority** - CSS class variant management
- **tailwindcss-animate** - Animation utilities

### Data Visualization
- **Recharts** - Composable charting library built on React components
  - Line charts for sensor metrics
  - Area charts for event throughput and temperature distribution

### Forms and Validation
- **React Hook Form 7.60.0** - Performant form validation
- **Zod 3.25.76** - TypeScript-first schema validation
- **@hookform/resolvers** - Validation resolvers for React Hook Form

### Additional Tools
- **date-fns 4.1.0** - Modern date utility library
- **next-themes** - Theme management for Next.js
- **Vercel Analytics** - Web analytics for production monitoring
- **Sonner** - Toast notification system

## 📁 Project Structure

```
Real-Time-Analytics-Dashboard-for-IoT-Devices/
├── app/                          # Next.js App Router directory
│   ├── layout.tsx               # Root layout with metadata
│   ├── page.tsx                 # Main dashboard page
│   └── globals.css              # Global styles and CSS variables
│
├── components/                   # React components
│   ├── dashboard-header.tsx     # Header with navigation and user menu
│   ├── device-list.tsx          # Grid of connected IoT devices
│   ├── metrics-grid.tsx         # Key metrics cards (Events, Devices, Data, Alerts)
│   ├── realtime-charts.tsx      # Real-time data visualization charts
│   ├── theme-provider.tsx       # Theme context provider
│   └── ui/                      # Reusable UI components (Radix UI + shadcn/ui)
│       ├── badge.tsx
│       ├── button.tsx
│       ├── card.tsx
│       ├── dropdown-menu.tsx
│       └── ... (30+ UI components)
│
├── lib/                         # Utility functions
│   └── utils.ts                 # Helper functions (cn for className merging)
│
├── hooks/                       # Custom React hooks
│
├── public/                      # Static assets
│   ├── placeholder-logo.png
│   ├── placeholder-logo.svg
│   └── ... (other placeholder images)
│
├── styles/                      # Additional stylesheets
│
├── components.json              # shadcn/ui configuration
├── next.config.mjs             # Next.js configuration
├── tsconfig.json               # TypeScript configuration
├── tailwind.config.js          # Tailwind CSS configuration
├── postcss.config.mjs          # PostCSS configuration
├── package.json                # Dependencies and scripts
└── pnpm-lock.yaml             # Package manager lock file
```

## 🧩 Key Components

### 1. Dashboard Header (`dashboard-header.tsx`)
The main navigation bar at the top of the application featuring:
- Application branding with Activity icon
- Navigation menu (Overview, Devices, Analytics, Alerts)
- Action buttons (Notifications, Settings)
- User dropdown menu

### 2. Metrics Grid (`metrics-grid.tsx`)
Displays four key performance indicators:
- **Events/sec**: Real-time event throughput (updates every 2 seconds)
- **Active Devices**: Number of connected devices
- **Data Processed**: Total data volume
- **Alerts**: Current system alerts

Each metric card shows:
- Current value
- Percentage change from last hour
- Visual icon
- Trend indicator (up/down)

### 3. Device List (`device-list.tsx`)
Grid layout showing connected IoT devices with:
- Device name and ID
- Location information
- Status indicator (online/offline/warning)
- Real-time sensor readings (temperature, humidity, pressure)
- Last update timestamp
- Action menu for device management

**Device Status Colors:**
- Green: Online and functioning
- Yellow: Warning state
- Red: Offline

### 4. Realtime Charts (`realtime-charts.tsx`)
Three interactive visualization panels:

**Event Throughput Chart**
- Area chart showing events per second
- Updates every 2 seconds with new data
- Gradient fill for visual appeal

**Sensor Metrics Chart**
- Multi-line chart displaying temperature, humidity, and pressure
- Three color-coded lines for easy comparison
- Rolling 60-second window

**Temperature Distribution Chart**
- Large area chart focused on temperature trends
- Full-width display for detailed analysis
- Gradient visualization

## 🚀 Getting Started

### Prerequisites
- **Node.js** 18.x or higher
- **pnpm** (recommended) or npm/yarn package manager
- Git for version control

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/johaankjis/Real-Time-Analytics-Dashboard-for-IoT-Devices.git
cd Real-Time-Analytics-Dashboard-for-IoT-Devices
```

2. **Install dependencies**
```bash
pnpm install
# or
npm install
# or
yarn install
```

3. **Run the development server**
```bash
pnpm dev
# or
npm run dev
# or
yarn dev
```

4. **Open your browser**
Navigate to [http://localhost:3000](http://localhost:3000) to see the dashboard.

## 💻 Development

### Available Scripts

```bash
# Start development server with hot reload
pnpm dev

# Build for production
pnpm build

# Start production server
pnpm start

# Run ESLint for code quality
pnpm lint
```

### Development Workflow

1. **Component Development**
   - All components are in the `components/` directory
   - Use TypeScript for type safety
   - Follow React hooks patterns for state management

2. **Styling**
   - Use Tailwind CSS utility classes
   - Define custom CSS variables in `app/globals.css`
   - Leverage the `cn()` utility for conditional classes

3. **Adding New UI Components**
   - UI components are based on shadcn/ui
   - Components are in `components/ui/`
   - Customize Radix UI primitives as needed

4. **State Management**
   - Local state with React `useState` and `useEffect`
   - Client components marked with `"use client"` directive
   - Simulated real-time data with intervals

### Code Structure Patterns

**Client Components** (Interactive components with state):
```typescript
"use client"

import { useState, useEffect } from "react"

export function Component() {
  const [data, setData] = useState([])
  
  useEffect(() => {
    // Update logic
  }, [])
  
  return (/* JSX */)
}
```

**Server Components** (Static components, default in Next.js 13+):
```typescript
export function Component() {
  return (/* JSX */)
}
```

## 🏗 Building and Deployment

### Production Build

```bash
# Create optimized production build
pnpm build

# Test production build locally
pnpm start
```

The build process:
1. Compiles TypeScript to JavaScript
2. Optimizes and bundles React components
3. Generates static pages where possible
4. Creates optimized CSS bundles
5. Outputs to `.next/` directory

### Deployment Options

#### Vercel (Recommended)
1. Push code to GitHub
2. Import repository in Vercel dashboard
3. Vercel automatically detects Next.js and configures build
4. Deploy with automatic CI/CD

#### Other Platforms
The application can be deployed to any platform supporting Node.js:
- **Netlify**: Use Next.js plugin
- **AWS Amplify**: Configure as Next.js SSR app
- **Docker**: Create Dockerfile with Node.js base image
- **Traditional VPS**: Run with PM2 or similar process manager

### Environment Variables
Create a `.env.local` file for environment-specific configuration:
```bash
# Add any API keys or configuration here
NEXT_PUBLIC_API_URL=https://api.example.com
```

## 🎨 Customization Guide

### Modifying Colors and Theme

Colors are defined using CSS custom properties in `app/globals.css`:

```css
:root {
  --background: 0 0% 100%;
  --foreground: 222.2 84% 4.9%;
  --card: 0 0% 100%;
  --primary: 222.2 47.4% 11.2%;
  /* ... more variables */
}
```

### Changing Chart Styles

Modify chart configurations in `components/realtime-charts.tsx`:
```typescript
<LineChart data={data}>
  <Line 
    type="monotone" 
    dataKey="temperature" 
    stroke="hsl(var(--chart-1))" 
    strokeWidth={2} 
  />
</LineChart>
```

### Adding New Metrics

1. Define the metric interface in `metrics-grid.tsx`
2. Add the metric to the state array
3. Include appropriate icon from `lucide-react`
4. Style with existing card component

### Connecting Real Data Sources

Replace simulated data with actual API calls:

```typescript
// Example in metrics-grid.tsx
useEffect(() => {
  const fetchMetrics = async () => {
    const response = await fetch('/api/metrics')
    const data = await response.json()
    setMetrics(data)
  }
  
  const interval = setInterval(fetchMetrics, 2000)
  return () => clearInterval(interval)
}, [])
```

### Modifying Update Intervals

Change the refresh rate in component `useEffect` hooks:
```typescript
// Current: Updates every 2 seconds
setInterval(() => {/* update logic */}, 2000)

// Faster: Update every 1 second
setInterval(() => {/* update logic */}, 1000)

// Slower: Update every 5 seconds
setInterval(() => {/* update logic */}, 5000)
```

## ✨ Features

### Real-time Data Simulation
The dashboard simulates real-time IoT data with:
- Auto-updating metrics every 2 seconds
- Randomized sensor readings within realistic ranges
- Device status changes
- Event throughput variations

### Responsive Design
- Mobile-first approach
- Breakpoints: `sm`, `md`, `lg`, `xl`, `2xl`
- Grid layouts adapt to screen size
- Hidden elements on mobile for better UX

### Accessibility
- Semantic HTML structure
- ARIA labels from Radix UI
- Keyboard navigation support
- Focus management
- Screen reader friendly

### Performance Optimizations
- Next.js automatic code splitting
- Image optimization disabled (static export ready)
- TypeScript build errors ignored for faster development
- CSS purging in production

## ⚙️ Configuration

### Next.js Configuration (`next.config.mjs`)
```javascript
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,  // Skip TS errors during build
  },
  images: {
    unoptimized: true,        // Static export compatible
  },
}
```

### TypeScript Configuration (`tsconfig.json`)
- Target: ES6
- Strict mode enabled
- Path aliases: `@/*` maps to root directory
- JSX: preserve (Next.js handles transformation)

### Tailwind Configuration
- CSS variables for theming
- Custom animations via `tailwindcss-animate`
- Extended color palette with chart colors
- Dark mode class strategy

### Component Configuration (`components.json`)
shadcn/ui configuration for component generation and styling:
```json
{
  "style": "default",
  "tailwind": {
    "css": "app/globals.css"
  },
  "aliases": {
    "components": "@/components",
    "utils": "@/lib/utils"
  }
}
```

## 📊 Data Flow

### Current Implementation (Simulated Data)
```
Component Mount
    ↓
Initialize State with Mock Data
    ↓
Start Interval Timer (2000ms)
    ↓
Generate Random Data Points
    ↓
Update State
    ↓
Re-render Component
    ↓
Repeat (until component unmounts)
```

### Production Implementation (with Real API)
```
Component Mount
    ↓
Fetch Initial Data from API
    ↓
Initialize State with Real Data
    ↓
Start Polling Interval / Open WebSocket
    ↓
Receive New Data
    ↓
Update State
    ↓
Re-render Component
    ↓
Continue Listening for Updates
```

## 🔒 Security Considerations

1. **API Integration**: Implement authentication for API endpoints
2. **Environment Variables**: Never commit sensitive keys to git
3. **CORS**: Configure proper CORS policies for API requests
4. **Input Validation**: Validate all user inputs and API responses
5. **Rate Limiting**: Implement rate limiting for API calls

## 🐛 Troubleshooting

### Common Issues

**Port already in use**
```bash
# Kill process on port 3000
npx kill-port 3000
# Or use a different port
pnpm dev -- -p 3001
```

**Module not found errors**
```bash
# Clear Next.js cache and reinstall
rm -rf .next node_modules
pnpm install
```

**Build errors**
```bash
# Check TypeScript errors
pnpm tsc --noEmit

# Run linter
pnpm lint
```

## 📝 Best Practices

1. **Component Organization**: Keep components small and focused
2. **Type Safety**: Define interfaces for all data structures
3. **Performance**: Use React.memo() for expensive components
4. **Accessibility**: Test with keyboard navigation and screen readers
5. **Code Quality**: Run ESLint before committing changes
6. **Git Workflow**: Use meaningful commit messages and branch names

## 🤝 Contributing

To contribute to this project:
1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is private. Please contact the repository owner for licensing information.

## 🙏 Acknowledgments

- **Next.js Team**: For the excellent React framework
- **Radix UI**: For accessible component primitives
- **shadcn/ui**: For beautiful component implementations
- **Vercel**: For hosting and analytics platform
- **Recharts**: For powerful yet simple charting library

---

**Last Updated**: October 2025  
**Version**: 0.1.0  
**Maintained By**: johaankjis
