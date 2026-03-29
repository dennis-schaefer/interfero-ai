import { useState } from "react"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogMedia,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { HugeiconsIcon } from "@hugeicons/react"
import { Alert01Icon } from "@hugeicons/core-free-icons"

const dialogExamples = [
  {
    label: "default",
    triggerLabel: "Open Dialog",
    code: `import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"

<Dialog>
  <DialogTrigger render={<Button variant="outline" />}>
    Open Dialog
  </DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Dialog title</DialogTitle>
      <DialogDescription>
        This is a general-purpose dialog. Use it for any modal interaction.
      </DialogDescription>
    </DialogHeader>
    <DialogFooter>
      <DialogClose render={<Button variant="outline" />}>Cancel</DialogClose>
      <Button>Confirm</Button>
    </DialogFooter>
  </DialogContent>
</Dialog>`,
    dialog: (
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Dialog title</DialogTitle>
          <DialogDescription>
            This is a general-purpose dialog. Use it for any modal interaction.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <DialogClose render={<Button variant="outline" />}>Cancel</DialogClose>
          <Button>Confirm</Button>
        </DialogFooter>
      </DialogContent>
    ),
  },
  {
    label: "with form",
    triggerLabel: "Edit profile",
    code: `import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

<Dialog>
  <DialogTrigger render={<Button variant="outline" />}>
    Edit profile
  </DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Edit profile</DialogTitle>
      <DialogDescription>
        Update your name and email address.
      </DialogDescription>
    </DialogHeader>
    <div className="space-y-3">
      <div className="space-y-1">
        <label className="text-xs font-medium">Name</label>
        <Input placeholder="Your name" defaultValue="Jane Doe" />
      </div>
      <div className="space-y-1">
        <label className="text-xs font-medium">Email</label>
        <Input type="email" placeholder="you@example.com" defaultValue="jane@example.com" />
      </div>
    </div>
    <DialogFooter>
      <DialogClose render={<Button variant="outline" />}>Cancel</DialogClose>
      <Button>Save changes</Button>
    </DialogFooter>
  </DialogContent>
</Dialog>`,
    dialog: (
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit profile</DialogTitle>
          <DialogDescription>
            Update your name and email address.
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-3">
          <div className="space-y-1">
            <label className="text-xs font-medium">Name</label>
            <Input placeholder="Your name" defaultValue="Jane Doe" />
          </div>
          <div className="space-y-1">
            <label className="text-xs font-medium">Email</label>
            <Input type="email" placeholder="you@example.com" defaultValue="jane@example.com" />
          </div>
        </div>
        <DialogFooter>
          <DialogClose render={<Button variant="outline" />}>Cancel</DialogClose>
          <Button>Save changes</Button>
        </DialogFooter>
      </DialogContent>
    ),
  },
  {
    label: "without close button",
    triggerLabel: "Open Dialog",
    code: `import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"

<Dialog>
  <DialogTrigger render={<Button variant="outline" />}>
    Open Dialog
  </DialogTrigger>
  <DialogContent showCloseButton={false}>
    <DialogHeader>
      <DialogTitle>No close button</DialogTitle>
      <DialogDescription>
        This dialog requires the user to take an explicit action to dismiss it.
      </DialogDescription>
    </DialogHeader>
    <DialogFooter>
      <DialogClose render={<Button variant="outline" />}>Cancel</DialogClose>
      <Button>Continue</Button>
    </DialogFooter>
  </DialogContent>
</Dialog>`,
    dialog: (
      <DialogContent showCloseButton={false}>
        <DialogHeader>
          <DialogTitle>No close button</DialogTitle>
          <DialogDescription>
            This dialog requires the user to take an explicit action to dismiss it.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <DialogClose render={<Button variant="outline" />}>Cancel</DialogClose>
          <Button>Continue</Button>
        </DialogFooter>
      </DialogContent>
    ),
  },
]

