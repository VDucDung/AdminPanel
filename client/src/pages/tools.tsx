import { useState } from "react"
import { DataTable } from "@/components/data-table"
import { EntityForm } from "@/components/entity-form"
import { StatusBadge } from "@/components/status-badge"
import { Badge } from "@/components/ui/badge"
import type { Tool } from "@shared/schema"

export default function ToolsPage() {
  const [isFormOpen, setIsFormOpen] = useState(false)
  const [editingTool, setEditingTool] = useState<Tool | null>(null)

  // todo: remove mock data
  const mockTools: Tool[] = [
    {
      id: "1",
      name: "AutoBot Pro",
      description: "Tool tự động hóa các tác vụ",
      category: "automation",
      version: "2.1.0",
      status: "active",
      downloadUrl: "https://example.com/autobot.zip"
    },
    {
      id: "2",
      name: "Data Scraper",
      description: "Thu thập dữ liệu từ website",
      category: "scraping", 
      version: "1.5.3",
      status: "active",
      downloadUrl: "https://example.com/scraper.zip"
    },
    {
      id: "3",
      name: "Old Tool",
      description: "Tool cũ không còn hỗ trợ",
      category: "legacy",
      version: "0.9.1",
      status: "inactive",
      downloadUrl: null
    }
  ]

  const columns = [
    { header: "Tên Tool", accessor: "name" as keyof Tool },
    { header: "Mô tả", accessor: "description" as keyof Tool },
    { 
      header: "Danh mục", 
      accessor: (tool: Tool) => (
        <Badge variant="outline">{tool.category}</Badge>
      )
    },
    { header: "Version", accessor: "version" as keyof Tool, className: "font-mono" },
    { 
      header: "Trạng thái", 
      accessor: (tool: Tool) => <StatusBadge status={tool.status} />
    },
    { 
      header: "Download",
      accessor: (tool: Tool) => tool.downloadUrl ? (
        <a href={tool.downloadUrl} className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">
          Tải về
        </a>
      ) : (
        <span className="text-muted-foreground">Không có</span>
      )
    }
  ]

  const formFields = [
    { name: "name", label: "Tên Tool", type: "text" as const, required: true },
    { name: "description", label: "Mô tả", type: "textarea" as const },
    { 
      name: "category", 
      label: "Danh mục", 
      type: "select" as const,
      options: [
        { value: "automation", label: "Tự động hóa" },
        { value: "scraping", label: "Thu thập dữ liệu" },
        { value: "security", label: "Bảo mật" },
        { value: "legacy", label: "Cũ" }
      ]
    },
    { name: "version", label: "Version", type: "text" as const, required: true },
    {
      name: "status",
      label: "Trạng thái", 
      type: "select" as const,
      options: [
        { value: "active", label: "Hoạt động" },
        { value: "inactive", label: "Không hoạt động" }
      ]
    },
    { name: "downloadUrl", label: "Link Download", type: "text" as const }
  ]

  const handleAdd = () => {
    setEditingTool(null)
    setIsFormOpen(true)
  }

  const handleEdit = (tool: Tool) => {
    setEditingTool(tool)
    setIsFormOpen(true)
  }

  const handleDelete = (tool: Tool) => {
    console.log("Deleting tool:", tool)
  }

  const handleSubmit = (data: Record<string, any>) => {
    if (editingTool) {
      console.log("Updating tool:", editingTool.id, data)
    } else {
      console.log("Creating tool:", data)
    }
  }

  return (
    <div className="space-y-6">
      <DataTable
        title="Quản lý Tool"
        data={mockTools}
        columns={columns}
        onAdd={handleAdd}
        onEdit={handleEdit}
        onDelete={handleDelete}
        searchPlaceholder="Tìm kiếm tool..."
        searchKey="name"
      />

      <EntityForm
        title={editingTool ? "Chỉnh sửa Tool" : "Thêm Tool mới"}
        description={editingTool ? "Cập nhật thông tin tool" : "Thêm tool mới vào hệ thống"}
        fields={formFields}
        initialData={editingTool || {}}
        isOpen={isFormOpen}
        onOpenChange={setIsFormOpen}
        onSubmit={handleSubmit}
      />
    </div>
  )
}