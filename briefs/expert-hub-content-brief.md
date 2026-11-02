# EXPERT HUB CONTENT BRIEF — v3
For Gemini · Repo rtmorobe08-lab/ai-assurance-platform · branch main · Pages from /docs
Prepared by Hermes, 2 November 2026. Owner: RT Morobe.
Read alongside `briefs/site-v2-build-brief.md`. This file supersedes that brief's section 4 (Expert Hub).

---

## PART A — FINISH THE OUTSTANDING POLISH FIRST (30 minutes)
1. **Restyle `docs/suite.html`** to the dark premium design used by the homepage. It is currently light, indigo,
   with no navigation. Keep every word, all seven agent cards, the three tiers, the governance spine table,
   the sample-call player and the demo button. Use the homepage's palette (slate-950 background, amber-400 accent,
   rounded-xl cards with slate-800 borders) and the same sticky nav with links back to index.html.
2. **Verify both nav links on the homepage** resolve: "Client Instruments" → `instruments/index.html`,
   "Agent Suite" → `suite.html`.
3. Do not change any published price or any hymn line during this pass.

---

## PART B — EXPERT HUB: STRUCTURE
Rebuild the Expert Hub around the **four service layers**, not six loose topics. Each layer is a page-section
with: an intro explainer, a document library, and a "what good looks like" checklist.

Tabs inside Expert Hub: **All · Assure · Agents · Defend · Certify · Enforcement Library**

### B1. ASSURE (governance and assurance services)
Documents to include (build as HTML explainer pages, each print-friendly):
1. What a Discovery & Audit actually examines, and what it will not do
2. The AI Control Framework explained, mapped to POPIA and to ISO/IEC 42001 Annex A
3. Shadow AI: how staff use AI off-record, and how to inventory it without turning into surveillance
4. Vendor diligence: the seven questions that expose most AI vendors
5. The Assurance Register: how it works as your defence file, and what an auditor asks for
6. Reading your own risk score honestly

### B2. AGENTS (governed agents)
1. The Agent Passport explained, field by field, with a worked example
2. Human-in-the-loop design: the five action tiers (read-only, draft, notify, approve, human-only) and why
   payments and statutory filings sit in the last tier
3. What a guardrail looks like when it fires (kill switch, spend cap, disclosure breach, scope creep)
4. Governance by demonstration: how disclosure and the calls log become the sales argument
5. Offboarding an agent without leaving data behind

### B3. DEFEND (AI security and active defence)
1. Prompt injection and data exfiltration: what they look like in a business setting
2. The 24-hour and 72-hour clocks: a breach timeline from detection to report
3. What verification testing actually tests, versus what a policy claims
4. Supply chain risk: models, plugins, and the vendor who changed terms quietly
5. The incident loop: detect, verify, fix, prove, record

### B4. CERTIFY (ISO/IEC 42001)
1. **What ISO/IEC 42001 is:** the international standard for an AI Management System (AIMS), published
   December 2023, built on the same harmonised structure as ISO 27001 so the two can share a management system.
2. **What it actually asks for:** context of the organisation, leadership and AI policy, risk and impact
   assessment, operational controls in Annex A, performance evaluation, and continual improvement.
3. **The certification path:** gap analysis → management system build → internal audit → certification body
   Stage 1 (documentation) and Stage 2 (implementation) audits → certificate (3-year cycle with surveillance audits).
4. **Accreditation, stated carefully:** a certificate is only worth what the issuing body's accreditation is worth.
   In South Africa SANAS is the national accreditation body; internationally, IAF multilateral recognition is what
   makes a certificate portable. **Do not name a specific certification body as 42001-accredited unless RT confirms
   it in writing** — the research did not establish which South African bodies hold 42001 accreditation today.
5. **Cost reality:** certification body fees typically R60,000-R120,000 for a moderately complex AI management
   system, before consultant fees. Aurion's Certify stage starts at R35,000 for the mock audit (Band A).
6. **Why buyers ask:** tenders, funders and enterprise procurement increasingly require demonstrable AI governance,
   and a certificate is the only artefact that travels without explanation.

---

