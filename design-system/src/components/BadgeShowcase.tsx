import { useState } from "react"
import { HugeiconsIcon } from "@hugeicons/react"
import {
  CheckmarkCircle01Icon,
  InformationCircleIcon,
} from "@hugeicons/core-free-icons"
import { Badge } from "@/components/ui/badge"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"

const examples = [
  {
    label: "variants",
    code: `import { Badge } from "@/components/ui/badge"

<div className="flex items-center gap-2">
  <Badge variant="default">Default</Badge>
  <Badge variant="secondary">Secondary</Badge>
  <Badge variant="destructive">Destructive</Badge>
  <Badge variant="outline">Outline</Badge>
  <Badge variant="ghost">Ghost</Badge>
  <Badge variant="link" render={<a href="#" />}>Link</Badge>
</div>`,
    component: (
      <div className="flex items-center gap-2">
        <Badge variant="default" className={"items-center"}>Default</Badge>
        <Badge variant="secondary">Secondary</Badge>
        <Badge variant="destructive">Destructive</Badge>
        <Badge variant="outline">Outline</Badge>
        <Badge variant="ghost">Ghost</Badge>
        <Badge variant="link" render={<a href="#" />}>Link</Badge>
      </div>
    ),
  },
  {
    label: "with start icon",
    code: `import { Badge } from "@/components/ui/badge"
import { HugeiconsIcon } from "@hugeicons/react"
import { InformationCircleIcon } from "@hugeicons/core-free-icons"

<Badge>
  <HugeiconsIcon icon={InformationCircleIcon} data-icon="inline-start" />
  Info
</Badge>`,
    component: (
      <Badge>
        <HugeiconsIcon icon={InformationCircleIcon} data-icon="inline-start" />
        Info
      </Badge>
    ),
  },
  {
    label: "with end icon",
    code: `import { Badge } from "@/components/ui/badge"
import { HugeiconsIcon } from "@hugeicons/react"
import { CheckmarkCircle01Icon } from "@hugeicons/core-free-icons"

<Badge variant="secondary">
  Done
  <HugeiconsIcon icon={CheckmarkCircle01Icon} data-icon="inline-end" />
</Badge>`,
    component: (
      <Badge variant="secondary">
        Done
        <HugeiconsIcon icon={CheckmarkCircle01Icon} data-icon="inline-end" />
      </Badge>
    ),
  },
]

function BadgeExample({
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

export function BadgeShowcase() {
  return (
    <div className="space-y-8">
      {examples.map((example) => (
        <BadgeExample key={example.label} {...example} />
      ))}
    </div>
  )
}
