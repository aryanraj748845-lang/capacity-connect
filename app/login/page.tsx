"use client";
import { useRouter } from "next/navigation"; import { useState } from "react"; import { Network } from "lucide-react";
const roles = [["Trainee", "/dashboard"], ["Trainer", "/trainer"], ["Admin", "/admin"]];
export default function Login() {
  const r = useRouter(); const [role, setRole] = useState(0);
  return (<div className="grid min-h-screen place-items-center bg-gradient-to-br from-indigo-950 to-blue-700 p-4">
    <div className="pop w-full max-w-md rounded-3xl bg-white p-8 shadow-2xl">
      <div className="mb-6 flex items-center gap-2 font-extrabold text-indigo-700"><Network />CAPACITY CONNECT</div>
      <h1 className="text-2xl font-bold">Sign in</h1><p className="mb-5 text-sm text-slate-500">Choose a role to explore the demo.</p>
      <div className="mb-4 grid grid-cols-3 gap-2 rounded-xl bg-slate-100 p-1">{roles.map(([n], i) => <button key={n} onClick={() => setRole(i)} className={`rounded-lg py-2 text-sm font-semibold transition ${role === i ? "bg-white text-indigo-700 shadow" : "text-slate-500"}`}>{n}</button>)}</div>
      <input defaultValue="priya@capacity.gov" className="mb-3 w-full rounded-xl border px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-indigo-400" />
      <input type="password" defaultValue="password" className="mb-5 w-full rounded-xl border px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-indigo-400" />
      <button className="btn w-full" onClick={() => r.push(roles[role][1])}>Continue as {roles[role][0]}</button></div></div>);
}
