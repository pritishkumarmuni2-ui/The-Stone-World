import React, { useState, useEffect } from 'react';
import { Waves, Flame, Compass, Telescope, Gauge, Cpu, Zap, CheckCircle2 } from 'lucide-react';
import confetti from 'canvas-confetti';

// ==========================================
// ERA 2: IRRIGATION CANAL PUZZLE
// ==========================================
export function IrrigationPuzzle({ onSolve, isSolved, lang, soundFX }) {
  const [gateA, setGateA] = useState(20);
  const [gateB, setGateB] = useState(50);
  const [gateC, setGateC] = useState(30);

  const total = gateA + gateB + gateC;
  // Solution: All 3 plots must receive sufficient balanced flow: Gate A (30-36), Gate B (30-36), Gate C (30-36) and total = 100
  const isBalanced = gateA >= 30 && gateA <= 36 && gateB >= 30 && gateB <= 36 && gateC >= 30 && gateC <= 36 && total === 100;

  const handleTestFlow = () => {
    if (isBalanced) {
      soundFX.playDiscover();
      confetti({ particleCount: 60, spread: 70 });
      onSolve('irrigation_puzzle');
    } else {
      soundFX.playError();
    }
  };

  return (
    <div className="max-w-2xl mx-auto bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-xl">
      <div className="flex items-center gap-2 text-base font-bold text-emerald-400 mb-1">
        <Waves className="w-5 h-5" />
        <h3>{lang === 'hi' ? 'युग 2: सिंचाई नहर और जल द्वार' : 'Era 2 Puzzle: River Canal Sluice Network'}</h3>
      </div>
      <p className="text-xs text-slate-400 mb-5 leading-relaxed">
        {lang === 'hi'
          ? 'नदी के पानी को तीनों कृषि क्षेत्रों (ऊपरी सीढ़ी, मध्य खेत, निचला मैदान) में समान रूप से बांटें (प्रत्येक 32-34% और कुल 100%) ताकि फसलें न सूखें!'
          : 'Distribute river water equally across the 3 agricultural terraces (each 30–36%, total 100%) so no crop dries out or floods!'}
      </p>

      <div className="bg-slate-950 border border-slate-800 rounded-xl p-5 mb-5 flex flex-col gap-4">
        <div>
          <div className="flex justify-between text-xs mb-1 text-slate-300">
            <span>{lang === 'hi' ? 'जलद्वार A (ऊपरी छत)' : 'Sluice Gate A (Upper Terrace)'}</span>
            <b className="text-cyan-400">{gateA}%</b>
          </div>
          <input
            type="range" min="10" max="60" value={gateA} disabled={isSolved}
            onChange={(e) => setGateA(Number(e.target.value))}
            className="w-full accent-cyan-500 cursor-pointer"
          />
        </div>

        <div>
          <div className="flex justify-between text-xs mb-1 text-slate-300">
            <span>{lang === 'hi' ? 'जलद्वार B (मध्य बेसिन)' : 'Sluice Gate B (Middle Basin)'}</span>
            <b className="text-emerald-400">{gateB}%</b>
          </div>
          <input
            type="range" min="10" max="60" value={gateB} disabled={isSolved}
            onChange={(e) => setGateB(Number(e.target.value))}
            className="w-full accent-emerald-500 cursor-pointer"
          />
        </div>

        <div>
          <div className="flex justify-between text-xs mb-1 text-slate-300">
            <span>{lang === 'hi' ? 'जलद्वार C (निचला मैदान)' : 'Sluice Gate C (Lower Valley)'}</span>
            <b className="text-amber-400">{gateC}%</b>
          </div>
          <input
            type="range" min="10" max="60" value={gateC} disabled={isSolved}
            onChange={(e) => setGateC(Number(e.target.value))}
            className="w-full accent-amber-500 cursor-pointer"
          />
        </div>

        <div className="pt-2 border-t border-slate-800 flex justify-between text-xs font-semibold">
          <span>{lang === 'hi' ? 'कुल जल प्रवाह:' : 'Total Water Flow:'}</span>
          <span className={total === 100 ? 'text-emerald-400' : 'text-rose-400'}>{total}% / 100%</span>
        </div>
      </div>

      <div className="flex items-center justify-between">
        <span className={`text-xs font-bold ${isBalanced ? 'text-emerald-400' : 'text-amber-400'}`}>
          {isBalanced 
            ? (lang === 'hi' ? '✓ जल प्रवाह संतुलित है!' : '✓ Terraces perfectly hydrated!')
            : (lang === 'hi' ? 'तीनों द्वारों को 30-36% के बीच संतुलित करें।' : 'Balance all three sluices between 30–36% (total 100%).')}
        </span>
        <button
          onClick={handleTestFlow}
          disabled={isSolved}
          className={`px-5 py-2 rounded-xl text-xs font-bold transition flex items-center gap-1.5 ${isSolved ? 'bg-emerald-600 text-white' : 'bg-emerald-500 hover:bg-emerald-600 text-white'}`}
        >
          {isSolved ? <><CheckCircle2 className="w-4 h-4" /> Solved</> : (lang === 'hi' ? 'पानी छोड़ें' : 'Open Sluice Gates')}
        </button>
      </div>
    </div>
  );
}

