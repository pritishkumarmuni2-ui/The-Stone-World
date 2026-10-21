import React, { useState, useEffect } from 'react';
import { Bot, Lightbulb, Send } from 'lucide-react';

const OFFLINE_HINTS = {
  1: {
    en: "Fire requires three pillars: fuel, oxygen, and ignition temperature. Twirling dry wood vigorously turns kinetic energy into friction heat! Also, striking stones together knaps razor-sharp flint blades.",
    hi: "आग के लिए ईंधन, ऑक्सीजन और गर्मी चाहिए। सूखी लकड़ियों को तेज़ी से रगड़ने से गतिज ऊर्जा घर्षण ताप में बदलती है! इसके अलावा पत्थरों को टकराकर नुकीला ब्लेड बनाएं।"
  },
  2: {
    en: "Baking molded clay inside your kiln vitrifies silicates into waterproof pottery! To plough the soil, combine a sturdy stone with wood to make a primitive hoe, then bring water to your crops.",
    hi: "गीली मिट्टी को आग में पकाने से सिलिकेट सख्त होकर जलरोधी बर्तन बनाते हैं। पत्थर और लकड़ी को मिलाकर हल (Hoe) बनाएं और नहर से सिंचाई करें।"
  },
  3: {
    en: "Pure copper bends under stress. Fusing molten copper with molten tin creates bronze alloy—infinitely tougher! Also stamp a reed into wet clay to record knowledge.",
    hi: "तांबे में टिन मिलाने से धातु के परमाणुओं का फिसलना रुक जाता है और मजबूत कांसा बनता है! नरकट से गीली मिट्टी पर लिखकर पहली लिपि बनाएं।"
  },
  4: {
    en: "Smelt gold ore over fire to stamp standardized currency. Macerate plant fibers in river water to craft lightweight paper sheets for long-distance trade!",
    hi: "आग में सोने को पिघलाकर मानक सिक्के बनाएं। पौधों के रेशों को पानी में गलाकर हल्का कागज़ तैयार करें जिससे व्यापार आसान हो सके।"
  },
  5: {
    en: "Pure quartz silica sand melts into transparent optical glass! Grind glass with stone into curved lenses to bend light rays for telescopes and microscopes.",
    hi: "सिलिका रेत को आग में तपाकर पारदर्शी कांच बनाएं! कांच को तराशकर लेंस बनाएं और सूक्ष्मदर्शी व दूरबीन का आविष्कार करें।"
  },
  6: {
    en: "Liquid water expands 1,700 times when boiled into steam. Direct that explosive pressure into an iron piston to power steam engines and locomotives!",
    hi: "पानी उबलकर जब भाप बनता है तो उसका आयतन 1,700 गुना फैलता है। इस दबाव से पिस्टन चलाकर भाप का इंजन और रेलगाड़ी तैयार करें!"
  },
  7: {
    en: "Submerging reactive zinc and copper in liquid generates continuous direct current. Route this through wire coils to make electromagnets and silicon transistors!",
    hi: "जस्ता और तांबे की रासायनिक क्रिया से बैटरी बनती है। बिजली को तारों में दौड़ाकर विद्युत चुंबक और सिलिकॉन ट्रांजिस्टर बनाएं!"
  },
  8: {
    en: "Etch billions of logic gates onto high-purity silicon to manufacture microprocessors. Connect them with fiber optics into the Internet, and ignite artificial intelligence!",
    hi: "सिलिकॉन पर अरबों लॉजिक गेट्स उकेरकर माइक्रोप्रोसेसर बनाएं। इंटरनेट और सौर ग्रिड को जोड़कर कृत्रिम बुद्धिमत्ता (AI) का निर्माण करें!"
  }
};

