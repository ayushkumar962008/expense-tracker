"use client";
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { useStore, formatINR } from "@/lib/store";
export default function BudgetsPage(){const{transactions}=useStore();const total=transactions.filter(x=>x.type==="expense").reduce((s,x)=>s+x.amount,0);return(<DashboardLayout><main className="min-h-screen p-4 pt-24 lg:p-6"><h1 className="font-headline-lg text-headline-lg text-on-surface">Budgets</h1><p className="mt-1 font-body-md text-body-md text-on-surface-variant">Current recorded expenses: {formatINR(total)}.</p></main></DashboardLayout>)}