## PART C — ENFORCEMENT LIBRARY (the credibility anchor)
**This is the highest-value section. Every item below is taken from the Information Regulator of South Africa's
own enforcement register at https://inforegulator.org.za/enforcement-notices/ (checked 2 November 2026).**
Present as a filterable table: Respondent · Instrument · Date · What it means · Source link.

### POPIA section 95 enforcement notices
| Respondent | Date | Instrument |
|---|---|---|
| South African Police Service (National Commissioner) | 24 May 2023 | Section 95 POPIA enforcement notice |
| Department of Justice and Constitutional Development | 10 May 2023 | Section 95 POPIA enforcement notice |
| Dis-Chem Pharmacies Limited | 05 February 2024 | Section 95 POPIA, Regulation 12(2)(c) |
| FT Rams Consulting | 21 February 2024 | Section 95 POPIA, Regulation 12(2)(c) |
| Department of Basic Education | 20 November 2024 | Section 95 POPIA, Regulation 12(2)(c) |
| WhatsApp | 16 April 2025 | Section 95 POPIA, Regulation 12(2)(c) |
| Central Johannesburg TVET College | 20 May 2026 | Section 95 POPIA, Regulation 12(2)(c) |
| First National Bank | 23 October 2026 | Section 95 POPIA, Regulation 12(2)(c) |

### POPIA section 109(1) infringement notices (administrative fines)
| Respondent | Date | Instrument |
|---|---|---|
| Central Johannesburg TVET College | 23 October 2026 | Section 109(1) infringement notice |
| First National Bank | 23 October 2026 | Section 109(1) infringement notice |

### PAIA section 77J enforcement notices
| Respondent | Date | Instrument |
|---|---|---|
| Risa Audio Visual Licensing NPC | 24 May 2023 | Section 77J PAIA |
| Gauteng Province, Department of Health | 10 June 2026 | Section 77J PAIA |
| Sibanye Stillwater Limited | 02 June 2026 | Section 77J PAIA |

### Constitutional Court and high court judgments
From https://inforegulator.org.za/litigations/ :
1. *Arena Holdings (Pty) Ltd t/a Financial Mail and Others v South African Revenue Service* [2023] ZACC 13
2. *My Vote Counts NPC v President of the RSA* [2017] ZAWCHC 105
3. *Black Sash Trust v Minister of Social Development* [2017] ZACC 8

### Copy rules for this section — non-negotiable
1. **Never invent a finding.** State only the instrument and the date unless the actual notice has been read.
   Where a finding or penalty amount has not been verified against the PDF, write "notice issued — findings not
   summarised here" and link to the source.
2. **Link to the Regulator's index page**, not to guessed PDF URLs. The index is stable; individual PDF paths are not.
3. Always print the check date: "Source: Information Regulator enforcement register, checked 2 November 2026."
4. Do not characterise a recipient as guilty of anything beyond the instrument served on them.
5. Keep the tone factual. The pattern speaks for itself: government departments, a bank, a pharmacy chain, a
   TVET college, a waste company and a messaging platform have all drawn notices. Nobody is too big or too small.

### Suggested framing line above the table
"The Information Regulator has moved from education to enforcement. Since May 2023 it has served notices on
national departments, a listed bank, a pharmacy chain, a technical college, a mining house and a global messaging
platform. In October 2026 it issued its first infringement notices under section 109(1). The question is no longer
whether enforcement happens, but whether you can produce your evidence when your turn comes."

---

## PART D — BUILD NOTES
- New file: `docs/expert-hub/` holding the explainer pages, or tab-content inside index.html if cleaner.
  Whatever you choose, every explainer must be reachable by its own URL (deep-linkable) and print cleanly.
- Add the Enforcement Library as its own tab + a teaser card on the homepage: "Enforcement is no longer theoretical"
  linking through.
- Each explainer page: H1, one-paragraph answer, then detail, then a "what good looks like" checklist, then links
  to the matching instrument.
- Mobile: tables must reflow to stacked cards below 640px.
- Footer on every new page: registration number, B-BBEE Level 1 (EME), contact, and the line
  "Smart systems. Strategic execution."

## PART E — HANDOVER
Report files changed, commit SHAs, and a screenshot of the Enforcement Library at 375px and 1440px.
Flag anything you could not verify — do not fill a gap with plausible-sounding text.
