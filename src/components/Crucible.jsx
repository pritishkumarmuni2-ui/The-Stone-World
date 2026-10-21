import React from 'react';
import { Sparkles, X, Plus } from 'lucide-react';
import confetti from 'canvas-confetti';
import { ELEMENTS, RECIPES } from '../data/gameData';

export function Crucible({ slot1, slot2, onClearSlot, onClearAll, onSelectResult, onDiscover, lang, soundFX }) {
  const [resultMsg, setResultMsg] = React.useState(null);

  const handleSynthesize = () => {
    if (!slot1 || !slot2) {
      soundFX.playError();
      setResultMsg({
        success: false,
        text: lang === 'hi' ? 'भट्टी में दो तत्व रखें!' : 'Place two elements in the Crucible to experiment!'
      });
      return;
    }

    const recipe = RECIPES.find(
      r => (r.inputs[0] === slot1 && r.inputs[1] === slot2) || (r.inputs[0] === slot2 && r.inputs[1] === slot1)
    );

    if (recipe) {
      soundFX.playCraft();
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.7 }
      });
      setTimeout(() => soundFX.playDiscover(), 200);

      const resElement = ELEMENTS[recipe.result];
      onDiscover(recipe.result);
      onSelectResult(recipe.result);

      setResultMsg({
        success: true,
        text: `${lang === 'hi' ? '🎉 नया आविष्कार:' : '🎉 EUREKA! Synthesized:'} ${resElement.name[lang]}`,
        story: recipe.story[lang]
      });

      onClearAll();
    } else {
      soundFX.playError();
      const name1 = ELEMENTS[slot1]?.name[lang] || slot1;
      const name2 = ELEMENTS[slot2]?.name[lang] || slot2;
      setResultMsg({
        success: false,
        text: lang === 'hi' 
          ? `${name1} और ${name2} के बीच कोई रासायनिक क्रिया नहीं हुई। इनके गुणों पर विचार करें!`
          : `No reaction between ${name1} and ${name2}. Think about their physical properties!`
      });
    }
  };

  const elem1 = slot1 ? ELEMENTS[slot1] : null;
  const elem2 = slot2 ? ELEMENTS[slot2] : null;

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 flex flex-col items-center justify-center text-center shadow-xl">
      <h2 className="text-lg font-bold flex items-center gap-2 text-slate-100">
        <Sparkles className="w-5 h-5 text-amber-400" />
        {lang === 'hi' ? 'वैज्ञानिक भट्टी (क्रूसिबल)' : 'The Crucible'}
      </h2>
      <p className="text-xs text-slate-400 mt-1 mb-6">
        {lang === 'hi' ? 'दो तत्वों को मिलाकर नए वैज्ञानिक अनुसंधानों को जन्म दें।' : 'Combine elements to forge civilization breakthroughs.'}
      </p>

      {/* Crucible Slots */}
      <div className="flex items-center gap-4 my-2">
        {/* Slot 1 */}
        <div className={`w-24 h-24 rounded-2xl border-2 flex flex-col items-center justify-center relative transition ${elem1 ? 'border-amber-500 bg-slate-800/80 shadow-lg shadow-amber-500/10' : 'border-dashed border-slate-700 bg-slate-950/60'}`}>
          {elem1 ? (
            <>
              <span className="text-3xl">{elem1.icon}</span>
              <span className="text-[11px] font-semibold text-slate-200 mt-1 line-clamp-1 px-1">{elem1.name[lang]}</span>
              <button
                onClick={() => onClearSlot(1)}
                className="absolute -top-2 -right-2 p-1 rounded-full bg-rose-500 text-white hover:bg-rose-600 transition"
              >
                <X className="w-3 h-3" />
              </button>
            </>
          ) : (
            <span className="text-xs text-slate-500">{lang === 'hi' ? '+ तत्व 1' : '+ Item 1'}</span>
          )}
        </div>

        <Plus className="w-6 h-6 text-slate-600" />

        {/* Slot 2 */}
        <div className={`w-24 h-24 rounded-2xl border-2 flex flex-col items-center justify-center relative transition ${elem2 ? 'border-amber-500 bg-slate-800/80 shadow-lg shadow-amber-500/10' : 'border-dashed border-slate-700 bg-slate-950/60'}`}>
          {elem2 ? (
            <>
              <span className="text-3xl">{elem2.icon}</span>
              <span className="text-[11px] font-semibold text-slate-200 mt-1 line-clamp-1 px-1">{elem2.name[lang]}</span>
              <button
                onClick={() => onClearSlot(2)}
                className="absolute -top-2 -right-2 p-1 rounded-full bg-rose-500 text-white hover:bg-rose-600 transition"
              >
                <X className="w-3 h-3" />
              </button>
            </>
          ) : (
            <span className="text-xs text-slate-500">{lang === 'hi' ? '+ तत्व 2' : '+ Item 2'}</span>
          )}
        </div>
      </div>

      <button
        onClick={handleSynthesize}
        className="mt-6 w-full max-w-xs py-3 px-6 rounded-xl font-bold text-sm bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 text-white shadow-lg shadow-orange-500/25 hover:shadow-orange-500/40 hover:-translate-y-0.5 transition active:translate-y-0"
      >
        {lang === 'hi' ? 'संश्लेषण करें (Forge)' : 'Forge / Synthesize'}
      </button>

      {(slot1 || slot2) && (
        <button onClick={onClearAll} className="mt-2 text-xs text-slate-400 hover:text-slate-200 underline">
          {lang === 'hi' ? 'भट्टी खाली करें' : 'Clear Crucible'}
        </button>
      )}

      {/* Result notification */}
      {resultMsg && (
        <div className={`mt-4 p-3 rounded-xl text-xs w-full text-left border ${resultMsg.success ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-300' : 'bg-rose-500/10 border-rose-500/30 text-rose-300'}`}>
          <div className="font-semibold">{resultMsg.text}</div>
          {resultMsg.story && <div className="mt-1 text-slate-300">{resultMsg.story}</div>}
        </div>
      )}
    </div>
  );
}
