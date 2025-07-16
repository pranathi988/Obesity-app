import { Avatar } from "@/components/ui/avatar"
import { Utensils } from "lucide-react"

export default function RecentMealsSection() {
  const meals = [
    {
      id: 1,
      name: "Breakfast",
      time: "8:30 AM",
      description: "Oatmeal with berries and nuts",
      calories: 320,
      protein: 12,
      carbs: 45,
      fat: 10,
    },
    {
      id: 2,
      name: "Lunch",
      time: "12:45 PM",
      description: "Grilled chicken salad with olive oil dressing",
      calories: 450,
      protein: 35,
      carbs: 15,
      fat: 25,
    },
    {
      id: 3,
      name: "Snack",
      time: "4:00 PM",
      description: "Greek yogurt with honey",
      calories: 180,
      protein: 15,
      carbs: 20,
      fat: 2,
    },
  ]

  return (
    <div className="space-y-4">
      {meals.map((meal) => (
        <div key={meal.id} className="flex items-start space-x-4 rounded-lg border p-3">
          <Avatar className="h-9 w-9 bg-primary/10">
            <Utensils className="h-4 w-4 text-primary" />
          </Avatar>
          <div className="flex-1 space-y-1">
            <div className="flex items-center justify-between">
              <p className="text-sm font-medium leading-none">{meal.name}</p>
              <p className="text-xs text-muted-foreground">{meal.time}</p>
            </div>
            <p className="text-sm text-muted-foreground">{meal.description}</p>
            <div className="flex gap-3 text-xs">
              <span className="font-medium">{meal.calories} kcal</span>
              <span>P: {meal.protein}g</span>
              <span>C: {meal.carbs}g</span>
              <span>F: {meal.fat}g</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
