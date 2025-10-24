"use client"

import type React from "react"

import { useEffect, useState } from "react"
import { Card } from "@/components/ui/card"
import { Activity, Database, Zap, AlertCircle } from "lucide-react"

interface Metric {
  label: string
  value: string
  change: string
  icon: React.ReactNode
  trend: "up" | "down"
}

export function MetricsGrid() {
  const [metrics, setMetrics] = useState<Metric[]>([
    {
      label: "Events/sec",
      value: "52,341",
      change: "+12%",
      icon: <Zap className="h-5 w-5" />,
      trend: "up",
    },
    {
      label: "Active Devices",
      value: "1,247",
      change: "+3%",
      icon: <Activity className="h-5 w-5" />,
      trend: "up",
    },
    {
      label: "Data Processed",
      value: "2.4 TB",
      change: "+18%",
      icon: <Database className="h-5 w-5" />,
      trend: "up",
    },
    {
      label: "Alerts",
      value: "23",
      change: "-5%",
      icon: <AlertCircle className="h-5 w-5" />,
      trend: "down",
    },
  ])

  useEffect(() => {
    const interval = setInterval(() => {
      setMetrics((prev) =>
        prev.map((metric) => ({
          ...metric,
          value:
            metric.label === "Events/sec"
              ? `${(Math.floor(Math.random() * 5000) + 50000).toLocaleString()}`
              : metric.value,
        })),
      )
    }, 2000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {metrics.map((metric, index) => (
        <Card key={index} className="p-6 bg-card border-border">
          <div className="flex items-start justify-between">
            <div className="space-y-2">
              <p className="text-sm text-muted-foreground">{metric.label}</p>
              <p className="text-3xl font-semibold text-foreground">{metric.value}</p>
              <p className={`text-sm ${metric.trend === "up" ? "text-chart-2" : "text-chart-5"}`}>
                {metric.change} from last hour
              </p>
            </div>
            <div className="p-2 rounded-lg bg-secondary text-primary">{metric.icon}</div>
          </div>
        </Card>
      ))}
    </div>
  )
}
