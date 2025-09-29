# Admin Dashboard Design Guidelines

## Design Approach
**System-Based Approach** - Utilizing Material Design principles adapted for professional admin interfaces. This ensures consistency, efficiency, and intuitive workflows for data management tasks.

**Key Design Principles:**
- Information clarity over visual flair
- Efficient task completion workflows
- Consistent interaction patterns
- Professional, trustworthy aesthetic

## Core Design Elements

### A. Color Palette
**Light Mode:**
- Primary: 219 94% 15% (Deep blue for headers, CTAs)
- Secondary: 220 13% 91% (Light gray for cards, backgrounds)
- Success: 142 76% 36% (Green for positive states)
- Warning: 38 92% 50% (Orange for caution states)
- Error: 0 84% 60% (Red for destructive actions)
- Text: 220 9% 15% (Dark gray for primary text)

**Dark Mode:**
- Primary: 219 94% 85% (Light blue for contrast)
- Secondary: 220 13% 18% (Dark gray for cards)
- Background: 220 13% 9% (Very dark gray)
- Surface: 220 13% 14% (Card backgrounds)
- Text: 220 9% 85% (Light gray for readability)

### B. Typography
- **Primary:** Inter (Google Fonts) - excellent for data tables and UI text
- **Secondary:** JetBrains Mono (for code, IDs, technical data)
- **Hierarchy:** 
  - Headers: 24px, 20px, 18px (font-semibold)
  - Body: 16px (font-normal), 14px (font-medium for labels)
  - Small: 12px (font-medium for metadata, badges)

### C. Layout System
**Spacing Units:** Tailwind 2, 4, 6, 8, 12, 16 units
- Micro spacing: 2, 4 (buttons, form elements)
- Component spacing: 6, 8 (cards, sections)
- Layout spacing: 12, 16 (page sections, major components)

**Grid System:**
- Sidebar: 64px collapsed, 256px expanded
- Main content: fluid with max-width constraints
- Cards: 4px border radius, 8px for modals

### D. Component Library

**Navigation:**
- Collapsible sidebar with icon + text labels
- Breadcrumb navigation for deep pages
- Tab navigation within sections

**Data Display:**
- Clean tables with alternating row colors
- Status badges with consistent color coding
- Stat cards with large numbers and trend indicators
- Progressive disclosure for detailed information

**Forms:**
- Floating labels for better space utilization
- Inline validation with clear error states
- Grouped related fields with subtle dividers
- Save/cancel actions consistently positioned

**Feedback:**
- Toast notifications for actions
- Loading states with skeleton screens
- Empty states with helpful guidance
- Confirmation dialogs for destructive actions

### E. Dashboard-Specific Elements

**Statistics Cards:**
- Large number display with trend arrows
- Subtle background gradients: 219 94% 97% to 219 94% 94%
- Icon integration with consistent sizing (24px)

**Status Indicators:**
- Dot indicators for VPS/proxy status (online/offline)
- Color-coded badges for user roles and permissions
- Progress bars for usage metrics

**Action Patterns:**
- Consistent CRUD button placement (top-right for create, inline for edit/delete)
- Bulk actions with selection checkboxes
- Quick filters and search prominently placed

## Images
No large hero images required - this is a utility-focused admin interface. Use:
- Small status icons (16px) for online/offline indicators
- User avatars (32px) with fallback initials
- Tool/service icons (24px) for categorization
- Empty state illustrations (200px max) for guidance when lists are empty

The focus should be on information density and task efficiency rather than visual imagery.