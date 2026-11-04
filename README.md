# Finora — Smart Expense Tracker

A working Next.js + TypeScript + Tailwind CSS expense tracker MVP using browser localStorage.

## Run on Windows

```bash
npm install
npm run dev
```

Open http://localhost:3000

Sign in with any valid email and a password of at least six characters.

## Features

- INR dashboard with live balance, income, expenses, and savings rate
- Add, edit, delete, and filter transactions
- Monthly reports and net-savings calculations
- Responsive navigation
- Local authentication and browser persistence

## Environment variables

No variables are required for the current MVP. For future Supabase integration, copy `.env.example` to `.env.local`.

```powershell
copy .env.example .env.local
```

## Production

```bash
npm run build
npm run start
```