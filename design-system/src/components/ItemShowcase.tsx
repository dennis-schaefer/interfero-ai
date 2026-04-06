import { useState } from "react"
import { HugeiconsIcon } from "@hugeicons/react"
import {
  Alert01Icon,
  AlertCircleIcon,
  InformationCircleIcon,
  ArrowRight01Icon,
} from "@hugeicons/core-free-icons"
import {
  Item,
  ItemMedia,
  ItemContent,
  ItemTitle,
  ItemDescription,
  ItemActions,
  ItemGroup,
  ItemSeparator,
  ItemHeader,
  ItemFooter,
} from "@/components/ui/item"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"

const examples = [
  {
    label: "variants",
    code: `import { Item, ItemContent, ItemTitle, ItemDescription } from "@/components/ui/item"

<div className="space-y-2">
  <Item variant="default">
    <ItemContent>
      <ItemTitle>persistent://analytics/prod/events</ItemTitle>
      <ItemDescription>Default — transparent background</ItemDescription>
    </ItemContent>
  </Item>
  <Item variant="outline">
    <ItemContent>
      <ItemTitle>persistent://analytics/prod/events</ItemTitle>
      <ItemDescription>Outline — visible border</ItemDescription>
    </ItemContent>
  </Item>
  <Item variant="muted">
    <ItemContent>
      <ItemTitle>persistent://analytics/prod/events</ItemTitle>
      <ItemDescription>Muted — subtle background</ItemDescription>
    </ItemContent>
  </Item>
</div>`,
    component: (
      <div className="space-y-2 w-full">
        <Item variant="default">
          <ItemContent>
            <ItemTitle>persistent://analytics/prod/events</ItemTitle>
            <ItemDescription>Default — transparent background</ItemDescription>
          </ItemContent>
        </Item>
        <Item variant="outline">
          <ItemContent>
            <ItemTitle>persistent://analytics/prod/events</ItemTitle>
            <ItemDescription>Outline — visible border</ItemDescription>
          </ItemContent>
        </Item>
        <Item variant="muted">
          <ItemContent>
            <ItemTitle>persistent://analytics/prod/events</ItemTitle>
            <ItemDescription>Muted — subtle background</ItemDescription>
          </ItemContent>
        </Item>
      </div>
    ),
  },
  {
    label: "sizes",
    code: `import { Item, ItemContent, ItemTitle, ItemDescription } from "@/components/ui/item"

<div className="space-y-2">
  <Item variant="outline" size="default">
    <ItemContent>
      <ItemTitle>broker-1.pulsar.svc:6650</ItemTitle>
      <ItemDescription>Default size</ItemDescription>
    </ItemContent>
  </Item>
  <Item variant="outline" size="sm">
    <ItemContent>
      <ItemTitle>broker-1.pulsar.svc:6650</ItemTitle>
      <ItemDescription>Small size</ItemDescription>
    </ItemContent>
  </Item>
  <Item variant="outline" size="xs">
    <ItemContent>
      <ItemTitle>broker-1.pulsar.svc:6650</ItemTitle>
      <ItemDescription>Extra small size</ItemDescription>
    </ItemContent>
  </Item>
</div>`,
    component: (
      <div className="space-y-2 w-full">
        <Item variant="outline" size="default">
          <ItemContent>
            <ItemTitle>broker-1.pulsar.svc:6650</ItemTitle>
            <ItemDescription>Default size</ItemDescription>
          </ItemContent>
        </Item>
        <Item variant="outline" size="sm">
          <ItemContent>
            <ItemTitle>broker-1.pulsar.svc:6650</ItemTitle>
            <ItemDescription>Small size</ItemDescription>
          </ItemContent>
        </Item>
        <Item variant="outline" size="xs">
          <ItemContent>
            <ItemTitle>broker-1.pulsar.svc:6650</ItemTitle>
            <ItemDescription>Extra small size</ItemDescription>
          </ItemContent>
        </Item>
      </div>
    ),
  },
  {
    label: "icon",
    code: `import { Item, ItemMedia, ItemContent, ItemTitle, ItemDescription, ItemActions } from "@/components/ui/item"
import { Button } from "@/components/ui/button"
import { HugeiconsIcon } from "@hugeicons/react"
import { Alert01Icon } from "@hugeicons/core-free-icons"

<Item variant="outline">
  <ItemMedia variant="icon">
    <HugeiconsIcon icon={Alert01Icon} className="text-destructive" />
  </ItemMedia>
  <ItemContent>
    <ItemTitle>High Backlog Detected</ItemTitle>
    <ItemDescription>
      persistent://analytics/prod/events — 2.4M messages pending
    </ItemDescription>
  </ItemContent>
  <ItemActions>
    <Button size="sm" variant="outline">Inspect</Button>
  </ItemActions>
</Item>`,
    component: (
      <Item variant="outline">
        <ItemMedia variant="icon">
          <HugeiconsIcon icon={Alert01Icon} className="text-destructive" />
        </ItemMedia>
        <ItemContent>
          <ItemTitle>High Backlog Detected</ItemTitle>
          <ItemDescription>
            persistent://analytics/prod/events — 2.4M messages pending
          </ItemDescription>
        </ItemContent>
        <ItemActions>
          <Button size="sm" variant="outline">Inspect</Button>
        </ItemActions>
      </Item>
    ),
  },
  {
    label: "group",
    code: `import { Item, ItemContent, ItemTitle, ItemDescription, ItemGroup, ItemSeparator } from "@/components/ui/item"

<ItemGroup>
  <Item>
    <ItemContent>
      <ItemTitle>persistent://analytics/prod/events</ItemTitle>
      <ItemDescription>4 consumers · 1.2k msg/s</ItemDescription>
    </ItemContent>
  </Item>
  <ItemSeparator />
  <Item>
    <ItemContent>
      <ItemTitle>persistent://payments/prod/transactions</ItemTitle>
      <ItemDescription>2 consumers · 340 msg/s</ItemDescription>
    </ItemContent>
  </Item>
  <ItemSeparator />
  <Item>
    <ItemContent>
      <ItemTitle>persistent://auth/prod/logins</ItemTitle>
      <ItemDescription>1 consumer · 85 msg/s</ItemDescription>
    </ItemContent>
  </Item>
</ItemGroup>`,
    component: (
      <ItemGroup>
        <Item>
          <ItemContent>
            <ItemTitle>persistent://analytics/prod/events</ItemTitle>
            <ItemDescription>4 consumers · 1.2k msg/s</ItemDescription>
          </ItemContent>
        </Item>
        <ItemSeparator />
        <Item>
          <ItemContent>
            <ItemTitle>persistent://payments/prod/transactions</ItemTitle>
            <ItemDescription>2 consumers · 340 msg/s</ItemDescription>
          </ItemContent>
        </Item>
        <ItemSeparator />
        <Item>
          <ItemContent>
            <ItemTitle>persistent://auth/prod/logins</ItemTitle>
            <ItemDescription>1 consumer · 85 msg/s</ItemDescription>
          </ItemContent>
        </Item>
      </ItemGroup>
    ),
  },
  {
    label: "actions",
    code: `import { Item, ItemMedia, ItemContent, ItemTitle, ItemDescription, ItemActions } from "@/components/ui/item"
import { Button } from "@/components/ui/button"
import { HugeiconsIcon } from "@hugeicons/react"
import { InformationCircleIcon } from "@hugeicons/core-free-icons"

<Item variant="outline">
  <ItemMedia variant="icon">
    <HugeiconsIcon icon={InformationCircleIcon} />
  </ItemMedia>
  <ItemContent>
    <ItemTitle>broker-1.pulsar.svc:6650</ItemTitle>
    <ItemDescription>us-east-1 · 42 topics · 1.2k msg/s</ItemDescription>
  </ItemContent>
  <ItemActions>
    <Button size="sm" variant="ghost">Pause</Button>
    <Button size="sm" variant="outline">Inspect</Button>
  </ItemActions>
</Item>`,
    component: (
      <Item variant="outline">
        <ItemMedia variant="icon">
          <HugeiconsIcon icon={InformationCircleIcon} />
        </ItemMedia>
        <ItemContent>
          <ItemTitle>broker-1.pulsar.svc:6650</ItemTitle>
          <ItemDescription>us-east-1 · 42 topics · 1.2k msg/s</ItemDescription>
        </ItemContent>
        <ItemActions>
          <Button size="sm" variant="ghost">Pause</Button>
          <Button size="sm" variant="outline">Inspect</Button>
        </ItemActions>
      </Item>
    ),
  },
  {
    label: "header + footer",
    code: `import { Item, ItemMedia, ItemContent, ItemTitle, ItemDescription, ItemHeader, ItemFooter } from "@/components/ui/item"
import { Badge } from "@/components/ui/badge"
import { HugeiconsIcon } from "@hugeicons/react"
import { AlertCircleIcon } from "@hugeicons/core-free-icons"

<Item variant="outline">
  <ItemHeader>
    <span className="text-xs text-muted-foreground font-medium">Namespace</span>
    <Badge variant="secondary">active</Badge>
  </ItemHeader>
  <ItemMedia variant="icon">
    <HugeiconsIcon icon={AlertCircleIcon} />
  </ItemMedia>
  <ItemContent>
    <ItemTitle>analytics / prod</ItemTitle>
    <ItemDescription>12 topics · retention 7d · replication factor 3</ItemDescription>
  </ItemContent>
  <ItemFooter>
    <span className="text-xs text-muted-foreground">Last activity: 2 min ago</span>
    <span className="text-xs text-muted-foreground">3.4k msg/s</span>
  </ItemFooter>
</Item>`,
    component: (
      <Item variant="outline">
        <ItemHeader>
          <span className="text-xs text-muted-foreground font-medium">Namespace</span>
          <Badge variant="secondary">active</Badge>
        </ItemHeader>
        <ItemMedia variant="icon">
          <HugeiconsIcon icon={AlertCircleIcon} />
        </ItemMedia>
        <ItemContent>
          <ItemTitle>analytics / prod</ItemTitle>
          <ItemDescription>12 topics · retention 7d · replication factor 3</ItemDescription>
        </ItemContent>
        <ItemFooter>
          <span className="text-xs text-muted-foreground">Last activity: 2 min ago</span>
          <span className="text-xs text-muted-foreground">3.4k msg/s</span>
        </ItemFooter>
      </Item>
    ),
  },
]

function ItemExample({
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

export function ItemShowcase() {
  return (
    <div className="space-y-8">
      {examples.map((example) => (
        <ItemExample key={example.label} {...example} />
      ))}
    </div>
  )
}
