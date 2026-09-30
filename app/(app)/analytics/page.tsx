"use client";
import { AreaChart, Area, BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from "recharts"; import { Title } from "@/components/Shell"; import { monthly } from "@/lib/data";
export default function Analytics() {
  return (<><Title t="Analytics" s="Learning outcomes across the platform." />
    <div className="grid gap-6 lg:grid-cols-2">
      <div className="card"><h2 className="mb-4 font-bold">Active learners</h2><ResponsiveContainer height={280}><AreaChart data={monthly}><defs><linearGradient id="g" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4f46e5" stopOpacity={0.5} /><stop offset="100%" stopColor="#4f46e5" stopOpacity={0} /></linearGradient></defs><CartesianGrid strokeDasharray="3 3" vertical={false} /><XAxis dataKey="m" /><YAxis /><Tooltip /><Area dataKey="learners" stroke="#4f46e5" strokeWidth={3} fill="url(#g)" /></AreaChart></ResponsiveContainer></div>
      <div className="card"><h2 className="mb-4 font-bold">Learning hours</h2><ResponsiveContainer height={280}><BarChart data={monthly}><CartesianGrid strokeDasharray="3 3" vertical={false} /><XAxis dataKey="m" /><YAxis /><Tooltip /><Bar dataKey="hours" fill="#3b82f6" radius={[8, 8, 0, 0]} /></BarChart></ResponsiveContainer></div></div></>);
}
