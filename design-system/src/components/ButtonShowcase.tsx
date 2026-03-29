import { useState } from "react"
import { HugeiconsIcon } from "@hugeicons/react"
import {
  Search01Icon,
  ArrowRight01Icon,
} from "@hugeicons/core-free-icons"
import { Button } from "@/components/ui/button"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"

const examples = [
  {
    label: "variants",
    code: `import { Button } from "@/components/ui/button"

<div className="flex items-center gap-2">
  <Button variant="default">Default</Button>
  <Button variant="outline">Outline</Button>
  <Button variant="secondary">Secondary</Button>
  <Button variant="ghost">Ghost</Button>
  <Button variant="destructive">Destructive</Button>
  <Button variant="link">Link</Button>
</div>`,
    component: (
      <div className="flex items-center gap-2 flex-wrap">
        <Button variant="default">Default</Button>
        <Button variant="outline">Outline</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="ghost">Ghost</Button>
        <Button variant="destructive">Destructive</Button>
        <Button variant="link">Link</Button>
      </div>
    ),
  },
  {
    label: "sizes",
    code: `import { Button } from "@/components/ui/button"

<div className="flex items-center gap-2">
  <Button size="xs">Extra Small</Button>
  <Button size="sm">Small</Button>
  <Button size="default">Default</Button>
  <Button size="lg">Large</Button>
</div>`,
    component: (
      <div className="flex items-center gap-2">
        <Button size="xs">Extra Small</Button>
        <Button size="sm">Small</Button>
        <Button size="default">Default</Button>
        <Button size="lg">Large</Button>
      </div>
    ),
  },
  {
    label: "icon sizes",
    code: `import { Button } from "@/components/ui/button"
import { HugeiconsIcon } from "@hugeicons/react"
import { Search01Icon } from "@hugeicons/core-free-icons"

<div className="flex items-center gap-2">
  <Button size="icon-xs"><HugeiconsIcon icon={Search01Icon} /></Button>
  <Button size="icon-sm"><HugeiconsIcon icon={Search01Icon} /></Button>
  <Button size="icon"><HugeiconsIcon icon={Search01Icon} /></Button>
  <Button size="icon-lg"><HugeiconsIcon icon={Search01Icon} /></Button>
</div>`,
    component: (
      <div className="flex items-center gap-2">
        <Button size="icon-xs"><HugeiconsIcon icon={Search01Icon} /></Button>
        <Button size="icon-sm"><HugeiconsIcon icon={Search01Icon} /></Button>
        <Button size="icon"><HugeiconsIcon icon={Search01Icon} /></Button>
        <Button size="icon-lg"><HugeiconsIcon icon={Search01Icon} /></Button>
      </div>
    ),
  },
  {
    label: "with start icon",
    code: `import { Button } from "@/components/ui/button"
import { HugeiconsIcon } from "@hugeicons/react"
import { Search01Icon } from "@hugeicons/core-free-icons"

<Button>
  <HugeiconsIcon icon={Search01Icon} data-icon="inline-start" />
  Search
</Button>`,
    component: (
      <Button>
        <HugeiconsIcon icon={Search01Icon} data-icon="inline-start" />
        Search
      </Button>
    ),
  },
  {
    label: "with end icon",
    code: `import { Button } from "@/components/ui/button"
import { HugeiconsIcon } from "@hugeicons/react"
import { ArrowRight01Icon } from "@hugeicons/core-free-icons"

<Button>
  Continue
  <HugeiconsIcon icon={ArrowRight01Icon} data-icon="inline-end" />
</Button>`,
    component: (
      <Button>
        Continue
        <HugeiconsIcon icon={ArrowRight01Icon} data-icon="inline-end" />
      </Button>
    ),
  },
  {
    label: "disabled",
    code: `import { Button } from "@/components/ui/button"

<Button disabled>Disabled</Button>`,
    component: <Button disabled>Disabled</Button>,
  },
]

function ButtonExample({
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

export function ButtonShowcase() {
  return (
    <div className="space-y-8">
      {examples.map((example) => (
        <ButtonExample key={example.label} {...example} />
      ))}
    </div>
  )
}
