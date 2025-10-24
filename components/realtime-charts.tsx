"use client"

import { useEffect, useState } from "react"
import { Card } from "@/components/ui/card"
import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis, Area, AreaChart } from "recharts"

interface DataPoint {
  time: string
  temperature: number
  humidity: number
  pressure: number
  events: number
}

export function RealtimeCharts() {
  const [data, setData] = useState<DataPoint[]>([])

  useEffect(() => {
    // Initialize with some data
    const initialData: DataPoint[] = []
    const now = Date.now()
    for (let i = 30; i >= 0; i--) {
      initialData.push({
        time: new Date(now - i * 2000).toLocaleTimeString(),
        temperature: 20 + Math.random() * 10,
        humidity: 40 + Math.random() * 30,
        pressure: 1000 + Math.random() * 20,
        events: 45000 + Math.random() * 10000,
      })
    }
    setData(initialData)

    // Update data every 2 seconds
    const interval = setInterval(() => {
      setData((prev) => {
        const newData = [...prev.slice(1)]
        newData.push({
          time: new Date().toLocaleTimeString(),
          temperature: 20 + Math.random() * 10,
          humidity: 40 + Math.random() * 30,
          pressure: 1000 + Math.random() * 20,
          events: 45000 + Math.random() * 10000,
        })
        return newData
      })
    }, 2000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
      <Card className="p-6 bg-card border-border">
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold text-foreground">Event Throughput</h3>
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1">
                <div className="h-2 w-2 rounded-full bg-chart-1" />
                <span className="text-xs text-muted-foreground">Events/sec</span>
              </div>
            </div>
          </div>
          <ResponsiveContainer width="100%" height={200}>
            <AreaChart data={data}>
              <defs>
                <linearGradient id="colorEvents" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="hsl(var(--chart-1))" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="hsl(var(--chart-1))" stopOpacity={0} />
                </linearGradient>
              </defs>
              <XAxis
                dataKey="time"
                stroke="hsl(var(--muted-foreground))"
                fontSize={12}
                tickLine={false}
                axisLine={false}
              />
              <YAxis
                stroke="hsl(var(--muted-foreground))"
                fontSize={12}
                tickLine={false}
                axisLine={false}
                tickFormatter={(value) => `${(value / 1000).toFixed(0)}K`}
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: "hsl(var(--popover))",
                  border: "1px solid hsl(var(--border))",
                  borderRadius: "8px",
                  color: "hsl(var(--foreground))",
                }}
              />
              <Area
                type="monotone"
                dataKey="events"
                stroke="hsl(var(--chart-1))"
                fill="url(#colorEvents)"
                strokeWidth={2}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </Card>

      <Card className="p-6 bg-card border-border">
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold text-foreground">Sensor Metrics</h3>
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1">
                <div className="h-2 w-2 rounded-full bg-chart-1" />
                <span className="text-xs text-muted-foreground">Temp</span>
              </div>
              <div className="flex items-center gap-1">
                <div className="h-2 w-2 rounded-full bg-chart-2" />
                <span className="text-xs text-muted-foreground">Humidity</span>
              </div>
              <div className="flex items-center gap-1">
                <div className="h-2 w-2 rounded-full bg-chart-3" />
                <span className="text-xs text-muted-foreground">Pressure</span>
              </div>
            </div>
          </div>
          <ResponsiveContainer width="100%" height={200}>
            <LineChart data={data}>
              <XAxis
                dataKey="time"
                stroke="hsl(var(--muted-foreground))"
                fontSize={12}
                tickLine={false}
                axisLine={false}
              />
              <YAxis stroke="hsl(var(--muted-foreground))" fontSize={12} tickLine={false} axisLine={false} />
              <Tooltip
                contentStyle={{
                  backgroundColor: "hsl(var(--popover))",
                  border: "1px solid hsl(var(--border))",
                  borderRadius: "8px",
                  color: "hsl(var(--foreground))",
                }}
              />
              <Line type="monotone" dataKey="temperature" stroke="hsl(var(--chart-1))" strokeWidth={2} dot={false} />
              <Line type="monotone" dataKey="humidity" stroke="hsl(var(--chart-2))" strokeWidth={2} dot={false} />
              <Line type="monotone" dataKey="pressure" stroke="hsl(var(--chart-3))" strokeWidth={2} dot={false} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </Card>

      <Card className="p-6 bg-card border-border lg:col-span-2">
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold text-foreground">Temperature Distribution</h3>
            <div className="flex items-center gap-2">
              <span className="text-sm text-muted-foreground">Last 60 seconds</span>
            </div>
          </div>
          <ResponsiveContainer width="100%" height={250}>
            <AreaChart data={data}>
              <defs>
                <linearGradient id="colorTemp" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="hsl(var(--chart-1))" stopOpacity={0.4} />
                  <stop offset="95%" stopColor="hsl(var(--chart-1))" stopOpacity={0} />
                </linearGradient>
              </defs>
              <XAxis
                dataKey="time"
                stroke="hsl(var(--muted-foreground))"
                fontSize={12}
                tickLine={false}
                axisLine={false}
              />
              <YAxis
                stroke="hsl(var(--muted-foreground))"
                fontSize={12}
                tickLine={false}
                axisLine={false}
                domain={[15, 35]}
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: "hsl(var(--popover))",
                  border: "1px solid hsl(var(--border))",
                  borderRadius: "8px",
                  color: "hsl(var(--foreground))",
                }}
              />
              <Area
                type="monotone"
                dataKey="temperature"
                stroke="hsl(var(--chart-1))"
                fill="url(#colorTemp)"
                strokeWidth={2}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </Card>
    </div>
  )
}
