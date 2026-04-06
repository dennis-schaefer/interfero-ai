import { useState } from "react"
import {
  Popover,
  PopoverContent,
  PopoverDescription,
  PopoverHeader,
  PopoverTitle,
  PopoverTrigger,
} from "@/components/ui/popover"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

const examples = [
  {
    label: "default",
    code: `import {
  Popover,
  PopoverContent,
  PopoverDescription,
  PopoverHeader,
  PopoverTitle,
  PopoverTrigger,
} from "@/components/ui/popover"
import { Button } from "@/components/ui/button"

<Popover>
  <PopoverTrigger render={<Button variant="outline" />}>
    Open Popover
  </PopoverTrigger>
  <PopoverContent>
    <PopoverHeader>
      <PopoverTitle>Popover title</PopoverTitle>
      <PopoverDescription>
        This is a short description of the popover content.
      </PopoverDescription>
    </PopoverHeader>
  </PopoverContent>
</Popover>`,
    component: (
      <Popover>
        <PopoverTrigger render={<Button variant="outline" />}>
          Open Popover
        </PopoverTrigger>
        <PopoverContent>
          <PopoverHeader>
            <PopoverTitle>Popover title</PopoverTitle>
            <PopoverDescription>
              This is a short description of the popover content.
            </PopoverDescription>
          </PopoverHeader>
        </PopoverContent>
      </Popover>
    ),
  },
  {
    label: "with form",
    code: `import {
  Popover,
  PopoverContent,
  PopoverDescription,
  PopoverHeader,
  PopoverTitle,
  PopoverTrigger,
} from "@/components/ui/popover"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

<Popover>
  <PopoverTrigger render={<Button variant="outline" />}>
    Edit dimensions
  </PopoverTrigger>
  <PopoverContent>
    <PopoverHeader>
      <PopoverTitle>Edit dimensions</PopoverTitle>
      <PopoverDescription>
        Set the width and height for the element.
      </PopoverDescription>
    </PopoverHeader>
    <div className="space-y-2">
      <div className="space-y-1">
        <label className="text-xs font-medium">Width</label>
        <Input placeholder="e.g. 100px" defaultValue="320px" />
      </div>
      <div className="space-y-1">
        <label className="text-xs font-medium">Height</label>
        <Input placeholder="e.g. 100px" defaultValue="240px" />
      </div>
    </div>
    <Button className="w-full">Apply</Button>
  </PopoverContent>
</Popover>`,
    component: (
      <Popover>
        <PopoverTrigger render={<Button variant="outline" />}>
          Edit dimensions
        </PopoverTrigger>
        <PopoverContent>
          <PopoverHeader>
            <PopoverTitle>Edit dimensions</PopoverTitle>
            <PopoverDescription>
              Set the width and height for the element.
            </PopoverDescription>
          </PopoverHeader>
          <div className="space-y-2">
            <div className="space-y-1">
              <label className="text-xs font-medium">Width</label>
              <Input placeholder="e.g. 100px" defaultValue="320px" />
            </div>
            <div className="space-y-1">
              <label className="text-xs font-medium">Height</label>
              <Input placeholder="e.g. 100px" defaultValue="240px" />
            </div>
          </div>
          <Button className="w-full">Apply</Button>
        </PopoverContent>
      </Popover>
    ),
  },
]

function PopoverExample({
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

export function PopoverShowcase() {
  return (
    <div className="space-y-8">
      {examples.map((example) => (
        <PopoverExample key={example.label} {...example} />
      ))}
    </div>
  )
}
