"use client";
import Link from "next/link"; import { usePathname } from "next/navigation"; import { useState } from "react";
import { LayoutDashboard, BookOpen, ClipboardCheck, Award, GraduationCap, ShieldCheck, Sparkles, BarChart3, Menu, X, LogOut, Network, LifeBuoy } from "lucide-react";
const nav = [["Dashboard", "/dashboard", LayoutDashboard], ["Courses", "/courses", BookOpen], ["Assessment", "/assessment", ClipboardCheck], ["Certificates", "/certificates", Award], ["Trainer", "/trainer", GraduationCap], ["Admin", "/admin", ShieldCheck], ["Competency Matching", "/matching", Sparkles], ["Analytics", "/analytics", BarChart3], ["Support", "/support", LifeBuoy]] as const;
export default function Shell({ children }: { children: React.ReactNode }) {
  const p = usePathname(); const [open, setOpen] = useState(false);
  return (<div className="min-h-screen lg:pl-64">
    <aside className={`fixed inset-y-0 left-0 z-40 w-64 bg-gradient-to-b from-indigo-950 to-slate-900 p-4 text-indigo-100 transition-transform lg:translate-x-0 ${open ? "" : "-translate-x-full"}`}>
      <Link href="/" className="mb-8 flex items-center gap-2 px-2 pt-2 text-lg font-extrabold tracking-wide text-white"><span className="grid h-9 w-9 place-items-center rounded-xl bg-indigo-500"><Network size={18} /></span>CAPACITY CONNECT</Link>
      <nav className="space-y-1">{nav.map(([l, h, I]) => { const on = p.startsWith(h); return (
        <Link key={h} href={h} onClick={() => setOpen(false)} className={`flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition ${on ? "bg-white/15 text-white shadow-inner" : "hover:bg-white/10"}`}><I size={18} />{l}</Link>); })}</nav>
      <Link href="/login" className="absolute bottom-4 left-4 right-4 flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm hover:bg-white/10"><LogOut size={18} />Sign out</Link>
    </aside>
    {open && <div className="fixed inset-0 z-30 bg-slate-900/50 lg:hidden" onClick={() => setOpen(false)} />}
    <header className="sticky top-0 z-20 flex items-center justify-between border-b bg-white/80 px-4 py-3 backdrop-blur lg:px-8">
      <button className="lg:hidden" onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
      <p className="hidden text-sm text-slate-500 lg:block">Welcome back, <b className="text-slate-800">Priya</b></p>
      <div className="grid h-9 w-9 place-items-center rounded-full bg-indigo-600 text-sm font-bold text-white">P</div>
    </header>
    <main className="mx-auto max-w-7xl p-4 lg:p-8">{children}</main></div>);
}
export const Title = ({ t, s }: { t: string; s?: string }) => <div className="pop mb-6"><h1 className="text-2xl font-extrabold tracking-tight text-slate-900 lg:text-3xl">{t}</h1>{s && <p className="mt-1 text-slate-500">{s}</p>}</div>;
export const Bar = ({ v }: { v: number }) => <div className="h-2 overflow-hidden rounded-full bg-slate-100"><div className="h-full rounded-full bg-gradient-to-r from-indigo-500 to-blue-400 transition-all duration-700" style={{ width: v + "%" }} /></div>;