// ==========================================
// ERA 3: BRONZE SMELTING BELLOWS PUZZLE
// ==========================================
export function SmeltingPuzzle({ onSolve, isSolved, lang, soundFX }) {
  const [temp, setTemp] = useState(850);
  const [progress, setProgress] = useState(isSolved ? 100 : 0);

  useEffect(() => {
    if (isSolved) return;
    const interval = setInterval(() => {
      setTemp(t => Math.max(800, t - 6));
    }, 150);
    return () => clearInterval(interval);
  }, [isSolved]);

  const handlePumpBellows = () => {
    if (isSolved) return;
    soundFX.playClick();
    const nextTemp = Math.min(1250, temp + 40);
    setTemp(nextTemp);

    if (nextTemp >= 1085 && nextTemp <= 1180) {
      setProgress(p => {
        const nextP = Math.min(100, p + 20);
        if (nextP >= 100) {
          soundFX.playDiscover();
          confetti({ particleCount: 70, spread: 75 });
          onSolve('smelting_puzzle');
        }
        return nextP;
      });
    }
  };

  const inTargetZone = temp >= 1085 && temp <= 1180;

  return (
    <div className="max-w-2xl mx-auto bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-xl">
      <div className="flex items-center gap-2 text-base font-bold text-amber-500 mb-1">
        <Flame className="w-5 h-5" />
        <h3>{lang === 'hi' ? 'युग 3: भट्टी और धौंकनी (कांस्य गलाई)' : 'Era 3 Puzzle: Smelting Kiln & Bellows'}</h3>
      </div>
      <p className="text-xs text-slate-400 mb-5 leading-relaxed">
        {lang === 'hi'
          ? 'तांबे और टिन को गलाने के लिए भट्टी का तापमान 1085°C और 1180°C के बीच रखें। धौंकनी (Bellows) को बार-बार पंप करें जब तक कांसा पूरी तरह न ढल जाए!'
          : 'Pump the bellows rhythmically to keep furnace heat in the target smelting zone (1,085°C – 1,180°C) until bronze melts into cast ingots!'}
      </p>

      <div className="bg-slate-950 border border-slate-800 rounded-xl p-5 mb-5 flex flex-col gap-4">
        <div className="flex justify-between items-center text-xs">
          <span className="text-slate-300">Kiln Temperature:</span>
          <b className={`text-base font-mono ${inTargetZone ? 'text-amber-400 font-bold' : temp > 1180 ? 'text-rose-500' : 'text-slate-400'}`}>
            {temp}°C {inTargetZone ? '🔥 (Optimal Smelting)' : ''}
          </b>
        </div>

        {/* Temperature bar */}
        <div className="w-full bg-slate-800 h-4 rounded-full overflow-hidden relative">
          {/* Target zone 1085 - 1180 */}
          <div className="absolute left-[63%] w-[21%] h-full bg-amber-500/40 border-x border-amber-400" />
          <div
            className={`h-full transition-all duration-100 ${inTargetZone ? 'bg-amber-500 shadow-lg shadow-amber-500' : temp > 1180 ? 'bg-rose-500' : 'bg-orange-700'}`}
            style={{ width: `${Math.min(100, Math.max(0, ((temp - 800) / 450) * 100))}%` }}
          />
        </div>

        <div className="flex justify-between text-[11px] text-slate-500">
          <span>800°C</span>
          <span className="text-amber-400">Target: 1,085°C - 1,180°C</span>
          <span>1,250°C</span>
        </div>

        {/* Smelt progress */}
        <div className="mt-2 pt-2 border-t border-slate-800">
          <div className="flex justify-between text-xs mb-1 text-slate-300">
            <span>Smelting Ingot Progress:</span>
            <b className="text-amber-400">{progress}%</b>
          </div>
          <div className="w-full bg-slate-800 h-2.5 rounded-full overflow-hidden">
            <div className="bg-gradient-to-r from-amber-500 to-orange-400 h-full transition-all" style={{ width: `${progress}%` }} />
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between">
        <span className="text-xs text-slate-400">
          {isSolved ? 'Ingots cast successfully!' : 'Keep pumping inside target zone!'}
        </span>
        <button
          onClick={handlePumpBellows}
          disabled={isSolved}
          className={`px-6 py-2.5 rounded-xl text-xs font-bold transition flex items-center gap-1.5 ${isSolved ? 'bg-emerald-600 text-white' : 'bg-gradient-to-r from-amber-500 to-orange-600 text-white hover:scale-105 active:scale-95'}`}
        >
          {isSolved ? <><CheckCircle2 className="w-4 h-4" /> Cast & Solved</> : '💨 Pump Bellows (+40°C)'}
        </button>
      </div>
    </div>
  );
}

