"use client";
import Link from "next/link"; import { useState } from "react"; import { Search, Star, Clock, PlayCircle } from "lucide-react"; import { Title, Bar } from "@/components/Shell"; import { courses } from "@/lib/data";
export default function Courses() {
  const [q, setQ] = useState(""); const [cat, setCat] = useState("All");
  const list = courses.filter(c => (cat === "All" || c.cat === cat) && c.title.toLowerCase().includes(q.toLowerCase()));
  return (<><Title t="Courses" s="Browse the catalogue and continue learning." />
    <div className="mb-6 flex flex-col gap-3 md:flex-row"><div className="relative flex-1"><Search className="absolute left-3 top-3 text-slate-400" size={18} /><input value={q} onChange={e => setQ(e.target.value)} placeholder="Search courses" className="w-full rounded-xl border bg-white py-3 pl-10 pr-4 text-sm outline-none focus:ring-2 focus:ring-indigo-400" /></div>
      <div className="flex gap-2 overflow-x-auto">{["All", "Data", "AI", "Cloud", "Security", "Management"].map(c => <button key={c} onClick={() => setCat(c)} className={`chip whitespace-nowrap py-2.5 ${cat === c ? "bg-indigo-600 text-white" : "bg-white text-slate-600 border"}`}>{c}</button>)}</div></div>
    <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">{list.map(c => (
      <Link key={c.id} href={`/courses/${c.id}`} className="card pop group overflow-hidden !p-0 transition hover:-translate-y-1 hover:shadow-xl">
        <div className="grid h-32 place-items-center bg-gradient-to-br from-indigo-500 to-blue-400 text-white"><PlayCircle size={40} className="transition group-hover:scale-125" /></div>
        <div className="p-5"><span className="chip bg-indigo-50 text-indigo-700">{c.cat} · {c.level}</span><h3 className="mt-3 font-bold">{c.title}</h3>
          <div className="mt-2 flex gap-4 text-xs text-slate-500"><span className="flex items-center gap-1"><Star size={13} className="text-amber-500" />{c.rating}</span><span className="flex items-center gap-1"><Clock size={13} />{c.hrs}h</span><span>{c.lessons} lessons</span></div><div className="mt-4"><Bar v={c.progress} /></div></div></Link>))}
      {!list.length && <p className="text-slate-500">No courses match. Try a different search or category.</p>}</div></>);
}
