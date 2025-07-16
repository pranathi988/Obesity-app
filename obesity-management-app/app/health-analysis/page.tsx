import { Label } from "@/components/ui/label"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowLeft, Brain, Download, Info } from "lucide-react"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

export default function HealthAnalysisPage() {
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
          <h1 className="text-2xl font-bold tracking-tight">AI Health Analysis</h1>
        </div>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center gap-2">
              <Brain className="h-5 w-5 text-primary" />
              AI Health Assessment
            </CardTitle>
            <CardDescription>
              Based on your data, our AI has analyzed your health status and risk factors
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <h3 className="font-medium">Obesity Risk Score</h3>
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger>
                          <Info className="h-4 w-4 text-muted-foreground" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p className="max-w-xs">
                            This score indicates your risk of developing obesity based on your current metrics,
                            lifestyle, and genetic factors.
                          </p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </div>
                  <span className="text-lg font-bold">Medium</span>
                </div>
                <Progress value={45} className="h-2" />
                <div className="flex justify-between text-xs text-muted-foreground">
                  <span>Low Risk</span>
                  <span>Medium Risk</span>
                  <span>High Risk</span>
                </div>
              </div>

              <div className="rounded-lg border p-4">
                <h3 className="mb-2 font-medium">Key Factors Affecting Your Score</h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <div className="mt-0.5 h-2 w-2 rounded-full bg-red-500" />
                    <div>
                      <span className="font-medium">BMI in the overweight range (28.5)</span>
                      <p className="text-muted-foreground">Your current BMI is above the healthy range of 18.5-24.9</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="mt-0.5 h-2 w-2 rounded-full bg-yellow-500" />
                    <div>
                      <span className="font-medium">Sedentary lifestyle</span>
                      <p className="text-muted-foreground">Your activity level is below recommended guidelines</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="mt-0.5 h-2 w-2 rounded-full bg-green-500" />
                    <div>
                      <span className="font-medium">Improving dietary patterns</span>
                      <p className="text-muted-foreground">Recent changes in your diet show positive trends</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        <Tabs defaultValue="recommendations">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="recommendations">Recommendations</TabsTrigger>
            <TabsTrigger value="metrics">Health Metrics</TabsTrigger>
            <TabsTrigger value="trends">Trends & Predictions</TabsTrigger>
          </TabsList>
          <TabsContent value="recommendations" className="pt-4">
            <Card>
              <CardHeader>
                <CardTitle>Personalized Recommendations</CardTitle>
                <CardDescription>
                  Based on your health data, our AI suggests these actions to improve your health
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="rounded-lg border p-4">
                    <h3 className="text-lg font-medium">Dietary Changes</h3>
                    <ul className="mt-2 space-y-2">
                      <li className="flex items-start gap-2">
                        <div className="mt-1 h-2 w-2 rounded-full bg-primary" />
                        <p>
                          Increase protein intake to 1.6g per kg of body weight to support muscle maintenance during
                          weight loss
                        </p>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="mt-1 h-2 w-2 rounded-full bg-primary" />
                        <p>
                          Reduce refined carbohydrate consumption and focus on complex carbs like whole grains and
                          vegetables
                        </p>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="mt-1 h-2 w-2 rounded-full bg-primary" />
                        <p>
                          Aim for a moderate calorie deficit of 300-500 calories per day for sustainable weight loss
                        </p>
                      </li>
                    </ul>
                  </div>

                  <div className="rounded-lg border p-4">
                    <h3 className="text-lg font-medium">Physical Activity</h3>
                    <ul className="mt-2 space-y-2">
                      <li className="flex items-start gap-2">
                        <div className="mt-1 h-2 w-2 rounded-full bg-primary" />
                        <p>Incorporate 150 minutes of moderate-intensity aerobic activity per week</p>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="mt-1 h-2 w-2 rounded-full bg-primary" />
                        <p>
                          Add resistance training 2-3 times per week to build muscle mass and increase metabolic rate
                        </p>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="mt-1 h-2 w-2 rounded-full bg-primary" />
                        <p>Break up sitting time with short walking breaks every hour</p>
                      </li>
                    </ul>
                  </div>

                  <div className="rounded-lg border p-4">
                    <h3 className="text-lg font-medium">Lifestyle Adjustments</h3>
                    <ul className="mt-2 space-y-2">
                      <li className="flex items-start gap-2">
                        <div className="mt-1 h-2 w-2 rounded-full bg-primary" />
                        <p>Improve sleep quality by maintaining a consistent sleep schedule of 7-8 hours per night</p>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="mt-1 h-2 w-2 rounded-full bg-primary" />
                        <p>Practice stress management techniques like meditation or deep breathing exercises</p>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="mt-1 h-2 w-2 rounded-full bg-primary" />
                        <p>Stay hydrated by drinking at least 2-3 liters of water daily</p>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full">
                  <Download className="mr-2 h-4 w-4" />
                  Download Personalized Plan
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>
          <TabsContent value="metrics" className="pt-4">
            <Card>
              <CardHeader>
                <CardTitle>Your Health Metrics</CardTitle>
                <CardDescription>Current measurements and their relation to healthy ranges</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <Label>Weight</Label>
                        <span className="font-medium">88.2 kg</span>
                      </div>
                      <Progress value={65} className="h-2" />
                      <div className="flex justify-between text-xs text-muted-foreground">
                        <span>Underweight</span>
                        <span>Healthy</span>
                        <span>Overweight</span>
                        <span>Obese</span>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <Label>BMI</Label>
                        <span className="font-medium">28.5</span>
                      </div>
                      <Progress value={70} className="h-2" />
                      <div className="flex justify-between text-xs text-muted-foreground">
                        <span>18.5</span>
                        <span>24.9</span>
                        <span>29.9</span>
                        <span>30+</span>
                      </div>
                    </div>
                  </div>

                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <Label>Body Fat %</Label>
                        <span className="font-medium">26%</span>
                      </div>
                      <Progress value={60} className="h-2" />
                      <div className="flex justify-between text-xs text-muted-foreground">
                        <span>Essential</span>
                        <span>Athletic</span>
                        <span>Fitness</span>
                        <span>Average</span>
                        <span>Obese</span>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <Label>Waist Circumference</Label>
                        <span className="font-medium">96 cm</span>
                      </div>
                      <Progress value={75} className="h-2" />
                      <div className="flex justify-between text-xs text-muted-foreground">
                        <span>Healthy</span>
                        <span>Increased Risk</span>
                        <span>High Risk</span>
                      </div>
                    </div>
                  </div>

                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <Label>Resting Heart Rate</Label>
                        <span className="font-medium">72 bpm</span>
                      </div>
                      <Progress value={50} className="h-2" />
                      <div className="flex justify-between text-xs text-muted-foreground">
                        <span>Athlete</span>
                        <span>Excellent</span>
                        <span>Good</span>
                        <span>Average</span>
                        <span>Poor</span>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <Label>Blood Pressure</Label>
                        <span className="font-medium">128/82 mmHg</span>
                      </div>
                      <Progress value={45} className="h-2" />
                      <div className="flex justify-between text-xs text-muted-foreground">
                        <span>Normal</span>
                        <span>Elevated</span>
                        <span>Hypertension</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="trends" className="pt-4">
            <Card>
              <CardHeader>
                <CardTitle>Health Trends & Predictions</CardTitle>
                <CardDescription>AI-powered analysis of your health trajectory</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="rounded-lg border p-4">
                    <h3 className="text-lg font-medium">Weight Trajectory</h3>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Based on your current habits and recent progress
                    </p>
                    <div className="mt-4 h-[200px] w-full bg-muted/30 flex items-center justify-center">
                      <p className="text-muted-foreground">Weight prediction chart would appear here</p>
                    </div>
                    <div className="mt-4">
                      <p className="text-sm">
                        <span className="font-medium">AI Prediction:</span> If you maintain your current diet and
                        exercise patterns, you are projected to reach a weight of 85.5 kg in 3 months, which would lower
                        your BMI to 27.6.
                      </p>
                    </div>
                  </div>

                  <div className="rounded-lg border p-4">
                    <h3 className="text-lg font-medium">Health Risk Changes</h3>
                    <p className="mt-1 text-sm text-muted-foreground">How your health risks are changing over time</p>
                    <div className="mt-4 space-y-3">
                      <div className="space-y-1">
                        <div className="flex items-center justify-between">
                          <span className="text-sm">Type 2 Diabetes Risk</span>
                          <span className="text-sm font-medium text-amber-500">Decreasing</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="h-2 w-full rounded-full bg-muted">
                            <div className="h-2 w-[60%] rounded-full bg-amber-500" />
                          </div>
                          <span className="text-xs text-muted-foreground">-5%</span>
                        </div>
                      </div>

                      <div className="space-y-1">
                        <div className="flex items-center justify-between">
                          <span className="text-sm">Cardiovascular Disease Risk</span>
                          <span className="text-sm font-medium text-amber-500">Decreasing</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="h-2 w-full rounded-full bg-muted">
                            <div className="h-2 w-[45%] rounded-full bg-amber-500" />
                          </div>
                          <span className="text-xs text-muted-foreground">-3%</span>
                        </div>
                      </div>

                      <div className="space-y-1">
                        <div className="flex items-center justify-between">
                          <span className="text-sm">Metabolic Syndrome Risk</span>
                          <span className="text-sm font-medium text-green-500">Decreasing</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="h-2 w-full rounded-full bg-muted">
                            <div className="h-2 w-[35%] rounded-full bg-green-500" />
                          </div>
                          <span className="text-xs text-muted-foreground">-8%</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-lg border p-4">
                    <h3 className="text-lg font-medium">Potential Outcomes</h3>
                    <div className="mt-4 space-y-4">
                      <div className="rounded-md bg-green-50 p-3 dark:bg-green-950">
                        <h4 className="font-medium text-green-700 dark:text-green-300">Optimal Scenario</h4>
                        <p className="mt-1 text-sm text-green-600 dark:text-green-400">
                          By following all recommendations consistently, you could reach a healthy BMI of 24.5 within
                          8-10 months, reducing your obesity risk by 75% and significantly improving overall health
                          markers.
                        </p>
                      </div>

                      <div className="rounded-md bg-amber-50 p-3 dark:bg-amber-950">
                        <h4 className="font-medium text-amber-700 dark:text-amber-300">Moderate Scenario</h4>
                        <p className="mt-1 text-sm text-amber-600 dark:text-amber-400">
                          With partial implementation of recommendations, you could reach a BMI of 26.8 within 10-12
                          months, reducing your obesity risk by 40% and moderately improving health markers.
                        </p>
                      </div>

                      <div className="rounded-md bg-red-50 p-3 dark:bg-red-950">
                        <h4 className="font-medium text-red-700 dark:text-red-300">Without Changes</h4>
                        <p className="mt-1 text-sm text-red-600 dark:text-red-400">
                          Continuing current patterns without implementing recommendations could lead to weight gain of
                          3-5kg over the next year, increasing obesity risk and related health complications.
                        </p>
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
