import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"

export default function SettingsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight" data-testid="page-title">Cài đặt</h1>
        <p className="text-muted-foreground">Quản lý cài đặt hệ thống và tài khoản</p>
      </div>

      <div className="grid gap-6">
        <Card className="hover-elevate">
          <CardHeader>
            <CardTitle>Thông tin hệ thống</CardTitle>
            <CardDescription>Thông tin chung về hệ thống</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="system-name">Tên hệ thống</Label>
                <Input id="system-name" defaultValue="Admin Dashboard" data-testid="input-system-name" />
              </div>
              <div>
                <Label htmlFor="system-version">Phiên bản</Label>
                <Input id="system-version" defaultValue="1.0.0" disabled className="font-mono" />
              </div>
            </div>
            
            <div>
              <Label htmlFor="system-description">Mô tả</Label>
              <Input 
                id="system-description" 
                defaultValue="Hệ thống quản lý user, tool, VPS và proxy"
                data-testid="input-system-description"
              />
            </div>
            
            <Button data-testid="button-save-system">Lưu thay đổi</Button>
          </CardContent>
        </Card>

        <Card className="hover-elevate">
          <CardHeader>
            <CardTitle>Cài đặt bảo mật</CardTitle>
            <CardDescription>Quản lý các tùy chọn bảo mật</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label>Xác thực hai yếu tố (2FA)</Label>
                <p className="text-sm text-muted-foreground">
                  Tăng cường bảo mật với xác thực hai yếu tố
                </p>
              </div>
              <Switch data-testid="switch-2fa" />
            </div>
            
            <Separator />
            
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label>Ghi log truy cập</Label>
                <p className="text-sm text-muted-foreground">
                  Ghi lại tất cả hoạt động truy cập hệ thống
                </p>
              </div>
              <Switch defaultChecked data-testid="switch-access-log" />
            </div>
            
            <Separator />
            
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label>Tự động khóa tài khoản</Label>
                <p className="text-sm text-muted-foreground">
                  Khóa tự động sau 5 lần đăng nhập sai
                </p>
              </div>
              <Switch defaultChecked data-testid="switch-auto-lock" />
            </div>
          </CardContent>
        </Card>

        <Card className="hover-elevate">
          <CardHeader>
            <CardTitle>Thông báo</CardTitle>
            <CardDescription>Cài đặt thông báo hệ thống</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label>Email thông báo</Label>
                <p className="text-sm text-muted-foreground">
                  Nhận email khi có sự kiện quan trọng
                </p>
              </div>
              <Switch defaultChecked data-testid="switch-email-notifications" />
            </div>
            
            <Separator />
            
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label>Thông báo VPS offline</Label>
                <p className="text-sm text-muted-foreground">
                  Cảnh báo khi VPS không hoạt động
                </p>
              </div>
              <Switch defaultChecked data-testid="switch-vps-alerts" />
            </div>
            
            <Separator />
            
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label>Báo cáo hàng ngày</Label>
                <p className="text-sm text-muted-foreground">
                  Gửi báo cáo tổng hợp mỗi ngày
                </p>
              </div>
              <Switch data-testid="switch-daily-reports" />
            </div>
          </CardContent>
        </Card>

        <Card className="hover-elevate">
          <CardHeader>
            <CardTitle>Thông tin ứng dụng</CardTitle>
            <CardDescription>Chi tiết về ứng dụng và môi trường</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label className="text-sm font-medium">Phiên bản ứng dụng</Label>
                <Badge variant="outline" className="font-mono">v1.0.0</Badge>
              </div>
              <div className="space-y-2">
                <Label className="text-sm font-medium">Môi trường</Label>
                <Badge variant="outline">Development</Badge>
              </div>
              <div className="space-y-2">
                <Label className="text-sm font-medium">Build số</Label>
                <Badge variant="outline" className="font-mono">#20241215</Badge>
              </div>
              <div className="space-y-2">
                <Label className="text-sm font-medium">Thời gian uptime</Label>
                <Badge variant="outline">2 ngày 14 giờ</Badge>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}