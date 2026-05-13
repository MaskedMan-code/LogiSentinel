# 🛡️ LogiSentinel: Enterprise Fleet Diagnostics AI

[![Live Demo](https://img.shields.io/badge/Live_Demo-Available-success?style=for-the-badge)]([YOUR_VERCEL_LINK_HERE])
[![Track 1](https://img.shields.io/badge/Hackathon_Track-Agent_Security_%AMP;_Governance-blue?style=for-the-badge)](#)
[![Stack](https://img.shields.io/badge/Stack-React_|_FastAPI_|_Gemini-black?style=for-the-badge)](#)

> **Transforming 600-page technical manuals into instant, actionable intelligence—without compromising enterprise data privacy.**

## 🚨 The Problem: Uptime vs. Compliance
When a commercial fleet vehicle breaks down, every minute costs money. However, building AI tools for mechanics introduces two massive enterprise risks:
1. **Data Leaks:** Mechanics naturally input contextual PII (driver names, phone numbers, exact breakdown locations) into chat prompts, sending sensitive corporate data directly to third-party cloud LLMs.
2. **Hallucinations:** Generic AI models often confidently guess diagnostic procedures, leading to dangerous or expensive repairs.

## 💡 The Solution: LogiSentinel
LogiSentinel is a secure, Retrieval-Augmented Generation (RAG) platform designed specifically for commercial fleet maintenance. It acts as a middleman between the mechanic and the AI, strictly grounding answers in proprietary OEM manuals while actively sanitizing all data before it leaves the enterprise network.

---

## 🔒 Enterprise Guardrails (Track 1 Focus)
LogiSentinel was built from the ground up for **Agent Security & AI Governance**. It does not allow direct client-to-LLM communication. 

* **🛡️ The Privacy Shield (PII Interception):** All prompts are routed through a custom Python/FastAPI proxy. An active regex engine scrubs sensitive data (Phone Numbers, SSNs, Addresses) *before* the payload reaches Google Gemini. 
* **📋 Immutable Audit Logging:** Every interaction, including the specific Vehicle ID accessed and the exact PII elements redacted, is logged in the backend for compliance review.
* **🎯 Zero-Hallucination Grounding:** The AI is restricted to answering based *only* on the active vehicle manual. If a diagnostic code is not in the electrical manual, the AI is programmed to refuse the answer rather than guess.

---

## 🏗️ System Architecture

### 1. Frontend (The Mechanic Interface)
* **Framework:** React + Vite
* **Language:** TypeScript
* **Styling:** Tailwind CSS (Dark Mode optimized for low-glare garage environments)
* **Hosting:** Vercel

### 2. Backend (The Security Proxy)
* **Framework:** Python + FastAPI
* **Security:** Custom Regex Data Sanitization & Rate Limiting
* **Hosting:** Render

### 3. Intelligence Layer (The Engine)
* **Model:** Google Gemini (1.5/2.5 Flash)
* **Ingestion:** Google Generative AI File API (Pre-indexed 600+ page PDF manuals)

---

## 🧪 Live Demo Instructions

Want to test the security guardrails yourself? 

1. Visit the [Live Dashboard]([[logi-sentinel-xk7n.vercel.app](https://logi-sentinel-xk7n.vercel.app/enterprise)]).
2. Navigate to the **AI Diagnostics** tab.
3. Select any fleet vehicle from the dropdown.
4. Try to trick the system into leaking data by typing: 
   > *"Driver John Doe is stranded. Call him at 555-123-4567. What causes a P0171 code?"*
5. Watch the **Privacy Shield** successfully intercept the phone number while still delivering the correct diagnostic repair procedure.

---
*Built for the Transforming Enterprise Through AI Hackathon - May 2026*
