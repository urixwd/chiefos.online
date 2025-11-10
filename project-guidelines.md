# ChiefOS Landing Page - AI Agent Guidelines

## Project Overview

**Project Name:** ChiefOS Landing Page
**Framework:** React 18.3.1 + TypeScript + Vite
**UI Library:** shadcn/ui (Radix UI primitives)
**Styling:** Tailwind CSS 3.4.11
**Build Tool:** Vite 5.4.1 with SWC
**Type:** Single Page Application (SPA) - Marketing/Landing Page

---

## Project Structure

```
/Users/uri/projects/chiefos/chiefos.online/
├── src/
│   ├── components/          # Main application components
│   │   ├── ui/             # shadcn/ui component library (50 components)
│   │   ├── navbar/         # Navbar sub-components
│   │   ├── icons/          # Custom icon components
│   │   └── *.tsx           # Page-level components
│   ├── hooks/              # Custom React hooks
│   ├── lib/                # Utilities and data
│   │   ├── translations/   # i18n translations
│   │   ├── utils.ts        # Utility functions (cn helper)
│   │   └── pricing.json    # Pricing data
│   ├── pages/              # Page components
│   ├── types/              # TypeScript type definitions
│   ├── App.tsx             # Root application component
│   ├── main.tsx            # Application entry point
│   └── index.css           # Global styles & Tailwind imports
├── public/                 # Static assets
│   ├── favicon/
│   ├── font/              # Gilroy font family
│   └── legal/             # Legal documents
└── [config files]
```

**Total Components:** 70+ component files (50 UI library + 20+ custom)

---

## Build Tools & Configuration

### Framework Stack
- **Vite 5.4.1** - Build tool with HMR
- **React SWC Plugin** - Fast React refresh
- **TypeScript 5.5.3** - Type checking
- **Development Server:** Port 8080, IPv6 enabled

### Key Config Files
- `vite.config.ts` - Vite configuration with path aliases
- `tsconfig.json` - TypeScript configuration (relaxed strictness)
- `tailwind.config.ts` - Tailwind with custom theme
- `components.json` - shadcn/ui configuration
- `postcss.config.js` - PostCSS with Tailwind & Autoprefixer

### Path Aliases
```typescript
"@/*" → "./src/*"
```
**Always use `@/` prefix for imports from src directory.**

---

## Styling Approach

### Primary Styling: Tailwind CSS 3.4.11
- **Plugins:** tailwindcss-animate, @tailwindcss/typography
- **Configuration:** CSS Variables for theming

### Brand Colors (Custom Tailwind Colors)
```typescript
chiefblue: "#091335"    // Navy blue (legacy)
chiefnavy: "#091335"    // Primary navy blue
chiefyellow: "#F7A713"  // Primary yellow/gold
```

### Custom Font Family: Gilroy
- **Weights Available:** 300 (Light), 400 (Regular), 500 (Medium), 600 (SemiBold), 700 (Bold), 900 (Heavy)
- **Font Files:** Located in `/public/font/gilroy/`
- **Usage:** `font-gilroy` class or `font-sans` (aliased to Gilroy)

### CSS Variables (Design System)
Defined in `src/index.css`:
- Light mode and dark mode variants
- Semantic color tokens (primary, secondary, accent, etc.)
- Uses HSL color space for easy manipulation

### Component Styling Pattern
```tsx
// Use cn() utility for conditional classes
import { cn } from "@/lib/utils"

<div className={cn(
  "base-classes",
  condition && "conditional-classes",
  className // Allow external className override
)} />
```

---

## State Management

### No Global State Library
- Uses React's built-in state management (useState, useEffect)
- React Query (TanStack Query 5.56.2) for server state
- Local component state for UI interactions

### Form State Management
- **react-hook-form 7.53.0** - Form state and validation
- **Zod 3.23.8** - Schema validation
- **@hookform/resolvers** - Integration layer

