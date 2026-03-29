import { useState } from "react"
import {
  Avatar,
  AvatarImage,
  AvatarFallback,
  AvatarBadge,
  AvatarGroup,
  AvatarGroupCount,
} from "@/components/ui/avatar"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"

const examples = [
  {
    label: "sizes",
    code: `import { Avatar, AvatarFallback } from "@/components/ui/avatar"

<div className="flex items-center gap-4">
  <Avatar size="sm">
    <AvatarFallback>JD</AvatarFallback>
  </Avatar>
  <Avatar size="default">
    <AvatarFallback>JD</AvatarFallback>
  </Avatar>
  <Avatar size="lg">
    <AvatarFallback>JD</AvatarFallback>
  </Avatar>
</div>`,
    component: (
      <div className="flex items-center gap-4">
        <Avatar size="sm">
          <AvatarFallback>JD</AvatarFallback>
        </Avatar>
        <Avatar size="default">
          <AvatarFallback>JD</AvatarFallback>
        </Avatar>
        <Avatar size="lg">
          <AvatarFallback>JD</AvatarFallback>
        </Avatar>
      </div>
    ),
  },
  {
    label: "with image",
    code: `import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"

<Avatar>
  <AvatarImage src="https://i.pravatar.cc/150?img=12" alt="User avatar" />
  <AvatarFallback>JD</AvatarFallback>
</Avatar>`,
    component: (
      <Avatar>
        <AvatarImage src="https://i.pravatar.cc/150?img=12" alt="User avatar" />
        <AvatarFallback>JD</AvatarFallback>
      </Avatar>
    ),
  },
  {
    label: "fallback",
    code: `import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"

<Avatar>
  <AvatarImage src="/broken-image.jpg" alt="User avatar" />
  <AvatarFallback>JD</AvatarFallback>
</Avatar>`,
    component: (
      <Avatar>
        <AvatarImage src="/broken-image.jpg" alt="User avatar" />
        <AvatarFallback>JD</AvatarFallback>
      </Avatar>
    ),
  },
  {
    label: "with badge",
    code: `import { Avatar, AvatarFallback, AvatarBadge } from "@/components/ui/avatar"

<div className="flex items-center gap-4">
  <Avatar size="sm">
    <AvatarFallback>JD</AvatarFallback>
    <AvatarBadge />
  </Avatar>
  <Avatar size="default">
    <AvatarFallback>JD</AvatarFallback>
    <AvatarBadge />
  </Avatar>
  <Avatar size="lg">
    <AvatarFallback>JD</AvatarFallback>
    <AvatarBadge />
  </Avatar>
</div>`,
    component: (
      <div className="flex items-center gap-4">
        <Avatar size="sm">
          <AvatarFallback>JD</AvatarFallback>
          <AvatarBadge />
        </Avatar>
        <Avatar size="default">
          <AvatarFallback>JD</AvatarFallback>
          <AvatarBadge />
        </Avatar>
        <Avatar size="lg">
          <AvatarFallback>JD</AvatarFallback>
          <AvatarBadge />
        </Avatar>
      </div>
    ),
  },
  {
    label: "group",
    code: `import { Avatar, AvatarFallback, AvatarGroup } from "@/components/ui/avatar"

<AvatarGroup>
  <Avatar>
    <AvatarFallback>JD</AvatarFallback>
  </Avatar>
  <Avatar>
    <AvatarFallback>AB</AvatarFallback>
  </Avatar>
  <Avatar>
    <AvatarFallback>MK</AvatarFallback>
  </Avatar>
  <Avatar>
    <AvatarFallback>RS</AvatarFallback>
  </Avatar>
</AvatarGroup>`,
    component: (
      <AvatarGroup>
        <Avatar>
          <AvatarFallback>JD</AvatarFallback>
        </Avatar>
        <Avatar>
          <AvatarFallback>AB</AvatarFallback>
        </Avatar>
        <Avatar>
          <AvatarFallback>MK</AvatarFallback>
        </Avatar>
        <Avatar>
          <AvatarFallback>RS</AvatarFallback>
        </Avatar>
      </AvatarGroup>
    ),
  },
  {
    label: "group with count",
    code: `import {
  Avatar,
  AvatarFallback,
  AvatarGroup,
  AvatarGroupCount,
} from "@/components/ui/avatar"

<AvatarGroup>
  <Avatar>
    <AvatarFallback>JD</AvatarFallback>
  </Avatar>
  <Avatar>
    <AvatarFallback>AB</AvatarFallback>
  </Avatar>
  <Avatar>
    <AvatarFallback>MK</AvatarFallback>
  </Avatar>
  <AvatarGroupCount>+3</AvatarGroupCount>
</AvatarGroup>`,
    component: (
      <AvatarGroup>
        <Avatar>
          <AvatarFallback>JD</AvatarFallback>
        </Avatar>
        <Avatar>
          <AvatarFallback>AB</AvatarFallback>
        </Avatar>
        <Avatar>
          <AvatarFallback>MK</AvatarFallback>
        </Avatar>
        <AvatarGroupCount>+3</AvatarGroupCount>
      </AvatarGroup>
    ),
  },
]

function AvatarExample({
  label,
  code,
  component,
}: (typeof examples)[0]) {
  const [codeOpen, setCodeOpen] = useState(false)

  return (
    <div className="space-y-2">
      <p className="text-xs font-mono text-muted-foreground">{label}</p>
      {component}
      <Collapsible open={codeOpen} onOpenChange={setCodeOpen}>
        <CollapsibleTrigger className="text-xs text-muted-foreground hover:text-foreground transition-colors cursor-pointer">
          {codeOpen ? "Hide Code ↑" : "Show Code ↓"}
        </CollapsibleTrigger>
        <CollapsibleContent>
          <pre className="mt-2 rounded-lg border border-border bg-muted/40 p-4 text-xs overflow-x-auto">
            <code>{code}</code>
          </pre>
        </CollapsibleContent>
      </Collapsible>
    </div>
  )
}

export function AvatarShowcase() {
  return (
    <div className="space-y-8">
      {examples.map((example) => (
        <AvatarExample key={example.label} {...example} />
      ))}
    </div>
  )
}
