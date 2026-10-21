import React from 'react';
import { Microscope } from 'lucide-react';
import { ELEMENTS } from '../data/gameData';

export function ElementInspector({ selectedElementId, lang }) {
  const el = ELEMENTS[selectedElementId] || ELEMENTS['stone'];
  if (!el) return null;

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 text-center shadow-xl">
      <div className="text-5xl mb-2">{el.icon}</div>
      <h3 className="text-base font-bold text-slate-100">{el.name[lang]}</h3>
      <span className="inline-block mt-1 px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-amber-500/10 text-amber-400 border border-amber-500/20">
        Era {el.era} • {el.category}
      </span>
      <p className="text-xs text-slate-400 mt-3 leading-relaxed text-left">
        {el.desc[lang]}
      </p>

      {el.science && (
        <div className="mt-3 p-3 rounded-xl bg-slate-950/80 border border-cyan-500/20 text-left">
          <div className="flex items-center gap-1.5 text-xs font-bold text-cyan-400 mb-1">
            <Microscope className="w-3.5 h-3.5" />
            <span>Science Insight</span>
          </div>
          <p className="text-[11px] text-cyan-200/90 leading-normal">
            {el.science[lang]}
          </p>
        </div>
      )}
    </div>
  );
}
