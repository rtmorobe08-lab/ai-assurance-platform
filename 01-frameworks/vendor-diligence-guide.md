# 3rd-Party SaaS & Vendor Diligence Guide

**Framework Standard:** SMME AI Assurance & Governance  
**Purpose:** Standardizing third-party vendor security and training opt-out verification[cite: 1].

---

## Overview
Small and medium enterprises frequently adopt external SaaS tools and AI plugins without realizing that customer data, proprietary documents, or financial metrics may be ingested into public training models. This guide establishes the mandatory due diligence protocol before onboarding any software vendor.

---

## Vendor Evaluation Checklist

* [ ] **Data Residency & Compliance:** Verify where user data is stored, processed, and whether it complies with regional data privacy regulations (e.g., POPIA / GDPR).
* [ ] **Zero Training Clause:** Confirm contractually or via enterprise dashboard settings that the vendor **does not** use client inputs, prompts, or generated outputs to train foundational AI models.
* [ ] **Encryption Standards:** Ensure data is encrypted both at rest (AES-256) and in transit (TLS 1.2/1.3).
* [ ] **Access & Permission Controls:** Verify support for Role-Based Access Control (RBAC) and Multi-Factor Authentication (MFA).
* [ ] **Data Deletion Rights:** Ensure the vendor provides a guaranteed mechanism to completely purge all proprietary data upon contract termination.

---

## Vendor Tier Classification

| Tier | Risk Profile | Procurement Requirement |
| :--- | :--- | :--- |
| **Tier 1 (Critical)** | Direct access to core company databases, PII, or financial records. | Requires legal review of data processing agreement (DPA) and explicit opt-out verification. |
| **Tier 2 (Moderate)** | Standard productivity or marketing SaaS with limited internal AI integrations. | Standard security review checklist and IT admin approval. |
| **Tier 3 (Low)** | Standalone consumer tools or isolated non-data-touching utilities. | Basic safety check (prohibited from using corporate accounts). |

---

## Actionable Next Steps
1. Distribute this checklist to procurement and department heads.
2. Flag any unverified SaaS tools currently operating in the gray zone (Shadow AI).
3. Update standard supplier contracts to include the mandatory data privacy clauses.
