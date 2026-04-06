import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"

const examples = [
  {
    label: "default",
    code: `import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

<Tabs defaultValue="topics" className="w-[400px]">
  <TabsList>
    <TabsTrigger value="topics">Topics</TabsTrigger>
    <TabsTrigger value="producers">Producers</TabsTrigger>
    <TabsTrigger value="consumers">Consumers</TabsTrigger>
  </TabsList>
  <TabsContent value="topics">Manage your Pulsar topics here.</TabsContent>
  <TabsContent value="producers">View active producers for this namespace.</TabsContent>
  <TabsContent value="consumers">View active consumers and subscriptions.</TabsContent>
</Tabs>`,
    component: (
      <Tabs defaultValue="topics" className="w-[400px]">
        <TabsList>
          <TabsTrigger value="topics">Topics</TabsTrigger>
          <TabsTrigger value="producers">Producers</TabsTrigger>
          <TabsTrigger value="consumers">Consumers</TabsTrigger>
        </TabsList>
        <TabsContent value="topics">Manage your Pulsar topics here.</TabsContent>
        <TabsContent value="producers">View active producers for this namespace.</TabsContent>
        <TabsContent value="consumers">View active consumers and subscriptions.</TabsContent>
      </Tabs>
    ),
  },
  {
    label: "line",
    code: `import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

<Tabs defaultValue="topics" className="w-[400px]">
  <TabsList variant="line">
    <TabsTrigger value="topics">Topics</TabsTrigger>
    <TabsTrigger value="producers">Producers</TabsTrigger>
    <TabsTrigger value="consumers">Consumers</TabsTrigger>
  </TabsList>
  <TabsContent value="topics">Manage your Pulsar topics here.</TabsContent>
  <TabsContent value="producers">View active producers for this namespace.</TabsContent>
  <TabsContent value="consumers">View active consumers and subscriptions.</TabsContent>
</Tabs>`,
    component: (
      <Tabs defaultValue="topics" className="w-[400px]">
        <TabsList variant="line">
          <TabsTrigger value="topics">Topics</TabsTrigger>
          <TabsTrigger value="producers">Producers</TabsTrigger>
          <TabsTrigger value="consumers">Consumers</TabsTrigger>
        </TabsList>
        <TabsContent value="topics">Manage your Pulsar topics here.</TabsContent>
        <TabsContent value="producers">View active producers for this namespace.</TabsContent>
        <TabsContent value="consumers">View active consumers and subscriptions.</TabsContent>
      </Tabs>
    ),
  },
  {
    label: "vertical",
    code: `import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

<Tabs defaultValue="topics" orientation="vertical" className="w-[500px]">
  <TabsList>
    <TabsTrigger value="topics">Topics</TabsTrigger>
    <TabsTrigger value="producers">Producers</TabsTrigger>
    <TabsTrigger value="consumers">Consumers</TabsTrigger>
  </TabsList>
  <TabsContent value="topics">Manage your Pulsar topics here.</TabsContent>
  <TabsContent value="producers">View active producers for this namespace.</TabsContent>
  <TabsContent value="consumers">View active consumers and subscriptions.</TabsContent>
</Tabs>`,
    component: (
      <Tabs defaultValue="topics" orientation="vertical" className="w-[500px]">
        <TabsList>
          <TabsTrigger value="topics">Topics</TabsTrigger>
          <TabsTrigger value="producers">Producers</TabsTrigger>
          <TabsTrigger value="consumers">Consumers</TabsTrigger>
        </TabsList>
        <TabsContent value="topics">Manage your Pulsar topics here.</TabsContent>
        <TabsContent value="producers">View active producers for this namespace.</TabsContent>
        <TabsContent value="consumers">View active consumers and subscriptions.</TabsContent>
      </Tabs>
    ),
  },
  {
    label: "disabled",
    code: `import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

<Tabs defaultValue="topics" className="w-[400px]">
  <TabsList>
    <TabsTrigger value="topics">Topics</TabsTrigger>
    <TabsTrigger value="producers">Producers</TabsTrigger>
    <TabsTrigger value="consumers" disabled>Consumers</TabsTrigger>
  </TabsList>
  <TabsContent value="topics">Manage your Pulsar topics here.</TabsContent>
  <TabsContent value="producers">View active producers for this namespace.</TabsContent>
</Tabs>`,
    component: (
      <Tabs defaultValue="topics" className="w-[400px]">
        <TabsList>
          <TabsTrigger value="topics">Topics</TabsTrigger>
          <TabsTrigger value="producers">Producers</TabsTrigger>
          <TabsTrigger value="consumers" disabled>Consumers</TabsTrigger>
        </TabsList>
        <TabsContent value="topics">Manage your Pulsar topics here.</TabsContent>
        <TabsContent value="producers">View active producers for this namespace.</TabsContent>
      </Tabs>
    ),
  },
]

function TabsExample({ label, code, component }: (typeof examples)[0]) {
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

export function TabsShowcase() {
  return (
    <div className="space-y-8">
      {examples.map((example) => (
        <TabsExample key={example.label} {...example} />
      ))}
    </div>
  )
}
