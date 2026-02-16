# Developer Notes — ChiefOS Landing Page

## URLs & Navigation

- All app URLs are centralized in `src/constants/urls.ts` (`APP_URL`, `APP_SIGNIN_URL`). Don't hardcode `app.chiefos.online` elsewhere.
- **"Get Started" buttons do NOT scroll to the form** — they open `APP_SIGNIN_URL` in a new tab. This applies to Hero (static + sticky) and PromoSection.
- The Navbar Login button also opens `APP_SIGNIN_URL` in a new tab. The `href="#contact-form"` on those links is vestigial — the `onClick` handler overrides it with `window.open`.

## Contact Form (`ContactForm.tsx`)

- **3-step wizard**: Step 1 (email) → Step 2 (name + role) → Step 3 (consents + submit). Each step validates before advancing via `form.trigger()`.
- Submits to **Formspree** (`https://formspree.io/f/myzkdnbn`). No backend — results go to Formspree dashboard.
- After successful submit, redirects to `APP_URL` after 2s delay.
- Two consent checkboxes: `acceptTerms` (required, uses `z.literal(true)`) and `acceptEmails` (optional boolean).
- WhatsApp button pre-fills a message with form data and opens `wa.me/34624139891`.

## Sticky Button Visibility (Hero)

- The sticky "Get Started" button uses `useSectionVisibility` hook (IntersectionObserver) to hide when certain sections are visible. The logic is intentionally complex — it hides near the form, pricing, promo, and footer to avoid overlapping CTAs.

## Legal Pages

- Static HTML files in `public/legal/` — `privacy.html`, `terms.html`, `imprint.html`. These are NOT React routes.

## Section Order (Index.tsx)

The page layout order matters for background color alternation:
Hero → TrustedBy (white) → UseCases (gray-50) → Testimonials (blue-50) → Features (white) → Stages → SkipperCTA → Pricing → ContactForm (gray-50) → InfoSection → ServiceProviderSection (white) → PrivacySecurity (gray-50) → FAQ → PromoSection (gray-50) → ChiefOSImpact → Footer

## Unused Imports

- `ChiefOSImpact` and `PrivacySecurity` are newer sections. If removing them, also remove their imports from `Index.tsx`.
- `project-guidelines.md` exists with full architecture docs — read that for the complete picture.
