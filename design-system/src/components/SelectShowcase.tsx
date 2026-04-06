import { useState } from "react"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"

const examples = [
  {
    label: "default",
    code: `import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

<Select>
  <SelectTrigger>
    <SelectValue placeholder="Select a namespace" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="public/default">public/default</SelectItem>
    <SelectItem value="public/transactions">public/transactions</SelectItem>
    <SelectItem value="public/analytics">public/analytics</SelectItem>
    <SelectItem value="public/notifications">public/notifications</SelectItem>
  </SelectContent>
</Select>`,
    component: (
      <Select>
        <SelectTrigger>
          <SelectValue placeholder="Select a namespace" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="public/default">public/default</SelectItem>
          <SelectItem value="public/transactions">public/transactions</SelectItem>
          <SelectItem value="public/analytics">public/analytics</SelectItem>
          <SelectItem value="public/notifications">public/notifications</SelectItem>
        </SelectContent>
      </Select>
    ),
  },
  {
    label: "with value",
    code: `import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

<Select defaultValue="public/transactions">
  <SelectTrigger>
    <SelectValue placeholder="Select a namespace" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="public/default">public/default</SelectItem>
    <SelectItem value="public/transactions">public/transactions</SelectItem>
    <SelectItem value="public/analytics">public/analytics</SelectItem>
    <SelectItem value="public/notifications">public/notifications</SelectItem>
  </SelectContent>
</Select>`,
    component: (
      <Select defaultValue="public/transactions">
        <SelectTrigger>
          <SelectValue placeholder="Select a namespace" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="public/default">public/default</SelectItem>
          <SelectItem value="public/transactions">public/transactions</SelectItem>
          <SelectItem value="public/analytics">public/analytics</SelectItem>
          <SelectItem value="public/notifications">public/notifications</SelectItem>
        </SelectContent>
      </Select>
    ),
  },
  {
    label: "small",
    code: `import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

<Select>
  <SelectTrigger size="sm">
    <SelectValue placeholder="Select a namespace" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="public/default">public/default</SelectItem>
    <SelectItem value="public/transactions">public/transactions</SelectItem>
    <SelectItem value="public/analytics">public/analytics</SelectItem>
    <SelectItem value="public/notifications">public/notifications</SelectItem>
  </SelectContent>
</Select>`,
    component: (
      <Select>
        <SelectTrigger size="sm">
          <SelectValue placeholder="Select a namespace" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="public/default">public/default</SelectItem>
          <SelectItem value="public/transactions">public/transactions</SelectItem>
          <SelectItem value="public/analytics">public/analytics</SelectItem>
          <SelectItem value="public/notifications">public/notifications</SelectItem>
        </SelectContent>
      </Select>
    ),
  },
  {
    label: "with groups",
    code: `import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

<Select>
  <SelectTrigger>
    <SelectValue placeholder="Select a topic" />
  </SelectTrigger>
  <SelectContent>
    <SelectGroup>
      <SelectLabel>persistent</SelectLabel>
      <SelectItem value="persistent://public/default/orders">orders</SelectItem>
      <SelectItem value="persistent://public/default/payments">payments</SelectItem>
      <SelectItem value="persistent://public/default/shipments">shipments</SelectItem>
    </SelectGroup>
    <SelectGroup>
      <SelectLabel>non-persistent</SelectLabel>
      <SelectItem value="non-persistent://public/default/events">events</SelectItem>
      <SelectItem value="non-persistent://public/default/metrics">metrics</SelectItem>
      <SelectItem value="non-persistent://public/default/logs">logs</SelectItem>
    </SelectGroup>
  </SelectContent>
</Select>`,
    component: (
      <Select>
        <SelectTrigger>
          <SelectValue placeholder="Select a topic" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>persistent</SelectLabel>
            <SelectItem value="persistent://public/default/orders">orders</SelectItem>
            <SelectItem value="persistent://public/default/payments">payments</SelectItem>
            <SelectItem value="persistent://public/default/shipments">shipments</SelectItem>
          </SelectGroup>
          <SelectGroup>
            <SelectLabel>non-persistent</SelectLabel>
            <SelectItem value="non-persistent://public/default/events">events</SelectItem>
            <SelectItem value="non-persistent://public/default/metrics">metrics</SelectItem>
            <SelectItem value="non-persistent://public/default/logs">logs</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    ),
  },
  {
    label: "with separator",
    code: `import {
  Select,
  SelectContent,
  SelectItem,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

<Select>
  <SelectTrigger>
    <SelectValue placeholder="Select subscription type" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="exclusive">Exclusive</SelectItem>
    <SelectItem value="shared">Shared</SelectItem>
    <SelectSeparator />
    <SelectItem value="failover">Failover</SelectItem>
    <SelectItem value="key_shared">Key Shared</SelectItem>
  </SelectContent>
</Select>`,
    component: (
      <Select>
        <SelectTrigger>
          <SelectValue placeholder="Select subscription type" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="exclusive">Exclusive</SelectItem>
          <SelectItem value="shared">Shared</SelectItem>
          <SelectSeparator />
          <SelectItem value="failover">Failover</SelectItem>
          <SelectItem value="key_shared">Key Shared</SelectItem>
        </SelectContent>
      </Select>
    ),
  },
  {
    label: "disabled item",
    code: `import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

<Select>
  <SelectTrigger>
    <SelectValue placeholder="Select retention policy" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="7d">7 days</SelectItem>
    <SelectItem value="30d">30 days</SelectItem>
    <SelectItem value="unlimited" disabled>Unlimited (contact admin)</SelectItem>
  </SelectContent>
</Select>`,
    component: (
      <Select>
        <SelectTrigger>
          <SelectValue placeholder="Select retention policy" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="7d">7 days</SelectItem>
          <SelectItem value="30d">30 days</SelectItem>
          <SelectItem value="unlimited" disabled>Unlimited (contact admin)</SelectItem>
        </SelectContent>
      </Select>
    ),
  },
  {
    label: "disabled",
    code: `import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

<Select disabled>
  <SelectTrigger>
    <SelectValue placeholder="Select a namespace" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="public/default">public/default</SelectItem>
    <SelectItem value="public/transactions">public/transactions</SelectItem>
  </SelectContent>
</Select>`,
    component: (
      <Select disabled>
        <SelectTrigger>
          <SelectValue placeholder="Select a namespace" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="public/default">public/default</SelectItem>
          <SelectItem value="public/transactions">public/transactions</SelectItem>
        </SelectContent>
      </Select>
    ),
  },
  {
    label: "error",
    code: `import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

<Select>
  <SelectTrigger aria-invalid="true">
    <SelectValue placeholder="Select a namespace" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="public/default">public/default</SelectItem>
    <SelectItem value="public/transactions">public/transactions</SelectItem>
    <SelectItem value="public/analytics">public/analytics</SelectItem>
  </SelectContent>
</Select>`,
    component: (
      <Select>
        <SelectTrigger aria-invalid="true">
          <SelectValue placeholder="Select a namespace" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="public/default">public/default</SelectItem>
          <SelectItem value="public/transactions">public/transactions</SelectItem>
          <SelectItem value="public/analytics">public/analytics</SelectItem>
        </SelectContent>
      </Select>
    ),
  },
]

function SelectExample({
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

export function SelectShowcase() {
  return (
    <div className="space-y-8">
      {examples.map((example) => (
        <SelectExample key={example.label} {...example} />
      ))}
    </div>
  )
}
