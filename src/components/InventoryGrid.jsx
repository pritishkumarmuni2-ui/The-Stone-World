import React, { useState } from 'react';
import { Package, Sparkles } from 'lucide-react';
import { ELEMENTS } from '../data/gameData';

export function InventoryGrid({ inventory, onSelectItem, onInspectItem, lang, soundFX }) {
  const [filterEra, setFilterEra] = useState('all');

  const items = inventory.map(id => ELEMENTS[id]).filter(Boolean);
  const filteredItems = filterEra === 'all' ? items : items.filter(el => el.era === parseInt(filterEra, 10));

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl flex flex-col h-[560px] overflow-hidden shadow-xl">
      <div className="px-5 py-4 border-b border-slate-800 flex items-center justify-between">
        <div className="flex items-center gap-2 font-bold text-sm text-slate-100">
          <Package className="w-4 h-4 text-cyan-400" />
          <span>{lang === 'hi' ? 'खोजे गए तत्व' : 'Discovered Elements'}</span>
        </div>
        <span className="text-xs bg-slate-800 text-slate-300 px-2.5 py-0.5 rounded-full font-semibold">
          {inventory.length} / {Object.keys(ELEMENTS).length}
        </span>
      </div>

      {/* Filter Tabs */}
      <div className="flex items-center gap-1.5 px-4 py-2 border-b border-slate-800/60 overflow-x-auto text-xs">
        <button
          onClick={() => setFilterEra('all')}
          className={`px-2.5 py-1 rounded-lg transition ${filterEra === 'all' ? 'bg-amber-500/20 text-amber-400 font-bold border border-amber-500/40' : 'text-slate-400 hover:text-slate-200'}`}
        >
          All
        </button>
        {[1, 2, 3, 4, 5, 6, 7, 8].map(eraNum => (
          <button
            key={eraNum}
            onClick={() => setFilterEra(eraNum.toString())}
            className={`px-2.5 py-1 rounded-lg transition whitespace-nowrap ${filterEra === eraNum.toString() ? 'bg-amber-500/20 text-amber-400 font-bold border border-amber-500/40' : 'text-slate-400 hover:text-slate-200'}`}
          >
            Era {eraNum}
          </button>
        ))}
      </div>

      {/* Grid of items */}
      <div className="flex-1 p-4 overflow-y-auto grid grid-cols-2 sm:grid-cols-3 gap-3 content-start">
        {filteredItems.map(el => (
          <div
            key={el.id}
            onClick={() => {
              soundFX.playClick();
              onSelectItem(el.id);
              onInspectItem(el.id);
            }}
            className={`group relative p-3 rounded-xl border flex flex-col items-center justify-center text-center cursor-pointer transition select-none hover:-translate-y-1 hover:shadow-lg ${el.isBreakthrough ? 'bg-slate-800/80 border-amber-500/40 hover:border-amber-400 hover:shadow-amber-500/20' : 'bg-slate-950/70 border-slate-800 hover:border-slate-700'}`}
          >
            {el.isBreakthrough && (
              <span className="absolute top-1.5 right-1.5 text-amber-400">
                <Sparkles className="w-3 h-3" />
              </span>
            )}
            <span className="text-3xl mb-1 group-hover:scale-110 transition">{el.icon}</span>
            <span className="text-xs font-semibold text-slate-200 line-clamp-1">{el.name[lang]}</span>
            <span className="text-[10px] text-slate-500 mt-0.5">Era {el.era}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
