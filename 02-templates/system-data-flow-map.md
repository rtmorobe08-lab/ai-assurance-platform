# AI System & Data Flow Map

**Client Organization:** [Insert Client Name]  
**Assessment Date:** [Insert Date]  
**Version:** 1.0  

---

## Executive Summary
This document provides a comprehensive visual inventory of all artificial intelligence tools, large language models (LLMs), API connections, and data inputs currently active within the organization. It establishes total transparency over sensitive client and company data flows to prevent unmonitored data leaks.

---

## 1. Sanctioned vs. Shadow AI Inventory

| Tool / Platform Name | Category | Department Owner | Data Ingestion Scope | Risk Level |
| :--- | :--- | :--- | :--- | :--- |
| *e.g., Enterprise ChatGPT* | Official SaaS | Engineering | Code & Technical Documentation | Medium |
| *e.g., Unvetted PDF AI Reader* | Shadow AI | Marketing | Client Financial Data / PII | **High** |
| *e.g., Internal Support Bot* | Custom Agent | Customer Success | Customer Query Logs | Low |

---

## 2. API Connections & External Endpoints

* **Primary Model Provider:** [e.g., OpenAI / Anthropic / Local Open-Source]
* **API Key Management:** [e.g., Hardcoded in source code / Centralized vault / Unmanaged]
* **Third-Party Integrations:** List any external plugins, CRMs, or databases connected directly to AI inference pipelines:
  1. 
  2. 

---

## 3. Data Flow Architecture

```text
[Internal Company Systems / Databases]
                  │
                  ▼
         [Data Masking / Filter]  ◄─── [HITL Control Gate]
                  │
                  ▼
     [External LLM / AI Context Window]
