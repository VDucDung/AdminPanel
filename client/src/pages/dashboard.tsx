import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { DashboardStats } from "@/components/dashboard-stats"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from "recharts"

export default function Dashboard() {
  // todo: remove mock data
  const chartData = [
    { name: "T1", users: 120, tools: 8, vps: 3, proxies: 12 },
    { name: "T2", users: 150, tools: 12, vps: 5, proxies: 18 },
    { name: "T3", users: 180, tools: 15, vps: 4, proxies: 22 },
    { name: "T4", users: 220, tools: 18, vps: 6, proxies: 28 },
    { name: "T5", users: 280, tools: 22, vps: 8, proxies: 35 },
    { name: "T6", users: 350, tools: 28, vps: 12, proxies: 45 },
  ]

  const pieData = [
    { name: "User hoạt động", value: 1150, color: "hsl(var(--chart-1))" },
    { name: "User tạm khóa", value: 97, color: "hsl(var(--chart-2))" },
  ]

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight" data-testid="page-title">Dashboard</h1>
        <p className="text-muted-foreground">Tổng quan hệ thống quản lý</p>
      </div>

      <DashboardStats />

      <div className="grid gap-6 md:grid-cols-2">
        <Card className="hover-elevate">
          <CardHeader>
            <CardTitle>Biểu đồ tăng trưởng</CardTitle>
            <CardDescription>Xu hướng tăng trưởng theo tháng</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="users" fill="hsl(var(--chart-1))" name="Users" />
                <Bar dataKey="tools" fill="hsl(var(--chart-2))" name="Tools" />
                <Bar dataKey="vps" fill="hsl(var(--chart-3))" name="VPS" />
                <Bar dataKey="proxies" fill="hsl(var(--chart-4))" name="Proxies" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card className="hover-elevate">
          <CardHeader>
            <CardTitle>Phân bố User</CardTitle>
            <CardDescription>Trạng thái hoạt động của user</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={pieData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, value }) => `${name}: ${value}`}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {pieData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <Card className="hover-elevate">
          <CardHeader>
            <CardTitle className="text-lg">Hoạt động gần đây</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex items-center text-sm">
                <div className="h-2 w-2 bg-green-500 rounded-full mr-2"></div>
                <span>User mới đăng ký: john_doe</span>
              </div>
              <div className="flex items-center text-sm">
                <div className="h-2 w-2 bg-blue-500 rounded-full mr-2"></div>
                <span>VPS mới được thêm: VPS-SG-01</span>
              </div>
              <div className="flex items-center text-sm">
                <div className="h-2 w-2 bg-yellow-500 rounded-full mr-2"></div>
                <span>Tool được cập nhật: AutoBot v2.1</span>
              </div>
              <div className="flex items-center text-sm">
                <div className="h-2 w-2 bg-purple-500 rounded-full mr-2"></div>
                <span>Proxy proxy-us-01 offline</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="hover-elevate">
          <CardHeader>
            <CardTitle className="text-lg">Thông báo hệ thống</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="p-3 bg-yellow-50 dark:bg-yellow-900/20 rounded-md">
                <p className="text-sm font-medium">Bảo trì định kỳ</p>
                <p className="text-xs text-muted-foreground">Hệ thống sẽ bảo trì vào 2:00 AM ngày mai</p>
              </div>
              <div className="p-3 bg-green-50 dark:bg-green-900/20 rounded-md">
                <p className="text-sm font-medium">Cập nhật thành công</p>
                <p className="text-xs text-muted-foreground">Đã cập nhật 12 proxy servers</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="hover-elevate">
          <CardHeader>
            <CardTitle className="text-lg">Tài nguyên hệ thống</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span>CPU Usage</span>
                  <span>45%</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                  <div className="bg-blue-600 h-2 rounded-full" style={{ width: "45%" }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span>Memory</span>
                  <span>68%</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                  <div className="bg-green-600 h-2 rounded-full" style={{ width: "68%" }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span>Storage</span>
                  <span>32%</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                  <div className="bg-yellow-600 h-2 rounded-full" style={{ width: "32%" }}></div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}