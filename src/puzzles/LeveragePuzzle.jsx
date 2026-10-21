import React, { useState, useEffect, useRef } from 'react';
import { Scale, CheckCircle2 } from 'lucide-react';
import confetti from 'canvas-confetti';

export function LeveragePuzzle({ onSolve, isSolved, lang, soundFX }) {
  const [fulcrumRatio, setFulcrumRatio] = useState(0.35); // 35% from left
  const [lifted, setLifted] = useState(isSolved);
  const canvasRef = useRef(null);

  const boulderWeight = 300;
  const hunterWeight = 75;

  const leftArm = fulcrumRatio * 6;
  const rightArm = (1 - fulcrumRatio) * 6;
  const loadTorque = Math.round(boulderWeight * 9.8 * leftArm);
  const effortTorque = Math.round(hunterWeight * 9.8 * rightArm);
  const canLift = effortTorque >= loadTorque;

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const w = canvas.width;
    const h = canvas.height;
    const groundY = 180;
    const beamStartX = 70;
    const beamLength = 480;

    ctx.clearRect(0, 0, w, h);

    // Ground
    ctx.fillStyle = '#1e293b';
    ctx.fillRect(0, groundY, w, 60);

    const fulcrumX = beamStartX + beamLength * fulcrumRatio;
    const fulcrumY = groundY;

    // Fulcrum triangle
    ctx.fillStyle = '#f59e0b';
    ctx.beginPath();
    ctx.moveTo(fulcrumX, fulcrumY - 35);
    ctx.lineTo(fulcrumX - 22, fulcrumY);
    ctx.lineTo(fulcrumX + 22, fulcrumY);
    ctx.closePath();
    ctx.fill();

    // Beam angle
    const angle = lifted ? -0.12 : (fulcrumRatio < 0.25 ? 0.04 : 0);

    ctx.save();
    ctx.translate(fulcrumX, fulcrumY - 35);
    ctx.rotate(angle);

    const leftLen = fulcrumX - beamStartX;
    const rightLen = beamLength - leftLen;

    // Beam
    ctx.fillStyle = '#b45309';
    ctx.fillRect(-leftLen, -8, beamLength, 16);

    // Megalith boulder on left
    const boulderY = -8 - (lifted ? 52 : 36);
    ctx.fillStyle = '#64748b';
    ctx.beginPath();
    ctx.arc(-leftLen + 20, boulderY, 30, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = '#fff';
    ctx.font = 'bold 11px sans-serif';
    ctx.fillText('300 kg', -leftLen + 3, boulderY + 4);

    // Hunter pushing on right
    ctx.fillStyle = '#ef4444';
    ctx.beginPath();
    ctx.arc(rightLen - 20, -32, 12, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = '#dc2626';
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(rightLen - 20, -20);
    ctx.lineTo(rightLen - 20, -4);
    ctx.stroke();
    ctx.fillStyle = '#fff';
    ctx.fillText('75 kg', rightLen - 34, -42);

    ctx.restore();
  }, [fulcrumRatio, lifted]);

  const handleApplyForce = () => {
    if (canLift) {
      setLifted(true);
      soundFX.playDiscover();
      confetti({ particleCount: 60, spread: 70 });
      onSolve('leverage_puzzle');
    } else {
      soundFX.playError();
    }
  };

  return (
    <div className="max-w-2xl mx-auto bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-xl">
      <div className="flex items-center gap-2 text-base font-bold text-amber-400 mb-1">
        <Scale className="w-5 h-5" />
        <h3>{lang === 'hi' ? 'उत्तोलक और आधार (लीवर पहेली)' : 'Era 1 Puzzle: The Megalith Lever'}</h3>
      </div>
      <p className="text-xs text-slate-400 mb-5 leading-relaxed">
        {lang === 'hi'
          ? 'गुफा के मुख पर 300 किग्रा का विशाल पत्थर गिरा है। शिकारी का भार 75 किग्रा है। आधार (Fulcrum) को पत्थर के करीब खिसकाएं ताकि टॉर्क पत्थर को उठा सके (20% या उससे कम)!'
          : 'A 300 kg boulder blocks the shelter. Hunter weight is 75 kg. Slide the fulcrum closer to the boulder to multiply mechanical advantage!'}
      </p>

      <div className="bg-slate-950 rounded-xl overflow-hidden border border-slate-800 mb-5">
        <canvas ref={canvasRef} width={620} height={220} className="w-full h-auto block" />
      </div>

      <div className="flex flex-col gap-3">
        <div className="flex justify-between text-xs text-slate-300 font-medium">
          <span>Fulcrum Position: <b>{Math.round(fulcrumRatio * 100)}%</b></span>
          <span>Effort Torque: <b className="text-amber-400">{effortTorque} Nm</b></span>
          <span>Load Torque: <b className="text-slate-400">{loadTorque} Nm</b></span>
        </div>

        <input
          type="range"
          min="10"
          max="90"
          value={Math.round(fulcrumRatio * 100)}
          disabled={isSolved}
          onChange={(e) => {
            setFulcrumRatio(e.target.value / 100);
            setLifted(false);
          }}
          className="w-full accent-amber-500 cursor-pointer"
        />

        <div className="flex items-center justify-between mt-3">
          <div className={`text-xs font-bold ${canLift ? 'text-emerald-400' : 'text-rose-400'}`}>
            {canLift 
              ? (lang === 'hi' ? '✓ टॉर्क पर्याप्त है! पत्थर उठाया जा सकता है!' : '✓ Force exceeds boulder resistance!')
              : (lang === 'hi' ? '✗ बल अपर्याप्त है। आधार को पत्थर के करीब लाएं!' : '✗ Insufficient torque. Move fulcrum closer to rock!')}
          </div>

          <button
            onClick={handleApplyForce}
            disabled={isSolved}
            className={`px-5 py-2 rounded-xl text-xs font-bold transition flex items-center gap-1.5 ${isSolved ? 'bg-emerald-600 text-white cursor-default' : 'bg-gradient-to-r from-emerald-500 to-teal-600 text-white hover:shadow-lg hover:shadow-teal-500/20 active:scale-95'}`}
          >
            {isSolved ? (
              <>
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>{lang === 'hi' ? 'सफल (हल हो चुका)' : 'Hoisted & Solved'}</span>
              </>
            ) : (
              <span>{lang === 'hi' ? 'बल लगाएं' : 'Apply Force'}</span>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
