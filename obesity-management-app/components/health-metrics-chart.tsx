"use client"

import { useEffect, useRef, useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function HealthMetricsChart() {
  const [activeTab, setActiveTab] = useState("weight")
  const weightCanvasRef = useRef<HTMLCanvasElement>(null)
  const macrosCanvasRef = useRef<HTMLCanvasElement>(null)
  const bodyCompCanvasRef = useRef<HTMLCanvasElement>(null)
  const activityCanvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    if (activeTab === "weight") {
      renderWeightChart()
    } else if (activeTab === "macros") {
      renderMacrosChart()
    } else if (activeTab === "body-comp") {
      renderBodyCompChart()
    } else if (activeTab === "activity") {
      renderActivityChart()
    }
  }, [activeTab])

  const renderWeightChart = () => {
    const canvas = weightCanvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions
    const setDimensions = () => {
      const parent = canvas.parentElement
      if (parent) {
        canvas.width = parent.clientWidth
        canvas.height = parent.clientHeight
      }
    }

    setDimensions()

    // Sample data
    const weightData = [92, 91.5, 91.2, 90.8, 90.5, 90.2, 89.8, 89.5, 89.3, 89.0, 88.7, 88.5, 88.2, 88.0]
    const dates = Array.from({ length: 14 }, (_, i) => {
      const date = new Date()
      date.setDate(date.getDate() - (13 - i))
      return date.toLocaleDateString("en-US", { month: "short", day: "numeric" })
    })

    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    // Chart dimensions
    const padding = 40
    const chartWidth = canvas.width - padding * 2
    const chartHeight = canvas.height - padding * 2

    // Draw axes
    ctx.beginPath()
    ctx.strokeStyle = "#e2e8f0"
    ctx.moveTo(padding, padding)
    ctx.lineTo(padding, canvas.height - padding)
    ctx.lineTo(canvas.width - padding, canvas.height - padding)
    ctx.stroke()

    // Calculate scales
    const maxWeight = Math.max(...weightData) + 1
    const minWeight = Math.min(...weightData) - 1
    const yScale = chartHeight / (maxWeight - minWeight)
    const xScale = chartWidth / (weightData.length - 1)

    // Draw weight line
    ctx.beginPath()
    ctx.strokeStyle = "#10b981"
    ctx.lineWidth = 2
    weightData.forEach((weight, i) => {
      const x = padding + i * xScale
      const y = canvas.height - padding - (weight - minWeight) * yScale
      if (i === 0) {
        ctx.moveTo(x, y)
      } else {
        ctx.lineTo(x, y)
      }
    })
    ctx.stroke()

    // Draw points
    weightData.forEach((weight, i) => {
      const x = padding + i * xScale
      const y = canvas.height - padding - (weight - minWeight) * yScale
      ctx.beginPath()
      ctx.fillStyle = "#10b981"
      ctx.arc(x, y, 4, 0, Math.PI * 2)
      ctx.fill()
    })

    // Draw x-axis labels (dates)
    ctx.fillStyle = "#64748b"
    ctx.font = "10px sans-serif"
    ctx.textAlign = "center"
    for (let i = 0; i < dates.length; i += 2) {
      const x = padding + i * xScale
      const y = canvas.height - padding + 15
      ctx.fillText(dates[i], x, y)
    }

    // Draw y-axis labels (weight)
    ctx.textAlign = "right"
    const yLabelCount = 5
    const yLabelStep = (maxWeight - minWeight) / (yLabelCount - 1)
    for (let i = 0; i < yLabelCount; i++) {
      const weight = minWeight + i * yLabelStep
      const x = padding - 10
      const y = canvas.height - padding - (weight - minWeight) * yScale
      ctx.fillText(weight.toFixed(1), x, y + 3)
    }

    // Draw y-axis title
    ctx.save()
    ctx.translate(15, canvas.height / 2)
    ctx.rotate(-Math.PI / 2)
    ctx.textAlign = "center"
    ctx.fillText("Weight (kg)", 0, 0)
    ctx.restore()
  }

  const renderMacrosChart = () => {
    const canvas = macrosCanvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions
    canvas.width = canvas.offsetWidth
    canvas.height = canvas.offsetHeight

    // Sample data
    const macros = [
      { name: "Protein", value: 25, color: "#3b82f6" },
      { name: "Carbs", value: 45, color: "#f59e0b" },
      { name: "Fat", value: 30, color: "#ef4444" },
    ]

    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    // Draw pie chart
    const centerX = canvas.width / 2
    const centerY = canvas.height / 2
    const radius = Math.min(centerX, centerY) - 40

    let startAngle = 0
    const total = macros.reduce((sum, macro) => sum + macro.value, 0)

    // Draw slices
    macros.forEach((macro) => {
      const sliceAngle = (2 * Math.PI * macro.value) / total

      ctx.beginPath()
      ctx.fillStyle = macro.color
      ctx.moveTo(centerX, centerY)
      ctx.arc(centerX, centerY, radius, startAngle, startAngle + sliceAngle)
      ctx.closePath()
      ctx.fill()

      // Draw labels
      const midAngle = startAngle + sliceAngle / 2
      const labelRadius = radius * 0.7
      const labelX = centerX + labelRadius * Math.cos(midAngle)
      const labelY = centerY + labelRadius * Math.sin(midAngle)

      ctx.fillStyle = "#ffffff"
      ctx.font = "bold 14px sans-serif"
      ctx.textAlign = "center"
      ctx.textBaseline = "middle"
      ctx.fillText(`${macro.value}%`, labelX, labelY)

      startAngle += sliceAngle
    })

    // Draw legend
    const legendX = canvas.width - 120
    const legendY = 40
    const legendSpacing = 30

    macros.forEach((macro, i) => {
      const y = legendY + i * legendSpacing

      // Draw color box
      ctx.fillStyle = macro.color
      ctx.fillRect(legendX, y, 15, 15)

      // Draw label
      ctx.fillStyle = "#64748b"
      ctx.font = "12px sans-serif"
      ctx.textAlign = "left"
      ctx.textBaseline = "middle"
      ctx.fillText(macro.name, legendX + 25, y + 7.5)
    })

    // Draw title
    ctx.fillStyle = "#1e293b"
    ctx.font = "bold 16px sans-serif"
    ctx.textAlign = "center"
    ctx.textBaseline = "top"
    ctx.fillText("Macronutrient Distribution", centerX, 20)
  }

  const renderBodyCompChart = () => {
    const canvas = bodyCompCanvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions
    canvas.width = canvas.offsetWidth
    canvas.height = canvas.offsetHeight

    // Sample data
    const bodyComp = [
      { name: "Fat Mass", value: 26, color: "#ef4444" },
      { name: "Muscle", value: 42, color: "#3b82f6" },
      { name: "Bone", value: 12, color: "#a3a3a3" },
      { name: "Water", value: 20, color: "#06b6d4" },
    ]

    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    // Draw pie chart
    const centerX = canvas.width / 2
    const centerY = canvas.height / 2
    const radius = Math.min(centerX, centerY) - 40

    let startAngle = 0
    const total = bodyComp.reduce((sum, comp) => sum + comp.value, 0)

    // Draw slices
    bodyComp.forEach((comp) => {
      const sliceAngle = (2 * Math.PI * comp.value) / total

      ctx.beginPath()
      ctx.fillStyle = comp.color
      ctx.moveTo(centerX, centerY)
      ctx.arc(centerX, centerY, radius, startAngle, startAngle + sliceAngle)
      ctx.closePath()
      ctx.fill()

      // Draw labels
      const midAngle = startAngle + sliceAngle / 2
      const labelRadius = radius * 0.7
      const labelX = centerX + labelRadius * Math.cos(midAngle)
      const labelY = centerY + labelRadius * Math.sin(midAngle)

      ctx.fillStyle = "#ffffff"
      ctx.font = "bold 14px sans-serif"
      ctx.textAlign = "center"
      ctx.textBaseline = "middle"
      ctx.fillText(`${comp.value}%`, labelX, labelY)

      startAngle += sliceAngle
    })

    // Draw legend
    const legendX = canvas.width - 120
    const legendY = 40
    const legendSpacing = 30

    bodyComp.forEach((comp, i) => {
      const y = legendY + i * legendSpacing

      // Draw color box
      ctx.fillStyle = comp.color
      ctx.fillRect(legendX, y, 15, 15)

      // Draw label
      ctx.fillStyle = "#64748b"
      ctx.font = "12px sans-serif"
      ctx.textAlign = "left"
      ctx.textBaseline = "middle"
      ctx.fillText(comp.name, legendX + 25, y + 7.5)
    })

    // Draw title
    ctx.fillStyle = "#1e293b"
    ctx.font = "bold 16px sans-serif"
    ctx.textAlign = "center"
    ctx.textBaseline = "top"
    ctx.fillText("Body Composition", centerX, 20)
  }

  const renderActivityChart = () => {
    const canvas = activityCanvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions
    canvas.width = canvas.offsetWidth
    canvas.height = canvas.offsetHeight

    // Sample data
    const activityData = [
      { day: "Mon", steps: 8500, calories: 320 },
      { day: "Tue", steps: 10200, calories: 380 },
      { day: "Wed", steps: 7800, calories: 290 },
      { day: "Thu", steps: 9100, calories: 340 },
      { day: "Fri", steps: 11500, calories: 420 },
      { day: "Sat", steps: 6500, calories: 250 },
      { day: "Sun", steps: 5200, calories: 200 },
    ]

    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    // Chart dimensions
    const padding = { top: 40, right: 30, bottom: 40, left: 50 }
    const chartWidth = canvas.width - padding.left - padding.right
    const chartHeight = canvas.height - padding.top - padding.bottom

    // Calculate scales
    const maxSteps = Math.max(...activityData.map((d) => d.steps))
    const barWidth = chartWidth / activityData.length / 2
    const barSpacing = barWidth / 2

    // Draw axes
    ctx.beginPath()
    ctx.strokeStyle = "#e2e8f0"
    ctx.moveTo(padding.left, padding.top)
    ctx.lineTo(padding.left, canvas.height - padding.bottom)
    ctx.lineTo(canvas.width - padding.right, canvas.height - padding.bottom)
    ctx.stroke()

    // Draw bars
    activityData.forEach((data, i) => {
      const x = padding.left + i * (barWidth * 2 + barSpacing) + barSpacing
      const barHeight = (data.steps / maxSteps) * chartHeight
      const y = canvas.height - padding.bottom - barHeight

      // Draw bar
      ctx.fillStyle = "#3b82f6"
      ctx.fillRect(x, y, barWidth, barHeight)

      // Draw label
      ctx.fillStyle = "#64748b"
      ctx.font = "10px sans-serif"
      ctx.textAlign = "center"
      ctx.fillText(data.day, x + barWidth / 2, canvas.height - padding.bottom + 15)

      // Draw value
      ctx.fillStyle = "#3b82f6"
      ctx.font = "10px sans-serif"
      ctx.textAlign = "center"
      ctx.fillText(data.steps.toString(), x + barWidth / 2, y - 5)
    })

    // Draw y-axis labels
    ctx.textAlign = "right"
    ctx.fillStyle = "#64748b"
    const yLabelCount = 5
    for (let i = 0; i <= yLabelCount; i++) {
      const value = Math.round((maxSteps / yLabelCount) * i)
      const y = canvas.height - padding.bottom - (i / yLabelCount) * chartHeight
      ctx.fillText(value.toString(), padding.left - 10, y + 3)
    }

    // Draw title
    ctx.fillStyle = "#1e293b"
    ctx.font = "bold 16px sans-serif"
    ctx.textAlign = "center"
    ctx.textBaseline = "top"
    ctx.fillText("Weekly Activity (Steps)", canvas.width / 2, 15)
  }

  return (
    <Tabs defaultValue="weight" className="w-full" onValueChange={setActiveTab}>
      <TabsList className="grid w-full grid-cols-4">
        <TabsTrigger value="weight">Weight</TabsTrigger>
        <TabsTrigger value="macros">Macros</TabsTrigger>
        <TabsTrigger value="body-comp">Body Comp</TabsTrigger>
        <TabsTrigger value="activity">Activity</TabsTrigger>
      </TabsList>
      <TabsContent value="weight" className="pt-4">
        <div className="h-[300px] w-full relative">
          <canvas
            ref={weightCanvasRef}
            style={{ width: "100%", height: "100%", position: "absolute", top: 0, left: 0 }}
          />
        </div>
      </TabsContent>
      <TabsContent value="macros" className="pt-4">
        <div className="h-[300px] w-full relative">
          <canvas
            ref={macrosCanvasRef}
            style={{ width: "100%", height: "100%", position: "absolute", top: 0, left: 0 }}
          />
        </div>
      </TabsContent>
      <TabsContent value="body-comp" className="pt-4">
        <div className="h-[300px] w-full relative">
          <canvas
            ref={bodyCompCanvasRef}
            style={{ width: "100%", height: "100%", position: "absolute", top: 0, left: 0 }}
          />
        </div>
      </TabsContent>
      <TabsContent value="activity" className="pt-4">
        <div className="h-[300px] w-full relative">
          <canvas
            ref={activityCanvasRef}
            style={{ width: "100%", height: "100%", position: "absolute", top: 0, left: 0 }}
          />
        </div>
      </TabsContent>
    </Tabs>
  )
}