### Example Pattern:
```tsx
const form = useForm<FormValues>({
  resolver: zodResolver(formSchema),
  defaultValues: { ... }
})
```

---

## Routing Structure

### Router: React Router DOM v6.26.2
- **Type:** Client-side routing (BrowserRouter)
- **Current Routes:**
  - `/` - Main landing page (Index component)
  - `*` - 404 Not Found page

### Route Definition Pattern
```tsx
// In App.tsx
<BrowserRouter>
  <Routes>
    <Route path="/" element={<Index />} />
    {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
    <Route path="*" element={<NotFound />} />
  </Routes>
</BrowserRouter>
```

**Important:** New routes must be added BEFORE the catch-all `*` route.

---

## Component Architecture

### Component Patterns

**1. Page Components** (`src/pages/`)
- Entry points for routes
- Compose multiple feature components
- Example: `Index.tsx` composes Navbar, Hero, Features, etc.

**2. Feature Components** (`src/components/`)
- Self-contained business logic components
- Examples: `Navbar.tsx`, `Hero.tsx`, `ContactForm.tsx`, `Pricing.tsx`
- Often accept `sectionId` prop for anchor navigation

**3. UI Components** (`src/components/ui/`)
- Reusable, headless UI primitives from shadcn/ui
- Built on Radix UI primitives
- Styled with Tailwind CSS
- Examples: Button, Card, Dialog, Form, etc.

**4. Sub-components** (organized in subdirectories)
- Component-specific children
- Example: `src/components/navbar/NavbarLogo.tsx`, `MobileMenu.tsx`

### Component Structure Convention
```tsx
// 1. Imports
import { useState } from "react"
import { motion } from "framer-motion"
import { Component } from "@/components/ui/component"

// 2. Type definitions
interface ComponentProps {
  sectionId?: string
}

// 3. Component definition
export const Component = ({ sectionId }: ComponentProps) => {
  // 4. Hooks
  const [state, setState] = useState()

  // 5. Event handlers
  const handleClick = () => { ... }

  // 6. Render
  return (
    <section id={sectionId}>
      ...
    </section>
  )
}
```

### Export Pattern
- **Named exports** for components: `export const Component = () => {}`
- Some legacy components use default export: `export default Component`
- UI components use named exports exclusively

---

## Animation & Interactions

### Animation Library: Framer Motion 12.4.2

#### Common Patterns:

**1. Scroll-triggered animations**
```tsx
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  viewport={{ once: true }}
>
  Content
</motion.div>
```

**2. Hover animations**
```tsx
<motion.button
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
  transition={{ type: "spring", stiffness: 400, damping: 10 }}
>
  Button
</motion.button>
```

**3. Entrance animations**
```tsx
<motion.nav
  initial={{ opacity: 0, y: -20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
>
  Navbar
</motion.nav>
```

**4. Conditional animations (AnimatePresence)**
```tsx
<AnimatePresence>
  {isOpen && (
    <motion.div
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: "auto" }}
      exit={{ opacity: 0, height: 0 }}
    >
      Content
    </motion.div>
  )}
</AnimatePresence>
```

---

## Custom Hooks

Located in `src/hooks/`:

**1. `use-mobile.tsx`**
```tsx
const isMobile = useIsMobile()
// Returns boolean, breakpoint at 768px
```

**2. `use-section-visibility.ts`**
```tsx
const isVisible = useSectionVisibility("section-id", {
  threshold: 0.1,
  rootMargin: "0px"
})
// Uses IntersectionObserver to detect element visibility
```

**3. `use-toast.ts`**
```tsx
const { toast } = useToast()
toast({
  title: "Success",
  description: "Action completed"
})
```

---

## Common Patterns & Conventions