// ==========================================
// ERA 4: ASTROLABE CELESTIAL NAVIGATION PUZZLE
// ==========================================
export function CelestialPuzzle({ onSolve, isSolved, lang, soundFX }) {
  const [latitude, setLatitude] = useState(15);
  const targetLatitude = 36; // Mediterranean latitude
  const isAligned = Math.abs(latitude - targetLatitude) <= 2;

  const handleFixCoordinates = () => {
    if (isAligned) {
      soundFX.playDiscover();
      confetti({ particleCount: 60, spread: 70 });
      onSolve('celestial_puzzle');
    } else {
      soundFX.playError();
    }
  };

  return (
    <div className="max-w-2xl mx-auto bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-xl">
      <div className="flex items-center gap-2 text-base font-bold text-purple-400 mb-1">
        <Compass className="w-5 h-5" />
        <h3>{lang === 'hi' ? 'युग 4: एस्ट्रोलेब और खगोलीय नौवहन' : 'Era 4 Puzzle: Astrolabe Celestial Navigation'}</h3>
      </div>
      <p className="text-xs text-slate-400 mb-5 leading-relaxed">
        {lang === 'hi'
          ? 'रात के खुले समुद्र में दिशा जानने के लिए एस्ट्रोलेब की दृष्टि रेखा (Alidade) को ध्रुव तारे की ऊंचाई (36° N) पर संरेखित करें!'
          : 'At open sea, align the astrolabe sighting alidade to the North Star elevation angle (36° N) to establish safe trade routes!'}
      </p>

      <div className="bg-slate-950 border border-slate-800 rounded-xl p-5 mb-5 flex flex-col gap-4">
        <div className="flex justify-between items-center text-xs">
          <span className="text-slate-300">Measured Star Latitude:</span>
          <b className={`text-base font-mono ${isAligned ? 'text-purple-400' : 'text-slate-400'}`}>{latitude}° N</b>
        </div>

        <input
          type="range" min="0" max="90" value={latitude} disabled={isSolved}
          onChange={(e) => setLatitude(Number(e.target.value))}
          className="w-full accent-purple-500 cursor-pointer"
        />

        <div className="flex justify-between text-[11px] text-slate-500">
          <span>0° (Equator)</span>
          <span className="text-purple-400">Target Star: 36° N</span>
          <span>90° (North Pole)</span>
        </div>
      </div>

      <div className="flex items-center justify-between">
        <span className={`text-xs font-bold ${isAligned ? 'text-emerald-400' : 'text-amber-400'}`}>
          {isAligned ? '✓ Crosshair locked onto Polaris!' : 'Rotate alidade toward 36° N'}
        </span>
        <button
          onClick={handleFixCoordinates}
          disabled={isSolved}
          className={`px-5 py-2 rounded-xl text-xs font-bold transition flex items-center gap-1.5 ${isSolved ? 'bg-emerald-600 text-white' : 'bg-purple-600 hover:bg-purple-500 text-white'}`}
        >
          {isSolved ? <><CheckCircle2 className="w-4 h-4" /> Solved</> : 'Lock Coordinates'}
        </button>
      </div>
    </div>
  );
}

