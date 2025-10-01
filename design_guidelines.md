# FirePath Landing Page - Design Guidelines

## Design Approach

**Reference-Based Approach**: Drawing inspiration from Luna Budgeting's clean, modern aesthetic while tailoring for financial planning. Key references: Luna Budgeting (primary), Linear (typography), Stripe (color restraint).

**Design Principles**: 
- Clarity over complexity - financial planning should feel approachable
- Modern sophistication with soft gradients and clean lines
- Trust-building through professional polish and thoughtful hierarchy
- Playful yet authoritative tone

## Core Design Elements

### Color Palette

**Dark Mode** (Primary):
- Background: 240 8% 12% (deep navy-charcoal)
- Surface: 240 6% 18% (elevated cards)
- Primary Brand: 260 75% 65% (soft purple - represents financial growth)
- Accent: 200 85% 55% (cyan - for CTAs and highlights)
- Text Primary: 240 5% 96%
- Text Secondary: 240 4% 70%

**Light Mode**:
- Background: 240 20% 98%
- Surface: 0 0% 100%
- Primary Brand: 260 70% 55%
- Accent: 200 75% 45%

**Gradient Applications**:
- Hero background: Subtle gradient from 260 40% 20% to 240 35% 15%
- Card highlights: Soft purple-to-cyan edge glow (opacity 10-15%)
- CTA buttons: Gradient from primary to accent

### Typography

**Font Stack**: 
- Primary: Inter (via Google Fonts CDN)
- Accent/Display: Space Grotesk (for headlines)

**Type Scale**:
- Hero Headline: text-6xl md:text-7xl, font-bold, Space Grotesk
- Section Headers: text-4xl md:text-5xl, font-bold, Space Grotesk
- Subsection Titles: text-2xl md:text-3xl, font-semibold
- Body: text-base md:text-lg, leading-relaxed
- Small/Meta: text-sm, opacity-70

### Layout System

**Spacing Primitives**: Tailwind units of 4, 6, 8, 12, 16, 20, 24, 32
- Section padding: py-16 md:py-24 lg:py-32
- Card padding: p-6 md:p-8
- Element gaps: gap-4, gap-6, gap-8

**Container Strategy**:
- Max width: max-w-7xl mx-auto
- Section padding: px-6 md:px-8
- Content max-width: max-w-4xl for text-heavy sections

## Component Library

### Header
- Sticky navigation: backdrop-blur-lg with subtle border-b
- Logo: FirePath wordmark with flame icon
- Nav links: hover:text-accent transition
- Download button: Gradient fill, rounded-full, px-6 py-2.5

### Hero Section
- Height: min-h-[85vh] - not forced 100vh
- Layout: Two-column on lg+, stacked on mobile
- Left: Headline, subheadline, CTA cluster (primary + secondary link)
- Right: iPhone mockup with placeholder (tilted 5deg, shadow-2xl)
- Background: Gradient overlay with subtle animated gradient shift

### Feature Cards
- Grid: grid-cols-1 md:grid-cols-2 gap-8
- Card style: Rounded-2xl, backdrop-blur, border border-white/10
- Hover: scale-[1.02] transition, glow effect
- Content: Icon (top), title, description
- Icons: Use Heroicons outline style

### Plans/Strategies Section
- Three-column grid on desktop (grid-cols-1 md:grid-cols-3)
- Card design: Elevated with subtle gradient border
- Each card: Badge (plan type), title, bullet points, "Learn More" link
- Highlight middle card with accent glow

### About Section
- Two-column layout: Text left, visual/founder right
- Max-width: max-w-5xl
- Personal touch: Include mission statement with emphasis styling
- Supporting text: opacity-80, leading-relaxed

### Footer
- Dark surface (darker than body)
- Three-column grid: Links, Legal, Social
- Links: opacity-70, hover:opacity-100
- Bottom bar: Copyright, minimal design

## Animations

**Sparingly Applied**:
- Hero CTA: Gentle pulse effect on gradient
- Scroll-triggered: Fade-in cards with stagger (delay-100, delay-200)
- Phone mockup: Subtle floating animation (animate-float custom keyframe)
- NO scroll-jacking or excessive motion

## Mobile Screenshot Placeholders

**Specifications**:
- Container: Relative positioned div with iPhone frame overlay
- Aspect ratio: 9:19.5 (iPhone 15 Pro)
- Placeholder: Gray gradient with "Screenshot Here" text centered
- Frame: Use absolute positioned SVG or CSS to create Dynamic Island bezel
- Shadow: shadow-2xl with purple tint
- Placement: Hero (1 phone), Features section (2-3 phones showing different screens)

## Images

**Hero Section**: 
- Large hero image: iPhone mockup showing FirePath dashboard
- Style: Tilted perspective (rotateY: 5deg), floating with shadow
- Background: Gradient overlay, NOT full-bleed photo

**Feature Section Images**:
- 3-4 mobile screenshots showcasing: Simple Mode, Advanced Mode, Plans comparison, Results dashboard
- Placement: Alternating left-right layout on desktop, centered on mobile

**About Section**:
- Optional: Small founder photo (rounded-full, border-2 border-accent)
- Supporting graphic: Abstract financial growth illustration (low opacity background)

## Critical Quality Notes

- Full-featured sections: Each section should feel complete with 3-5 meaningful elements
- Multi-column strategy: Use 2-3 columns for features, single column for hero/about
- Vertical rhythm: Consistent py-20 md:py-32 between major sections
- NO forced viewport heights except hero (85vh max)
- Rich footer: Newsletter signup, social links, full navigation, trust indicators
- Button enrichment: Primary CTAs with supporting "No account required" microcopy
- Generous whitespace between sections, but purposeful density within cards