---
version: alpha
name: erau-cultural-dashboard
description: A regal, dark heritage design system for the AI-Based Smart Cultural Festival Dashboard of Kesultanan Kutai Kartanegara Ing Martadipura (Erau 2024). Anchored on an obsidian black canvas (#0f0e0c) with warm royal Kutai gold (#caa45e) serving as the primary brand voltage across calls-to-action, active navigation states, interactive map pins, and data metrics. Background surfaces utilize deep charcoal tones (#14120f, #191612) accented by subtle geometric songket diamond lattice textures. Typography pairs an authoritative editorial serif (Playfair Display / Cinzel) for royal headlines and numbers with a precision geometric sans (Plus Jakarta Sans) for UI controls, navigation, and cultural metadata.

colors:
  primary: "#caa45e"
  primary-active: "#b08e48"
  primary-hover: "#d9be75"
  primary-disabled: "#5a4c32"
  primary-subtle: "#2d2416"
  primary-glow: "rgba(202, 164, 94, 0.15)"
  secondary-accent: "#e5c88b"
  canvas: "#0f0e0c"
  surface-sidebar: "#14120f"
  surface-card: "#191612"
  surface-card-hover: "#221e18"
  surface-card-active: "#2a241c"
  surface-soft: "#1f1b16"
  surface-overlay: "#161411"
  hairline: "#2a241b"
  hairline-soft: "#1e1a14"
  border-strong: "#3d3322"
  border-gold: "#caa45e"
  border-gold-subtle: "#463b27"
  ink-display: "#f5f2eb"
  ink-primary: "#ede8de"
  text-gold: "#caa45e"
  text-gold-light: "#d9be75"
  body: "#bfb8aa"
  muted: "#827867"
  muted-soft: "#574f43"
  on-primary: "#0f0e0c"
  on-dark: "#f5f2eb"
  tag-bg: "#231f18"
  map-pin: "#caa45e"
  map-pin-glow: "rgba(202, 164, 94, 0.35)"
  scrim: "rgba(0, 0, 0, 0.75)"

typography:
  display-hero:
    fontFamily: "'Playfair Display', 'Cinzel', Georgia, serif"
    fontSize: 44px
    fontWeight: 700
    lineHeight: 1.15
    letterSpacing: -0.5px
  display-lg:
    fontFamily: "'Playfair Display', 'Cinzel', Georgia, serif"
    fontSize: 32px
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: 0
  display-md:
    fontFamily: "'Playfair Display', Georgia, serif"
    fontSize: 28px
    fontWeight: 600
    lineHeight: 1.25
    letterSpacing: 0
  display-sm:
    fontFamily: "'Playfair Display', Georgia, serif"
    fontSize: 22px
    fontWeight: 600
    lineHeight: 1.3
    letterSpacing: 0
  stat-display:
    fontFamily: "'Playfair Display', Georgia, serif"
    fontSize: 32px
    fontWeight: 700
    lineHeight: 1.1
    letterSpacing: 0
  title-lg:
    fontFamily: "'Plus Jakarta Sans', -apple-system, sans-serif"
    fontSize: 20px
    fontWeight: 600
    lineHeight: 1.3
    letterSpacing: 0
  title-md:
    fontFamily: "'Plus Jakarta Sans', -apple-system, sans-serif"
    fontSize: 16px
    fontWeight: 600
    lineHeight: 1.35
    letterSpacing: 0
  title-sm:
    fontFamily: "'Plus Jakarta Sans', -apple-system, sans-serif"
    fontSize: 15px
    fontWeight: 600
    lineHeight: 1.3
    letterSpacing: 0
  body-md:
    fontFamily: "'Plus Jakarta Sans', -apple-system, sans-serif"
    fontSize: 15px
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: 0
  body-sm:
    fontFamily: "'Plus Jakarta Sans', -apple-system, sans-serif"
    fontSize: 13px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: 0
  caption:
    fontFamily: "'Plus Jakarta Sans', -apple-system, sans-serif"
    fontSize: 12px
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: 0
  caption-sm:
    fontFamily: "'Plus Jakarta Sans', -apple-system, sans-serif"
    fontSize: 11px
    fontWeight: 400
    lineHeight: 1.4
    letterSpacing: 0
  eyebrow:
    fontFamily: "'Plus Jakarta Sans', -apple-system, sans-serif"
    fontSize: 11px
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: 1.5px
    textTransform: uppercase
  badge:
    fontFamily: "'Plus Jakarta Sans', -apple-system, sans-serif"
    fontSize: 10px
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: 0.8px
    textTransform: uppercase
  button-md:
    fontFamily: "'Plus Jakarta Sans', -apple-system, sans-serif"
    fontSize: 14px
    fontWeight: 600
    lineHeight: 1.25
    letterSpacing: 0
  button-sm:
    fontFamily: "'Plus Jakarta Sans', -apple-system, sans-serif"
    fontSize: 13px
    fontWeight: 500
    lineHeight: 1.25
    letterSpacing: 0
  nav-link:
    fontFamily: "'Plus Jakarta Sans', -apple-system, sans-serif"
    fontSize: 14px
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: 0

rounded:
  none: 0px
  xs: 4px
  sm: 6px
  md: 10px
  lg: 16px
  xl: 24px
  full: 9999px

spacing:
  xxs: 2px
  xs: 4px
  sm: 8px
  md: 12px
  base: 16px
  lg: 20px
  xl: 24px
  xxl: 32px
  section: 48px

components:
  sidebar:
    backgroundColor: "{colors.surface-sidebar}"
    borderColor: "{colors.hairline}"
    width: 260px
    padding: 24px 16px
  sidebar-header:
    backgroundColor: transparent
    textColor: "{colors.ink-display}"
    typography: "{typography.title-sm}"
    padding: 0 8px 24px 8px
  sidebar-nav-item:
    backgroundColor: transparent
    textColor: "{colors.body}"
    typography: "{typography.nav-link}"
    rounded: "{rounded.xs}"
    padding: 10px 14px
    height: 42px
  sidebar-nav-item-active:
    backgroundColor: "{colors.primary-subtle}"
    textColor: "{colors.text-gold}"
    typography: "{typography.nav-link}"
    borderColor: "{colors.primary}"
    rounded: "{rounded.xs}"
    padding: 10px 14px
    height: 42px
  sidebar-ai-dock:
    backgroundColor: "{colors.surface-card}"
    borderColor: "{colors.border-gold-subtle}"
    textColor: "{colors.text-gold}"
    typography: "{typography.badge}"
    rounded: "{rounded.sm}"
    padding: 10px 14px
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button-md}"
    rounded: "{rounded.xs}"
    padding: 12px 24px
    height: 44px
  button-primary-active:
    backgroundColor: "{colors.primary-active}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.xs}"
  button-primary-disabled:
    backgroundColor: "{colors.primary-disabled}"
    textColor: "{colors.muted}"
    rounded: "{rounded.xs}"
  button-outline:
    backgroundColor: "{colors.surface-overlay}"
    borderColor: "{colors.border-gold-subtle}"
    textColor: "{colors.text-gold}"
    typography: "{typography.button-md}"
    rounded: "{rounded.xs}"
    padding: 11px 23px
    height: 44px
  button-outline-active:
    backgroundColor: "{colors.primary-subtle}"
    borderColor: "{colors.primary}"
    textColor: "{colors.primary-hover}"
    rounded: "{rounded.xs}"
  hero-banner:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink-display}"
    padding: 64px 48px
    minHeight: 520px
  hero-tagline-bar:
    backgroundColor: transparent
    textColor: "{colors.muted}"
    typography: "{typography.caption-sm}"
    padding: 16px 0
  kpi-stat-card:
    backgroundColor: "{colors.surface-card}"
    borderColor: "{colors.hairline}"
    textColor: "{colors.ink-primary}"
    rounded: "{rounded.sm}"
    padding: 20px
    height: 140px
  ritual-card:
    backgroundColor: "{colors.surface-card}"
    borderColor: "{colors.hairline}"
    textColor: "{colors.ink-primary}"
    rounded: "{rounded.sm}"
    overflow: hidden
  ritual-number-badge:
    backgroundColor: "{colors.tag-bg}"
    textColor: "{colors.text-gold}"
    typography: "{typography.caption}"
    rounded: "{rounded.xs}"
    padding: 3px 8px
  section-header:
    backgroundColor: transparent
    textColor: "{colors.ink-display}"
    typography: "{typography.display-md}"
    padding: 0 0 20px 0
  map-viewport:
    backgroundColor: "{colors.surface-card}"
    borderColor: "{colors.hairline}"
    rounded: "{rounded.sm}"
    height: 460px
    overflow: hidden
  map-pin-hotspot:
    backgroundColor: "{colors.map-pin}"
    borderColor: "{colors.canvas}"
    rounded: "{rounded.full}"
    width: 14px
    height: 14px
  map-site-list-item:
    backgroundColor: "{colors.surface-card}"
    borderColor: "{colors.hairline}"
    textColor: "{colors.body}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.xs}"
    padding: 14px 16px
  map-site-list-item-active:
    backgroundColor: "{colors.surface-card-active}"
    borderColor: "{colors.border-gold}"
    textColor: "{colors.ink-primary}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.xs}"
    padding: 14px 16px
  map-legend-item:
    backgroundColor: transparent
    textColor: "{colors.body}"
    typography: "{typography.caption}"
    padding: 6px 12px
  archive-tab-pill:
    backgroundColor: "{colors.surface-card}"
    borderColor: "{colors.hairline}"
    textColor: "{colors.muted}"
    typography: "{typography.button-sm}"
    rounded: "{rounded.xs}"
    padding: 8px 18px
  archive-tab-pill-active:
    backgroundColor: "{colors.surface-card-active}"
    borderColor: "{colors.border-gold}"
    textColor: "{colors.text-gold}"
    typography: "{typography.button-sm}"
    rounded: "{rounded.xs}"
    padding: 8px 18px
  archive-media-card:
    backgroundColor: "{colors.surface-card}"
    borderColor: "{colors.hairline}"
    textColor: "{colors.ink-primary}"
    rounded: "{rounded.sm}"
    overflow: hidden
    padding: 0 0 16px 0
  archive-year-badge:
    backgroundColor: "{colors.tag-bg}"
    textColor: "{colors.text-gold}"
    typography: "{typography.caption-sm}"
    rounded: "{rounded.xs}"
    padding: 2px 7px
