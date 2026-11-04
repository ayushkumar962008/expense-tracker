# Pennywise — Smart Expense Tracker for Students

A student-first web application designed to help college and university students track everyday income and expenses, monitor real-time balances, analyze category spending, and view monthly fiscal reports with zero stress.

Built in accordance with the **Pennywise Product Requirements Document (PRD)** and styled faithfully after the **Stitch Pennywise Design System** (calm `#FAF8FF` lavender-tinted canvas, `#131B2E` deep navy typography, and `#006948` botanical emerald actions).

---

## Features (Complete P0 Workflow Implemented)

- **User Authentication & Session Security (A1, A9)**
  - Registration with name, email, password, and expected graduation year.
  - Login with secure bcrypt password verification and `httpOnly` JWT session cookies.
  - Generic authentication errors that do not disclose user email existence.
  - Protected API routes and protected application pages.
  - **Strict Per-User Data Isolation (A9):** Database queries and API endpoints enforce strict ownership (`WHERE user_id = ?`). Accounts cannot view, update, or delete another user's records.
- **Transaction Management (A2, A3, A4, A5)**
  - Add and edit income and expense transactions.
  - Preset starter categories: **Food & Dining**, **Transport**, **Study & Books**, **Rent & Bills**, **Shopping & Fun**, and **Other**.
  - Amount stored as integer minor units (cents) to prevent floating-point calculation errors.
  - Real-time client-side and server-side validation rejecting negative/zero amounts, missing categories, and malformed dates.
  - Edit form with automatic prefilling.
  - Deletion with accessible confirmation modal (`ConfirmModal`).
- **Dynamic Dashboard (A6)**
  - Derived live totals for Monthly Income, Total Expenses, and Safe-To-Spend Balance (`Balance = Income - Expenses`).
  - Weekly spending trajectory visualization and interactive spending pace indicator.
  - Category breakdown with percentages and visual bars.
  - Recent activity feed showing the latest ledger updates.
- **Searchable & Filterable History (A7)**
  - Live full-text search across descriptions, merchants, and notes.
  - Multi-criteria filtering by Month, Type (All, Expenses, Income), and Category.
  - Customizable sorting (Newest Date first, Oldest Date, Amount High to Low, Amount Low to High).
  - Responsive layout: clean table on desktop, stacked touch-friendly card list on mobile.
- **Monthly Fiscal Reports (A8)**
  - Month switcher with previous/next controls and month picker.
  - KPI Executive Metrics: Total Inflow, Total Outflow, Net Balance, and Daily Burn Rate.
  - Month-over-month percentage comparisons against prior month data.
  - Campus Budget Standing health grade (A, B+, B, C).
  - Handles empty months with an encouraging, actionable empty state.
- **Resilience & UX States (A10, A11)**
  - Loading states, spinners, and animated skeletons.
  - Recoverable error banners with one-click retry.
  - Helpful, encouraging empty states with quick actions.
  - Fully responsive on desktop, tablet, and mobile devices (including sticky thumb-friendly mobile navigation).

---

## Tech Stack

- **Framework:** Next.js 14 (App Router, Server & Client Components, Route Handlers)
- **Language:** TypeScript
- **Styling:** Tailwind CSS with Pennywise Stitch Design Tokens & Google Fonts (Plus Jakarta Sans & Inter)
- **Database:** SQLite relational database (powered by `sql.js` WebAssembly engine, zero native C++ compiler dependencies)
- **Security:** `bcryptjs` password hashing, `jsonwebtoken` cookie authentication, parameterized SQL queries

---

## Setup & Running Locally

### 1. Prerequisites
- Node.js (v18+)
- npm

### 2. Environment Configuration
Copy the provided `.env.example` to `.env.local`:
```bash
cp .env.example .env.local
```
*(An initial development secret is already configured in `.env.local` for immediate local execution).*

### 3. Install Dependencies
```bash
npm install
```

### 4. Seed Demo Data (Optional)
To load a pre-configured student demo account (`alex.morgan@stanford.edu` / `password123`) populated with realistic campus transactions (stipends, dorm rent, groceries, bookstore supplies, coffee):
```bash
npm run seed
```
*(Alternatively, you can click the **"Load Student Demo Data"** button anytime inside the application).*

### 5. Start Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 6. Production Build & Start
```bash
npm run build
npm run start
```

---

## Verification & Automated Test Suite

A comprehensive end-to-end automated verification script is included to test all acceptance criteria defined in Section 5 of the PRD:

```bash
npm run test:acceptance
```

### Acceptance Criteria Coverage (37/37 Automated Tests Passed):
- `A1`: User registration, authentication, protected routes, generic errors.
- `A2`: Valid income and expense creation; validation rejecting non-positive amounts, invalid types, and missing fields.
- `A3`: Transaction persistence and newest-first chronological history display.
- `A4`: Transaction editing and persistence across summaries and reports.
- `A5`: Confirmed deletion with immediate recalculation of dashboard totals.
- `A6`: Dashboard mathematical accuracy (`Balance = Income - Expenses`).
- `A7`: Transaction search and multi-facet filtering.
- `A8`: Monthly reports with dynamic month selector and empty month handling.
- `A9`: Strict per-user isolation (direct ID access, edit, or delete attempts across accounts are blocked).
- `A10`: Responsive desktop and mobile navigation layouts.
- `A11`: Loading, empty, and recoverable error states.

---

## Demo Credentials

For quick evaluation:
- **Email:** `alex.morgan@stanford.edu`
- **Password:** `password123`

You can also register any new account from the **Create Account** tab on the login page. New accounts start with a clean, private ledger.

---

## Deferred Features (Per PRD Implementation Note)

Per PRD Section 1 & Section 5 instructions, P0 core functionality was prioritized over optional bonus features. The following features are deferred for future iterations:
- Real bank account syncing / Plaid API integration
- AI financial assistant / generative chat
- Receipt camera OCR scanning
- Google OAuth / Apple SSO integration (UI triggers present in accordance with Stitch mockups)
- PDF / CSV file export
- Multi-currency conversion
