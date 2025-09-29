import { useState } from "react"
import { DataTable } from "@/components/data-table"
import { EntityForm } from "@/components/entity-form" 
import { StatusBadge } from "@/components/status-badge"
import type { User } from "@shared/schema"

export default function UsersPage() {
  const [isFormOpen, setIsFormOpen] = useState(false)
  const [editingUser, setEditingUser] = useState<User | null>(null)

  // todo: remove mock data
  const mockUsers: User[] = [
    {
      id: "1",
      username: "admin",
      email: "admin@example.com",
      role: "admin",
      status: "active",
      lastLogin: new Date("2024-01-15T10:30:00Z")
    },
    {
      id: "2", 
      username: "user1",
      email: "user1@example.com",
      role: "user",
      status: "active",
      lastLogin: new Date("2024-01-14T08:15:00Z")
    },
    {
      id: "3",
      username: "user2", 
      email: "user2@example.com",
      role: "user",
      status: "inactive",
      lastLogin: new Date("2024-01-10T16:45:00Z")
    }
  ]

  const columns = [
    { header: "ID", accessor: "id" as keyof User, className: "font-mono" },
    { header: "Tên đăng nhập", accessor: "username" as keyof User },
    { header: "Email", accessor: "email" as keyof User },
    { header: "Vai trò", accessor: "role" as keyof User },
    { 
      header: "Trạng thái", 
      accessor: (user: User) => <StatusBadge status={user.status} />
    },
    { 
      header: "Lần đăng nhập cuối",
      accessor: (user: User) => user.lastLogin 
        ? new Date(user.lastLogin).toLocaleDateString("vi-VN")
        : "Chưa đăng nhập"
    }
  ]

  const formFields = [
    { name: "username", label: "Tên đăng nhập", type: "text" as const, required: true },
    { name: "email", label: "Email", type: "email" as const, required: true },
    { 
      name: "role", 
      label: "Vai trò", 
      type: "select" as const,
      options: [
        { value: "user", label: "User" },
        { value: "admin", label: "Admin" }
      ]
    },
    {
      name: "status",
      label: "Trạng thái", 
      type: "select" as const,
      options: [
        { value: "active", label: "Hoạt động" },
        { value: "inactive", label: "Không hoạt động" }
      ]
    }
  ]

  const handleAdd = () => {
    setEditingUser(null)
    setIsFormOpen(true)
  }

  const handleEdit = (user: User) => {
    setEditingUser(user)
    setIsFormOpen(true)
  }

  const handleDelete = (user: User) => {
    console.log("Deleting user:", user)
  }

  const handleSubmit = (data: Record<string, any>) => {
    if (editingUser) {
      console.log("Updating user:", editingUser.id, data)
    } else {
      console.log("Creating user:", data)
    }
  }

  return (
    <div className="space-y-6">
      <DataTable
        title="Quản lý User"
        data={mockUsers}
        columns={columns}
        onAdd={handleAdd}
        onEdit={handleEdit}
        onDelete={handleDelete}
        searchPlaceholder="Tìm kiếm user..."
        searchKey="username"
      />

      <EntityForm
        title={editingUser ? "Chỉnh sửa User" : "Thêm User mới"}
        description={editingUser ? "Cập nhật thông tin user" : "Tạo tài khoản user mới"}
        fields={formFields}
        initialData={editingUser || {}}
        isOpen={isFormOpen}
        onOpenChange={setIsFormOpen}
        onSubmit={handleSubmit}
      />
    </div>
  )
}