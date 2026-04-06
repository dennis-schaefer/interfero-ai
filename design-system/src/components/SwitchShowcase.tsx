import { useState } from "react"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"

const examples = [
  {
    label: "default",
    code: `import { Switch } from "@/components/ui/switch"

<Switch />`,
    component: <Switch />,
  },
  {
    label: "checked",
    code: `import { Switch } from "@/components/ui/switch"

<Switch defaultChecked />`,
    component: <Switch defaultChecked />,
  },
  {
    label: "sizes",
    code: `import { Switch } from "@/components/ui/switch"

<div className="flex items-center gap-4">
  <Switch size="sm" />
  <Switch size="default" />
</div>`,
    component: (
      <div className="flex items-center gap-4">
        <Switch size="sm" />
        <Switch size="default" />
      </div>
    ),
  },
  {
    label: "disabled",
    code: `import { Switch } from "@/components/ui/switch"

<Switch disabled />`,
    component: <Switch disabled />,
  },
  {
    label: "disabled checked",
    code: `import { Switch } from "@/components/ui/switch"

<Switch disabled defaultChecked />`,
    component: <Switch disabled defaultChecked />,
  },
  {
    label: "with label",
    code: `import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"

<div className="flex items-center gap-2">
  <Switch id="airplane-mode" />
  <Label htmlFor="airplane-mode">Airplane mode</Label>
</div>`,
    component: (
      <div className="flex items-center gap-2">
        <Switch id="airplane-mode" />
        <Label htmlFor="airplane-mode">Airplane mode</Label>
      </div>
    ),
  },
]

function SwitchExample({
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

export function SwitchShowcase() {
  return (
    <div className="space-y-8">
      {examples.map((example) => (
        <SwitchExample key={example.label} {...example} />
      ))}
    </div>
  )
}
