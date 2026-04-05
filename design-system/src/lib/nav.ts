export type ComponentCategory = {
  category: string
  label: string
  items: { slug: string; label: string }[]
}

export const componentCategories: ComponentCategory[] = [
  {
    category: "layout",
    label: "Layout",
    items: [
      { slug: "separator", label: "Separator" },
      { slug: "sidebar", label: "Sidebar" },
    ],
  },
  {
    category: "form",
    label: "Form",
    items: [
      { slug: "button", label: "Button" },
      { slug: "field", label: "Field" },
      { slug: "input", label: "Input" },
      { slug: "select", label: "Select" },
    ],
  },
  {
    category: "feedback",
    label: "Feedback",
    items: [
      { slug: "alert", label: "Alert" },
      { slug: "dialog", label: "Dialog" },
      { slug: "empty", label: "Empty" },
      { slug: "progress", label: "Progress" },
      { slug: "skeleton", label: "Skeleton" },
      { slug: "tooltip", label: "Tooltip" },
    ],
  },
  { category: "data-display", label: "Data Display", items: [
    { slug: "avatar", label: "Avatar" },
    { slug: "badge", label: "Badge" },
    { slug: "item", label: "Item" },
  ] },
  { category: "navigation", label: "Navigation", items: [
    { slug: "pagination", label: "Pagination" },
  ] },
  { category: "overlay", label: "Overlay", items: [
    { slug: "popover", label: "Popover" },
    { slug: "sheet", label: "Sheet" },
  ] },
]