// ==========================================
// ERA 5: OPTICS & TELESCOPE FOCAL STACKING
// ==========================================
export function OpticsPuzzle({ onSolve, isSolved, lang, soundFX }) {
  const [focalLength, setFocalLength] = useState(25);
  const [eyepiecePos, setEyepiecePos] = useState(60);

  // Target: Focal length ~ 50, eyepiece ~ 50
  const isSharp = Math.abs(focalLength - 50) <= 5 && Math.abs(eyepiecePos - 50) <= 5;

  const handleCapture = () => {
    if (isSharp) {
      soundFX.playDiscover();
      confetti({ particleCount: 60, spread: 70 });
      onSolve('optics_puzzle');
    } else {
      soundFX.playError();
    }
  };

  return (
    <div className="max-w-2xl mx-auto bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-xl">
      <div className="flex items-center gap-2 text-base font-bold text-sky-400 mb-1">
        <Telescope className="w-5 h-5" />
        <h3>{lang === 'hi' ? 'युग 5: दूरबीन और प्रकाशिकी (ऑप्टिक्स)' : 'Era 5 Puzzle: Telescope Lens Focal Alignment'}</h3>
      </div>
      <p className="text-xs text-slate-400 mb-5 leading-relaxed">
        {lang === 'hi'
          ? 'उत्तल लेंस की फोकल दूरी और नेत्रिका (Eyepiece) को 50mm पर संरेखित करें ताकि बृहस्पति के चंद्रमा स्पष्ट दिखाई दें!'
          : 'Align the objective lens curvature and eyepiece position (both at 50 mm) to resolve Jupiter and its Galilean moons!'}
      </p>

      <div className="bg-slate-950 border border-slate-800 rounded-xl p-5 mb-5 flex flex-col gap-4">
        <div>
          <div className="flex justify-between text-xs mb-1 text-slate-300">
            <span>Objective Lens Curvature:</span>
            <b className="text-sky-400">{focalLength} mm</b>
          </div>
          <input
            type="range" min="10" max="90" value={focalLength} disabled={isSolved}
            onChange={(e) => setFocalLength(Number(e.target.value))}
            className="w-full accent-sky-500 cursor-pointer"
          />
        </div>

        <div>
          <div className="flex justify-between text-xs mb-1 text-slate-300">
            <span>Eyepiece Barrel Position:</span>
            <b className="text-cyan-400">{eyepiecePos} mm</b>
          </div>
          <input
            type="range" min="10" max="90" value={eyepiecePos} disabled={isSolved}
            onChange={(e) => setEyepiecePos(Number(e.target.value))}
            className="w-full accent-cyan-500 cursor-pointer"
          />
        </div>
      </div>

      <div className="flex items-center justify-between">
        <span className={`text-xs font-bold ${isSharp ? 'text-emerald-400' : 'text-slate-400'}`}>
          {isSharp ? '✓ Image sharp & crystal clear!' : 'Adjust both sliders to 50 mm'}
        </span>
        <button
          onClick={handleCapture}
          disabled={isSolved}
          className={`px-5 py-2 rounded-xl text-xs font-bold transition flex items-center gap-1.5 ${isSolved ? 'bg-emerald-600 text-white' : 'bg-sky-600 hover:bg-sky-500 text-white'}`}
        >
          {isSolved ? <><CheckCircle2 className="w-4 h-4" /> Solved</> : 'Focus Optics'}
        </button>
      </div>
    </div>
  );
}

