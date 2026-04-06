import { HugeiconsIcon } from "@hugeicons/react"
import {
  Home01Icon,
  ArrowRight01Icon,
  ArrowLeft01Icon,
  Search01Icon,
  Settings01Icon,
  Cancel01Icon,
  AddCircleIcon,
  Tick01Icon,
  User02Icon,
  StarIcon,
  HeartCheckIcon,
  Notification01Icon,
  Moon01Icon,
  Sun01Icon,
  SidebarLeftIcon,
  GridViewIcon,
  PaintBoardIcon,
  TextFontIcon,
  Calendar01Icon,
  Clock01Icon,
  Folder01Icon,
  BarChartIcon,
  Edit01Icon,
  Delete01Icon,
} from "@hugeicons/core-free-icons"

const icons = [
  { icon: Home01Icon, name: "Home01" },
  { icon: ArrowRight01Icon, name: "ArrowRight01" },
  { icon: ArrowLeft01Icon, name: "ArrowLeft01" },
  { icon: Search01Icon, name: "Search01" },
  { icon: Settings01Icon, name: "Settings01" },
  { icon: Cancel01Icon, name: "Cancel01" },
  { icon: AddCircleIcon, name: "AddCircle" },
  { icon: Tick01Icon, name: "Tick01" },
  { icon: User02Icon, name: "User02" },
  { icon: StarIcon, name: "Star" },
  { icon: HeartCheckIcon, name: "HeartCheck" },
  { icon: Notification01Icon, name: "Notification01" },
  { icon: Moon01Icon, name: "Moon01" },
  { icon: Sun01Icon, name: "Sun01" },
  { icon: SidebarLeftIcon, name: "SidebarLeft" },
  { icon: GridViewIcon, name: "GridView" },
  { icon: PaintBoardIcon, name: "PaintBoard" },
  { icon: TextFontIcon, name: "TextFont" },
  { icon: Calendar01Icon, name: "Calendar01" },
  { icon: Clock01Icon, name: "Clock01" },
  { icon: Folder01Icon, name: "Folder01" },
  { icon: BarChartIcon, name: "BarChart" },
  { icon: Edit01Icon, name: "Edit01" },
  { icon: Delete01Icon, name: "Delete01" },
]

export function IconsGrid() {
  return (
    <div className="grid grid-cols-[repeat(auto-fill,minmax(80px,1fr))] gap-1">
      {icons.map(({ icon, name }) => (
        <div
          key={name}
          className="flex flex-col items-center gap-2 rounded-lg border border-border p-3"
        >
          <HugeiconsIcon icon={icon} size={24} />
          <span className="text-center text-[10px] text-muted-foreground leading-tight">
            {name}
          </span>
        </div>
      ))}
    </div>
  )
}
