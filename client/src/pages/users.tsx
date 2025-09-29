import { useState } from "react"
import { DataTable } from "@/components/data-table"
import { EntityForm } from "@/components/entity-form" 
import type { User, InsertUser } from "@shared/schema"
import { useUsers, useCreateUser, useUpdateUser, useDeleteUser } from "@/hooks/useUsers"
import { useToast } from "@/hooks/use-toast"

export default function UsersPage() {
  const [isFormOpen, setIsFormOpen] = useState(false)
  const [editingUser, setEditingUser] = useState<User | null>(null)
  const { toast } = useToast()

  // Use real API hooks
  const { data: users = [], isLoading, error } = useUsers()
  const createUserMutation = useCreateUser()
  const updateUserMutation = useUpdateUser()
  const deleteUserMutation = useDeleteUser()

  const columns = [
    { header: "Tên đăng nhập", accessor: "username" as keyof User },
    { header: "Email", accessor: "email" as keyof User },
    { 
      header: "Số điện thoại", 
      accessor: (user: User) => user.phone || "Chưa cập nhật"
    },
    { 
      header: "Ngày tham gia",
      accessor: (user: User) => user.createdAt 
        ? new Date(user.createdAt).toLocaleDateString("vi-VN")
        : "Không xác định"
    },
    { 
      header: "Trạng thái khóa",
      accessor: (user: User) => (
        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
          user.status === 'active' 
            ? 'bg-green-100 text-green-800' 
            : 'bg-red-100 text-red-800'
        }`}>
          {user.status === 'active' ? 'Không bị khóa' : 'Bị khóa'}
        </span>
      )
    }
  ]

  const formFields = [
    { name: "username", label: "Tên đăng nhập", type: "text" as const, required: true },
    { name: "email", label: "Email", type: "email" as const, required: true },
    { name: "phone", label: "Số điện thoại", type: "text" as const, required: false },
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

  const handleDelete = async (user: User) => {
    try {
      await deleteUserMutation.mutateAsync(user.id)
      toast({
        title: "Thành công",
        description: "Đã xóa user thành công",
      })
    } catch (error) {
      toast({
        title: "Lỗi",
        description: "Không thể xóa user",
        variant: "destructive",
      })
    }
  }

  const handleSubmit = async (data: Record<string, any>) => {
    try {
      if (editingUser) {
        await updateUserMutation.mutateAsync({
          id: editingUser.id,
          data: data as Partial<InsertUser>
        })
        toast({
          title: "Thành công",
          description: "Đã cập nhật user thành công",
        })
      } else {
        await createUserMutation.mutateAsync(data as InsertUser)
        toast({
          title: "Thành công", 
          description: "Đã tạo user mới thành công",
        })
      }
      setIsFormOpen(false)
    } catch (error) {
      toast({
        title: "Lỗi",
        description: editingUser ? "Không thể cập nhật user" : "Không thể tạo user mới",
        variant: "destructive",
      })
      throw error; // Re-throw to prevent form from closing
    }
  }

  if (error) {
    return (
      <div className="space-y-6">
        <div className="text-center py-8">
          <p className="text-red-600">Có lỗi xảy ra khi tải dữ liệu user</p>
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <DataTable
        title="Quản lý User"
        data={users}
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
        isLoading={createUserMutation.isPending || updateUserMutation.isPending}
      />
    </div>
  )
}