// ==========================================
// ERA 6: STEAM ENGINE PRESSURE GOVERNOR
// ==========================================
export function SteamPuzzle({ onSolve, isSolved, lang, soundFX }) {
  const [pressure, setPressure] = useState(80);
  const inSteamBand = pressure >= 130 && pressure <= 155;

  const handleDrivePiston = () => {
    if (inSteamBand) {
      soundFX.playDiscover();
      confetti({ particleCount: 60, spread: 70 });
      onSolve('steam_puzzle');
    } else {
      soundFX.playError();
    }
  };

  return (
    <div className="max-w-2xl mx-auto bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-xl">
      <div className="flex items-center gap-2 text-base font-bold text-slate-300 mb-1">
        <Gauge className="w-5 h-5 text-red-400" />
        <h3>{lang === 'hi' ? 'युग 6: भाप का इंजन और बॉयलर दाब' : 'Era 6 Puzzle: Steam Boiler Pressure Governor'}</h3>
      </div>
      <p className="text-xs text-slate-400 mb-5 leading-relaxed">
        {lang === 'hi'
          ? 'बॉयलर के वाल्व को नियंत्रित करके भाप का दबाव 130-155 PSI की हरी पट्टी में लाएं ताकि पिस्टन रेलगाड़ी के पहिए घुमा सके!'
          : 'Adjust safety valve and coal stoker to regulate boiler pressure into the optimal 130–155 PSI green zone to drive the piston!'}
      </p>

      <div className="bg-slate-950 border border-slate-800 rounded-xl p-5 mb-5 flex flex-col gap-4">
        <div className="flex justify-between items-center text-xs">
          <span className="text-slate-300">Boiler Pressure:</span>
          <b className={`text-base font-mono ${inSteamBand ? 'text-emerald-400 font-bold' : pressure > 155 ? 'text-rose-500' : 'text-slate-400'}`}>
            {pressure} PSI {inSteamBand ? '⚡ (Piston Power Band)' : ''}
          </b>
        </div>

        <input
          type="range" min="60" max="200" value={pressure} disabled={isSolved}
          onChange={(e) => setPressure(Number(e.target.value))}
          className="w-full accent-amber-500 cursor-pointer"
        />

        <div className="flex justify-between text-[11px] text-slate-500">
          <span>60 PSI (Low)</span>
          <span className="text-emerald-400">Target: 130 - 155 PSI</span>
          <span className="text-rose-400">200 PSI (Danger)</span>
        </div>
      </div>

      <div className="flex items-center justify-between">
        <span className={`text-xs font-bold ${inSteamBand ? 'text-emerald-400' : 'text-amber-400'}`}>
          {inSteamBand ? '✓ Pressure optimal for propulsion!' : 'Tune valve between 130 and 155 PSI'}
        </span>
        <button
          onClick={handleDrivePiston}
          disabled={isSolved}
          className={`px-5 py-2 rounded-xl text-xs font-bold transition flex items-center gap-1.5 ${isSolved ? 'bg-emerald-600 text-white' : 'bg-slate-700 hover:bg-slate-600 text-white'}`}
        >
          {isSolved ? <><CheckCircle2 className="w-4 h-4" /> Solved</> : 'Engage Piston'}
        </button>
      </div>
    </div>
  );
}

