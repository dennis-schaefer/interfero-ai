import { useState } from "react"
import { toast } from "sonner"
import { Toaster } from "@/components/ui/sonner"
import { Button } from "@/components/ui/button"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"

const fakePromise = () => new Promise((res) => setTimeout(res, 2000))

const examples = [
  {
    label: "default",
    code: `import { toast } from "sonner"

toast("Event has been created.")`,
    component: (
      <Button variant="outline" onClick={() => toast("Event has been created.")}>
        Show toast
      </Button>
    ),
  },
  {
    label: "success",
    code: `import { toast } from "sonner"

toast.success("Changes saved successfully.", {
  style: { borderLeft: "4px solid var(--color-primary)" },
})`,
    component: (
      <Button
        variant="outline"
        onClick={() =>
          toast.success("Changes saved successfully.", {
            style: { borderLeft: "4px solid var(--color-primary)" },
          })
        }
      >
        Show success
      </Button>
    ),
  },
  {
    label: "info",
    code: `import { toast } from "sonner"

toast.info("New update available.")`,
    component: (
      <Button variant="outline" onClick={() => toast.info("New update available.")}>
        Show info
      </Button>
    ),
  },
  {
    label: "warning",
    code: `import { toast } from "sonner"

toast.warning("Storage almost full.", {
  style: { borderLeft: "4px solid var(--color-chart-1)" },
})`,
    component: (
      <Button
        variant="outline"
        onClick={() =>
          toast.warning("Storage almost full.", {
            style: { borderLeft: "4px solid var(--color-chart-1)" },
          })
        }
      >
        Show warning
      </Button>
    ),
  },
  {
    label: "error",
    code: `import { toast } from "sonner"

toast.error("Something went wrong.", {
  style: { borderLeft: "4px solid var(--color-destructive)" },
})`,
    component: (
      <Button
        variant="outline"
        onClick={() =>
          toast.error("Something went wrong.", {
            style: { borderLeft: "4px solid var(--color-destructive)" },
          })
        }
      >
        Show error
      </Button>
    ),
  },
  {
    label: "promise",
    code: `import { toast } from "sonner"

toast.promise(fetchData(), {
  loading: "Loading...",
  success: "Done!",
  error: "Failed.",
})`,
    component: (
      <Button
        variant="outline"
        onClick={() =>
          toast.promise(fakePromise(), {
            loading: "Loading...",
            success: "Done!",
            error: "Failed.",
          })
        }
      >
        Show promise
      </Button>
    ),
  },
]

function SonnerExample({ label, code, component }: (typeof examples)[0]) {
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

export function SonnerShowcase() {
  return (
    <div className="space-y-8">
      <Toaster position="bottom-right" />
      {examples.map((example) => (
        <SonnerExample key={example.label} {...example} />
      ))}
    </div>
  )
}
