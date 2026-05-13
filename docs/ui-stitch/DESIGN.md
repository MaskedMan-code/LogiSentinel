---
name: Fleet Intelligence System
colors:
  surface: '#081425'
  surface-dim: '#081425'
  surface-bright: '#2f3a4c'
  surface-container-lowest: '#040e1f'
  surface-container-low: '#111c2d'
  surface-container: '#152031'
  surface-container-high: '#1f2a3c'
  surface-container-highest: '#2a3548'
  on-surface: '#d8e3fb'
  on-surface-variant: '#c6c6cd'
  inverse-surface: '#d8e3fb'
  inverse-on-surface: '#263143'
  outline: '#909097'
  outline-variant: '#45464d'
  surface-tint: '#bec6e0'
  primary: '#bec6e0'
  on-primary: '#283044'
  primary-container: '#0f172a'
  on-primary-container: '#798098'
  inverse-primary: '#565e74'
  secondary: '#b9c7e0'
  on-secondary: '#233144'
  secondary-container: '#3c4a5e'
  on-secondary-container: '#abb9d2'
  tertiary: '#dec29a'
  on-tertiary: '#3e2d11'
  tertiary-container: '#231500'
  on-tertiary-container: '#957d5a'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#dae2fd'
  primary-fixed-dim: '#bec6e0'
  on-primary-fixed: '#131b2e'
  on-primary-fixed-variant: '#3f465c'
  secondary-fixed: '#d5e3fd'
  secondary-fixed-dim: '#b9c7e0'
  on-secondary-fixed: '#0d1c2f'
  on-secondary-fixed-variant: '#3a485c'
  tertiary-fixed: '#fcdeb5'
  tertiary-fixed-dim: '#dec29a'
  on-tertiary-fixed: '#271901'
  on-tertiary-fixed-variant: '#574425'
  background: '#081425'
  on-background: '#d8e3fb'
  surface-variant: '#2a3548'
typography:
  h1:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: -0.02em
  h2:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
    letterSpacing: -0.01em
  body-lg:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-sm:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  data-mono:
    fontFamily: JetBrains Mono
    fontSize: 13px
    fontWeight: '500'
    lineHeight: 16px
  label-caps:
    fontFamily: Inter
    fontSize: 11px
    fontWeight: '700'
    lineHeight: 16px
    letterSpacing: 0.05em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  unit: 4px
  gutter: 16px
  margin: 24px
  container-max-width: 1600px
  density: high
---

## Brand & Style

The design system is engineered for mission-critical logistics and security environments. It prioritizes **operational efficiency** and **high-density information management**, evoking a sense of "Command and Control." 

The visual direction leans into a **Modern Enterprise** aesthetic: a synthesis of utilitarian precision and a "slightly futuristic" tech layer. The emotional response is one of absolute reliability and technical sophistication. This is achieved through solid, weighted colors that provide a grounded feel, moving away from consumer-grade transparency or vibrant gradients. The interface feels like an instrument—rugged, precise, and authoritative.

## Colors

The palette is built on a foundation of **Deep Navy and Slate**, providing a low-strain environment for 24/7 monitoring. 

- **Foundation:** The primary background is a near-black Midnight Blue (#020617), with surfaces using the Midnight Blue (#0F172A) to create clear structural separation.
- **Accents:** Semantic colors are highly saturated to ensure instant recognition against the dark backdrop. 
- **Application:** Use solid colors for all UI elements. Avoid linear or radial gradients. Status-driven elements (Emerald, Amber, Crimson) should be used sparingly for maximum signal-to-noise ratio. Azure Blue is reserved strictly for AI-driven insights and information-rich system feedback.

## Typography

This system uses **Inter** as its primary typeface to ensure maximum legibility across dense data environments. 

- **Hierachy:** Use `label-caps` for table headers and section titles to create clear structural breaks. 
- **Data Display:** For coordinates, timestamps, and fleet ID numbers, use **JetBrains Mono** to prevent character confusion (e.g., '0' vs 'O') and ensure numerical alignment in tables.
- **Contrast:** Maintain high contrast between text and background. Primary text should be Slate-100/White, while secondary metadata should be Slate-400.

## Layout & Spacing

The layout employs a **Fluid-Fixed Hybrid Grid**. The sidebar and utility panels occupy fixed widths (280px and 320px respectively), while the central intelligence dashboard fluidly expands.

- **Rhythm:** A strict 4px baseline grid ensures alignment across complex data tables and multi-card layouts.
- **Density:** This is a **high-density** system. Minimize whitespace in favor of information proximity, using 8px or 12px padding within cards and table cells.
- **Breakpoints:** 
  - Desktop: 12-column grid, 24px margins.
  - Tablet: 8-column grid, 16px margins.
  - Mobile: 4-column grid, 12px margins (focusing on single-metric alerts).

## Elevation & Depth

Depth is conveyed through **tonal layering and subtle border-strokes** rather than heavy shadows.

- **Surfaces:** Use a three-tier elevation model.
  - Level 0: App Background (#020617)
  - Level 1: Sidebar/Cards (#0F172A)
  - Level 2: Modals/Popovers (#1E293B)
- **Borders:** Every interactive surface or container must have a 1px solid stroke (Slate-800). This provides the "sharp" technical look.
- **Shadows:** Use "Professional Shadows"—low-offset, highly diffused shadows (e.g., `0 4px 12px rgba(0,0,0,0.5)`) only for Level 2 elements to separate them from the dashboard grid.

## Shapes

The design system utilizes **Sharp Corners** with a consistent 4px radius (`rounded-sm`). This creates a technical, hardware-inspired aesthetic that feels more "professional tool" and less "consumer app."

- **Action Elements:** Buttons and Input fields use the 4px radius. 
- **Status Badges:** Use a 2px radius or full-square corners for a more industrial feel.
- **Progress Bars:** Maintain sharp ends; do not use rounded caps.

## Components

- **High-Density Cards:** Containers should have a 1px stroke (#1E293B) and a "header" area with a slightly darker background. Vital stats should be displayed in the upper right.
- **Structured Tables:** Use sticky headers with a #1E293B background. Row hovering should trigger a subtle Slate-800 highlight. Use JetBrains Mono for all numeric columns.
- **Status Badges:** Implement a "Subtle Glow" effect using a text-shadow or a very small, high-spread box shadow matching the semantic color (e.g., Emerald Green glow for "Active").
- **Conversational AI Bubbles:** Bubbles should be rectangular with the standard 4px radius. The "Agent" bubble uses a Deep Navy background with an Azure Blue left-border accent. User bubbles use a Charcoal Gray.
- **Progress Bars:** Use solid fills. For critical updates, the progress bar may feature a subtle "pulse" animation.
- **Timelines:** Vertical 2px lines in Slate-700 with small 8px square nodes indicating events. Current events should have the Azure Blue glow.
- **Input Fields:** Dark backgrounds (#020617) with 1px Slate-700 borders. On focus, the border changes to Azure Blue with no outer glow.