"use client";
import { useParams } from "next/navigation"; import Link from "next/link"; import { useState } from "react"; import { CheckCircle2, Circle, PlayCircle } from "lucide-react"; import { Title, Bar } from "@/components/Shell"; import { courses, lessons } from "@/lib/data";
export default function Detail() {
  const { id } = useParams<{ id: string }>(); const c = courses.find(x => x.id === +id) ?? courses[0];
  const [cur, setCur] = useState(0); const [done, setDone] = useState<number[]>([0, 1]);
  const toggle = (i: number) => setDone(d => d.includes(i) ? d : [...d, i]);
  return (<><Title t={c.title} s={`${c.level} · ${c.hrs} hours · ${c.rating} rating`} />
    <div className="grid gap-6 lg:grid-cols-3">
      <div className="lg:col-span-2"><div className="card pop !p-0 overflow-hidden"><div className="grid aspect-video place-items-center bg-gradient-to-br from-indigo-900 to-blue-600 text-white"><div className="text-center"><PlayCircle size={64} className="mx-auto" /><p className="mt-3 text-lg font-semibold">{lessons[cur]}</p></div></div>
        <div className="flex flex-wrap items-center justify-between gap-3 p-5"><p className="text-sm text-slate-500">Lesson {cur + 1} of {lessons.length}</p><div className="flex gap-2"><button className="btn2" disabled={!cur} onClick={() => setCur(cur - 1)}>Previous</button><button className="btn" onClick={() => { toggle(cur); cur < lessons.length - 1 && setCur(cur + 1); }}>Complete & next</button></div></div></div>
        <Link href="/assessment" className="btn2 mt-4">Take the assessment</Link></div>
      <div className="card"><div className="mb-4"><p className="mb-2 text-sm font-semibold">{Math.round(done.length / lessons.length * 100)}% complete</p><Bar v={done.length / lessons.length * 100} /></div>
        {lessons.map((l, i) => <button key={l} onClick={() => setCur(i)} className={`flex w-full items-center gap-3 rounded-xl px-3 py-3 text-left text-sm transition ${cur === i ? "bg-indigo-50 font-semibold text-indigo-700" : "hover:bg-slate-50"}`}>{done.includes(i) ? <CheckCircle2 size={18} className="text-emerald-500" /> : <Circle size={18} className="text-slate-300" />}{l}</button>)}</div></div></>);
}
