import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { SettlementCanvas } from './components/SettlementCanvas';
import { Crucible } from './components/Crucible';
import { InventoryGrid } from './components/InventoryGrid';
import { ElementInspector } from './components/ElementInspector';
import { MentorDrawer } from './components/MentorDrawer';
import { GreatArchive } from './components/GreatArchive';
import { LeveragePuzzle } from './puzzles/LeveragePuzzle';
import {
  IrrigationPuzzle,
  SmeltingPuzzle,
  CelestialPuzzle,
  OpticsPuzzle,
  SteamPuzzle,
  LogicPuzzle,
  GridPuzzle
} from './puzzles/EraPuzzles';
import { ERAS, ELEMENTS } from './data/gameData';
import { useSoundFX } from './hooks/useSoundFX';
import { Anvil, Puzzle, BookOpen, KeyRound, Sparkles, CheckCircle2 } from 'lucide-react';
import confetti from 'canvas-confetti';

const STORAGE_KEY = 'the_stone_world_react_save_v1';

const loadSavedData = () => {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      return JSON.parse(saved);
    }
  } catch (e) {
    console.warn('Failed to load save from localStorage', e);
  }
  return null;
};

export default function App() {
  const initialData = loadSavedData() || {};

  const [lang, setLang] = useState(() => initialData.lang ?? 'en');
  const [isMuted, setIsMuted] = useState(false);
  const [activeTab, setActiveTab] = useState('forge');
  const [currentEra, setCurrentEra] = useState(() => initialData.currentEra ?? 1);
  const [unlockedEras, setUnlockedEras] = useState(() => initialData.unlockedEras ?? [1]);
  const [inventory, setInventory] = useState(() => {
    const defaultInv = ['stone', 'wood', 'dry_leaves'];
    const savedInv = initialData.inventory || defaultInv;
    // Ensure all raw starter elements for unlocked eras are present
    const eraList = initialData.unlockedEras || [1];
    const rawStarters = Object.values(ELEMENTS)
      .filter(e => eraList.includes(e.era) && e.category === 'raw')
      .map(e => e.id);
    return Array.from(new Set([...savedInv, ...rawStarters]));
  });
  const [stats, setStats] = useState(() => initialData.stats ?? { food: 40, tech: 10, stability: 50 });
  const [solvedPuzzles, setSolvedPuzzles] = useState(() => initialData.solvedPuzzles ?? {});
  const [slot1, setSlot1] = useState(null);
  const [slot2, setSlot2] = useState(null);
  const [inspectId, setInspectId] = useState('stone');
  const [apiKey, setApiKey] = useState(() => initialData.apiKey ?? '');
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [puzzleEraId, setPuzzleEraId] = useState(null);
  const [eraUnlockedModal, setEraUnlockedModal] = useState(null);

  const soundFX = useSoundFX(isMuted);

  // Keep puzzle viewer synchronized with current era by default
  const activePuzzleEra = puzzleEraId || currentEra;

  // Persist state to localStorage on every change
  useEffect(() => {
    try {
      localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify({
          currentEra,
          unlockedEras,
          inventory,
          stats,
          solvedPuzzles,
          lang,
          apiKey
        })
      );
    } catch (e) {
      console.warn('Failed to save to localStorage', e);
    }
  }, [currentEra, unlockedEras, inventory, stats, solvedPuzzles, lang, apiKey]);

  // Handle element discovery
  const handleDiscover = (elemId) => {
    if (!inventory.includes(elemId)) {
      const updatedInv = [...inventory, elemId];
      setInventory(updatedInv);
      const el = ELEMENTS[elemId];
      if (el?.isBreakthrough) {
        setStats(prev => ({
          ...prev,
          tech: prev.tech + 15,
          stability: Math.min(100, prev.stability + 5)
        }));
      }
      checkEraProgression(updatedInv, solvedPuzzles);
    }
  };

  // Handle puzzle solved
  const handleSolvePuzzle = (puzzleId) => {
    const updated = { ...solvedPuzzles, [puzzleId]: true };
    setSolvedPuzzles(updated);
    setStats(prev => ({
      ...prev,
      tech: prev.tech + 20,
      stability: Math.min(100, prev.stability + 15)
    }));
    checkEraProgression(inventory, updated);
  };

  const checkEraProgression = (currentInv, currentSolved) => {
    const eraDef = ERAS.find(e => e.id === currentEra);
    if (!eraDef) return;

    const hasAll = eraDef.requiredDiscoveries.every(req => currentInv.includes(req));
    const puzzleDone = !!currentSolved[eraDef.puzzleId];

    if (hasAll && puzzleDone && currentEra < ERAS.length) {
      const nextEra = currentEra + 1;
      if (!unlockedEras.includes(nextEra)) {
        setCurrentEra(nextEra);
        setUnlockedEras(prev => [...prev, nextEra]);
        setPuzzleEraId(nextEra);

        // Add native raw starter elements for next era
        const newStarters = Object.values(ELEMENTS)
          .filter(e => e.era === nextEra && e.category === 'raw')
          .map(e => e.id);

        setInventory(prev => Array.from(new Set([...prev, ...newStarters])));
        setStats(prev => ({
          ...prev,
          food: Math.min(100, prev.food + 20),
          stability: Math.min(100, prev.stability + 20)
        }));

        // Celebratory notification & Confetti
        const nextDef = ERAS.find(e => e.id === nextEra);
        setEraUnlockedModal({
          eraId: nextEra,
          name: nextDef?.name[lang] || `Era ${nextEra}`,
          badge: nextDef?.badge || '🌟',
          story: nextDef?.story[lang] || ''
        });
        soundFX.playDiscover();
        confetti({
          particleCount: 120,
          spread: 90,
          origin: { y: 0.6 }
        });
      }
    }
  };

  const handleSelectItem = (id) => {
    if (!slot1) setSlot1(id);
    else if (!slot2) setSlot2(id);
    else setSlot2(id);
  };

  const handleReset = () => {
    if (confirm(lang === 'hi' ? 'क्या आप सभ्यता को पुनः पत्थर युग से शुरू करना चाहते हैं?' : 'Reset all civilization progress back to Era 1?')) {
      localStorage.removeItem(STORAGE_KEY);
      setCurrentEra(1);
      setUnlockedEras([1]);
      setInventory(['stone', 'wood', 'dry_leaves']);
      setStats({ food: 40, tech: 10, stability: 50 });
      setSolvedPuzzles({});
      setSlot1(null);
      setSlot2(null);
      setPuzzleEraId(1);
      soundFX.playClick();
    }
  };

  const currentEraDef = ERAS.find(e => e.id === currentEra) || ERAS[0];

  // Render puzzle matching selected era
  const renderPuzzle = () => {
    switch (activePuzzleEra) {
      case 1:
        return (
          <LeveragePuzzle
            onSolve={handleSolvePuzzle}
            isSolved={!!solvedPuzzles['leverage_puzzle']}
            lang={lang}
            soundFX={soundFX}
          />
        );
      case 2:
        return (
          <IrrigationPuzzle
            onSolve={handleSolvePuzzle}
            isSolved={!!solvedPuzzles['irrigation_puzzle']}
            lang={lang}
            soundFX={soundFX}
          />
        );
      case 3:
        return (
          <SmeltingPuzzle
            onSolve={handleSolvePuzzle}
            isSolved={!!solvedPuzzles['smelting_puzzle']}
            lang={lang}
            soundFX={soundFX}
          />
        );
      case 4:
        return (
          <CelestialPuzzle
            onSolve={handleSolvePuzzle}
            isSolved={!!solvedPuzzles['celestial_puzzle']}
            lang={lang}
            soundFX={soundFX}
          />
        );
      case 5:
        return (
          <OpticsPuzzle
            onSolve={handleSolvePuzzle}
            isSolved={!!solvedPuzzles['optics_puzzle']}
            lang={lang}
            soundFX={soundFX}
          />
        );
      case 6:
        return (
          <SteamPuzzle
            onSolve={handleSolvePuzzle}
            isSolved={!!solvedPuzzles['steam_puzzle']}
            lang={lang}
            soundFX={soundFX}
          />
        );
      case 7:
        return (
          <LogicPuzzle
            onSolve={handleSolvePuzzle}
            isSolved={!!solvedPuzzles['logic_puzzle']}
            lang={lang}
            soundFX={soundFX}
          />
        );
      case 8:
        return (
          <GridPuzzle
            onSolve={handleSolvePuzzle}
            isSolved={!!solvedPuzzles['grid_puzzle']}
            lang={lang}
            soundFX={soundFX}
          />
        );
      default:
        return (
          <LeveragePuzzle
            onSolve={handleSolvePuzzle}
            isSolved={!!solvedPuzzles['leverage_puzzle']}
            lang={lang}
            soundFX={soundFX}
          />
        );
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#0b0d14] text-slate-100">
      <Header
        era={currentEraDef}
        stats={stats}
        lang={lang}
        onToggleLang={() => setLang(prev => (prev === 'en' ? 'hi' : 'en'))}
        isMuted={isMuted}
        onToggleMute={() => setIsMuted(prev => !prev)}
        onReset={handleReset}
        onOpenSettings={() => setIsSettingsOpen(true)}
      />

      <SettlementCanvas eraId={currentEra} />

      {/* Navigation Tab Bar */}
      <nav className="flex items-center gap-2 px-6 bg-slate-900/60 border-b border-slate-800">
        <button
          onClick={() => { soundFX.playClick(); setActiveTab('forge'); }}
          className={`flex items-center gap-2 py-3 px-4 border-b-2 text-xs font-bold transition ${activeTab === 'forge' ? 'border-amber-500 text-amber-400' : 'border-transparent text-slate-400 hover:text-slate-200'}`}
        >
          <Anvil className="w-4 h-4" />
          <span>{lang === 'hi' ? 'भट्टी (प्रयोगशाला)' : 'The Forge'}</span>
        </button>

        <button
          onClick={() => { soundFX.playClick(); setActiveTab('puzzle'); }}
          className={`flex items-center gap-2 py-3 px-4 border-b-2 text-xs font-bold transition ${activeTab === 'puzzle' ? 'border-amber-500 text-amber-400' : 'border-transparent text-slate-400 hover:text-slate-200'}`}
        >
          <Puzzle className="w-4 h-4" />
          <span>{lang === 'hi' ? 'युग की पहेली' : 'Era Puzzle'}</span>
        </button>

        <button
          onClick={() => { soundFX.playClick(); setActiveTab('archive'); }}
          className={`flex items-center gap-2 py-3 px-4 border-b-2 text-xs font-bold transition ${activeTab === 'archive' ? 'border-amber-500 text-amber-400' : 'border-transparent text-slate-400 hover:text-slate-200'}`}
        >
          <BookOpen className="w-4 h-4" />
          <span>{lang === 'hi' ? 'महा अभिलेखागार' : 'Great Archive'}</span>
        </button>
      </nav>

      {/* Main Viewport */}
      <main className="flex-1 max-w-7xl w-full mx-auto p-6">
        {activeTab === 'forge' && (
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_360px_300px] gap-6 items-start">
            <InventoryGrid
              inventory={inventory}
              onSelectItem={handleSelectItem}
              onInspectItem={(id) => setInspectId(id)}
              lang={lang}
              soundFX={soundFX}
            />

            <Crucible
              slot1={slot1}
              slot2={slot2}
              onClearSlot={(slotNum) => (slotNum === 1 ? setSlot1(null) : setSlot2(null))}
              onClearAll={() => { setSlot1(null); setSlot2(null); }}
              onSelectResult={(id) => setInspectId(id)}
              onDiscover={handleDiscover}
              lang={lang}
              soundFX={soundFX}
            />

            <div className="flex flex-col gap-5">
              <ElementInspector selectedElementId={inspectId} lang={lang} />
              <MentorDrawer eraId={currentEra} lang={lang} apiKey={apiKey} soundFX={soundFX} />
            </div>
          </div>
        )}

        {activeTab === 'puzzle' && (
          <div className="flex flex-col gap-5">
            {/* Era Puzzle Selector Bar */}
            <div className="max-w-2xl mx-auto w-full flex items-center justify-between bg-slate-900 border border-slate-800 p-2.5 rounded-xl text-xs">
              <span className="font-semibold text-slate-400 px-2">
                {lang === 'hi' ? 'पहेली चुनें:' : 'Select Era Puzzle:'}
              </span>
              <div className="flex items-center gap-1.5 flex-wrap">
                {ERAS.map((era) => {
                  const isUnlocked = unlockedEras.includes(era.id);
                  const isCurrent = activePuzzleEra === era.id;
                  const isDone = !!solvedPuzzles[era.puzzleId];
                  return (
                    <button
                      key={era.id}
                      onClick={() => {
                        if (isUnlocked) {
                          soundFX.playClick();
                          setPuzzleEraId(era.id);
                        }
                      }}
                      disabled={!isUnlocked}
                      className={`px-3 py-1.5 rounded-lg font-bold flex items-center gap-1 transition ${
                        isCurrent
                          ? 'bg-amber-500 text-slate-950 shadow-md shadow-amber-500/20'
                          : isUnlocked
                          ? 'bg-slate-800 hover:bg-slate-700 text-slate-200'
                          : 'bg-slate-950 text-slate-600 opacity-50 cursor-not-allowed'
                      }`}
                    >
                      <span>{era.badge}</span>
                      <span>Era {era.id}</span>
                      {isDone && <CheckCircle2 className="w-3 h-3 text-emerald-400 ml-0.5" />}
                    </button>
                  );
                })}
              </div>
            </div>

            {renderPuzzle()}
          </div>
        )}

        {activeTab === 'archive' && (
          <GreatArchive
            currentEra={currentEra}
            unlockedEras={unlockedEras}
            inventory={inventory}
            lang={lang}
          />
        )}
      </main>

      {/* Era Advance Celebration Modal */}
      {eraUnlockedModal && (
        <div className="fixed inset-0 bg-black/85 backdrop-blur-md z-50 flex items-center justify-center p-4">
          <div className="bg-slate-900 border-2 border-amber-500/50 rounded-2xl p-6 max-w-md w-full shadow-2xl text-center flex flex-col items-center">
            <span className="text-5xl mb-2 animate-bounce">{eraUnlockedModal.badge}</span>
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-400 mb-1">
              <Sparkles className="w-4 h-4" />
              <span>{lang === 'hi' ? 'सभ्यता का विकास!' : 'CIVILIZATION ADVANCED!'}</span>
            </div>
            <h2 className="text-xl font-extrabold text-white mb-3">
              {eraUnlockedModal.name}
            </h2>
            <p className="text-xs text-slate-300 leading-relaxed mb-6 bg-slate-950/60 p-4 rounded-xl border border-slate-800">
              {eraUnlockedModal.story}
            </p>
            <button
              onClick={() => {
                soundFX.playClick();
                setEraUnlockedModal(null);
                setActiveTab('forge');
              }}
              className="px-6 py-2.5 rounded-xl text-xs font-bold bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-slate-950 shadow-lg shadow-amber-500/20 active:scale-95 transition"
            >
              {lang === 'hi' ? 'सभ्यता आगे बढ़ाएं' : 'Enter the New Era'}
            </button>
          </div>
        </div>
      )}

      {/* Settings Modal */}
      {isSettingsOpen && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 max-w-md w-full shadow-2xl">
            <div className="flex items-center gap-2 text-base font-bold text-slate-100 mb-2">
              <KeyRound className="w-5 h-5 text-amber-400" />
              <h3>Mentor Settings</h3>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed mb-4">
              <b>Offline Mode:</b> Active by default with Socratic hints for all 8 eras.<br/>
              <b>Live AI Mode (Optional):</b> Enter your Google Gemini API key to enable live conversational reasoning.
            </p>
            <input
              type="password"
              value={apiKey}
              onChange={(e) => setApiKey(e.target.value)}
              placeholder="Enter Gemini API key..."
              className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-slate-100 focus:outline-none focus:border-amber-500 mb-5"
            />
            <div className="flex justify-end gap-2">
              <button
                onClick={() => setIsSettingsOpen(false)}
                className="px-4 py-2 rounded-xl text-xs font-semibold bg-slate-800 hover:bg-slate-700 text-slate-300 transition"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