const alertDialogExamples = [
  {
    label: "default",
    triggerLabel: "Open Dialog",
    code: `import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button"

<AlertDialog>
  <AlertDialogTrigger render={<Button variant="outline" />}>
    Open Dialog
  </AlertDialogTrigger>
  <AlertDialogContent>
    <AlertDialogHeader>
      <AlertDialogTitle>Are you sure?</AlertDialogTitle>
      <AlertDialogDescription>
        This action cannot be undone.
      </AlertDialogDescription>
    </AlertDialogHeader>
    <AlertDialogFooter>
      <AlertDialogCancel>Cancel</AlertDialogCancel>
      <AlertDialogAction>Confirm</AlertDialogAction>
    </AlertDialogFooter>
  </AlertDialogContent>
</AlertDialog>`,
    dialog: (
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction>Confirm</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    ),
  },
  {
    label: "destructive",
    triggerLabel: "Delete account",
    code: `import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button"

<AlertDialog>
  <AlertDialogTrigger render={<Button variant="outline" />}>
    Delete account
  </AlertDialogTrigger>
  <AlertDialogContent>
    <AlertDialogHeader>
      <AlertDialogTitle>Delete account</AlertDialogTitle>
      <AlertDialogDescription>
        This will permanently delete your account and remove all your data.
      </AlertDialogDescription>
    </AlertDialogHeader>
    <AlertDialogFooter>
      <AlertDialogCancel>Cancel</AlertDialogCancel>
      <AlertDialogAction variant="destructive">Delete</AlertDialogAction>
    </AlertDialogFooter>
  </AlertDialogContent>
</AlertDialog>`,
    dialog: (
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Delete account</AlertDialogTitle>
          <AlertDialogDescription>
            This will permanently delete your account and remove all your data.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction variant="destructive">Delete</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    ),
  },
  {
    label: "with media",
    triggerLabel: "Open with icon",
    code: `import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogMedia,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button"
import { HugeiconsIcon } from "@hugeicons/react"
import { Alert01Icon } from "@hugeicons/core-free-icons"

<AlertDialog>
  <AlertDialogTrigger render={<Button variant="outline" />}>
    Open with icon
  </AlertDialogTrigger>
  <AlertDialogContent size="sm">
    <AlertDialogHeader>
      <AlertDialogMedia>
        <HugeiconsIcon icon={Alert01Icon} />
      </AlertDialogMedia>
      <AlertDialogTitle>Confirm action</AlertDialogTitle>
      <AlertDialogDescription>
        Please review before proceeding.
      </AlertDialogDescription>
    </AlertDialogHeader>
    <AlertDialogFooter>
      <AlertDialogCancel>Cancel</AlertDialogCancel>
      <AlertDialogAction>Continue</AlertDialogAction>
    </AlertDialogFooter>
  </AlertDialogContent>
</AlertDialog>`,
    dialog: (
      <AlertDialogContent size="sm">
        <AlertDialogHeader>
          <AlertDialogMedia>
            <HugeiconsIcon icon={Alert01Icon} />
          </AlertDialogMedia>
          <AlertDialogTitle>Confirm action</AlertDialogTitle>
          <AlertDialogDescription>
            Please review before proceeding.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction>Continue</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    ),
  },
]

function DialogExample({
  label,
  triggerLabel,
  code,
  dialog,
}: (typeof dialogExamples)[0]) {
  const [codeOpen, setCodeOpen] = useState(false)

  return (
    <div className="space-y-2">
      <p className="text-xs font-mono text-muted-foreground">{label}</p>
      <Dialog>
        <DialogTrigger render={<Button variant="outline" />}>
          {triggerLabel}
        </DialogTrigger>
        {dialog}
      </Dialog>
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

function AlertDialogExample({
  label,
  triggerLabel,
  code,
  dialog,
}: (typeof alertDialogExamples)[0]) {
  const [codeOpen, setCodeOpen] = useState(false)

  return (
    <div className="space-y-2">
      <p className="text-xs font-mono text-muted-foreground">{label}</p>
      <AlertDialog>
        <AlertDialogTrigger render={<Button variant="outline" />}>
          {triggerLabel}
        </AlertDialogTrigger>
        {dialog}
      </AlertDialog>
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

export function DialogShowcase() {
  return (
    <div className="space-y-12">
      <div className="space-y-6">
        <div>
          <h2 className="text-lg font-semibold">Dialog</h2>
          <p className="text-muted-foreground text-sm mt-1">A general-purpose modal dialog.</p>
        </div>
        <div className="space-y-8">
          {dialogExamples.map((example) => (
            <DialogExample key={example.label} {...example} />
          ))}
        </div>
      </div>

      <div className="space-y-6">
        <div>
          <h2 className="text-lg font-semibold">Alert Dialog</h2>
          <p className="text-muted-foreground text-sm mt-1">Interrupts the user with important content and expects a response.</p>
        </div>
        <div className="space-y-8">
          {alertDialogExamples.map((example) => (
            <AlertDialogExample key={example.label} {...example} />
          ))}
        </div>
      </div>
    </div>
  )
}
