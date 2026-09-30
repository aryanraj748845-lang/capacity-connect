import Link from "next/link"; import { Title, Bar } from "@/components/Shell"; import { courses } from "@/lib/data"; import { Award, Clock, BookOpen, Flame } from "lucide-react";
export default function Dash() {
  const stats = [[BookOpen, "Enrolled", "6"], [Flame, "Day streak", "12"], [Clock, "Hours learned", "48"], [Award, "Certificates", "3"]] as const;
  return (<><Title t="My learning" s="Pick up where you left off." />
    <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">{stats.map(([I, l, v]) => <div key={l} className="card pop"><I className="mb-3 text-indigo-600" /><p className="text-3xl font-extrabold">{v}</p><p className="text-sm text-slate-500">{l}</p></div>)}</div>
    <div className="mt-6 grid gap-6 lg:grid-cols-3">
      <div className="card lg:col-span-2"><h2 className="mb-4 font-bold">Course progress</h2><div className="space-y-5">{courses.slice(0, 4).map(c => <Link key={c.id} href={`/courses/${c.id}`} className="block"><div className="mb-2 flex justify-between text-sm"><span className="font-medium">{c.title}</span><span className="text-slate-500">{c.progress}%</span></div><Bar v={c.progress} /></Link>)}</div></div>
      <div className="space-y-6">
        <div className="card bg-gradient-to-br from-indigo-600 to-blue-500 !border-0 text-white"><p className="text-sm text-indigo-100">Upcoming assessment</p><h3 className="mt-1 text-lg font-bold">Python for Data Analytics</h3><p className="mt-1 text-sm text-indigo-100">Tomorrow · 10:00 AM · 5 questions</p><Link href="/assessment" className="btn mt-4 !bg-white !text-indigo-700 !shadow-none">Start practice</Link></div>
        <div className="card"><h3 className="mb-3 font-bold">Recent certificates</h3>{["Cloud Basics", "Data Literacy", "Cyber Hygiene"].map(c => <Link href="/certificates" key={c} className="flex items-center gap-3 border-b py-2.5 text-sm last:border-0"><Award size={18} className="text-amber-500" />{c}</Link>)}</div>
      </div></div></>);
}
