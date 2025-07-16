"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"

export default function MealForm() {
  const [mealType, setMealType] = useState("")

  return (
    <Card className="mt-6">
      <CardHeader>
        <CardTitle>Log Meal Details</CardTitle>
      </CardHeader>
      <CardContent>
        <form className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="meal-type">Meal Type</Label>
              <Select value={mealType} onValueChange={setMealType}>
                <SelectTrigger id="meal-type">
                  <SelectValue placeholder="Select meal type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="breakfast">Breakfast</SelectItem>
                  <SelectItem value="lunch">Lunch</SelectItem>
                  <SelectItem value="dinner">Dinner</SelectItem>
                  <SelectItem value="snack">Snack</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="meal-time">Time</Label>
              <Input type="time" id="meal-time" />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="meal-description">Description</Label>
            <Textarea id="meal-description" placeholder="Describe your meal..." />
          </div>

          <div className="space-y-2">
            <Label>Nutrition Information</Label>
            <div className="grid gap-4 md:grid-cols-4">
              <div className="space-y-2">
                <Label htmlFor="calories">Calories (kcal)</Label>
                <Input type="number" id="calories" placeholder="0" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="protein">Protein (g)</Label>
                <Input type="number" id="protein" placeholder="0" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="carbs">Carbs (g)</Label>
                <Input type="number" id="carbs" placeholder="0" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="fat">Fat (g)</Label>
                <Input type="number" id="fat" placeholder="0" />
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <Label>Added Foods</Label>
            <div className="rounded-md border">
              <div className="p-4 text-center text-muted-foreground">
                No foods added yet. Search or add custom foods above.
              </div>
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter>
        <Button className="w-full">Save Meal</Button>
      </CardFooter>
    </Card>
  )
}
