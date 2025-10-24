import { DashboardHeader } from "@/components/dashboard-header"
import { MetricsGrid } from "@/components/metrics-grid"
import { DeviceList } from "@/components/device-list"
import { RealtimeCharts } from "@/components/realtime-charts"

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-background">
      <DashboardHeader />
      <main className="container mx-auto px-4 py-6 space-y-6">
        <MetricsGrid />
        <RealtimeCharts />
        <DeviceList />
      </main>
    </div>
  )
}
