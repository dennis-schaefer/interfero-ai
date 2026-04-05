import { useState } from "react"
import { Spinner } from "@/components/ui/spinner"
import { Button } from "@/components/ui/button"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"

const examples = [
  {
    label: "default",
    code: `import { Spinner } from "@/components/ui/spinner"

<Spinner />`,
    component: <Spinner />,
  },
  {
    label: "sizes",
    code: `import { Spinner } from "@/components/ui/spinner"

<div className="flex items-center gap-4">
  <Spinner className="size-4" />
  <Spinner className="size-6" />
  <Spinner className="size-8" />
  <Spinner className="size-10" />
</div>`,
    component: (
      <div className="flex items-center gap-4">
        <Spinner className="size-4" />
        <Spinner className="size-6" />
        <Spinner className="size-8" />
        <Spinner className="size-10" />
      </div>
    ),
  },
  {
    label: "button",
    code: `import { Spinner } from "@/components/ui/spinner"
import { Button } from "@/components/ui/button"

<Button disabled>
  <Spinner />
  Loading...
</Button>`,
    component: (
      <Button disabled>
        <Spinner />
        Loading...
      </Button>
    ),
  },
]

function SpinnerExample({
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

export function SpinnerShowcase() {
  return (
    <div className="space-y-8">
      {examples.map((example) => (
        <SpinnerExample key={example.label} {...example} />
      ))}
    </div>
  )
}
