"use client"

import { useEffect, useState } from "react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Thermometer, Droplets, Gauge, MapPin, MoreVertical } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

interface Device {
  id: string
  name: string
  location: string
  status: "online" | "offline" | "warning"
  temperature: number
  humidity: number
  pressure: number
  lastUpdate: string
}

export function DeviceList() {
  const [devices, setDevices] = useState<Device[]>([
    {
      id: "IOT-001",
      name: "Temperature Sensor A1",
      location: "Building A - Floor 1",
      status: "online",
      temperature: 22.5,
      humidity: 45,
      pressure: 1013,
      lastUpdate: "2s ago",
    },
    {
      id: "IOT-002",
      name: "Climate Monitor B2",
      location: "Building B - Floor 2",
      status: "online",
      temperature: 24.1,
      humidity: 52,
      pressure: 1012,
      lastUpdate: "1s ago",
    },
    {
      id: "IOT-003",
      name: "Environmental Sensor C1",
      location: "Building C - Floor 1",
      status: "warning",
      temperature: 28.3,
      humidity: 68,
      pressure: 1011,
      lastUpdate: "5s ago",
    },
    {
      id: "IOT-004",
      name: "Weather Station D1",
      location: "Building D - Roof",
      status: "online",
      temperature: 19.8,
      humidity: 42,
      pressure: 1014,
      lastUpdate: "3s ago",
    },
    {
      id: "IOT-005",
      name: "HVAC Monitor E3",
      location: "Building E - Floor 3",
      status: "offline",
      temperature: 0,
      humidity: 0,
      pressure: 0,
      lastUpdate: "2m ago",
    },
    {
      id: "IOT-006",
      name: "Air Quality Sensor F1",
      location: "Building F - Floor 1",
      status: "online",
      temperature: 23.2,
      humidity: 48,
      pressure: 1013,
      lastUpdate: "1s ago",
    },
  ])

  useEffect(() => {
    const interval = setInterval(() => {
      setDevices((prev) =>
        prev.map((device) => {
          if (device.status === "online") {
            return {
              ...device,
              temperature: device.temperature + (Math.random() - 0.5) * 0.5,
              humidity: Math.max(30, Math.min(70, device.humidity + (Math.random() - 0.5) * 2)),
              pressure: device.pressure + (Math.random() - 0.5) * 0.2,
              lastUpdate: "1s ago",
            }
          }
          return device
        }),
      )
    }, 2000)

    return () => clearInterval(interval)
  }, [])

  const getStatusColor = (status: Device["status"]) => {
    switch (status) {
      case "online":
        return "bg-chart-2 text-chart-2"
      case "warning":
        return "bg-chart-3 text-chart-3"
      case "offline":
        return "bg-chart-5 text-chart-5"
    }
  }

  return (
    <Card className="p-6 bg-card border-border">
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-foreground">Connected Devices</h3>
          <Button variant="outline" size="sm">
            View All
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4">
          {devices.map((device) => (
            <Card key={device.id} className="p-4 bg-secondary border-border">
              <div className="space-y-3">
                <div className="flex items-start justify-between">
                  <div className="space-y-1">
                    <h4 className="font-medium text-foreground">{device.name}</h4>
                    <div className="flex items-center gap-1 text-xs text-muted-foreground">
                      <MapPin className="h-3 w-3" />
                      {device.location}
                    </div>
                  </div>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <MoreVertical className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem>View Details</DropdownMenuItem>
                      <DropdownMenuItem>Configure</DropdownMenuItem>
                      <DropdownMenuItem>Restart</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>

                <div className="flex items-center gap-2">
                  <Badge variant="outline" className={getStatusColor(device.status)}>
                    <div className="h-1.5 w-1.5 rounded-full bg-current mr-1" />
                    {device.status}
                  </Badge>
                  <span className="text-xs text-muted-foreground">{device.id}</span>
                </div>

                {device.status !== "offline" && (
                  <div className="grid grid-cols-3 gap-2 pt-2 border-t border-border">
                    <div className="space-y-1">
                      <div className="flex items-center gap-1 text-muted-foreground">
                        <Thermometer className="h-3 w-3" />
                        <span className="text-xs">Temp</span>
                      </div>
                      <p className="text-sm font-medium text-foreground">{device.temperature.toFixed(1)}°C</p>
                    </div>
                    <div className="space-y-1">
                      <div className="flex items-center gap-1 text-muted-foreground">
                        <Droplets className="h-3 w-3" />
                        <span className="text-xs">Humid</span>
                      </div>
                      <p className="text-sm font-medium text-foreground">{device.humidity.toFixed(0)}%</p>
                    </div>
                    <div className="space-y-1">
                      <div className="flex items-center gap-1 text-muted-foreground">
                        <Gauge className="h-3 w-3" />
                        <span className="text-xs">Press</span>
                      </div>
                      <p className="text-sm font-medium text-foreground">{device.pressure.toFixed(0)}</p>
                    </div>
                  </div>
                )}

                <div className="text-xs text-muted-foreground pt-1">Updated {device.lastUpdate}</div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </Card>
  )
}
