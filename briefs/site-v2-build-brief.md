# AURION PLATFORM — MASTER BUILD BRIEF (for Gemini)
Repo: rtmorobe08-lab/ai-assurance-platform · branch main · GitHub Pages serves /docs
Prepared by Hermes · 1 Nov 2026 · Owner: RT Morobe

READ THIS FIRST
This file contains the complete build instruction in two parts. Do Part 1 in order (it restores broken
pathways), then Part 2 (the expansion). Where the two conflict, Part 2 wins. Commit in small steps with
clear messages and report SHAs. Do not publish internal hourly rates, discount authority, RACI, or any
section of the Operations Manual marked CONFIDENTIAL.

===========================  PART 1 — REPAIR THE PATHWAYS  ===========================
## TASK 1 — Restore navigation (highest priority)
Add two nav items to the header nav in docs/index.html, styled EXACTLY like the existing nav buttons
(px-4 py-2 rounded-lg, text-slate-300 hover:text-white hover:bg-slate-800), placed after "60-Sec Assessment":
  - "Client Instruments" -> href="instruments/index.html"
  - "Agent Suite" -> href="suite.html"
Use <a> elements (not buttons with switchTab) since these are separate pages.
Also add the same two links to the mobile menu if a mobile nav exists.
Acceptance: from the homepage a visitor reaches both pages in one click, desktop and mobile.

## TASK 2 — Add two entry cards in the Home tab
Below the hero section in the Home tab, add a two-column card row using the site's existing card styling
(rounded-xl, border border-slate-800, dark surface, amber-400 accents):
Card A: title "10 Client Instruments", line "POPIA worksheet, roadmap, policy pack, agent passport, live register and more. Runs in your browser. Nothing transmitted.", CTA link to instruments/index.html.
Card B: title "The Governed Agent Suite", line "Seven governed agents. A front desk that never misses a customer. A watchtower that briefs you before you ask.", CTA link to suite.html.
Acceptance: cards visible on home tab, matching the existing visual language, no layout break at 375px width.

