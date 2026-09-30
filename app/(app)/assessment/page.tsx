"use client";
import { useEffect, useState } from "react"; import { Timer, Trophy, RotateCcw } from "lucide-react"; import { Title } from "@/components/Shell"; import { questions } from "@/lib/data";
export default function Assess() {
  const [i, setI] = useState(0); const [ans, setAns] = useState<number[]>(Array(questions.length).fill(-1)); const [t, setT] = useState(300); const [done, setDone] = useState(false);
  useEffect(() => { if (done) return; const x = setInterval(() => setT(v => { if (v <= 1) { setDone(true); return 0; } return v - 1; }), 1000); return () => clearInterval(x); }, [done]);
  const score = ans.filter((a, k) => a === questions[k].a).length;
  if (done) return (<div className="card pop mx-auto mt-8 max-w-lg text-center"><Trophy size={48} className="mx-auto text-amber-500" /><h1 className="mt-4 text-3xl font-extrabold">{score} / {questions.length}</h1><p className="mt-1 text-slate-500">{score >= 3 ? "Passed. Your certificate is ready." : "Not passed yet. Review the lessons and retry."}</p>
    <div className="mt-6 space-y-2 text-left text-sm">{questions.map((q, k) => <div key={k} className={`rounded-xl px-4 py-2 ${ans[k] === q.a ? "bg-emerald-50 text-emerald-700" : "bg-rose-50 text-rose-700"}`}>Q{k + 1}. {ans[k] === q.a ? "Correct" : `Answer: ${q.o[q.a]}`}</div>)}</div>
    <button className="btn mt-6" onClick={() => { setAns(Array(questions.length).fill(-1)); setI(0); setT(300); setDone(false); }}><RotateCcw size={16} />Retake</button></div>);
  const q = questions[i];
  return (<><Title t="Python for Data Analytics" s="Module assessment" />
    <div className="grid gap-6 lg:grid-cols-3"><div className="card pop lg:col-span-2">
      <div className="mb-5 flex items-center justify-between"><span className="chip bg-indigo-50 text-indigo-700">Question {i + 1} of {questions.length}</span><span className={`flex items-center gap-1 font-mono font-bold ${t < 60 ? "text-rose-600" : "text-slate-700"}`}><Timer size={16} />{String(Math.floor(t / 60)).padStart(2, "0")}:{String(t % 60).padStart(2, "0")}</span></div>
      <h2 className="text-xl font-bold">{q.q}</h2>
      <div className="mt-5 space-y-3">{q.o.map((o, k) => <button key={o} onClick={() => setAns(a => a.map((v, n) => n === i ? k : v))} className={`w-full rounded-xl border-2 px-4 py-3.5 text-left text-sm font-medium transition ${ans[i] === k ? "border-indigo-600 bg-indigo-50 text-indigo-700" : "border-slate-200 hover:border-indigo-300"}`}>{o}</button>)}</div>
      <div className="mt-6 flex justify-between"><button className="btn2" disabled={!i} onClick={() => setI(i - 1)}>Previous</button>{i < questions.length - 1 ? <button className="btn" onClick={() => setI(i + 1)}>Next</button> : <button className="btn" onClick={() => setDone(true)}>Submit</button>}</div></div>
      <div className="card h-fit"><p className="mb-3 text-sm font-semibold">Questions</p><div className="grid grid-cols-5 gap-2">{questions.map((_, k) => <button key={k} onClick={() => setI(k)} className={`aspect-square rounded-xl text-sm font-bold transition ${k === i ? "bg-indigo-600 text-white" : ans[k] >= 0 ? "bg-emerald-100 text-emerald-700" : "bg-slate-100 text-slate-500"}`}>{k + 1}</button>)}</div></div></div></>);
}
