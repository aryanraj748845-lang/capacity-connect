"use client";
import { Users, BookOpen, Award, TrendingUp } from "lucide-react"; import { PieChart, Pie, Cell, LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts"; import { Title } from "@/components/Shell"; import { cats, monthly } from "@/lib/data";
const col = ["#4f46e5", "#3b82f6", "#06b6d4", "#8b5cf6", "#94a3b8"];
export default function Admin() {
  return (<><Title t="Admin dashboard" s="Platform health at a glance." />
    <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">{[[Users, "Users", "2,480"], [BookOpen, "Courses", "64"], [Award, "Certificates", "1,120"], [TrendingUp, "Completion", "78%"]].map(([I, l, v]: any) => <div key={l} className="card pop"><I className="mb-2 text-indigo-600" /><p className="text-2xl font-extrabold">{v}</p><p className="text-sm text-slate-500">{l}</p></div>)}</div>
    <div className="mt-6 grid gap-6 lg:grid-cols-2">
      <div className="card"><h2 className="mb-4 font-bold">Enrolments by category</h2><ResponsiveContainer height={240}><PieChart><Pie data={cats} dataKey="v" nameKey="n" innerRadius={55} outerRadius={90} paddingAngle={3}>{cats.map((_, i) => <Cell key={i} fill={col[i]} />)}</Pie><Tooltip /></PieChart></ResponsiveContainer></div>
      <div className="card"><h2 className="mb-4 font-bold">Certificates issued</h2><ResponsiveContainer height={240}><LineChart data={monthly}><XAxis dataKey="m" /><YAxis /><Tooltip /><Line dataKey="certs" stroke="#4f46e5" strokeWidth={3} dot={{ r: 4 }} /></LineChart></ResponsiveContainer></div></div></>);
}