---

## Overview

The Smart Cultural Festival Dashboard for **Kesultanan Kutai Kartanegara Ing Martadipura (Erau 2024)** is a heritage intelligence interface that pairs sovereign royal tradition with contemporary artificial intelligence. The design system is anchored on an **obsidian black canvas** (`{colors.canvas}` — #0f0e0c) representing ceremonial reverence and cosmic mystery, illuminated by **royal Kutai gold** (`{colors.primary}` — #caa45e) which carries every primary CTA, interactive state indicator, active navigation mark, and sacred milestone.

Unlike consumer marketplaces that operate on bright white cards and high-saturation flat colors, this interface adopts an editorial dark heritage aesthetic. Surfaces carry deep charcoal warmth (`{colors.surface-sidebar}` — #14120f, `{colors.surface-card}` — #191612) textured with subtle geometric Songket and tenun diamond lattice motifs. Typography pairs regal display serif typefaces (**Playfair Display** and **Cinzel**) with a clean, high-legibility geometric sans-serif (**Plus Jakarta Sans**) for operational clarity across rituals, archives, and geographic data.

The dashboard organizes complex cultural knowledge across four core modules:
1. **Beranda & Hero Storytelling:** High-impact photographic stage highlighting the 13 sacred ritual phases through visual storytelling and direct AI interaction.
2. **Kutai Cultural Metrics:** Four monumental KPI stat cards summarizing ritual stages, kingdom lineage from the 4th century (Kerajaan Kutai Martapura), and active cultural interpretation systems.
3. **Peta Budaya (Cultural Geography):** Interactive architectural viewport of Tenggarong and royal sites (Keraton, Museum Mulawarman, Sungai Mahakam, Pulau Kumala) with active hotspot pins and contextual cultural registries.
4. **Warisan & Filosofi (Digital Archive):** Categorized archival repository spanning field photography, sacred manuscripts, cultural symbols, historical figures, and lineage references.

**Key Characteristics:**
- **Regal Royal Gold (`{colors.primary}` — #caa45e):** The primary ceremonial color, inspired by the royal regalia, keris ornaments, and golden yellow umbrella insignias of the Sultanate of Kutai Kartanegara. Used selectively to guide attention to interactive priorities without overwhelming the dark backdrop.
- **Dual-Layer Typography:** Regal serif headlines evoke historical permanence and palace tradition; modern sans-serif body copy delivers effortless readability for dense cultural metadata.
- **Fixed Sovereign Navigation:** Persistent 260px left sidebar crowned by the emblem of Kesultanan Kutai Kartanegara, finished with a subtle 1px warm gold hairline border and integrated with a dedicated bottom AI Assistant dock.
- **Geometric Songket Patterning:** Structural backgrounds incorporate faint diamond argyle and weaving motifs echoing traditional East Kalimantan textiles.
- **Photo-Led Cultural Cards:** Visual assets lead the interface with rich ritual documentation, framed by subtle 1px hairlines (`{colors.hairline}` — #2a241b) and bottom metadata plates.
- **Zero Garish Shadows:** Depth is achieved through precise surface tone layering (#0f0e0c -> #14120f -> #191612), hairline borders, and gentle gold ambient glows (`{colors.primary-glow}`) rather than heavy diffuse drop shadows.

## Colors

### Brand & Accent
- **Royal Kutai Gold** (`{colors.primary}` — #caa45e): The core sovereign brand accent. Applied to primary CTA buttons ("Eksplorasi Ritual Erau"), active sidebar indicators, KPI stat values, map hotspot markers, and active filter pill borders.
- **Royal Gold Active** (`{colors.primary-active}` — #b08e48): Pressed and active interaction tone for gold buttons and primary controls.
- **Royal Gold Hover** (`{colors.primary-hover}` — #d9be75): Lighter, brilliant gold tint triggered when hovering over buttons, text links, and icons.
- **Royal Gold Disabled** (`{colors.primary-disabled}` — #5a4c32): Subdued, low-contrast gold applied to inactive or unavailable interactive states.
- **Primary Subtle / Tint** (`{colors.primary-subtle}` — #2d2416): Deep warm amber wash utilized for active sidebar nav background pills and highlighted card states.
- **Primary Ambient Glow** (`{colors.primary-glow}` — rgba(202, 164, 94, 0.15)): Radial atmospheric highlight used beneath active map pins and featured metric accents.
- **Secondary Accent Cream** (`{colors.secondary-accent}` — #e5c88b): Warm secondary gold tint applied to italicized headline phrases ("melalui Cerita,").

### Surface
- **Canvas** (`{colors.canvas}` — #0f0e0c): The foundational floor of the application. An obsidian royal black providing maximum contrast for gold accents and documentary photography.
- **Sidebar Surface** (`{colors.surface-sidebar}` — #14120f): Deep charcoal surface with embedded diamond pattern overlay grounding the persistent left navigation bar.
- **Card Surface** (`{colors.surface-card}` — #191612): Standard elevated container background for KPI metrics, cultural ritual cards, geographic list entries, and archival items.
- **Card Surface Hover** (`{colors.surface-card-hover}` — #221e18): Interactive hover state for cards and list rows.
- **Card Surface Active** (`{colors.surface-card-active}` — #2a241c): Active selected state for cultural site rows in Peta Budaya.
- **Surface Soft** (`{colors.surface-soft}` — #1f1b16): Intermediate tonal fill for secondary chips and inactive input fields.
- **Surface Overlay** (`{colors.surface-overlay}` — #161411): Background fill for outline buttons and floating toolbars.

### Hairlines & Borders
- **Hairline** (`{colors.hairline}` — #2a241b): Universal 1px dividing border separating sidebar columns, card bounds, and section rules.
- **Hairline Soft** (`{colors.hairline-soft}` — #1e1a14): Muted secondary line for internal card partitions and inactive list row borders.
- **Border Strong** (`{colors.border-strong}` — #3d3322): Pronounced structural boundary applied to highlighted cards on hover.
- **Border Gold** (`{colors.border-gold}` — #caa45e): High-emphasis border for active filter tabs and primary focus rings.
- **Border Gold Subtle** (`{colors.border-gold-subtle}` — #463b27): Warm brass perimeter for secondary buttons and the AI Assistant dock container.

### Text
- **Ink Display** (`{colors.ink-display}` — #f5f2eb): Royal ivory-cream text for primary serif display headlines ("Mengenal Erau", "Peta Budaya", "Warisan & Filosofi").
- **Ink Primary** (`{colors.ink-primary}` — #ede8de): Crisp off-white text for component titles, metric card labels, and primary button labels on dark surfaces.
- **Text Gold** (`{colors.text-gold}` — #caa45e): Accent label color for active links, "LIHAT SEMUA 13 ->" triggers, and category badges.
- **Text Gold Light** (`{colors.text-gold-light}` — #d9be75): Softer gold used for italicized headline segments and emphasized body quotes.
- **Body** (`{colors.body}` — #bfb8aa): Balanced sand-gray tone for multiline descriptive body paragraphs and navigation links.
- **Muted** (`{colors.muted}` — #827867): Subtitle copy, metadata labels ("RITUAL ERAU", "NUSANTARA"), and inactive category pills.
- **Muted Soft** (`{colors.muted-soft}` — #574f43): Low-prominence copyright marks, disabled labels, and secondary tags.
- **On Primary** (`{colors.on-primary}` — #0f0e0c): Obsidian text providing sharp contrast on solid royal gold buttons.

### Scrim & Visual Effects
- **Modal Scrim** (`{colors.scrim}` — rgba(0, 0, 0, 0.75)): Deep translucent blackout applied behind cultural modals and AI chat interfaces.
- **Photo Vignette Gradient**: Linear black gradient (`linear-gradient(180deg, rgba(15,14,12,0.2) 0%, rgba(15,14,12,0.95) 100%)`) overlaid on hero imagery and card photographs to preserve text contrast.

## Typography

### Font Family
The typography architecture is deliberately bifurcated to express both historical dignity and contemporary analytical capability:
- **Display Serif:** **Playfair Display** (with **Cinzel** or **Cormorant Garamond** as royal display fallbacks; standard system fallback: `Georgia, serif`). Used for all major page headers, hero titles, ritual sequence titles, and KPI numerals.
- **UI & Body Sans:** **Plus Jakarta Sans** (fallbacks: `Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif`). Used for all UI controls, navigation items, descriptive text, data tags, and AI assistant interaction.

### Hierarchy

| Token | Size | Weight | Line Height | Letter Spacing | Use |
|---|---|---|---|---|---|
| `{typography.display-hero}` | 44px | 700 | 1.15 | -0.5px | Hero h1 display ("Mengenal Erau melalui Cerita, Visual, dan AI") |
| `{typography.display-lg}` | 32px | 700 | 1.20 | 0 | Major section display headers ("Ritual Erau") |
| `{typography.display-md}` | 28px | 600 | 1.25 | 0 | Sub-module headers ("Peta Budaya", "Warisan & Filosofi") |
| `{typography.display-sm}` | 22px | 600 | 1.30 | 0 | Modal titles and detailed ritual feature titles |
| `{typography.stat-display}` | 32px | 700 | 1.10 | 0 | KPI metric display numbers ("13", "Erau", "abad IV", "AI") |
| `{typography.title-lg}` | 20px | 600 | 1.30 | 0 | Section sub-heads and geographic site drawer headings |
| `{typography.title-md}` | 16px | 600 | 1.35 | 0 | Card titles ("Prosesi Beluluh Sultan", "Tahapan Prosesi") |
| `{typography.title-sm}` | 15px | 600 | 1.30 | 0 | Sidebar title ("Smart Cultural Festival Dashboard") |
| `{typography.body-md}` | 15px | 400 | 1.60 | 0 | Hero lead description copy and cultural narrations |
| `{typography.body-sm}` | 13px | 400 | 1.50 | 0 | Geographic list descriptions, archive metadata, card notes |
| `{typography.caption}` | 12px | 500 | 1.40 | 0 | Card attributions, map site selection hints, table labels |
| `{typography.caption-sm}` | 11px | 400 | 1.40 | 0 | Horizontal footer tags ("13 PROSESI • SEJARAH KERAJAAN...") |
| `{typography.eyebrow}` | 11px | 700 | 1.20 | 1.5px (caps) | Super-title section tags ("AI-BASED SMART CULTURAL FESTIVAL") |
| `{typography.badge}` | 10px | 600 | 1.20 | 0.8px (caps) | KPI categories ("RITUAL ERAU", "KUTAI KARTANEGARA") |
| `{typography.button-md}` | 14px | 600 | 1.25 | 0 | Primary CTA labels ("Eksplorasi Ritual Erau") |
| `{typography.button-sm}` | 13px | 500 | 1.25 | 0 | Filter tab pill labels ("Foto", "Naskah", "Simbol Budaya") |
| `{typography.nav-link}` | 14px | 500 | 1.40 | 0 | Sidebar navigation item labels ("Beranda", "Peta Budaya") |

### Principles
Display typography balances gravitas with editorial grace. Large headlines utilize italicized emphasis sparingly on key emotional phrases (e.g. `*melalui Cerita,*` in `{colors.text-gold-light}`) to create visual rhythm. Eyebrow headers always render in strict uppercase with generous letter spacing (1.5px) to frame content categories cleanly. Body copy remains at a generous 1.6 line-height to ensure comfort when reading historical summaries against the dark background.

### Note on Font Substitutes
If Playfair Display is not installed, Google Fonts `Cinzel` provides an equally regal classical authority. If Plus Jakarta Sans is unavailable, `Inter` or standard system sans-serif (`-apple-system, BlinkMacSystemFont, Segoe UI`) ensures visual parity with zero layout shifts.

## Layout

### Spacing System
- **Base unit:** 4px (with 2px micro-step).
- **Tokens:** `{spacing.xxs}` 2px · `{spacing.xs}` 4px · `{spacing.sm}` 8px · `{spacing.md}` 12px · `{spacing.base}` 16px · `{spacing.lg}` 20px · `{spacing.xl}` 24px · `{spacing.xxl}` 32px · `{spacing.section}` 48px.
- **Section spacing:** Sections stack with `{spacing.section}` (48px) of vertical separation, keeping the dashboard connected while providing distinct operational zones.
- **Card grid gap:** 16px to 20px grid spacing across KPI cards, featured rituals, and archive items.
- **Sidebar padding:** 24px vertical, 16px horizontal, isolating navigational items into clear tap targets.

### Grid & Container
- **App Shell Structure:** Fixed or sticky 260px left sidebar coupled with a fluid, right-hand main content canvas capping at 1440px max-width.
- **KPI Metrics Grid:** 4-column equal-width responsive grid (`repeat(4, minmax(0, 1fr))`) positioned above section modules.
- **Peta Budaya Layout:** Asymmetrical 2-column split featuring an interactive map canvas occupying ~68% width and a contextual site selection list occupying ~32% width.
- **Warisan & Filosofi Grid:** 4-column equal-width card matrix (`repeat(4, minmax(0, 1fr))`) displaying cultural assets.

### Whitespace Philosophy
The dashboard avoids the airy, hyper-sparse padding of commercial landing pages in favor of structured informational density suited to cultural curators, researchers, and festival visitors. Information density remains deliberate: cards provide sufficient padding (16px to 20px) to let imagery and historical facts breathe without requiring excessive page scrolling.

## Elevation

The design system eschews heavy multi-tiered drop shadows, favoring precise surface layering and luminous ambient gold borders:

- **Flat Baseline:** Main canvas at `{colors.canvas}` (#0f0e0c).
- **Surface Elevation:** Card modules sit at `{colors.surface-card}` (#191612) with 1px hairline boundary (`{colors.hairline}` — #2a241b).
- **Hover Lift:** Cards elevate subtly via background transition to `{colors.surface-card-hover}` (#221e18) with a delicate 1px border shift to `{colors.border-strong}` (#3d3322).
- **Gold Ambient Glow:** Active hotspots and interactive elements emit a soft radial glow: `box-shadow: 0 0 16px 2px rgba(202, 164, 94, 0.25)`.
- **Modal Overlay:** Global modal backdrop renders with `{colors.scrim}` (75% opacity black) to isolate cultural deep-dives and AI query dialogs.

## Components

### Navigation & Shell

**`sidebar`** — Persistent 260px wide container positioned on the left viewport. Features `{colors.surface-sidebar}` fill, a subtle diamond songket textile watermark, and a 1px right border in `{colors.hairline}`. Contains the royal house emblem, kingdom attribution header, main navigation links, and fixed bottom AI cultural assistant dock.

**`sidebar-header`** — Stacked branding block at the top of the sidebar. Displays the Kesultanan Kutai Kartanegara gold hexagonal seal, uppercase royal title "KESULTANAN KUTAI KARTANEGARA" (`{typography.caption-sm}` in `{colors.muted}`), main dashboard title "Smart Cultural Festival Dashboard" (`{typography.title-sm}` in `{colors.ink-display}`), and edition tag "AI-Based • Erau 2024" (`{typography.caption-sm}` in `{colors.text-gold}`).

**`sidebar-nav-item`** — Navigation list button with 42px height, 14px horizontal padding, and 4px corner radius. Contains a 16px geometric line icon (hexagon, diamond, concentric rings, book, compass, spark, half-circle) paired with an item label in `{typography.nav-link}`. Default state renders with `{colors.body}` text and transparent background.

**`sidebar-nav-item-active`** — The active navigation state. Applies `{colors.primary-subtle}` fill, `{colors.text-gold}` typography, and a 2px solid gold vertical accent bar on the left edge.

**`sidebar-ai-dock`** — Fixed card container pinned to the lower portion of the sidebar. Features `{colors.surface-card}` fill, 1px `{colors.border-gold-subtle}` border, gold ceremonial emblem, and "AI CULTURAL ASSISTANT" uppercase label in `{typography.badge}`. Serves as a persistent trigger for the conversational intelligence drawer.

### Buttons & Controls

**`button-primary`** — The primary CTA across the interface ("Eksplorasi Ritual Erau"). Features solid `{colors.primary}` fill, dark `{colors.on-primary}` typography in `{typography.button-md}`, 4px corner radius, and 12×24px padding. Hover state brightens to `{colors.primary-hover}`; active state deepens to `{colors.primary-active}`.

**`button-outline`** — Secondary CTA ("Tanyakan kepada AI"). Features `{colors.surface-overlay}` fill, 1px `{colors.border-gold-subtle}` border, and `{colors.text-gold}` typography in `{typography.button-md}`. On hover, transitions to `{colors.primary-subtle}` with `{colors.primary}` border.

**`archive-tab-pill`** — Filter control pill within the digital archive. Features `{colors.surface-card}` background, 1px `{colors.hairline}` border, and `{colors.muted}` text in `{typography.button-sm}`.

**`archive-tab-pill-active`** — Active filter pill state ("Foto"). Displays `{colors.surface-card-active}` background, 1px solid `{colors.border-gold}` border, and brilliant `{colors.text-gold}` text.

### Hero & Storytelling

**`hero-banner`** — Full-width photographic stage presenting the cultural spirit of Erau. Underlaid with archival festival photography featuring traditional Dayak and Melayu Kutai attire, balanced by a dark vignette gradient. Contains the uppercase eyebrow ("AI-BASED SMART CULTURAL FESTIVAL"), the dual-tone serif headline ("Mengenal Erau *melalui Cerita,* Visual, dan AI"), descriptive overview paragraph, primary and secondary CTA button pair, and lower cultural pillar tags ("13 PROSESI • SEJARAH KERAJAAN • FILOSOFI • KOSMOLOGI • VISUAL STORYTELLING").

**`hero-tagline-bar`** — Lower metadata strip beneath the hero CTAs displaying cultural taxonomy items separated by bullet points in `{typography.caption-sm}` and `{colors.muted}`.

### Metrics & Showcase Cards

**`kpi-stat-card`** — Metric card in the 4-column summary strip. Features `{colors.surface-card}` fill, 1px `{colors.hairline}` border, 20px internal padding, and 6px border radius. Comprises a top-placed icon glyph in gold, a 32px display value in `{typography.stat-display}` and `{colors.text-gold}`, a primary descriptive label in `{typography.title-md}` and `{colors.ink-primary}`, and an uppercase category badge in `{typography.badge}` and `{colors.muted}` ("RITUAL ERAU", "KUTAI KARTANEGARA", "NUSANTARA", "KNOWLEDGE SYSTEM").

**`ritual-card`** — Photographic showcase card representing an individual ritual phase (e.g., Beluluh, Menjamu Benua, Merangin, Mengulur Naga). Features a 4:3 documentary image plate with dark bottom gradient, sequential number badge ("01", "02", "03") pinned top-left, ritual title in `{typography.title-md}`, and subtle image zoom transform on hover.

**`ritual-number-badge`** — Compact tag positioned in the upper corner of ritual cards. Filled with `{colors.tag-bg}` and bordered by `{colors.border-gold-subtle}` with gold text in `{typography.caption}`.

### Cultural Map (Peta Budaya)

**`map-viewport`** — Main cultural geography stage occupying the left side of Peta Budaya. Houses an architectural heritage plate of Tenggarong and royal sites, overlaid with interactive golden pin hotspots, a bottom location breadcrumb ("TENGGARONG • KUTAI KARTANEGARA • KALIMANTAN TIMUR"), and a categorical legend strip.

**`map-pin-hotspot`** — Circular interactive marker (14px diameter) placed on historical coordinates. Styled with `{colors.map-pin}` fill, 2px `{colors.canvas}` outer ring, and a pulsating ambient glow (`{colors.map-pin-glow}`) indicating interactive readiness.

**`map-site-list-item`** — Clickable site item in the right-hand cultural geography list (Keraton Kutai Kartanegara, Museum Mulawarman, Sungai Mahakam, Alun-Alun Tenggarong, Pulau Kumala, Makam Raja-Raja Kutai). Features `{colors.surface-card}` fill, 1px `{colors.hairline}` border, leading gold bullet marker, and title in `{typography.body-sm}`.

**`map-site-list-item-active`** — Highlighted state for the selected map destination. Features `{colors.surface-card-active}` background, 1px `{colors.border-gold}` stroke, and `{colors.ink-primary}` typography.

**`map-legend-item`** — Horizontal legend pill positioned along the bottom edge of the map, correlating marker types to site categories: "Keraton / Museum", "Lokasi Ritual", "Situs Sejarah", and "Destinasi Wisata".

### Digital Archive (Warisan & Filosofi)

**`archive-media-card`** — Visual archival container in the 4-column matrix. Contains a cropped photographic plate, top-right year tag ("2023", "2022"), category eyebrow ("FOTO • BELULUH", "FOTO • MELEPAS BURUNG"), archival entry title ("Prosesi Beluluh Sultan", "Pelepasan Burung Sakral") in `{typography.title-md}`, and institution attribution ("Dinas Kebudayaan Kukar", "Arsip Kesultanan") in `{typography.caption}`.

**`archive-year-badge`** — Year badge anchored to the upper-right corner of media cards. Dark pill background (`{colors.tag-bg}`) with 1px border and `{colors.text-gold}` numerals in `{typography.caption-sm}`.

## Responsive Behavior

| Breakpoint | Viewport Width | Layout Adaptations |
|---|---|---|
| Mobile | < 768px | Sidebar collapses into a slide-over off-canvas drawer triggered by a top royal header; Hero headline scales from 44px to 28px; Hero CTA buttons stack full-width; 4-column KPI metric grid collapses to a 2-column or single-column stack; Peta Budaya converts from 2-column split to stacked layout (map on top, site list below); Archive media grid reflows to 1-column. |
| Tablet | 768px – 1199px | Sidebar narrows to a compact icon-rail (72px) or standard 240px; KPI metric cards display 2x2 grid; Peta Budaya maintains split view at 60/40 ratio; Archive media grid displays 2-column layout; Ritual cards display 2 cards per view. |
| Desktop | 1200px – 1440px | Full standard experience: 260px fixed left sidebar, 4-column KPI strip, full 2-column Peta Budaya with map and site list, 3-card ritual highlight carousel, and 4-column Warisan & Filosofi archive grid. |
| Wide Desktop | > 1440px | Sidebar remains fixed at 260px; main canvas centers within 1440px max content boundary with balanced margins absorbing remaining viewport width. |

### Touch Targets
- Primary and secondary buttons maintain minimum 44px height and 44px touch bounding box.
- Sidebar navigation rows maintain 42px touch height with full-width clickable row area.
- Map pin hotspot markers incorporate an expanded 32px invisible hit target around the 14px visible glyph for accurate touch interaction.
- Archive tab pills measure minimum 36px height with generous horizontal padding (18px).

### Collapsing Strategy
- Below 768px, horizontal feature pill rows and category filter strips convert into smooth horizontal scroll containers (`overflow-x: auto; scrollbar-width: none;`).
- Multi-column card grids collapse progressively: 4 columns (Desktop) -> 2 columns (Tablet) -> 1 column (Mobile).
- The fixed AI Assistant dock in the sidebar switches to a floating circular action button (FAB) in the bottom-right viewport corner on mobile viewports.

## Known Gaps

- **Detailed Ritual Modal Interactions:** Step-by-step liturgical explanations for all 13 ritual phases (e.g. Beluluh, Menjamu Benua, Merangin, Ngaturken Semah, Mengulur Naga, Beumban, Begorok, Bepelas) are linked via cards but their internal modal pagination is not rendered in the primary overview.
- **AI Chat Dialog Specifications:** The conversational interface triggered by "Tanyakan kepada AI" and the bottom AI dock is represented as a persistent button and trigger; its expanded dialogue drawer and streaming token typography are not specified in these screens.
- **Audio & Video Archival Players:** The Warisan & Filosofi module includes tabs for "Naskah", "Simbol Budaya", and "Referensi", but video player controls and ancient script transcript viewers are not visible on the extracted photo archive screen.
- **Interactive Map Tiles Engine:** The map viewport utilizes a rich architectural visual with overlaid coordinates; full GIS vector tile zoom/pan behaviors and multi-layer clustering rules are deferred to technical map integration.
