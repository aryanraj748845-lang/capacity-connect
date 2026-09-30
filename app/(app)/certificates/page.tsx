"use client";
import { useState } from "react"; import { Award, Eye, Printer, ShieldCheck, X } from "lucide-react"; import { Title } from "@/components/Shell";
const certs = [["Advanced Python for Data Analytics", "CC-2026-PY-00412"], ["Cloud Infrastructure Basics", "CC-2026-CL-00377"], ["Cybersecurity Essentials", "CC-2026-CS-00298"]];
const Cert = ({ t }: { t: string }) => (<div className="rounded-3xl border-[6px] border-double border-indigo-200 bg-gradient-to-br from-white to-indigo-50 p-8 text-center"><Award size={44} className="mx-auto text-indigo-600" /><p className="mt-2 text-sm font-semibold tracking-widest text-indigo-600">CAPACITY CONNECT</p><h3 className="mt-4 text-2xl font-extrabold text-slate-900">Certificate of Completion</h3><p className="mt-4 text-slate-500">This certifies that</p><p className="my-1 text-3xl font-bold text-indigo-700">Priya Singh</p><p className="text-slate-500">has successfully completed</p><p className="mt-1 text-lg font-bold">{t}</p><div className="mt-6 flex justify-between text-xs text-slate-500"><span>Issued 28 Sep 2026</span><span>Director, Capacity Building</span></div></div>);
export default function Certs() {
  const [view, setView] = useState<number | null>(null); const [ver, setVer] = useState<number[]>([]);
  return (<><Title t="Certificates" s="Your verified achievements." />
    <div className="grid gap-6 lg:grid-cols-2">{certs.map(([t, id], i) => (<div key={id} className="card pop"><Cert t={t} />
      <div className="mt-4 flex flex-wrap items-center gap-2"><button className="btn" onClick={() => setView(i)}><Eye size={16} />View</button><button className="btn2" onClick={() => window.print()}><Printer size={16} />Print</button><button className="btn2" onClick={() => setVer(v => [...v, i])}><ShieldCheck size={16} />Verify</button>
        {ver.includes(i) && <span className="chip bg-emerald-50 text-emerald-700">✓ Verified · {id}</span>}</div></div>))}</div>
    {view !== null && <div className="noprint fixed inset-0 z-50 grid place-items-center bg-slate-900/60 p-4" onClick={() => setView(null)}><div className="pop relative w-full max-w-2xl rounded-3xl bg-white p-4" onClick={e => e.stopPropagation()}><button className="absolute right-4 top-4" onClick={() => setView(null)}><X /></button><Cert t={certs[view][0]} /></div></div>}</>);
}
