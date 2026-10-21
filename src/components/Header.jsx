import React from 'react';
import { Volume2, VolumeX, Globe, RotateCcw, Settings, Flame, Shield, Wheat, Cpu } from 'lucide-react';

export function Header({ era, stats, lang, onToggleLang, isMuted, onToggleMute, onReset, onOpenSettings }) {
  return (
    <header className="border-b border-slate-800 bg-slate-900/90 backdrop-blur px-6 py-3 flex flex-wrap items-center justify-between gap-4 sticky top-0 z-30">
      <div className="flex items-center gap-3">
        <h1 className="text-xl font-extrabold tracking-tight bg-gradient-to-r from-amber-400 via-orange-400 to-amber-200 bg-clip-text text-transparent">
          {lang === 'hi' ? 'द स्टोन वर्ल्ड' : 'The Stone World'}
        </h1>
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-amber-500/10 text-amber-400 border border-amber-500/30">
          <Flame className="w-3.5 h-3.5" />
          Era {era.id}: {era.name[lang]}
        </span>
      </div>

      {/* Vital Civilization Stats */}
      <div className="flex items-center gap-5 bg-slate-950/80 px-4 py-1.5 rounded-full border border-slate-800 text-xs text-slate-400">
        <div className="flex items-center gap-1.5">
          <Wheat className="w-3.5 h-3.5 text-emerald-400" />
          <span>Food: <b className="text-slate-100">{stats.food}%</b></span>
        </div>
        <div className="flex items-center gap-1.5">
          <Cpu className="w-3.5 h-3.5 text-cyan-400" />
          <span>Tech: <b className="text-slate-100">{stats.tech}</b></span>
        </div>
        <div className="flex items-center gap-1.5">
          <Shield className="w-3.5 h-3.5 text-amber-400" />
          <span>Stability: <b className="text-slate-100">{stats.stability}%</b></span>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex items-center gap-2">
        <button
          onClick={onToggleLang}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs font-semibold border border-slate-700 transition"
        >
          <Globe className="w-3.5 h-3.5 text-cyan-400" />
          {lang === 'hi' ? '🇮🇳 हिन्दी' : '🇬🇧 English'}
        </button>

        <button
          onClick={onToggleMute}
          className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 border border-slate-700 transition text-slate-300"
          title="Toggle Sound FX"
        >
          {isMuted ? <VolumeX className="w-4 h-4 text-rose-400" /> : <Volume2 className="w-4 h-4 text-emerald-400" />}
        </button>

        <button
          onClick={onOpenSettings}
          className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 border border-slate-700 transition text-slate-300"
          title="Settings / AI API Key"
        >
          <Settings className="w-4 h-4" />
        </button>

        <button
          onClick={onReset}
          className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 border border-slate-700 transition text-slate-400 hover:text-rose-400"
          title="Reset Civilization"
        >
          <RotateCcw className="w-4 h-4" />
        </button>
      </div>
    </header>
  );
}