## TASK 3 — Restyle docs/suite.html to the new design system
Keep ALL existing content (7 agents + hymns, 3 tiers, governance spine table, sample-call player, demo request button).
Replace the light stylesheet with the homepage's dark language:
  - page background slate-950/slate-900, body text slate-300, headings white
  - accents amber-400 (gold) instead of indigo
  - cards: rounded-xl, border border-slate-800, bg-slate-900/60
  - tier badges: amber-500/10 background, amber-400 text, border amber-500/30
  - sample-call player box: keep dark (#0f172a equivalent) but restyle to match, keep the animation JS working
  - add the same sticky header with the nav (Home / Four Pillars / Expert Hub & Docs / Packages & Special / 60-Sec Assessment) where the tab items link back to index.html
  - footer: Aurion Enterprises, tagline, contact, link back to homepage
Acceptance: suite.html looks like the same website as the homepage; player still animates; no console errors.

## TASK 4 — Tidy the repo root
Eight loose files named gemini-code-*.html sit in the repo root. They are public and off-brand.
Move them to /archive/gemini-drafts/ (keep them, do not delete) and confirm no page links to them.
Acceptance: repo root clean; the site still builds; no 404s introduced.

## TASK 5 — Instruments index cross-link (optional, low risk)
On docs/instruments/index.html add a single "Back to the platform" link to ../index.html styled to match.

## CONSTRAINTS
- Do not change any pricing on public pages. Tier prices stay off the site (proposal-only doctrine).
- Do not change the copy of the hymns.
- Do not touch docs/instruments/*.html logic files except the back-link in Task 5.
- Keep the site self-contained: no external CDN dependencies beyond what already exists.
- Do not remove the lead form or its endpoint.

===========================  PART 2 — EXPANSION AND PREMIUM UPGRADE  ===========================
## DESIGN DIRECTION — high-end consulting, not a startup landing page
Reference feel: a Big Four / boutique advisory practice, not a SaaS trial page. Concretely:
- Typography carries the premium. Use a refined serif for display headings (e.g. "Instrument Serif" or "Fraunces")
  paired with a clean grotesque for body (e.g. "Inter"). One Google Fonts link, with system fallbacks.
- Restraint: one accent (amber/gold), deep slate surfaces, generous whitespace, max 3 type sizes per screen band.
- No stock photos of handshakes or robots. Use data, diagrams, quotes, and the existing Core Node logo.
- Every claim carries a proof point or a number. Never a bare adjective ("world-class", "cutting-edge" are banned).
- Credibility strip under the hero: Reg. 2026/466313/07 · B-BBEE Level 1 (EME) · CSD MAAA1730875 · POPIA-aligned.
  (These are real and verified — use exactly as written.)
- Motion: subtle only (fade/translate on scroll). No parallax, no bouncing cards.

## 1. NAVIGATION (final structure)
Tabs: Home · What We Offer (NEW) · How We Work (NEW) · Expert Hub & Docs (EXPANDED) · 60-Sec Assessment
Plus two page links styled as nav buttons: Client Instruments (instruments/index.html) · Agent Suite (suite.html)

## 2. NEW TAB — "What We Offer"
### 2a. Hero
H1: "One journey. Six stages. Three bands."
Sub: "From a free 60-second diagnostic to ISO/IEC 42001 certification — one price book, one point of contact."
### 2b. The maturity journey — six stage cards in a horizontal rail (stack on mobile)
Each card: stage code, name, duration, "from" price, what the client gets, CTA.
S0 SPARK · 60 seconds · R0 · free diagnostic, score stays on your device
S1 DIAGNOSE · 1 week · from R2,500 · AI Health Check, credited against Foundation
S2 FOUNDATION · 6 weeks · from R70,000 · Discovery & Audit + Control Framework (ISO Phases 1-2)
S3 GUARDRAILS · 1-2 weeks · from R2,500 pm · governed agents, Agent Passports, spend caps, kill switch under 3 seconds
S4 WATCHTOWER · monthly · from R9,500 pm · assurance retainer, 07:00 executive brief, 24-hour incident clock
S5 CERTIFY · 6 weeks · from R35,000 · ISO/IEC 42001 gap analysis to certificate and surveillance audits
Note under rail: "Every stage ends at a signed gate. Nothing moves forward, nothing gets billed, without your signature."
### 2c. The four layers (four cards)
ASSURE — AI Health Check, Discovery & Audit, Control Framework, monthly assurance retainer.
AGENTS — six governed digital workers with signed Agent Passports, ZAR spend caps, kill switch under 3 seconds.
DEFEND — Active AI Defence: detect, verify, fix, prove, record. 24-hour acknowledgement, 72-hour report.
CERTIFY — ISO/IEC 42001 from gap analysis to certificate and surveillance audits.
### 2d. Three bands table (public, no per-item prices)
Band A Essential — up to 20 staff or 2 AI systems
Band B Professional — 21 to 100 staff or up to 5 AI systems
Band C Enterprise — 100+ staff, 6+ AI systems, institutions and parastatals
Note: "When headcount and AI-system count disagree, the AI-system count decides the band."
### 2e. The three bundles — the commercial centrepiece
Essential · 10 users · 1 agent · setup R70,000 · R12,500 per month · year-1 R220,000 · year-2 R150,000
Professional · 40 users · 3 agents · setup R150,000 · R32,500 per month · year-1 R540,000 · year-2 R390,000
Enterprise · 40 critical users · 10 agents · setup R270,000 · R55,000 per month · year-1 R930,000 · year-2 R660,000
Under each: what is inside (Health Check credited, Foundation, agents tier, assurance retainer, Active AI Defence tier, service level, optional Certify add-on).
Footnote: "Bundle rates held for 12 months, roughly 7% below list. Certify is optional and priced separately."
### 2f. Institutional All-in — a distinct dark panel
Standard R399,000 per year · Premium R480,000 per year. What each includes (Band C Foundation, 12 months assurance, platform licence, Event Packs; Premium adds Growth agent platform, named senior CSM, quarterly board briefing).
Line: "For public-sector and parastatal buyers who need one annual number for budgeting."
### 2g. What nobody pays twice for (credits) — three short proof chips
Health Check 100% credited toward Foundation within 60 days · Stand-alone modules 100% credited within 90 days · Band-up credited within 12 months
### 2h. Self-serve entry (keep it small, it is the wedge)
Free diagnostic R0 · Guardian R149 pm · Compliance R399 pm · Event Pack R1,999 per incident
### 2i. CTA block
"Not sure which band you are? Take the 60-second check." + button to assessment tab.
"Want the full price book? Book a 15-minute consultation." + button (WhatsApp link wa.me/27828800195).

## 3. NEW TAB — "How We Work"
Purpose: answer "how do you actually do it" for a sceptical buyer. Content blocks:
1. The six gates (G0-G5): what is delivered, what the client signs, what triggers the next invoice.
2. The 13-week onboarding plan as a simple timeline graphic (week blocks): Foundation weeks 1-6, agents live by week 9, defence active, first monthly review, first quarterly pack.
3. Communication rhythm table: weekly status note during S1-S3; daily 07:00 executive brief once live; monthly review meeting; quarterly service review; per-incident phone then written report (24-hour acknowledgement, 72-hour report).
4. What we need from the client: a sponsor who can sign gates; an AI owner accountable for AI use; roughly 3 hours at Diagnose and 14-22 hours across Foundation, then 1 hour per month.
5. Our commitments: every claim and control proven or flagged; overlapping work credited, never repeated; one named CSM at every hand-off; incident response inside a stated clock.
6. Security and data handling: instruments run client-side; nothing transmitted unless exported; DPA on request.
Style: dense but calm, uses tables and a timeline. This page should read like an operating manual excerpt, deliberately.

## 4. EXPANDED "Expert Hub & Docs"
Currently four thin docs. Expand into a library organised by six focus areas, each with an explainer card,
a "what good looks like" list, and a link to the matching instrument or document.
FOCUS 1 POPIA and personal information — automated decision-making, s18 duties, s21 operator flow-down, Information Officer and PAIA, the R10m ceiling, breach clock. Instrument: POPIA Exposure Worksheet.
FOCUS 2 ISO/IEC 42001 — what the standard actually asks, the certification path (gap analysis, Phase 3-4, Stage 1 and Stage 2 audits), typical cost R60k-120k certification body fees, why tenders now ask for it. Instrument: control matrix, executive report.
FOCUS 3 Shadow AI and AI inventory — how staff use AI off-record, what a floor walk finds, how to catalogue every tool and agent, the difference between a tool and an agent. Instrument: AI Risk Register, Remediation Roadmap.
FOCUS 4 Governed agents — the Agent Passport (owner, purpose, data touched, human checkpoints, spend cap, kill switch), human-in-the-loop design, what a guardrail looks like when it fires. Instrument: Agent Passport, HITL Control Matrix.
FOCUS 5 AI security and verification — prompt injection, exfiltration, model and vendor supply chain, what verification testing actually tests, why a policy alone is not a control. Instruments: AI Security Verification spec, vendor diligence.
FOCUS 6 Incidents and evidence — the 24-hour clock, what to capture, what a regulator or funder will ask for, how the Assurance Register becomes your defence. Instrument: Incident Intake & SOP, Quarterly Compliance Report.
Each card links to the live instrument (instruments/*.html) or the framework doc. Add a filter row (All / POPIA / ISO / Agents / Security / Incidents).
Copy rule: practical, specific, no fear-mongering beyond the actual legal ceiling.

## 5. LANDING PAGE (Home tab) — upgrade to premium
1. Hero: H1 "Who is guarding your AI?" · sub "Governed AI, proven controls, and evidence your bank, board or funder will accept." · two CTAs (Take the 60-second check / What we offer). Add a thin credibility strip.
2. Replace generic pillars copy with a four-panel proof row using real numbers: R10m POPIA ceiling · 24-hour incident clock · 3-second kill switch · 10 live client instruments.
3. Add a "the problem, stated plainly" block: shadow AI, unvetted vendors, agents with no owner, and no evidence when asked.
4. Add a "how it works" three-step strip linking to the new How We Work tab.
5. Add the two entry cards from Brief v1 (Client Instruments, Agent Suite).
6. Add a proof/evidence block: "Nothing we claim is unverifiable. See the engine" + GitHub repo link + instruments library link.
7. Keep the existing lead form and its endpoint (submitAssuranceLead). Do not change the endpoint.
8. Footer: entity details, registration number, B-BBEE statement, contact, and the line "Smart systems. Strategic execution."

## 6. HARD CONSTRAINTS
- Keep the site self-contained apart from one Google Fonts link and existing Tailwind.
- Do not publish: the internal rate card (internal hourly rates, withheld from repo), discount authority, the credit windows in days beyond the three public chips, the RACI, or any "CONFIDENTIAL" manual sections.
- Do not paraphrase the hymns. Never place the OppGrid hymn on any page.
- Keep the lead form, its honeypot and endpoint intact.
- All prices shown excl VAT, with the footnote "All prices in rand, excluding 15% VAT."
- Mobile first: every table must reflow to cards below 640px. Test at 375px.
- No animation that blocks first paint. Lighthouse mobile performance should not drop below 85.

## 7. HANDOVER CHECKLIST
Report back: files changed, commit SHAs, a screenshot of each tab at 375px and 1440px, and anything you could not do.
Hermes runs browser QA (links, prices vs the manual, mobile reflow, no broken instruments) after you push.
