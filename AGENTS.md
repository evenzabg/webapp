You are an expert Next.js 14 (App Router) engineer.

Goal: build the entire Evenza web front-end in **one** Next project, mapped to
 four path segments:

   • /                 → marketing / advertising (SSR & ISR, SEO-first)
   • /auth/**          → public auth flow (login, register, forgot-pw)
   • /app/**           → event-goer portal (SSR catalog + CSR ticket flows)
   • /dashboard/**     → organiser console (CSR-only admin UI)

The back-end is a NestJS API (see separate prompt) and issues domain-wide
HttpOnly JWT + refresh cookies (Domain=.example.com).

══════════════════════════  A. TOOLING & CONSTRAINTS  ════════════════════════════
Framework        : Next.js 14 – App Router, TypeScript strict mode
UI library       : ShadCN UI (Tailwind 3 preset, lucide-react icons)
State mgmt       : Zustand 4
Data fetching    : @tanstack/react-query 5
Auth helper      : NextAuth 4 (Credentials provider → NestJS /auth endpoints)
Lint / Format    : ESLint (nextjs core web vitals) + Prettier
Tests            : Vitest + @testing-library/react
Images           : Next <Image>, remote patterns ['cdn.evenza.com']
Env management   : .env.local, all keys prefixed NEXT_PUBLIC_*
Deployment       : single Vercel project (output: .vercel/output)

══════════════════════════  B. FOLDER & ROUTE LAYOUT  ════════════════════════════
src/
├─ lib/                          # fetcher.ts, auth.ts, money.ts
├─ components/                   # shared ShadCN components
├─ stores/                       # Zustand slices (userStore, cartStore)
├─ middleware.ts                 # RBAC + redirects (see section E)
└─ app/
    ├─ (marketing)/              # "/"  – public, SEO
    │   ├─ page.tsx              # landing
    │   ├─ about/page.tsx
    │   └─ events/[slug]/page.tsx  # ISR, links to /app/events/[id]
    ├─ auth/                     # "/auth/**"
    │   ├─ layout.tsx            # unauthenticated shell
    │   ├─ login/page.tsx
    │   └─ register/page.tsx
    ├─ app/                      # "/app/**"
    │   ├─ layout.tsx            # AuthProvider + CartProvider
    │   ├─ page.tsx              # redirect → /app/events
    │   ├─ events/page.tsx       # SSR catalog list
    │   ├─ events/[id]/page.tsx  # SSR details, buy ticket CTA
    │   ├─ tickets/page.tsx      # CSR “My tickets”
    │   └─ account/page.tsx
    └─ dashboard/                # "/dashboard/**"
        ├─ layout.tsx            # organiser shell (Sidebar)
        ├─ page.tsx              # My organisations
        └─ organisations/[orgId]/
            ├─ overview/page.tsx
            ├─ events/new/page.tsx
            └─ events/[eventId]/
                ├─ overview/page.tsx
                ├─ tickets/page.tsx
                └─ analytics/page.tsx

══════════════════════════  C. AUTH FLOW  ════════════════════════════════════════
1. Credentials form (NextAuth) → POST /auth/login (NestAPI)
   Nest sends cookies: accessToken 15 min, refreshToken 30 d, Domain=.example.com
2. Shared lib `fetchWithAuth` appends accessToken header; on 401 auto-refreshes.
3. `useSession()` from custom auth wrapper provides `{ userId, roles }`.
4. Logout → /auth/logout clears both cookies, redirects to /auth/login.

══════════════════════════  D. STATE & DATA FETCHING  ════════════════════════════
* `useCartStore` (attendee) – ticket selections
* `useOrgStore`  (dashboard) – current organisationId
* React Query QueryClientProvider in `(app)` and `(dashboard)` layouts.
* Stale-while-revalidate for catalog; real-time WS for live board later.

══════════════════════════  E. EDGE MIDDLEWARE (RBAC)  ═══════════════════════════
matcher: ['/app/:path*','/dashboard/:path*']
Logic:
  • /app/**       → require role in ["ATTENDEE","ORG_MEMBER","SUPER_ADMIN"]
  • /dashboard/** → require role in ["ORG_MEMBER","SUPER_ADMIN"]
  • otherwise redirect to /auth/login

══════════════════════════  F. PERFORMANCE TARGETS  ══════════════════════════════
• LCP < 1.2 s on marketing pages (mobile) – confirm via Lighthouse CI.
• Dashboard JS bundle ≤ 250 kB initial (use dynamic imports).
• MILU RSI events pages revalidate every 60 s.

══════════════════════════  G. DEVELOPMENT STEP PLAN  ════════════════════════════
Step-1  Initialise project: `pnpm create next-app@latest evenza-web --ts --tailwind --eslint --experimental-app`
        Add Tailwind, ShadCN installer, base ESLint config.
Step-2  Scaffold folder tree above; stub layouts & pages with placeholders.
Step-3  Implement `/auth` routes, NextAuth credentials provider → NestJS.
        Write Vitest unit tests for login flow.
Step-4  Add `middleware.ts` with RBAC logic, plus e2e integration test.
Step-5  Build marketing landing + ISR event page (uses getStaticParams).
Step-6  Implement attendee catalog & event detail pages (SSR), cart store.
Step-7  Implement “Buy Ticket” stripe-redirect button calling NestAPI `/orders`.
Step-8  Implement attendee **My Tickets** page (CSR) pulling `/user/me/tickets`.
Step-9  Build organiser dashboard shell & organisation overview pages (CSR).
Step-10 Add analytics chart (dynamic import recharts), ticket manager, role invite modal.
Step-11 Lighthouse CI workflow, ensure perf budgets pass.
Step-12 Add basic Vitest coverage ≥ 80 %, ESLint pass as CI gate.

══════════════════════════  H. CODING RULES  ═════════════════════════════════════
• Use Server Actions only inside marketing & catalog pages for cacheable data.
• heavy libs (charts, rich-text) must be `dynamic(..., { ssr:false })`.
• No inline CSS – use Tailwind classes or ShadCN variants.
• Type-safe APIs: derive TS types from OpenAPI JSON of back-end.
• Every Codex reply = **only** the code diff for current Step-N + ≤72 char commit title.
• If unclear, **ask before coding**.

══════════════════════════  I. ENV-VARS EXAMPLE (.env.local)  ════════════════════
NEXT_PUBLIC_API_BASE=https://gateway.example.com
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=dev-secret
