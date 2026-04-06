---
name: update-design-system-screens
description: Regenerates all design-system screenshots by running the Astro dev server and capturing every page in light and dark mode via playwright-cli. Interactive components (dialog, sonner, tooltip, popover, sheet) get additional interaction shots. Output goes to design-system/screens/. Use when the user asks to update, refresh, or regenerate design system screenshots.
---

# Update Design System Screens

Captures full-page screenshots of every page in the Interfero design system — both light and dark mode — plus interaction states for overlay/feedback components.

## Quick start

```
1. Start dev server  →  npm run dev  (in design-system/)
2. Note the port     →  usually 4321, may fall back to 4322
3. Run the capture   →  playwright-cli run-code + payload below
4. Close browser     →  playwright-cli close
```

## Step-by-step

### 1 — Start the dev server

```bash
cd design-system && npm run dev
```

Note the port from the output (`http://localhost:PORT/`). Kill any previous instance first if the port is in use.

### 2 — Open browser & set viewport

```bash
playwright-cli open http://localhost:PORT/colors
playwright-cli resize 1400 900
```

### 3 — Clear existing screenshots & capture everything

Use `playwright-cli run-code` with the payload below. Replace `BASE` and `OUT` with the actual port and absolute path.

```js
async page => {
  const BASE = "http://localhost:4322";
  const OUT  = "C:/Users/denni/Softwareentwicklung/interfero-ai/design-system/screens";
  const HIDE = '[data-sidebar="sidebar"] { display: none !important; } [data-slot="sidebar-inset"] { margin-left: 0 !important; width: 100vw !important; max-width: 100vw !important; }';

  const fs = require('fs');
  fs.rmSync(OUT, { recursive: true, force: true });
  fs.mkdirSync(OUT, { recursive: true });

  async function applyTheme(mode) {
    await page.evaluate(m => {
      localStorage.setItem('theme', m);
      document.documentElement.classList.toggle('dark', m === 'dark');
    }, mode);
    await page.waitForTimeout(300);
  }

  async function hideSidebar() {
    await page.addStyleTag({ content: HIDE });
    await page.waitForTimeout(200);
  }

  async function shot(name, fullPage = true) {
    await page.screenshot({ fullPage, path: OUT + '/' + name });
  }

  // ── Interaction helpers ────────────────────────────────────────────────────

  async function dialogInteraction(slug, mode) {
    const btn = page.getByRole('button', { name: 'Open Dialog' }).first();
    await btn.click();
    await page.waitForTimeout(400);
    await shot(slug + '-open-' + mode + '.png', false);
    await page.keyboard.press('Escape');
    await page.waitForTimeout(200);
  }

  async function sonnerInteraction(slug, mode) {
    const btns = page.getByRole('button');
    const count = await btns.count();
    for (let i = 0; i < count; i++) {
      await btns.nth(i).click();
      await page.waitForTimeout(100);
    }
    await page.waitForTimeout(500);
    await shot(slug + '-toasts-' + mode + '.png', false);
  }

  async function tooltipInteraction(slug, mode) {
    const btn = page.getByRole('button', { name: 'Hover me' }).first();
    await btn.hover();
    await page.waitForTimeout(600);
    await shot(slug + '-open-' + mode + '.png', false);
  }

  async function popoverInteraction(slug, mode) {
    const btn = page.getByRole('button', { name: 'Open Popover' }).first();
    await btn.click();
    await page.waitForTimeout(400);
    await shot(slug + '-open-' + mode + '.png', false);
    await page.keyboard.press('Escape');
    await page.waitForTimeout(200);
  }

  async function sheetInteraction(slug, mode) {
    const btn = page.getByRole('button', { name: 'Add Cluster' }).first();
    await btn.click();
    await page.waitForTimeout(500);
    await shot(slug + '-open-' + mode + '.png', false);
    await page.keyboard.press('Escape');
    await page.waitForTimeout(200);
  }

  const interactions = {
    dialog: dialogInteraction,
    sonner: sonnerInteraction,
    tooltip: tooltipInteraction,
    popover: popoverInteraction,
    sheet:   sheetInteraction,
  };

  // ── Page list  [route, slug, interactionKey|null] ──────────────────────────

  const PAGES = [
    ["/colors",                           "colors",      null],
    ["/fonts",                            "fonts",       null],
    ["/icons",                            "icons",       null],
    ["/components/form/button",           "button",      null],
    ["/components/form/field",            "field",       null],
    ["/components/form/select",           "select",      null],
    ["/components/form/switch",           "switch",      null],
    ["/components/feedback/alert",        "alert",       null],
    ["/components/feedback/dialog",       "dialog",      "dialog"],
    ["/components/feedback/empty",        "empty",       null],
    ["/components/feedback/progress",     "progress",    null],
    ["/components/feedback/skeleton",     "skeleton",    null],
    ["/components/feedback/sonner",       "sonner",      "sonner"],
    ["/components/feedback/spinner",      "spinner",     null],
    ["/components/feedback/tooltip",      "tooltip",     "tooltip"],
    ["/components/data-display/avatar",   "avatar",      null],
    ["/components/data-display/badge",    "badge",       null],
    ["/components/data-display/item",     "item",        null],
    ["/components/navigation/pagination", "pagination",  null],
    ["/components/navigation/tabs",       "tabs",        null],
    ["/components/overlay/popover",       "popover",     "popover"],
    ["/components/overlay/sheet",         "sheet",       "sheet"],
  ];

  // ── Main loop ──────────────────────────────────────────────────────────────

  for (const [route, slug, interaction] of PAGES) {
    for (const mode of ['light', 'dark']) {
      await page.goto(BASE + route, { waitUntil: 'networkidle' });
      await applyTheme(mode);
      await hideSidebar();
      await shot(slug + '-' + mode + '.png');
      if (interaction && interactions[interaction]) {
        await interactions[interaction](slug, mode);
      }
    }
  }
}
```

### 4 — Close browser

```bash
playwright-cli close
```

## Output

| Pattern | Description |
|---|---|
| `{slug}-light.png` | Full-page, light mode |
| `{slug}-dark.png` | Full-page, dark mode |
| `dialog-open-{mode}.png` | First dialog open |
| `sonner-toasts-{mode}.png` | All toasts stacked |
| `tooltip-open-{mode}.png` | Tooltip on "Hover me" |
| `popover-open-{mode}.png` | Popover open |
| `sheet-open-{mode}.png` | Sheet (right side) open |

## Adding new pages

1. Add a `[route, slug, interactionKey|null]` entry to the `PAGES` array.
2. If the new page has interactive components, add a matching helper function to `interactions`.
3. The `interactionKey` string must exactly match the key in the `interactions` object.

## Updating interactive component triggers

If button labels change, update the `getByRole` selector inside the relevant interaction helper in the run-code payload above.

## Notes

- The sidebar is hidden via injected CSS so content fills the full viewport.
- Theme is toggled by writing to `localStorage` + toggling the `dark` class on `<html>` — no page reload needed.
- `fullPage: false` for interaction shots keeps them viewport-sized (overlays are not part of the scrollable content).
