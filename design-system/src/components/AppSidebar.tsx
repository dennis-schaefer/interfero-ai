import * as React from "react"
import { HugeiconsIcon } from "@hugeicons/react"
import {
  AudioWave02Icon,
  PaintBoardIcon,
  TextFontIcon,
  GridViewIcon,
  StarIcon,
  Moon01Icon,
  Sun01Icon,
  ArrowRight01Icon,
} from "@hugeicons/core-free-icons"

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInset,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarProvider,
  SidebarRail,
} from "@/components/ui/sidebar"
import { Button } from "@/components/ui/button"
import { componentCategories } from "@/lib/nav"
import { useTheme } from "@/hooks/use-theme"

const topNavItems = [
  { title: "Colors", href: "/colors", icon: PaintBoardIcon },
  { title: "Fonts", href: "/fonts", icon: TextFontIcon },
  { title: "Icons", href: "/icons", icon: StarIcon },
]

type Props = {
  currentPath: string
  children?: React.ReactNode
}

export function AppSidebar({ currentPath, children }: Props) {
  const { theme, toggle } = useTheme()

  const [path, setPath] = React.useState(currentPath)

  React.useEffect(() => {
    const handler = () => setPath(window.location.pathname)
    document.addEventListener("astro:page-load", handler)
    return () => document.removeEventListener("astro:page-load", handler)
  }, [])

  const [openCategory, setOpenCategory] = React.useState<string | null>(() => {
    const match = componentCategories.find((c) =>
      currentPath.startsWith(`/components/${c.category}`)
    )
    return match?.category ?? null
  })

  React.useEffect(() => {
    const match = componentCategories.find((c) =>
      path.startsWith(`/components/${c.category}`)
    )
    if (match) setOpenCategory(match.category)
  }, [path])

  const toggleCategory = (category: string) => {
    setOpenCategory((prev) => (prev === category ? null : category))
  }

  const isComponentsActive = path.startsWith("/components")

  return (
    <SidebarProvider>
      <Sidebar collapsible="icon" variant={"floating"}>
        <SidebarHeader>
          <div className="flex items-center gap-2 px-1 py-1">
            <HugeiconsIcon
              icon={AudioWave02Icon}
              className="size-5 shrink-0 text-sidebar-primary"
            />
            <div className="flex flex-col group-data-[collapsible=icon]:hidden">
              <span className="text-sm font-semibold leading-none">
                Interfero
              </span>
              <span className="text-xs text-sidebar-foreground/60">
                Design System
              </span>
            </div>
          </div>
        </SidebarHeader>

        <SidebarContent>
          {/* Top-level nav */}
          <SidebarGroup>
            <SidebarMenu>
              {topNavItems.map((item) => (
                <SidebarMenuItem key={item.href}>
                  <SidebarMenuButton
                    render={<a href={item.href} />}
                    isActive={path === item.href}
                    tooltip={item.title}
                  >
                    <HugeiconsIcon icon={item.icon} />
                    <span>{item.title}</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroup>

          {/* Components group */}
          <SidebarGroup>
            <SidebarGroupLabel>Components</SidebarGroupLabel>
            <SidebarMenu>
              {/* Components top-level button (icon-only state) */}
              <SidebarMenuItem className="group-data-[collapsible=icon]:block hidden">
                <SidebarMenuButton
                  render={<a href="/components/layout/separator" />}
                  isActive={isComponentsActive}
                  tooltip="Components"
                >
                  <HugeiconsIcon icon={GridViewIcon} />
                </SidebarMenuButton>
              </SidebarMenuItem>

              {/* Expanded: categories */}
              {componentCategories.map((cat) => (
                <SidebarMenuItem
                  key={cat.category}
                  className="group-data-[collapsible=icon]:hidden"
                >
                  <SidebarMenuButton
                    onClick={() => toggleCategory(cat.category)}
                    isActive={
                      isComponentsActive &&
                      path.startsWith(`/components/${cat.category}`)
                    }
                    className="cursor-pointer"
                  >
                    <HugeiconsIcon
                      icon={ArrowRight01Icon}
                      className={`transition-transform duration-200 ${openCategory === cat.category ? "rotate-90" : ""}`}
                    />
                    <span>{cat.label}</span>
                  </SidebarMenuButton>

                  {openCategory === cat.category && cat.items.length > 0 && (
                    <SidebarMenuSub>
                      {cat.items.map((item) => (
                        <SidebarMenuSubItem key={item.slug}>
                          <SidebarMenuSubButton
                            href={`/components/${cat.category}/${item.slug}`}
                            isActive={
                              path ===
                              `/components/${cat.category}/${item.slug}`
                            }
                          >
                            <span>{item.label}</span>
                          </SidebarMenuSubButton>
                        </SidebarMenuSubItem>
                      ))}
                    </SidebarMenuSub>
                  )}
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroup>
        </SidebarContent>

        <SidebarFooter>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton
                onClick={toggle}
                tooltip={theme === "dark" ? "Light mode" : "Dark mode"}
                className="cursor-pointer"
              >
                <HugeiconsIcon
                  icon={theme === "dark" ? Sun01Icon : Moon01Icon}
                />
                <span className="group-data-[collapsible=icon]:hidden">
                  {theme === "dark" ? "Light mode" : "Dark mode"}
                </span>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarFooter>

        <SidebarRail />
      </Sidebar>

      <SidebarInset>{children}</SidebarInset>
    </SidebarProvider>
  )
}

export default AppSidebar