// ==========================================
// ERA 7: BINARY LOGIC GATE CIRCUIT
// ==========================================
export function LogicPuzzle({ onSolve, isSolved, lang, soundFX }) {
  const [inA, setInA] = useState(0);
  const [inB, setInB] = useState(1);
  const [inC, setInC] = useState(0);

  // Circuit: (inA AND inB) OR (NOT inC)
  // Target: We want output 1 AND (inA AND inB === 1) to teach the gate!
  const andGate = inA === 1 && inB === 1 ? 1 : 0;
  const notGate = inC === 0 ? 1 : 0;
  const finalOutput = andGate === 1 && notGate === 1 ? 1 : 0;

  const handleTestCircuit = () => {
    if (finalOutput === 1) {
      soundFX.playDiscover();
      confetti({ particleCount: 60, spread: 70 });
      onSolve('logic_puzzle');
    } else {
      soundFX.playError();
    }
  };

  return (
    <div className="max-w-2xl mx-auto bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-xl">
      <div className="flex items-center gap-2 text-base font-bold text-yellow-400 mb-1">
        <Cpu className="w-5 h-5" />
        <h3>{lang === 'hi' ? 'युग 7: बाइनरी लॉजिक गेट्स परिपथ' : 'Era 7 Puzzle: Binary Logic Gate Circuit'}</h3>
      </div>
      <p className="text-xs text-slate-400 mb-5 leading-relaxed">
        {lang === 'hi'
          ? 'स्विच A, B और C को टॉगल करें ताकि अंतिम CPU बस आउटपुट 1 (HIGH) सक्रिय हो सके! नियम: [A AND B] AND [NOT C] = 1.'
          : 'Toggle binary transistor inputs A, B, and C so that the CPU logic gate bus lights up with HIGH (1)! Rule: (A AND B) AND (NOT C) = 1.'}
      </p>

      <div className="bg-slate-950 border border-slate-800 rounded-xl p-5 mb-5 flex flex-col gap-4">
        <div className="grid grid-cols-3 gap-3 text-center">
          <button
            onClick={() => { soundFX.playClick(); setInA(a => (a === 1 ? 0 : 1)); }}
            disabled={isSolved}
            className={`p-3 rounded-xl border text-xs font-bold transition ${inA ? 'bg-amber-500/20 border-amber-500 text-amber-400' : 'bg-slate-900 border-slate-800 text-slate-500'}`}
          >
            Input A: <span className="text-base block mt-0.5">{inA}</span>
          </button>

          <button
            onClick={() => { soundFX.playClick(); setInB(b => (b === 1 ? 0 : 1)); }}
            disabled={isSolved}
            className={`p-3 rounded-xl border text-xs font-bold transition ${inB ? 'bg-amber-500/20 border-amber-500 text-amber-400' : 'bg-slate-900 border-slate-800 text-slate-500'}`}
          >
            Input B: <span className="text-base block mt-0.5">{inB}</span>
          </button>

          <button
            onClick={() => { soundFX.playClick(); setInC(c => (c === 1 ? 0 : 1)); }}
            disabled={isSolved}
            className={`p-3 rounded-xl border text-xs font-bold transition ${inC ? 'bg-amber-500/20 border-amber-500 text-amber-400' : 'bg-slate-900 border-slate-800 text-slate-500'}`}
          >
            Input C: <span className="text-base block mt-0.5">{inC}</span>
          </button>
        </div>

        <div className="pt-3 border-t border-slate-800 flex justify-between items-center text-xs">
          <span className="text-slate-400">Gate Bus Output:</span>
          <span className={`text-base font-bold font-mono px-3 py-1 rounded-lg ${finalOutput === 1 ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30' : 'bg-rose-500/10 text-rose-400 border border-rose-500/20'}`}>
            {finalOutput === 1 ? 'OUTPUT: 1 (HIGH)' : 'OUTPUT: 0 (LOW)'}
          </span>
        </div>
      </div>

      <div className="flex items-center justify-between">
        <span className={`text-xs font-bold ${finalOutput === 1 ? 'text-emerald-400' : 'text-slate-400'}`}>
          {finalOutput === 1 ? '✓ Logic condition satisfied!' : 'A=1, B=1, C=0'}
        </span>
        <button
          onClick={handleTestCircuit}
          disabled={isSolved}
          className={`px-5 py-2 rounded-xl text-xs font-bold transition flex items-center gap-1.5 ${isSolved ? 'bg-emerald-600 text-white' : 'bg-yellow-600 hover:bg-yellow-500 text-white'}`}
        >
          {isSolved ? <><CheckCircle2 className="w-4 h-4" /> Solved</> : 'Verify Logic'}
        </button>
      </div>
    </div>
  );
}

