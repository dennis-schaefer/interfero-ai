import { useState } from "react"
import { HugeiconsIcon } from "@hugeicons/react"
import {
  InboxIcon,
  FileSearchIcon,
  GlobeXIcon,
} from "@hugeicons/core-free-icons"
import { Button } from "@/components/ui/button"
import {
  Empty,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
  EmptyDescription,
  EmptyContent,
} from "@/components/ui/empty"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"

const examples = [
  {
    label: "basic",
    code: `import { HugeiconsIcon } from "@hugeicons/react"
import { InboxIcon } from "@hugeicons/core-free-icons"
import { Button } from "@/components/ui/button"
import {
  Empty,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
  EmptyDescription,
  EmptyContent,
} from "@/components/ui/empty"

<Empty>
  <EmptyHeader>
    <EmptyMedia>
      <HugeiconsIcon icon={InboxIcon} className="size-12 text-muted-foreground" />
    </EmptyMedia>
    <EmptyTitle>No messages yet</EmptyTitle>
    <EmptyDescription>
      You don't have any messages. Start a conversation to get things going.
    </EmptyDescription>
  </EmptyHeader>
  <EmptyContent>
    <Button>New Message</Button>
  </EmptyContent>
</Empty>`,
    component: (
      <div className="flex min-h-[200px]">
        <Empty>
          <EmptyHeader>
            <EmptyMedia>
              <HugeiconsIcon icon={InboxIcon} className="size-12 text-muted-foreground" />
            </EmptyMedia>
            <EmptyTitle>No messages yet</EmptyTitle>
            <EmptyDescription>
              You don't have any messages. Start a conversation to get things going.
            </EmptyDescription>
          </EmptyHeader>
          <EmptyContent>
            <Button>New Message</Button>
          </EmptyContent>
        </Empty>
      </div>
    ),
  },
  {
    label: "icon variant",
    code: `import { HugeiconsIcon } from "@hugeicons/react"
import { InboxIcon } from "@hugeicons/core-free-icons"
import { Button } from "@/components/ui/button"
import {
  Empty,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
  EmptyDescription,
  EmptyContent,
} from "@/components/ui/empty"

<Empty>
  <EmptyHeader>
    <EmptyMedia variant="icon">
      <HugeiconsIcon icon={InboxIcon} />
    </EmptyMedia>
    <EmptyTitle>No messages yet</EmptyTitle>
    <EmptyDescription>
      You don't have any messages. Start a conversation to get things going.
    </EmptyDescription>
  </EmptyHeader>
  <EmptyContent>
    <Button>New Message</Button>
  </EmptyContent>
</Empty>`,
    component: (
      <div className="flex min-h-[200px]">
        <Empty>
          <EmptyHeader>
            <EmptyMedia variant="icon">
              <HugeiconsIcon icon={InboxIcon} />
            </EmptyMedia>
            <EmptyTitle>No messages yet</EmptyTitle>
            <EmptyDescription>
              You don't have any messages. Start a conversation to get things going.
            </EmptyDescription>
          </EmptyHeader>
          <EmptyContent>
            <Button>New Message</Button>
          </EmptyContent>
        </Empty>
      </div>
    ),
  },
  {
    label: "without action",
    code: `import { HugeiconsIcon } from "@hugeicons/react"
import { FileSearchIcon } from "@hugeicons/core-free-icons"
import {
  Empty,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
  EmptyDescription,
} from "@/components/ui/empty"

<Empty>
  <EmptyHeader>
    <EmptyMedia>
      <HugeiconsIcon icon={FileSearchIcon} className="size-12 text-muted-foreground" />
    </EmptyMedia>
    <EmptyTitle>No results found</EmptyTitle>
    <EmptyDescription>
      Try adjusting your search or filters to find what you're looking for.
    </EmptyDescription>
  </EmptyHeader>
</Empty>`,
    component: (
      <div className="flex min-h-[200px]">
        <Empty>
          <EmptyHeader>
            <EmptyMedia>
              <HugeiconsIcon icon={FileSearchIcon} className="size-12 text-muted-foreground" />
            </EmptyMedia>
            <EmptyTitle>No results found</EmptyTitle>
            <EmptyDescription>
              Try adjusting your search or filters to find what you're looking for.
            </EmptyDescription>
          </EmptyHeader>
        </Empty>
      </div>
    ),
  },
  {
    label: "minimal",
    code: `import { Empty, EmptyTitle } from "@/components/ui/empty"

<Empty>
  <EmptyTitle>Nothing here yet.</EmptyTitle>
</Empty>`,
    component: (
      <div className="flex min-h-[200px]">
        <Empty>
          <EmptyTitle>Nothing here yet.</EmptyTitle>
        </Empty>
      </div>
    ),
  },
  {
    label: "404 not found",
    code: `import { HugeiconsIcon } from "@hugeicons/react"
import { GlobeXIcon } from "@hugeicons/core-free-icons"
import { Button } from "@/components/ui/button"
import {
  Empty,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
  EmptyDescription,
  EmptyContent,
} from "@/components/ui/empty"

<Empty>
  <EmptyHeader>
    <EmptyMedia>
      <HugeiconsIcon icon={GlobeXIcon} className="size-12 text-muted-foreground" />
    </EmptyMedia>
    <EmptyTitle>404 Not Found</EmptyTitle>
    <EmptyDescription>
      The page you're looking for doesn't exist or has been moved.
    </EmptyDescription>
  </EmptyHeader>
  <EmptyContent>
    <Button variant="outline">Go back</Button>
  </EmptyContent>
</Empty>`,
    component: (
      <div className="flex min-h-[200px]">
        <Empty>
          <EmptyHeader>
            <EmptyMedia>
              <HugeiconsIcon icon={GlobeXIcon} className="size-12 text-muted-foreground" />
            </EmptyMedia>
            <EmptyTitle>404 Not Found</EmptyTitle>
            <EmptyDescription>
              The page you're looking for doesn't exist or has been moved.
            </EmptyDescription>
          </EmptyHeader>
          <EmptyContent>
            <Button variant="outline">Go back</Button>
          </EmptyContent>
        </Empty>
      </div>
    ),
  },
]

function EmptyExample({
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

export function EmptyShowcase() {
  return (
    <div className="space-y-8">
      {examples.map((example) => (
        <EmptyExample key={example.label} {...example} />
      ))}
    </div>
  )
}
