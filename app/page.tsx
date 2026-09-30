import Link from "next/link"; import { BookOpen, Presentation, Network, ArrowRight } from "lucide-react";
const cards = [[BookOpen, "LEARN", "Personalised courses, assessments and verified certificates."], [Presentation, "TEACH", "Trainers publish courses and track learner growth."], [Network, "CONNECT", "AI competency matching pairs skill gaps with the best trainers."]] as const;
export default function Landing() {
  return (<div className="min-h-screen bg-gradient-to-br from-indigo-950 via-indigo-800 to-blue-600 text-white">
    <nav className="mx-auto flex max-w-6xl items-center justify-between p-6"><b className="text-lg tracking-wide">CAPACITY CONNECT</b><Link href="/login" className="rounded-xl bg-white/15 px-4 py-2 text-sm font-semibold backdrop-blur hover:bg-white/25">Login</Link></nav>
    <section className="mx-auto max-w-6xl px-6 pb-24 pt-16 text-center">
      <h1 className="pop mt-6 text-5xl font-extrabold tracking-tight md:text-7xl">CAPACITY CONNECT</h1>
      <p className="pop mt-4 text-xl text-indigo-100 md:text-2xl">Connect. Learn. Build Capacity.</p>
      <div className="mt-8 flex justify-center gap-3"><Link href="/dashboard" className="btn bg-white !text-indigo-700 hover:!bg-indigo-50">Explore dashboard <ArrowRight size={16} /></Link><Link href="/matching" className="btn2 !border-white/30 !bg-white/10 !text-white hover:!bg-white/20">Try competency matching</Link></div>
      <div className="mt-20 grid gap-5 md:grid-cols-3">{cards.map(([I, t, d], i) => (
        <div key={t} className="pop rounded-3xl border border-white/20 bg-white/10 p-7 text-left backdrop-blur transition hover:-translate-y-2 hover:bg-white/20" style={{ animationDelay: i * 120 + "ms" }}>
          <div className="mb-4 grid h-12 w-12 place-items-center rounded-2xl bg-white text-indigo-700"><I /></div><h3 className="text-xl font-bold">{t}</h3><p className="mt-2 text-indigo-100">{d}</p></div>))}</div>
    </section></div>);
}