// ==========================================
// ERA 8: CLEAN SOLAR GRID & AI LOAD BALANCER
// ==========================================
export function GridPuzzle({ onSolve, isSolved, lang, soundFX }) {
  const [solarSupply, setSolarSupply] = useState(50);
  const [storageRatio, setStorageRatio] = useState(20);

  // Equilibrium equation: solarSupply + storageRatio = 100
  const frequency = (48.0 + (solarSupply + storageRatio) * 0.02).toFixed(1);
  const isStable = frequency === '50.0';

  const handleStabilizeGrid = () => {
    if (isStable) {
      soundFX.playDiscover();
      confetti({ particleCount: 100, spread: 90 });
      onSolve('grid_puzzle');
    } else {
      soundFX.playError();
    }
  };

  return (
    <div className="max-w-2xl mx-auto bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-xl">
      <div className="flex items-center gap-2 text-base font-bold text-teal-400 mb-1">
        <Zap className="w-5 h-5" />
        <h3>{lang === 'hi' ? 'युग 8: सौर ऊर्जा ग्रिड और AI संतुलन' : 'Era 8 Puzzle: Global Clean Energy Grid'}</h3>
      </div>
      <p className="text-xs text-slate-400 mb-5 leading-relaxed">
        {lang === 'hi'
          ? 'सौर ऊर्जा उत्पादन और बैटरी संचयन को इस प्रकार संतुलित करें कि ग्रिड की आवृत्ति ठीक 50.0 Hz पर स्थिर हो जाए!'
          : 'Balance clean solar output and battery storage buffers to stabilize global grid frequency at exactly 50.0 Hz!'}
      </p>

      <div className="bg-slate-950 border border-slate-800 rounded-xl p-5 mb-5 flex flex-col gap-4">
        <div>
          <div className="flex justify-between text-xs mb-1 text-slate-300">
            <span>Photovoltaic Solar Generation:</span>
            <b className="text-teal-400">{solarSupply} GW</b>
          </div>
          <input
            type="range" min="10" max="90" value={solarSupply} disabled={isSolved}
            onChange={(e) => setSolarSupply(Number(e.target.value))}
            className="w-full accent-teal-500 cursor-pointer"
          />
        </div>

        <div>
          <div className="flex justify-between text-xs mb-1 text-slate-300">
            <span>Battery Storage Buffer:</span>
            <b className="text-cyan-400">{storageRatio} GW</b>
          </div>
          <input
            type="range" min="10" max="90" value={storageRatio} disabled={isSolved}
            onChange={(e) => setStorageRatio(Number(e.target.value))}
            className="w-full accent-cyan-500 cursor-pointer"
          />
        </div>

        <div className="pt-2 border-t border-slate-800 flex justify-between items-center text-xs">
          <span className="text-slate-400">Grid Frequency:</span>
          <span className={`text-base font-bold font-mono px-3 py-1 rounded-lg ${isStable ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30' : 'bg-amber-500/10 text-amber-400 border border-amber-500/20'}`}>
            {frequency} Hz {isStable ? '(Harmonized)' : ''}
          </span>
        </div>
      </div>

      <div className="flex items-center justify-between">
        <span className={`text-xs font-bold ${isStable ? 'text-emerald-400' : 'text-slate-400'}`}>
          {isStable ? '✓ Planetary grid locked at 50.0 Hz!' : 'Sum of generation + buffer must reach 100 GW'}
        </span>
        <button
          onClick={handleStabilizeGrid}
          disabled={isSolved}
          className={`px-5 py-2 rounded-xl text-xs font-bold transition flex items-center gap-1.5 ${isSolved ? 'bg-emerald-600 text-white' : 'bg-teal-600 hover:bg-teal-500 text-white'}`}
        >
          {isSolved ? <><CheckCircle2 className="w-4 h-4" /> Solved</> : 'Stabilize Grid'}
        </button>
      </div>
    </div>
  );
}