### Scroll Navigation Pattern
```tsx
const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>) => {
  e.preventDefault()
  const href = e.currentTarget.getAttribute("href")
  const elementId = href?.replace("#", "")
  const element = document.getElementById(elementId)

  if (element) {
    const headerOffset = 100
    const elementPosition = element.getBoundingClientRect().top
    const offsetPosition = elementPosition + window.pageYOffset - headerOffset

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth"
    })
  }
}
```

### Section ID Convention
- Sections accept optional `sectionId` prop
- Used for anchor navigation
- Examples: `#pricing`, `#faq`, `#contact-form`, `#footer`

### Image Hosting
- External CDN: Backblaze B2 (`https://f003.backblazeb2.com/file/...`)
- Images loaded from `chiefos-website` and `chiefos-app` buckets
- Pattern: Small preview + larger modal version

### Responsive Design
- Mobile-first approach
- Breakpoints: `sm:`, `md:`, `lg:`, `xl:`, `2xl:`
- Mobile menu toggles at `md:` breakpoint (768px)

### Data Loading Pattern
- JSON data files in `src/lib/`
- Example: `pricing.json` for pricing plans
- Type-safe imports with TypeScript interfaces

---

## Form Handling

### Standard Form Pattern (ContactForm example)

```tsx
// 1. Schema definition with Zod
const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email"),
  // ...
})

type FormValues = z.infer<typeof formSchema>

// 2. Form setup
const form = useForm<FormValues>({
  resolver: zodResolver(formSchema),
  defaultValues: { ... }
})

// 3. Submit handler
const onSubmit = async (data: FormValues) => {
  // Handle submission
}

// 4. Form render with shadcn Form components
<Form {...form}>
  <form onSubmit={form.handleSubmit(onSubmit)}>
    <FormField
      control={form.control}
      name="fieldName"
      render={({ field }) => (
        <FormItem>
          <FormLabel>Label</FormLabel>
          <FormControl>
            <Input {...field} />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  </form>
</Form>
```

### Form Submission
- Uses Formspree for form handling: `https://formspree.io/f/myzkdnbn`
- Toast notifications for feedback
- Redirect after successful submission

---

## Internationalization

### Multi-language Support (Cookie Banner)
- Languages: English, Hebrew, Spanish, German
- Translation files in `src/lib/translations/`
- Auto-detects browser language
- RTL support for Hebrew

**Pattern:**
```typescript
export type Language = "en" | "he" | "es" | "de"

export const translations = {
  en: { ... },
  he: { ... },
  // ...
}

// Usage
const t = translations[language]
const isRTL = language === "he"
```

---

## Third-Party Integrations

### UI Libraries
- **Radix UI** - Headless UI primitives (30+ packages)
- **Lucide React** - Icon library
- **React Phone Number Input** - Phone input with validation
- **class-variance-authority** - Component variant management

### Utilities
- **clsx** - Conditional class names
- **tailwind-merge** - Merge Tailwind classes without conflicts
- **date-fns** - Date manipulation

### Other
- **Recharts** - Chart library (available but not actively used)
- **Embla Carousel** - Carousel component

---

## TypeScript Configuration

### Compiler Settings
```json
{
  "noImplicitAny": false,
  "noUnusedParameters": false,
  "noUnusedLocals": false,
  "strictNullChecks": false,
  "skipLibCheck": true,
  "allowJs": true
}
```

**Note:** Relatively relaxed TypeScript configuration. Type safety is encouraged but not strictly enforced.

---

## Key Architectural Decisions

1. **Single Page Architecture**: No multi-page routing, all content on one scrollable page
2. **Component Composition**: Heavy use of component composition over inheritance
3. **Utility-First Styling**: Tailwind CSS with minimal custom CSS
4. **External Asset Hosting**: Images on CDN, not in repository
5. **Form-to-Service**: Forms submit to external service (Formspree)
6. **Static Data**: Pricing and content in JSON files, not CMS
7. **Animation-Heavy**: Liberal use of Framer Motion for polish
8. **Mobile-First**: Responsive design prioritizes mobile experience

---

## shadcn/ui Components Available

