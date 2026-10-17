# Human-in-the-Loop (HITL) Control Matrix

**Framework Standard:** SMME AI Assurance & Governance  
**Purpose:** Establishing hard automated stop points for autonomous agents and LLM tool-use[cite: 1].

---

## Overview
Autonomous agents introduce high financial and operational risk when granted unchecked API execution privileges. This control matrix outlines the mandatory decision gates required to ensure human oversight before high-impact actions are finalized.

---

## HITL Decision Tree & Thresholds

| Action Category | Agent Operation Type | Risk Level | Mandatory HITL Trigger Condition | Bypass Permitted? |
| :--- | :--- | :--- | :--- | :--- |
| **Financial** | Transaction refunds, payouts, or invoice processing. | **High** | Any monetary transfer exceeding threshold (e.g., > $50 / R1,000) or automated credit adjustments. | **No** (Strict Gate) |
| **Communications** | Automated customer emails, public posts, or external notifications. | Medium | Bulk messaging, outbound cold outreach, or sensitive customer complaint resolutions. | **Yes** (With Audit Log) |
| **Data & Systems** | Database records modification, user permission changes, or API token generation. | **High** | Any destructive database query (`DELETE`/`DROP`) or creation of unvetted API access keys. | **No** (Strict Gate) |
| **Internal GenAI** | Routine document drafting, code generation, or internal knowledge retrieval. | Low | Standard internal drafting where output is reviewed before enterprise publishing. | **Yes** |

---

## Implementation Guidelines

1. **API Interception:** All agent execution pipelines must route through an interception middleware that checks requested tool calls against this matrix.
2. **Alert Routing:** When a `High Risk` trigger is hit, the agent must suspend execution and route a notification card (via Slack, Teams, or Dashboard) to the designated department owner.
3. **Timeout & Fallback:** If a human reviewer does not approve or reject the action within a defined window (e.g., 30 minutes), the operation automatically defaults to **Abort**.

---

## Auditor Verification
* **Control Status:** Active
* **Review Frequency:** Quarterly audit and threshold adjustment
