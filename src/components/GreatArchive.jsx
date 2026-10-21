import React from 'react';
import { ERAS, ELEMENTS } from '../data/gameData';
import { CheckCircle2, Lock } from 'lucide-react';

export function GreatArchive({ currentEra, unlockedEras, inventory, lang }) {
  return (
    <div className="max-w-4xl mx-auto flex flex-col gap-5 py-4">
      {ERAS.map(era => {
        const isUnlocked = unlockedEras.includes(era.id);
        const isCurrent = era.id === currentEra;
        const isPast = unlockedEras.includes(era.id) && era.id < currentEra;

        return (
          <div
            key={era.id}
            className={`p-6 rounded-2xl border transition ${isCurrent ? 'bg-slate-900 border-amber-500 shadow-xl shadow-amber-500/10' : isUnlocked ? 'bg-slate-900/80 border-slate-800' : 'bg-slate-950/40 border-slate-900 opacity-40'}`}
          >
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-3">
                <span className="text-3xl">{era.badge}</span>
                <div>
                  <h3 className="text-base font-bold text-slate-100">
                    Era {era.id}: {era.name[lang]}
                  </h3>
                  <span className="text-xs text-slate-400">{era.period[lang]}</span>
                </div>
              </div>
              <span className={`text-xs px-3 py-1 rounded-full font-bold uppercase tracking-wider ${isCurrent ? 'bg-amber-500/20 text-amber-400 border border-amber-500/40' : isPast ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30' : 'bg-slate-800 text-slate-500'}`}>
                {isCurrent ? 'Active Era' : isPast ? 'Completed' : 'Locked'}
              </span>
            </div>

            <blockquote className="border-l-2 border-amber-500 pl-3 italic text-xs text-amber-300/90 my-2">
              "{era.quote[lang]}"
            </blockquote>

            <p className="text-xs text-slate-300 mt-2 leading-relaxed">
              {era.story[lang]}
            </p>

            <div className="mt-3 p-3 rounded-xl bg-slate-950/70 border border-slate-800 text-xs text-slate-300">
              <b className="text-cyan-400">⚡ Scientific Principle: </b>
              {era.scienceFact[lang]}
            </div>

            <div className="mt-4 flex flex-wrap items-center gap-2">
              <span className="text-xs font-semibold text-slate-400">Required:</span>
              {era.requiredDiscoveries.map(reqId => {
                const has = inventory.includes(reqId);
                const name = ELEMENTS[reqId]?.name[lang] || reqId;
                return (
                  <span
                    key={reqId}
                    className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-medium border ${has ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-300' : 'bg-slate-800/40 border-slate-800 text-slate-500'}`}
                  >
                    {has ? <CheckCircle2 className="w-3 h-3 text-emerald-400" /> : <Lock className="w-3 h-3 text-slate-500" />}
                    {name}
                  </span>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}
