import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, BarChart3, Brain, TrendingUp, Utensils, Activity } from "lucide-react"
import HealthMetricsChart from "@/components/health-metrics-chart"
import RecentMealsSection from "@/components/recent-meals-section"
import { Badge } from "@/components/ui/badge"

export default function Dashboard() {
  return (
    <div className="container mx-auto px-4 py-6">
      {/* Colorful Hero Section */}
      <div className="mb-8 rounded-xl bg-gradient-to-r from-purple-600 via-blue-500 to-green-400 p-6 text-white shadow-lg">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Welcome back, Health Hives!</h1>
            <p className="mt-2 max-w-2xl">
              Your journey to better health continues. You've made great progress this week!
            </p>
          </div>
          <div className="flex flex-col items-center rounded-lg bg-white/20 p-4 backdrop-blur-sm">
            <span className="text-sm font-medium">Current BMI</span>
            <span className="text-3xl font-bold">28.5</span>
            <Badge className="mt-1 bg-white/30">-0.3 this week</Badge>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-6">
        {/* Colorful Stats Cards */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <Card className="border-l-4 border-l-green-500 overflow-hidden relative">
            <div className="absolute right-0 top-0 h-full w-1/3 bg-gradient-to-l from-green-100 to-transparent opacity-30"></div>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Health Score</CardTitle>
              <BarChart3 className="h-4 w-4 text-green-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">72/100</div>
              <p className="text-xs text-muted-foreground">+4 from last week</p>
              <div className="mt-4 h-1 w-full bg-muted">
                <div className="h-1 w-[72%] bg-green-500 rounded-full" />
              </div>
            </CardContent>
            <CardFooter>
              <Link href="/health-analysis" className="text-sm text-green-600 hover:underline">
                View detailed analysis
              </Link>
            </CardFooter>
          </Card>

          <Card className="border-l-4 border-l-blue-500 overflow-hidden relative">
            <div className="absolute right-0 top-0 h-full w-1/3 bg-gradient-to-l from-blue-100 to-transparent opacity-30"></div>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Activity Level</CardTitle>
              <Activity className="h-4 w-4 text-blue-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">Moderate</div>
              <p className="text-xs text-muted-foreground">7,500 steps today</p>
              <div className="mt-4 h-1 w-full bg-muted">
                <div className="h-1 w-[60%] bg-blue-500 rounded-full" />
              </div>
            </CardContent>
            <CardFooter>
              <Link href="/activity" className="text-sm text-blue-600 hover:underline">
                Track activity
              </Link>
            </CardFooter>
          </Card>

          <Card className="border-l-4 border-l-purple-500 overflow-hidden relative">
            <div className="absolute right-0 top-0 h-full w-1/3 bg-gradient-to-l from-purple-100 to-transparent opacity-30"></div>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Sleep Quality</CardTitle>
              <Brain className="h-4 w-4 text-purple-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">Good</div>
              <p className="text-xs text-muted-foreground">7.2 hours avg.</p>
              <div className="mt-4 h-1 w-full bg-muted">
                <div className="h-1 w-[75%] bg-purple-500 rounded-full" />
              </div>
            </CardContent>
            <CardFooter>
              <Link href="/sleep" className="text-sm text-purple-600 hover:underline">
                Sleep insights
              </Link>
            </CardFooter>
          </Card>

          <Card className="border-l-4 border-l-orange-500 overflow-hidden relative">
            <div className="absolute right-0 top-0 h-full w-1/3 bg-gradient-to-l from-orange-100 to-transparent opacity-30"></div>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Nutrition</CardTitle>
              <Utensils className="h-4 w-4 text-orange-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">1,250 kcal</div>
              <p className="text-xs text-muted-foreground">69% of daily goal</p>
              <div className="mt-4 h-1 w-full bg-muted">
                <div className="h-1 w-[69%] bg-orange-500 rounded-full" />
              </div>
            </CardContent>
            <CardFooter>
              <Link href="/diet-tracking" className="text-sm text-orange-600 hover:underline">
                Track meals
              </Link>
            </CardFooter>
          </Card>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <Card className="col-span-1 overflow-hidden">
            <CardHeader className="bg-gradient-to-r from-blue-50 to-blue-100 dark:from-blue-950 dark:to-blue-900">
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                Health Metrics
              </CardTitle>
              <CardDescription>Your progress over the last 30 days</CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              <HealthMetricsChart />
            </CardContent>
          </Card>

          <Card className="col-span-1 overflow-hidden">
            <CardHeader className="bg-gradient-to-r from-green-50 to-green-100 dark:from-green-950 dark:to-green-900">
              <CardTitle className="flex items-center gap-2">
                <Utensils className="h-5 w-5 text-green-600 dark:text-green-400" />
                Recent Meals
              </CardTitle>
              <CardDescription>Your last recorded meals</CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              <RecentMealsSection />
            </CardContent>
            <CardFooter className="bg-gradient-to-r from-green-50 to-green-100 dark:from-green-950 dark:to-green-900">
              <Button variant="outline" className="w-full bg-white dark:bg-gray-800">
                <Link href="/diet-tracking" className="flex items-center justify-center w-full">
                  Log a meal <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardFooter>
          </Card>
        </div>

        <Card className="overflow-hidden">
          <CardHeader className="bg-gradient-to-r from-purple-50 to-purple-100 dark:from-purple-950 dark:to-purple-900">
            <CardTitle className="flex items-center gap-2">
              <Brain className="h-5 w-5 text-purple-600 dark:text-purple-400" />
              AI Health Insights
            </CardTitle>
            <CardDescription>Personalized recommendations based on your data</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4 pt-6">
            <div className="rounded-lg border border-l-4 border-l-green-500 p-3 bg-green-50 dark:bg-green-950/30">
              <h3 className="font-medium text-green-700 dark:text-green-300">Dietary Suggestion</h3>
              <p className="text-sm text-green-600 dark:text-green-400">
                Your protein intake is below the recommended level. Consider adding more lean protein sources like
                chicken, fish, or plant-based alternatives to your meals.
              </p>
            </div>
            <div className="rounded-lg border border-l-4 border-l-blue-500 p-3 bg-blue-50 dark:bg-blue-950/30">
              <h3 className="font-medium text-blue-700 dark:text-blue-300">Activity Recommendation</h3>
              <p className="text-sm text-blue-600 dark:text-blue-400">
                Based on your recent activity levels, try adding 10-minute walking breaks throughout your day to
                increase your daily step count and improve metabolism.
              </p>
            </div>
            <div className="rounded-lg border border-l-4 border-l-purple-500 p-3 bg-purple-50 dark:bg-purple-950/30">
              <h3 className="font-medium text-purple-700 dark:text-purple-300">Sleep Pattern</h3>
              <p className="text-sm text-purple-600 dark:text-purple-400">
                Your sleep data shows irregular patterns. Aim for 7-8 hours of consistent sleep each night to support
                your weight management goals.
              </p>
            </div>
          </CardContent>
          <CardFooter className="bg-gradient-to-r from-purple-50 to-purple-100 dark:from-purple-950 dark:to-purple-900">
            <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white">
              <Link href="/health-analysis" className="flex items-center justify-center w-full">
                Get Full AI Analysis <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}
