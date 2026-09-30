"use client";
import { Star, Users, BookOpen } from "lucide-react"; import { BarChart, Bar as B, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts"; import { Title, Bar } from "@/components/Shell"; import { courses, learners, monthly } from "@/lib/data";
export default function Trainer() {
  return (<><Title t="Trainer dashboard" s="Your courses, learners and feedback." />
    <div className="grid grid-cols-3 gap-4">{[[BookOpen, "Courses", "4"], [Users, "Learners", "312"], [Star, "Avg rating", "4.8"]].map(([I, l, v]: any) => <div key={l} className="card pop"><I className="mb-2 text-indigo-600" /><p className="text-2xl font-extrabold">{v}</p><p className="text-sm text-slate-500">{l}</p></div>)}</div>
    <div className="mt-6 grid gap-6 lg:grid-cols-2">
      <div className="card"><h2 className="mb-4 font-bold">Learners per month</h2><ResponsiveContainer height={240}><BarChart data={monthly}><XAxis dataKey="m" /><YAxis /><Tooltip /><B dataKey="learners" fill="#4f46e5" radius={[8, 8, 0, 0]} /></BarChart></ResponsiveContainer></div>
      <div className="card"><h2 className="mb-4 font-bold">Top learners</h2><div className="space-y-4">{learners.map(([n, v]) => <div key={n}><div className="mb-1 flex justify-between text-sm"><span>{n}</span><span>{v}%</span></div><Bar v={v} /></div>)}</div></div>
      <div className="card lg:col-span-2"><h2 className="mb-4 font-bold">My courses</h2>{courses.slice(0, 3).map(c => <div key={c.id} className="flex items-center justify-between border-b py-3 text-sm last:border-0"><span className="font-medium">{c.title}</span><span className="flex items-center gap-1"><Star size={14} className="text-amber-500" />{c.rating}</span></div>)}</div></div></>);
}
