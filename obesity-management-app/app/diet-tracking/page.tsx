import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowLeft, Plus, Search } from "lucide-react"
import MealForm from "./meal-form"

export default function DietTrackingPage() {
  return (
    <div className="container mx-auto px-4 py-6">
      <div className="flex flex-col gap-6">
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" asChild>
            <Link href="/">
              <ArrowLeft className="h-4 w-4" />
              <span className="sr-only">Back</span>
            </Link>
          </Button>
          <h1 className="text-2xl font-bold tracking-tight">Diet Tracking</h1>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Daily Nutrition Summary</CardTitle>
            <CardDescription>Today, May 1, 2025</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-4">
              <div className="space-y-2">
                <div className="text-sm font-medium text-muted-foreground">Calories</div>
                <div className="flex items-baseline gap-1">
                  <div className="text-2xl font-bold">1,250</div>
                  <div className="text-sm text-muted-foreground">/ 1,800 kcal</div>
                </div>
                <div className="h-2 w-full rounded-full bg-muted">
                  <div className="h-2 w-[69%] rounded-full bg-primary" />
                </div>
              </div>
              <div className="space-y-2">
                <div className="text-sm font-medium text-muted-foreground">Protein</div>
                <div className="flex items-baseline gap-1">
                  <div className="text-2xl font-bold">75</div>
                  <div className="text-sm text-muted-foreground">/ 120 g</div>
                </div>
                <div className="h-2 w-full rounded-full bg-muted">
                  <div className="h-2 w-[62%] rounded-full bg-blue-500" />
                </div>
              </div>
              <div className="space-y-2">
                <div className="text-sm font-medium text-muted-foreground">Carbs</div>
                <div className="flex items-baseline gap-1">
                  <div className="text-2xl font-bold">130</div>
                  <div className="text-sm text-muted-foreground">/ 200 g</div>
                </div>
                <div className="h-2 w-full rounded-full bg-muted">
                  <div className="h-2 w-[65%] rounded-full bg-yellow-500" />
                </div>
              </div>
              <div className="space-y-2">
                <div className="text-sm font-medium text-muted-foreground">Fat</div>
                <div className="flex items-baseline gap-1">
                  <div className="text-2xl font-bold">45</div>
                  <div className="text-sm text-muted-foreground">/ 60 g</div>
                </div>
                <div className="h-2 w-full rounded-full bg-muted">
                  <div className="h-2 w-[75%] rounded-full bg-red-500" />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Tabs defaultValue="log-meal">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="log-meal">Log a Meal</TabsTrigger>
            <TabsTrigger value="meal-history">Meal History</TabsTrigger>
          </TabsList>
          <TabsContent value="log-meal" className="pt-4">
            <Card>
              <CardHeader>
                <CardTitle>Add Food</CardTitle>
                <CardDescription>Search for food or create a custom entry</CardDescription>
                <div className="relative mt-2">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input type="search" placeholder="Search for food..." className="pl-8" />
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4 md:grid-cols-2">
                  <Card>
                    <CardHeader className="p-4">
                      <CardTitle className="text-base">Recent Foods</CardTitle>
                    </CardHeader>
                    <CardContent className="p-4 pt-0">
                      <ul className="space-y-2">
                        <li className="flex items-center justify-between rounded-md p-2 hover:bg-muted">
                          <div>
                            <div className="font-medium">Oatmeal</div>
                            <div className="text-xs text-muted-foreground">1 cup, 150g</div>
                          </div>
                          <div className="text-sm">320 kcal</div>
                        </li>
                        <li className="flex items-center justify-between rounded-md p-2 hover:bg-muted">
                          <div>
                            <div className="font-medium">Chicken Curry</div>
                            <div className="text-xs text-muted-foreground">1 serving, 100g</div>
                          </div>
                          <div className="text-sm">165 kcal</div>
                        </li>
                        <li className="flex items-center justify-between rounded-md p-2 hover:bg-muted">
                          <div>
                            <div className="font-medium">Rice and Curd</div>
                            <div className="text-xs text-muted-foreground">1 container, 170g</div>
                          </div>
                          <div className="text-sm">100 kcal</div>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="p-4">
                      <CardTitle className="text-base">Common Foods</CardTitle>
                    </CardHeader>
                    <CardContent className="p-4 pt-0">
                      <ul className="space-y-2">
                        <li className="flex items-center justify-between rounded-md p-2 hover:bg-muted">
                          <div>
                            <div className="font-medium">Banana</div>
                            <div className="text-xs text-muted-foreground">1 medium, 118g</div>
                          </div>
                          <div className="text-sm">105 kcal</div>
                        </li>
                        <li className="flex items-center justify-between rounded-md p-2 hover:bg-muted">
                          <div>
                            <div className="font-medium">Whole Wheat Bread</div>
                            <div className="text-xs text-muted-foreground">1 slice, 40g</div>
                          </div>
                          <div className="text-sm">90 kcal</div>
                        </li>
                        <li className="flex items-center justify-between rounded-md p-2 hover:bg-muted">
                          <div>
                            <div className="font-medium">Egg</div>
                            <div className="text-xs text-muted-foreground">1 large, 50g</div>
                          </div>
                          <div className="text-sm">70 kcal</div>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full">
                  <Plus className="mr-2 h-4 w-4" /> Add Custom Food
                </Button>
              </CardFooter>
            </Card>

            <MealForm />
          </TabsContent>
          <TabsContent value="meal-history" className="pt-4">
            <Card>
              <CardHeader>
                <CardTitle>Your Meal History</CardTitle>
                <CardDescription>View and edit your previous meals</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="rounded-lg border">
                    <div className="bg-muted px-4 py-2 font-medium">Today</div>
                    <div className="divide-y">
                      <div className="flex items-center justify-between p-4">
                        <div>
                          <div className="font-medium">Breakfast</div>
                          <div className="text-sm text-muted-foreground">8:30 AM</div>
                          <div className="text-sm">Oatmeal with berries and nuts</div>
                        </div>
                        <div className="text-right">
                          <div className="font-medium">320 kcal</div>
                          <Button variant="ghost" size="sm">
                            Edit
                          </Button>
                        </div>
                      </div>
                      <div className="flex items-center justify-between p-4">
                        <div>
                          <div className="font-medium">Lunch</div>
                          <div className="text-sm text-muted-foreground">12:45 PM</div>
                          <div className="text-sm">Butter chicken curry with butter naan</div>
                        </div>
                        <div className="text-right">
                          <div className="font-medium">450 kcal</div>
                          <Button variant="ghost" size="sm">
                            Edit
                          </Button>
                        </div>
                      </div>
                      <div className="flex items-center justify-between p-4">
                        <div>
                          <div className="font-medium">Snack</div>
                          <div className="text-sm text-muted-foreground">4:00 PM</div>
                          <div className="text-sm">Greek yogurt with honey</div>
                        </div>
                        <div className="text-right">
                          <div className="font-medium">180 kcal</div>
                          <Button variant="ghost" size="sm">
                            Edit
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-lg border">
                    <div className="bg-muted px-4 py-2 font-medium">Yesterday</div>
                    <div className="divide-y">
                      <div className="flex items-center justify-between p-4">
                        <div>
                          <div className="font-medium">Breakfast</div>
                          <div className="text-sm text-muted-foreground">7:45 AM</div>
                          <div className="text-sm">Scrambled eggs with toast</div>
                        </div>
                        <div className="text-right">
                          <div className="font-medium">380 kcal</div>
                          <Button variant="ghost" size="sm">
                            Edit
                          </Button>
                        </div>
                      </div>
                      <div className="flex items-center justify-between p-4">
                        <div>
                          <div className="font-medium">Lunch</div>
                          <div className="text-sm text-muted-foreground">1:15 PM</div>
                          <div className="text-sm">Tuna sandwich with side salad</div>
                        </div>
                        <div className="text-right">
                          <div className="font-medium">420 kcal</div>
                          <Button variant="ghost" size="sm">
                            Edit
                          </Button>
                        </div>
                      </div>
                      <div className="flex items-center justify-between p-4">
                        <div>
                          <div className="font-medium">Dinner</div>
                          <div className="text-sm text-muted-foreground">7:30 PM</div>
                          <div className="text-sm">Grilled salmon with steamed vegetables</div>
                        </div>
                        <div className="text-right">
                          <div className="font-medium">520 kcal</div>
                          <Button variant="ghost" size="sm">
                            Edit
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