Complete list of 50 UI components in `src/components/ui/`:

- accordion, alert, alert-dialog, aspect-ratio, avatar
- badge, breadcrumb, button
- calendar, card, carousel, chart, checkbox, collapsible, command, context-menu
- dialog, drawer, dropdown-menu
- form
- hover-card
- input, input-otp
- label
- menubar
- navigation-menu
- pagination, phone-input, popover, progress
- radio-group, resizable
- scroll-area, select, separator, sheet, sidebar, skeleton, slider, sonner, switch
- table, tabs, textarea, toast, toaster, toggle, toggle-group, tooltip

**Usage:** Import from `@/components/ui/[component-name]`

---

## Important Conventions for AI Agents

### When Creating New Components:
1. Use named exports: `export const Component = () => {}`
2. Accept `sectionId` prop if it's a scrollable section
3. Use `cn()` utility for className merging
4. Add Framer Motion animations for scroll/hover effects
5. Make it responsive (mobile-first)
6. Use Gilroy font via `font-gilroy` class
7. Follow brand colors (chiefnavy, chiefyellow)

### When Modifying Existing Components:
1. Preserve existing animation patterns
2. Maintain responsive behavior
3. Keep section IDs intact (used for navigation)
4. Don't break scroll navigation logic
5. Test mobile menu if touching Navbar

### When Adding Routes:
1. Add before the `*` catch-all route in App.tsx
2. Create page component in `src/pages/`
3. Follow Index.tsx composition pattern

### When Working with Forms:
1. Use Zod for validation
2. Use react-hook-form + shadcn Form components
3. Provide toast feedback on submit
4. Handle loading states

### When Adding Styles:
1. Prefer Tailwind classes over custom CSS
2. Use CSS variables for theme colors
3. Maintain consistent spacing (px-4, px-6, py-12, py-16 patterns)
4. Respect existing animation durations (0.3s, 0.6s standard)

### File Paths:
- Always use absolute paths with `@/` alias
- Never use relative imports like `../../`

---

## External Links & Integrations

- **App URL:** `https://app.chiefos.online`
- **WhatsApp:** Multiple numbers used (`34624139891`, `972545854406`)
- **Email:** `info@chiefos.online`
- **Form Service:** Formspree (`https://formspree.io/f/myzkdnbn`)
- **CDN:** Backblaze B2 (`https://f003.backblazeb2.com/file/`)

---

## Development Workflow

### Available Scripts
```bash
npm run dev        # Start dev server (port 8080)
npm run build      # Production build
npm run build:dev  # Development build
npm run preview    # Preview production build
npm run lint       # Run ESLint
```

### Dev Server
- Host: `::` (IPv6, accessible from network)
- Port: 8080
- HMR enabled via Vite

---

## Accessibility Considerations

- Semantic HTML elements
- ARIA labels on interactive elements
- Keyboard navigation support (via Radix UI)
- Focus management in modals/dialogs
- Alt text on images
- Color contrast follows WCAG standards

---

## Quick Reference Checklist

When working on this codebase, remember:

- [ ] Use `@/` imports, not relative paths
- [ ] Use `cn()` utility for conditional classes
- [ ] Add Framer Motion animations for visual elements
- [ ] Make components responsive (mobile-first)
- [ ] Use `font-gilroy` for typography
- [ ] Accept `sectionId` prop for scrollable sections
- [ ] Use named exports for new components
- [ ] Validate forms with Zod + react-hook-form
- [ ] Use shadcn/ui components from `@/components/ui/`
- [ ] Test on mobile breakpoint (768px)
- [ ] Follow existing animation timing (0.3s, 0.6s)
- [ ] Use brand colors: chiefnavy (#091335), chiefyellow (#F7A713)

---

This comprehensive guide provides AI agents with everything needed to understand and work effectively with this codebase. The project is a well-structured, modern React application with strong conventions around styling, animation, and component architecture.
