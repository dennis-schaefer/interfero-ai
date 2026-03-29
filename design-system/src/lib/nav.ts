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
      { slug: "sheet", label: "Sheet" },
    ],
  },
  {
    category: "form",
    label: "Form",
    items: [
      { slug: "button", label: "Button" },
      { slug: "field", label: "Field" },
      { slug: "input", label: "Input" },
    ],
  },
  {
    category: "feedback",
    label: "Feedback",
    items: [
      { slug: "alert", label: "Alert" },
      { slug: "dialog", label: "Dialog" },
      { slug: "empty", label: "Empty" },
      { slug: "skeleton", label: "Skeleton" },
      { slug: "tooltip", label: "Tooltip" },
    ],
  },
  { category: "data-display", label: "Data Display", items: [
    { slug: "avatar", label: "Avatar" },
    { slug: "badge", label: "Badge" },
    { slug: "item", label: "Item" },
  ] },
  { category: "navigation", label: "Navigation", items: [] },
  { category: "overlay", label: "Overlay", items: [] },
]
