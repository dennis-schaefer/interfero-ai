import { useState } from "react"
import {
  Field,
  FieldLabel,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLegend,
  FieldSeparator,
  FieldSet,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"

const examples = [
  {
    label: "vertical (default)",
    code: `import { Field, FieldLabel, FieldDescription } from "@/components/ui/field"
import { Input } from "@/components/ui/input"

<Field>
  <FieldLabel htmlFor="name">Name</FieldLabel>
  <Input id="name" placeholder="John Doe" />
  <FieldDescription>Your full name.</FieldDescription>
</Field>`,
    component: (
      <Field>
        <FieldLabel htmlFor="name">Name</FieldLabel>
        <Input id="name" placeholder="John Doe" />
        <FieldDescription>Your full name.</FieldDescription>
      </Field>
    ),
  },
  {
    label: "error state",
    code: `import { Field, FieldLabel, FieldError } from "@/components/ui/field"
import { Input } from "@/components/ui/input"

<Field data-invalid="true">
  <FieldLabel htmlFor="password">Password</FieldLabel>
  <Input id="password" type="password" aria-invalid="true" />
  <FieldError errors={[
    { message: "Must be at least 8 characters." },
    { message: "Must contain a number." },
  ]} />
</Field>`,
    component: (
      <Field data-invalid="true">
        <FieldLabel htmlFor="password">Password</FieldLabel>
        <Input id="password" type="password" aria-invalid="true" />
        <FieldError
          errors={[
            { message: "Must be at least 8 characters." },
            { message: "Must contain a number." },
          ]}
        />
      </Field>
    ),
  },
  {
    label: "fieldset with legend",
    code: `import { Field, FieldLabel, FieldSet, FieldLegend } from "@/components/ui/field"
import { Input } from "@/components/ui/input"

<FieldSet>
  <FieldLegend>Address</FieldLegend>
  <Field>
    <FieldLabel htmlFor="street">Street</FieldLabel>
    <Input id="street" placeholder="123 Main St" />
  </Field>
  <Field>
    <FieldLabel htmlFor="city">City</FieldLabel>
    <Input id="city" placeholder="New York" />
  </Field>
</FieldSet>`,
    component: (
      <FieldSet>
        <FieldLegend>Address</FieldLegend>
        <Field>
          <FieldLabel htmlFor="street">Street</FieldLabel>
          <Input id="street" placeholder="123 Main St" />
        </Field>
        <Field>
          <FieldLabel htmlFor="city">City</FieldLabel>
          <Input id="city" placeholder="New York" />
        </Field>
      </FieldSet>
    ),
  },
  {
    label: "fieldgroup with separator",
    code: `import { Field, FieldLabel, FieldGroup, FieldSeparator } from "@/components/ui/field"
import { Input } from "@/components/ui/input"

<FieldGroup>
  <Field>
    <FieldLabel htmlFor="first">First name</FieldLabel>
    <Input id="first" placeholder="John" />
  </Field>
  <FieldSeparator />
  <Field>
    <FieldLabel htmlFor="last">Last name</FieldLabel>
    <Input id="last" placeholder="Doe" />
  </Field>
</FieldGroup>`,
    component: (
      <FieldGroup>
        <Field>
          <FieldLabel htmlFor="first">First name</FieldLabel>
          <Input id="first" placeholder="John" />
        </Field>
        <FieldSeparator />
        <Field>
          <FieldLabel htmlFor="last">Last name</FieldLabel>
          <Input id="last" placeholder="Doe" />
        </Field>
      </FieldGroup>
    ),
  },
]

function FieldExample({
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

export function FieldShowcase() {
  return (
    <div className="space-y-8">
      {examples.map((example) => (
        <FieldExample key={example.label} {...example} />
      ))}
    </div>
  )
}