const KEYWORD_HINTS = [
  { keywords: ['hoe', 'plough', 'हल', 'कुदाल'], en: "To craft a Primitive Hoe: Combine Stone + Wood in the Crucible!", hi: "हल (Primitive Hoe) बनाने के लिए: भट्टी में पत्थर (Stone) और लकड़ी (Wood) को मिलाएं!" },
  { keywords: ['fire', 'आग', 'spark'], en: "To ignite Controlled Fire: First twirl Wood + Wood to get Friction Heat, then combine Friction Heat + Dry Leaves!", hi: "नियंत्रित आग के लिए: पहले Wood + Wood से Friction Heat बनाएं, फिर Friction Heat + Dry Leaves मिलाएं!" },
  { keywords: ['canal', 'irrigation', 'सिंचाई', 'नहर'], en: "To dig an Irrigation Canal: Combine your Primitive Hoe + Fresh River Water!", hi: "सिंचाई नहर के लिए: हल (Primitive Hoe) और नदी के जल (River Water) को मिलाएं!" },
  { keywords: ['bronze', 'कांसा', 'alloy'], en: "To smelt Bronze: Smelt Copper Ore with Charcoal, Tin Ore with Charcoal, then fuse Molten Copper + Molten Tin!", hi: "कांसा बनाने के लिए: तांबे और टिन के अयस्क को चारकोल से पिघलाएं, फिर पिघले तांबे और टिन को मिलाएं!" },
  { keywords: ['glass', 'कांच', 'lens'], en: "To make Optical Glass: Fuse Silica Sand + Controlled Fire! Then polish Clear Glass + Stone to create an Optical Lens.", hi: "कांच बनाने के लिए: सिलिका रेत और आग को मिलाएं! फिर कांच और पत्थर से लेंस तराशें।" },
  { keywords: ['steam', 'भाप', 'engine'], en: "To harness Steam: Heat River Water with Mineral Coal to get High-Pressure Steam, then combine with Iron Ore for the Steam Engine!", hi: "भाप इंजन के लिए: पानी और खनिज कोयले से उच्च दाब भाप बनाएं, फिर लोहे के अयस्क से पिस्टन जोड़ें!" },
  { keywords: ['battery', 'बैटरी', 'transistor'], en: "To forge electronics: Combine Zinc Metal + Copper Ore for the Battery, and Silicon Ingot + Battery for the Transistor!", hi: "इलेक्ट्रॉनिक्स के लिए: जस्ता और तांबे से बैटरी बनाएं, फिर सिलिकॉन और बैटरी से ट्रांजिस्टर बनाएं!" },
  { keywords: ['ai', 'intelligence', 'robot', 'brain'], en: "To build Artificial Intelligence: Combine Microprocessor + The Internet in the crucible of science!", hi: "कृत्रिम बुद्धिमत्ता (AI) के लिए: माइक्रोप्रोसेसर और इंटरनेट को वैज्ञानिक भट्टी में मिलाएं!" },
  { keywords: ['lever', 'puzzle', 'पहेली', 'rock', 'boulder'], en: "In the Lever Puzzle: The fulcrum needs to be close to the heavy boulder so your smaller effort arm has a huge mechanical advantage!", hi: "लीवर पहेली में: आधार (Fulcrum) को भारी पत्थर के करीब रखें ताकि आपका बल कई गुना बढ़ सके!" }
];

