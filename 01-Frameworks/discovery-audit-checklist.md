# Discovery Audit Checklist

This file is a placeholder for the discovery audit checklist for AI assurance frameworks.
# Phase 1: Discovery & Audit Checklist

This operational checklist is utilized during the initial 14-day onboarding phase[cite: 2] to identify, map, and assess AI operational liabilities within client organizations.

---

## 1. AI & Agent Inventory
* [ ] **Identify Official AI Tools:** Document all officially sanctioned LLMs, SaaS tools, and internal AI utilities in use (e.g., enterprise ChatGPT, Copilot, custom internal bots).
* [ ] **Discover Shadow AI:** Audit department-level adoption of unvetted third-party AI tools, browser extensions, and personal subscription accounts accessing company resources.
* [ ] **Catalog Autonomous Agents:** Map any deployed AI agents with API execution privileges, automated email access, or database interaction rights.

## 2. Data Flow & Permission Mapping
* [ ] **Context Window Audit:** Determine whether client financial data, proprietary source code, or personally identifiable information (PII) is being ingested into unvetted model training context windows.
* [ ] **API Key & Credential Trace:** Locate hardcoded or loosely managed API keys connecting internal systems to external model providers.
* [ ] **Access Tier Review:** Map out who within the organization has authorization to prompt, modify, or deploy autonomous agents.

## 3. Exposure & Risk Point Identification
* [ ] **Evaluate Data Leakage Risk:** Quantify the probability of confidential leakage through unmonitored shadow AI[cite: 1].
* [ ] **Assess Autonomous Liability:** Review potential exposure points where an agent could execute unverified API calls, incorrect transaction refunds, or rogue communications[cite: 1].
* [ ] **Enterprise Compliance Check:** Review existing vendor contracts against buyer requirements for data privacy, data residency, and opt-out training clauses.

## 4. Deliverable Generation Hand-off
* [ ] Compile discovery findings into the **System & Data Flow Map**[cite: 2].
* [ ] Feed identified failure modes into the **AI Risk Register**[cite: 2].
