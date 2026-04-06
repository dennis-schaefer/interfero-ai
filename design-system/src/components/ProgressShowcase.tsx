import { useState } from "react"
import {
  Progress,
  ProgressLabel,
  ProgressValue,
} from "@/components/ui/progress"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"

const examples = [
  {
    label: "default",
    code: `import { Progress } from "@/components/ui/progress"

<Progress value={33} />`,
    component: <Progress value={33} />,
  },
  {
    label: "with label and value",
    code: `import {
  Progress,
  ProgressLabel,
  ProgressValue,
} from "@/components/ui/progress"

<Progress value={56}>
  <ProgressLabel>Upload progress</ProgressLabel>
  <ProgressValue />
</Progress>`,
    component: (
      <Progress value={56}>
        <ProgressLabel>Upload progress</ProgressLabel>
        <ProgressValue />
      </Progress>
    ),
  },
  {
    label: "indeterminate",
    code: `import { Progress } from "@/components/ui/progress"

<Progress value={null} />`,
    component: <Progress value={null} />,
  },
]

function ProgressExample({
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

export function ProgressShowcase() {
  return (
    <div className="space-y-8">
      {examples.map((example) => (
        <ProgressExample key={example.label} {...example} />
      ))}
    </div>
  )
}
