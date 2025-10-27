# IoT Real-Time Analytics Dashboard

A modern, responsive web application for monitoring and visualizing real-time data from IoT sensor devices. Built with Next.js, React, and TypeScript, this dashboard provides comprehensive insights into device status, sensor metrics, and event throughput through beautiful, interactive charts.

![IoT Dashboard](https://img.shields.io/badge/Next.js-16.0.0-black?style=flat-square&logo=next.js)
![React](https://img.shields.io/badge/React-19.2.0-blue?style=flat-square&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue?style=flat-square&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.1.9-38B2AC?style=flat-square&logo=tailwind-css)

## ✨ Features

- **📊 Real-time Data Visualization** - Live updating charts showing sensor data trends and event throughput
- **🎯 Device Monitoring** - Track status and metrics of multiple IoT devices with real-time updates
- **📱 Responsive Design** - Fully responsive interface that works seamlessly on desktop, tablet, and mobile
- **🌙 Modern Dark Theme** - Elegant dark-themed UI for reduced eye strain
- **⚡ Interactive Components** - Hover tooltips, dropdown menus, and interactive charts powered by Recharts
- **♿ Accessible** - Built with Radix UI primitives for optimal accessibility

## 🚀 Quick Start

### Prerequisites

- Node.js 18.x or higher
- pnpm (recommended), npm, or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/johaankjis/Real-Time-Analytics-Dashboard-for-IoT-Devices.git
cd Real-Time-Analytics-Dashboard-for-IoT-Devices

# Install dependencies
pnpm install

# Start development server
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the dashboard.

## 🛠️ Tech Stack

- **Framework**: Next.js 16.0.0 with App Router
- **UI Library**: React 19.2.0
- **Language**: TypeScript 5.x
- **Styling**: Tailwind CSS 4.1.9
- **Components**: Radix UI + shadcn/ui
- **Charts**: Recharts
- **Icons**: Lucide React
- **Forms**: React Hook Form + Zod
- **Themes**: next-themes

## 📊 Dashboard Components

### Metrics Grid
Displays four key performance indicators:
- Events/sec - Real-time event throughput (integer count, updates every 2 seconds)
- Active Devices - Number of connected devices (integer count)
- Data Processed - Total data volume (displayed in MB/GB)
- Alerts - Current system alerts (integer count with trend indicators)

### Device List
Grid view of connected IoT devices showing:
- Device name, ID, and location
- Status indicators (online/offline/warning)
- Real-time sensor readings (temperature, humidity, pressure)
- Last update timestamp

### Real-time Charts
- **Event Throughput** - Area chart showing events per second
- **Sensor Metrics** - Multi-line chart for temperature, humidity, and pressure
- **Temperature Distribution** - Large area chart for temperature trends

## 📁 Project Structure

```
Real-Time-Analytics-Dashboard-for-IoT-Devices/
├── app/                    # Next.js App Router directory
│   ├── layout.tsx         # Root layout with metadata
│   ├── page.tsx           # Main dashboard page
│   └── globals.css        # Global styles
├── components/            # React components
│   ├── dashboard-header.tsx
│   ├── device-list.tsx
│   ├── metrics-grid.tsx
│   ├── realtime-charts.tsx
│   └── ui/               # Reusable UI components (30+ components)
├── lib/                  # Utility functions
├── hooks/                # Custom React hooks
├── public/               # Static assets
└── styles/               # Additional stylesheets
```

## 🎨 Available Scripts

```bash
# Development
pnpm dev          # Start development server with hot reload

# Production
pnpm build        # Create optimized production build
pnpm start        # Start production server

# Code Quality
pnpm lint         # Run ESLint for code quality checks
```

## 🔧 Configuration

The dashboard can be customized through:
- **Colors & Theme**: Modify CSS variables in `app/globals.css`
- **Chart Styles**: Configure in `components/realtime-charts.tsx`
- **Update Intervals**: Adjust refresh rates in component useEffect hooks
- **Data Sources**: Replace simulated data with real API calls

See the [detailed documentation](./DOCUMENTATION.md) for comprehensive customization guides.

## 🌐 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Import the repository in [Vercel](https://vercel.com)
3. Vercel automatically detects Next.js and configures the build
4. Deploy with automatic CI/CD

### Other Platforms
Compatible with any Node.js hosting platform:
- Netlify
- AWS Amplify
- Docker containers
- Traditional VPS with PM2

## 📚 Documentation

For detailed documentation including:
- Complete technology stack breakdown
- Component architecture
- Development workflow
- Customization guides
- API integration examples
- Troubleshooting

Visit [DOCUMENTATION.md](./DOCUMENTATION.md)

## 🤝 Contributing

Contributions are welcome! To contribute:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is private. Please contact the repository owner for licensing information.

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) - React framework
- [Radix UI](https://www.radix-ui.com/) - Accessible component primitives
- [shadcn/ui](https://ui.shadcn.com/) - Beautiful component implementations
- [Recharts](https://recharts.org/) - Charting library
- [Vercel](https://vercel.com/) - Hosting and analytics

---

**Made with ❤️ by [johaankjis](https://github.com/johaankjis)**
