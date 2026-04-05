import { useState } from "react"
import { Skeleton } from "@/components/ui/skeleton"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"

const examples = [
  {
    label: "default",
    code: `import { Skeleton } from "@/components/ui/skeleton"

<Skeleton className="h-4 w-48" />`,
    component: <Skeleton className="h-4 w-48" />,
  },
  {
    label: "card",
    code: `import { Skeleton } from "@/components/ui/skeleton"

<div className="flex items-center gap-3">
  <Skeleton className="h-10 w-10 rounded-full" />
  <div className="space-y-2">
    <Skeleton className="h-4 w-32" />
    <Skeleton className="h-3 w-24" />
  </div>
</div>`,
    component: (
      <div className="flex items-center gap-3">
        <Skeleton className="h-10 w-10 rounded-full" />
        <div className="space-y-2">
          <Skeleton className="h-4 w-32" />
          <Skeleton className="h-3 w-24" />
        </div>
      </div>
    ),
  },
  {
    label: "form",
    code: `import { Skeleton } from "@/components/ui/skeleton"

<div className="space-y-4">
  <div className="space-y-2">
    <Skeleton className="h-3 w-16" />
    <Skeleton className="h-9 w-64" />
  </div>
  <div className="space-y-2">
    <Skeleton className="h-3 w-16" />
    <Skeleton className="h-9 w-64" />
  </div>
</div>`,
    component: (
      <div className="space-y-4">
        <div className="space-y-2">
          <Skeleton className="h-3 w-16" />
          <Skeleton className="h-9 w-64" />
        </div>
        <div className="space-y-2">
          <Skeleton className="h-3 w-16" />
          <Skeleton className="h-9 w-64" />
        </div>
      </div>
    ),
  },
]

function SkeletonExample({
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

export function SkeletonShowcase() {
  return (
    <div className="space-y-8">
      {examples.map((example) => (
        <SkeletonExample key={example.label} {...example} />
      ))}
    </div>
  )
}
