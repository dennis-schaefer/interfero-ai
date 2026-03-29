import { useState } from "react"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import { HugeiconsIcon } from "@hugeicons/react"
import {
  Alert01Icon,
  AlertCircleIcon,
  CheckmarkCircle01Icon,
  InformationCircleIcon,
} from "@hugeicons/core-free-icons"

const examples = [
  {
    variant: "default" as const,
    icon: InformationCircleIcon,
    title: "Heads up!",
    description: "You can add components and dependencies to your app using the cli.",
    code: `import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { HugeiconsIcon } from "@hugeicons/react"
import { InformationCircleIcon } from "@hugeicons/core-free-icons"

<Alert>
  <HugeiconsIcon icon={InformationCircleIcon} />
  <AlertTitle>Heads up!</AlertTitle>
  <AlertDescription>
    You can add components and dependencies to your app using the cli.
  </AlertDescription>
</Alert>`,
  },
  {
    variant: "success" as const,
    icon: CheckmarkCircle01Icon,
    title: "Success",
    description: "Your changes have been saved successfully.",
    code: `import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { HugeiconsIcon } from "@hugeicons/react"
import { CheckmarkCircle01Icon } from "@hugeicons/core-free-icons"

<Alert variant="success">
  <HugeiconsIcon icon={CheckmarkCircle01Icon} />
  <AlertTitle>Success</AlertTitle>
  <AlertDescription>
    Your changes have been saved successfully.
  </AlertDescription>
</Alert>`,
  },
  {
    variant: "warning" as const,
    icon: Alert01Icon,
    title: "Warning",
    description: "This action may have unintended consequences. Please proceed with caution.",
    code: `import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { HugeiconsIcon } from "@hugeicons/react"
import { Alert01Icon } from "@hugeicons/core-free-icons"

<Alert variant="warning">
  <HugeiconsIcon icon={Alert01Icon} />
  <AlertTitle>Warning</AlertTitle>
  <AlertDescription>
    This action may have unintended consequences. Please proceed with caution.
  </AlertDescription>
</Alert>`,
  },
  {
    variant: "destructive" as const,
    icon: AlertCircleIcon,
    title: "Error",
    description: "Your session has expired. Please log in again.",
    code: `import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { HugeiconsIcon } from "@hugeicons/react"
import { AlertCircleIcon } from "@hugeicons/core-free-icons"

<Alert variant="destructive">
  <HugeiconsIcon icon={AlertCircleIcon} />
  <AlertTitle>Error</AlertTitle>
  <AlertDescription>
    Your session has expired. Please log in again.
  </AlertDescription>
</Alert>`,
  },
]

function AlertExample({
  variant,
  icon,
  title,
  description,
  code,
}: (typeof examples)[0]) {
  const [open, setOpen] = useState(false)

  return (
    <div className="space-y-2">
      <p className="text-xs font-mono text-muted-foreground">{variant}</p>
      <Alert variant={variant}>
        <HugeiconsIcon icon={icon} />
        <AlertTitle>{title}</AlertTitle>
        <AlertDescription>{description}</AlertDescription>
      </Alert>
      <Collapsible open={open} onOpenChange={setOpen}>
        <CollapsibleTrigger className="text-xs text-muted-foreground hover:text-foreground transition-colors cursor-pointer">
          {open ? "Code ausblenden ↑" : "Code anzeigen ↓"}
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

export function AlertShowcase() {
  return (
    <div className="space-y-8">
      {examples.map((example) => (
        <AlertExample key={example.variant} {...example} />
      ))}
    </div>
  )
}
