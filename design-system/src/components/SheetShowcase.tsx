import { useState } from "react"
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  SheetFooter,
  SheetClose,
} from "@/components/ui/sheet"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

const examples = [
  {
    label: "right",
    code: `import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  SheetFooter,
  SheetClose,
} from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

<Sheet>
  <SheetTrigger render={<Button variant="outline" />}>
    Add Cluster
  </SheetTrigger>
  <SheetContent side="right">
    <SheetHeader>
      <SheetTitle>Add Cluster</SheetTitle>
      <SheetDescription>
        Connect to an Apache Pulsar cluster by providing its connection details.
      </SheetDescription>
    </SheetHeader>
    <div className="flex flex-col gap-4 px-4">
      <div className="space-y-1">
        <label className="text-xs font-medium">Cluster Name</label>
        <Input placeholder="e.g. production-us-east" />
      </div>
      <div className="space-y-1">
        <label className="text-xs font-medium">Broker URL</label>
        <Input placeholder="pulsar://localhost:6650" />
      </div>
      <div className="space-y-1">
        <label className="text-xs font-medium">Authentication Token</label>
        <Input type="password" placeholder="eyJhbGciOiJSUzI1NiJ9..." />
      </div>
    </div>
    <SheetFooter>
      <Button className="w-full">Add Cluster</Button>
      <SheetClose render={<Button variant="outline" className="w-full" />}>
        Cancel
      </SheetClose>
    </SheetFooter>
  </SheetContent>
</Sheet>`,
    component: (
      <Sheet>
        <SheetTrigger render={<Button variant="outline" />}>
          Add Cluster
        </SheetTrigger>
        <SheetContent side="right">
          <SheetHeader>
            <SheetTitle>Add Cluster</SheetTitle>
            <SheetDescription>
              Connect to an Apache Pulsar cluster by providing its connection
              details.
            </SheetDescription>
          </SheetHeader>
          <div className="flex flex-col gap-4 px-4">
            <div className="space-y-1">
              <label className="text-xs font-medium">Cluster Name</label>
              <Input placeholder="e.g. production-us-east" />
            </div>
            <div className="space-y-1">
              <label className="text-xs font-medium">Broker URL</label>
              <Input placeholder="pulsar://localhost:6650" />
            </div>
            <div className="space-y-1">
              <label className="text-xs font-medium">Authentication Token</label>
              <Input type="password" placeholder="eyJhbGciOiJSUzI1NiJ9..." />
            </div>
          </div>
          <SheetFooter>
            <Button className="w-full">Add Cluster</Button>
            <SheetClose render={<Button variant="outline" className="w-full" />}>
              Cancel
            </SheetClose>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    ),
  },
  {
    label: "bottom",
    code: `import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  SheetFooter,
  SheetClose,
} from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

<Sheet>
  <SheetTrigger render={<Button variant="outline" />}>
    Create Topic
  </SheetTrigger>
  <SheetContent side="bottom">
    <SheetHeader>
      <SheetTitle>Create Topic</SheetTitle>
      <SheetDescription>
        Create a new topic in an existing namespace.
      </SheetDescription>
    </SheetHeader>
    <div className="flex flex-col gap-4 px-4">
      <div className="space-y-1">
        <label className="text-xs font-medium">Namespace</label>
        <Input placeholder="e.g. public/default" />
      </div>
      <div className="space-y-1">
        <label className="text-xs font-medium">Topic Name</label>
        <Input placeholder="e.g. order-events" />
      </div>
      <div className="space-y-1">
        <label className="text-xs font-medium">Topic Type</label>
        <p className="text-xs text-muted-foreground">
          Persistent topics store messages on disk. Non-persistent topics deliver
          messages only to currently connected consumers.
        </p>
        <div className="flex gap-2 pt-1">
          <Button variant="outline" size="sm" className="flex-1">Persistent</Button>
          <Button variant="ghost" size="sm" className="flex-1">Non-Persistent</Button>
        </div>
      </div>
    </div>
    <SheetFooter>
      <Button className="w-full">Create Topic</Button>
      <SheetClose render={<Button variant="outline" className="w-full" />}>
        Cancel
      </SheetClose>
    </SheetFooter>
  </SheetContent>
</Sheet>`,
    component: (
      <Sheet>
        <SheetTrigger render={<Button variant="outline" />}>
          Create Topic
        </SheetTrigger>
        <SheetContent side="bottom">
          <SheetHeader>
            <SheetTitle>Create Topic</SheetTitle>
            <SheetDescription>
              Create a new topic in an existing namespace.
            </SheetDescription>
          </SheetHeader>
          <div className="flex flex-col gap-4 px-4">
            <div className="space-y-1">
              <label className="text-xs font-medium">Namespace</label>
              <Input placeholder="e.g. public/default" />
            </div>
            <div className="space-y-1">
              <label className="text-xs font-medium">Topic Name</label>
              <Input placeholder="e.g. order-events" />
            </div>
            <div className="space-y-1">
              <label className="text-xs font-medium">Topic Type</label>
              <p className="text-xs text-muted-foreground">
                Persistent topics store messages on disk. Non-persistent topics
                deliver messages only to currently connected consumers.
              </p>
              <div className="flex gap-2 pt-1">
                <Button variant="outline" size="sm" className="flex-1">
                  Persistent
                </Button>
                <Button variant="ghost" size="sm" className="flex-1">
                  Non-Persistent
                </Button>
              </div>
            </div>
          </div>
          <SheetFooter>
            <Button className="w-full">Create Topic</Button>
            <SheetClose render={<Button variant="outline" className="w-full" />}>
              Cancel
            </SheetClose>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    ),
  },
]

function SheetExample({
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

export function SheetShowcase() {
  return (
    <div className="space-y-8">
      {examples.map((example) => (
        <SheetExample key={example.label} {...example} />
      ))}
    </div>
  )
}