export function MentorDrawer({ eraId, lang, apiKey, soundFX }) {
  const getWelcomeText = (language) => (
    language === 'hi'
      ? "पत्थर की दुनिया में स्वागत है! हमारा दिमाग ही हमारा सबसे बड़ा हथियार है। पत्थरों को टकराकर पहला धारदार औज़ार बनाएं!"
      : "Welcome to the Stone World! Our scientific mind is our greatest weapon. Strike stones together to knap your first cutting blade!"
  );

  const [messages, setMessages] = useState(() => [
    { role: 'mentor', text: getWelcomeText(lang) }
  ]);
  const [inputVal, setInputVal] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  // Update initial message if only welcome message exists when language changes
  useEffect(() => {
    setMessages(prev => {
      if (prev.length === 1 && prev[0].role === 'mentor') {
        return [{ role: 'mentor', text: getWelcomeText(lang) }];
      }
      return prev;
    });
  }, [lang]);

  const handleSend = async (queryText) => {
    const q = (queryText || inputVal).trim();
    if (!q) return;

    soundFX.playClick();
    setMessages(prev => [...prev, { role: 'user', text: q }]);
    setInputVal('');
    setIsTyping(true);

    // If live API key is set, try modern Gemini model
    if (apiKey && apiKey.length > 10) {
      try {
        const models = ['gemini-2.0-flash', 'gemini-1.5-flash'];
        let successText = null;

        for (const model of models) {
          try {
            const url = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`;
            const res = await fetch(url, {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({
                contents: [{
                  role: 'user',
                  parts: [{
                    text: `You are the Science Mentor in the game "The Stone World" (inspired by Dr. STONE's Senku). Answer enthusiastically, logically and Socratically in ${lang === 'hi' ? 'Hindi' : 'English'}. Keep the response under 60 words.\nQuestion: ${q}`
                  }]
                }]
              })
            });

            if (res.ok) {
              const data = await res.json();
              const reply = data.candidates?.[0]?.content?.parts?.[0]?.text;
              if (reply) {
                successText = reply;
                break;
              }
            }
          } catch (err) {
            console.warn(`Model ${model} failed, trying next`, err);
          }
        }

        if (successText) {
          setMessages(prev => [...prev, { role: 'mentor', text: successText }]);
          setIsTyping(false);
          soundFX.playClick();
          return;
        }
      } catch (e) {
        console.warn('API error, using offline hint', e);
      }
    }

    // Offline heuristic & contextual response
    setTimeout(() => {
      const lowerQ = q.toLowerCase();
      const matchedKeyword = KEYWORD_HINTS.find(item =>
        item.keywords.some(k => lowerQ.includes(k.toLowerCase()))
      );

      let reply = '';
      if (matchedKeyword) {
        reply = matchedKeyword[lang] || matchedKeyword.en;
      } else {
        reply = OFFLINE_HINTS[eraId]?.[lang] ||
          (lang === 'hi'
            ? "वैज्ञानिक सोच ही सभ्यता को आगे बढ़ाएगी! भट्टी में उपलब्ध तत्वों के भौतिक गुणों पर विचार करके उन्हें जोड़ें।"
            : "Scientific curiosity will carry civilization forward! Consider the chemical and physical properties of elements in your Crucible.");
      }

      setMessages(prev => [...prev, { role: 'mentor', text: reply }]);
      setIsTyping(false);
      soundFX.playClick();
    }, 350);
  };

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl flex flex-col flex-1 shadow-xl overflow-hidden min-h-[220px]">
      <div className="px-4 py-3 border-b border-slate-800 flex items-center justify-between">
        <div className="flex items-center gap-2 font-bold text-xs text-slate-100">
          <Bot className="w-4 h-4 text-cyan-400" />
          <span>{lang === 'hi' ? 'वैज्ञानिक मार्गदर्शक (AI Mentor)' : 'Science Mentor'}</span>
        </div>
        <button
          onClick={() => handleSend(lang === 'hi' ? 'मुझे एक वैज्ञानिक संकेत दें' : 'Give me a scientific clue')}
          className="flex items-center gap-1 text-[11px] font-semibold text-amber-400 bg-amber-500/10 hover:bg-amber-500/20 px-2.5 py-1 rounded-lg border border-amber-500/30 transition"
        >
          <Lightbulb className="w-3 h-3" />
          <span>Hint</span>
        </button>
      </div>

      <div className="flex-1 p-3 overflow-y-auto flex flex-col gap-2 text-xs max-h-48">
        {messages.map((m, idx) => (
          <div
            key={idx}
            className={`p-2.5 rounded-xl max-w-[88%] leading-relaxed ${m.role === 'user' ? 'bg-slate-800 text-slate-100 self-end' : 'bg-cyan-950/40 border-l-2 border-cyan-400 text-cyan-200 self-start'}`}
          >
            {m.text}
          </div>
        ))}
        {isTyping && <div className="text-xs text-slate-500 italic">Mentor is thinking...</div>}
      </div>

      <div className="p-2 border-t border-slate-800 flex items-center gap-1.5">
        <input
          type="text"
          value={inputVal}
          onChange={(e) => setInputVal(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSend()}
          placeholder={lang === 'hi' ? 'विज्ञान से जुड़ा प्रश्न पूछें...' : 'Ask mentor a science question...'}
          className="flex-1 bg-slate-950 border border-slate-800 rounded-lg px-3 py-1.5 text-xs text-slate-100 focus:outline-none focus:border-cyan-500"
        />
        <button
          onClick={() => handleSend()}
          className="p-1.5 rounded-lg bg-cyan-600 hover:bg-cyan-500 text-white transition"
        >
          <Send className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
}
