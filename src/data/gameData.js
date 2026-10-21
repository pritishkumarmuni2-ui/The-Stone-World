// ==========================================
// THE STONE WORLD - REACT GAME DATA
// ==========================================

export const ERAS = [
  {
    id: 1,
    code: "stone_and_spark",
    name: { en: "Stone & Spark", hi: "पत्थर और चिंगारी" },
    period: { en: "Hundreds of thousands of years ago", hi: "सैकड़ों हज़ार वर्ष पूर्व" },
    themeColor: "#e67e22",
    badge: "🔥",
    quote: {
      en: "Man is a tool-using animal. Without tools he is nothing, with tools he is all.",
      hi: "मनुष्य औज़ारों का निर्माता है। औज़ारों के बिना वह कुछ नहीं, औज़ारों के साथ वह सब कुछ है।"
    },
    story: {
      en: "Night brings freezing cold and lethal predators. Without sharp claws or thick fur, our ancestors faced extinction. The breakthrough began with sharp stones, leverage, and capturing the energy of fire.",
      hi: "अंधेरी रातें, कड़ाके की ठंड और हिंसक शिकारी। बिना नुकीले पंजों और घने बालों के मनुष्य का बचना असंभव था। क्रांति की शुरुआत हुई नुकीले पत्थरों, उत्तोलक (लीवर) और आग पर नियंत्रण से।"
    },
    scienceFact: {
      en: "Flint knapping relies on conchoidal fractures to create edges sharper than surgical steel. Friction generates heat to reach combustion temperatures (~300°C for dry tinder).",
      hi: "चकमक पत्थर के शंकु जैसे टूटने से शल्य चिकित्सा के ब्लेड से भी तेज़ धार बनती है। घर्षण से पैदा हुई गर्मी सूखे पत्तों को 300°C तक गर्म कर आग सुलगाती है।"
    },
    requiredDiscoveries: ["controlled_fire", "sharp_flint", "spear", "charcoal"],
    puzzleId: "leverage_puzzle"
  },
  {
    id: 2,
    code: "green_awakening",
    name: { en: "The Green Awakening", hi: "हरित क्रांति (कृषि)" },
    period: { en: "About 10,000 years ago", hi: "लगभग 10,000 वर्ष पूर्व" },
    themeColor: "#27ae60",
    badge: "🌾",
    quote: {
      en: "When agriculture begins, other arts follow. The farmers are the founders of civilization.",
      hi: "जब कृषि का जन्म हुआ, तभी अन्य कलाओं का विस्तार हुआ। कृषक ही सभ्यता के वास्तविक निर्माता हैं।"
    },
    story: {
      en: "Hunting was volatile and exhausting. By understanding seasonal seed cycles and domesticating grasses into grains, humans settled along river valleys, creating the first permanent villages.",
      hi: "शिकार पर निर्भरता अनिश्चित और थकाऊ थी। बीजों के जीवन चक्र को समझकर और नदियों की उपजाऊ मिट्टी में खेती करके मानव ने पहली स्थायी बस्तियां बनाईं।"
    },
    scienceFact: {
      en: "Selective plant breeding increased grain yield by 500%. Baking clay at high heat vitrifies silicates, rendering vessels waterproof to store surplus grain.",
      hi: "पौधों के चयनात्मक रोपण से फसलों की पैदावार 5 गुना बढ़ी। गीली मिट्टी को आग में पकाने से सिलिकेट सख्त होकर जलरोधी बर्तन बनाते हैं।"
    },
    requiredDiscoveries: ["agriculture", "ceramic_pot", "primitive_hoe", "irrigation_canal"],
    puzzleId: "irrigation_puzzle"
  },
  {
    id: 3,
    code: "crucible_and_word",
    name: { en: "The Crucible & The Word", hi: "धातु, पहिया और लिपि" },
    period: { en: "About 5,000 years ago", hi: "लगभग 5,000 वर्ष पूर्व" },
    themeColor: "#d35400",
    badge: "🏺",
    quote: {
      en: "Writing is the geometry of the soul, and metallurgy is its armor.",
      hi: "लेखन विचारों को अमर बनाता है, और धातु विज्ञान सभ्यता को शक्ति देता है।"
    },
    story: {
      en: "Stone tools shatter easily. By harnessing kilns to reach 1100°C, metallurgists extracted copper and fused it with tin to forge bronze—a revolutionary alloy. Simultaneously, recording grain led to the invention of written script.",
      hi: "पत्थर के औज़ार जल्दी टूट जाते थे। भट्टियों को 1100°C तक तपाकर तांबे और टिन को मिलाकर 'कांस्य' बनाया गया। अनाज का हिसाब रखने की आवश्यकता से पहली लिपि का आविष्कार हुआ।"
    },
    scienceFact: {
      en: "Bronze is harder than copper because different-sized tin atoms disrupt the crystalline lattice, preventing atomic planes from slipping.",
      hi: "कांसा शुद्ध तांबे से अधिक कठोर होता है क्योंकि टिन के बड़े परमाणु तांबे के क्रिस्टल जालक में परमाणुओं के फिसलने को रोकते हैं।"
    },
    requiredDiscoveries: ["bronze_alloy", "cuneiform_tablet", "spoked_wheel"],
    puzzleId: "smelting_puzzle"
  },
  {
    id: 4,
    code: "merchant_and_stars",
    name: { en: "The Merchant & The Stars", hi: "व्यापार, सिक्के और खगोल" },
    period: { en: "About 2,500 to 1,500 years ago", hi: "लगभग 2,500 से 1,500 वर्ष पूर्व" },
    themeColor: "#8e44ad",
    badge: "🧭",
    quote: {
      en: "Trade spreads ideas faster than marching armies.",
      hi: "व्यापार विचारों को सेनाओं से भी अधिक तेज़ी से फैलाता है।"
    },
    story: {
      en: "City-states expanded into sprawling trade networks. Bartering cows for tools was inefficient, giving rise to minted coinage. Mariners used mathematics and the stars to navigate uncharted oceans.",
      hi: "नगर-राज्य विशाल व्यापारिक तंत्रों में बदल गए। वस्तु-विनिमय की जगह मानकीकृत सिक्कों ने ली और गणित व तारों की मदद से समुद्री मार्गों की खोज हुई।"
    },
    scienceFact: {
      en: "Celestial navigation relies on spherical trigonometry. Standardized coinage relies on measuring specific gravity (Archimedes' buoyancy principle) to prevent fraud.",
      hi: "खगोलीय नौवहन गोलीय त्रिकोणमिति पर निर्भर करता है। सिक्कों की शुद्धता मापने के लिए आर्किमिडीज के उत्प्लावन सिद्धांत का उपयोग हुआ।"
    },
    requiredDiscoveries: ["standard_coinage", "paper_sheets", "astrolabe", "merchant_cart"],
    puzzleId: "celestial_puzzle"
  },
  {
    id: 5,
    code: "age_of_reason",
    name: { en: "The Age of Reason", hi: "विज्ञान और प्रकाश" },
    period: { en: "About 1450 to 1750", hi: "लगभग 1450 से 1750" },
    themeColor: "#2980b9",
    badge: "🔭",
    quote: {
      en: "Measure what is measurable, and make measurable what is not so.",
      hi: "जो मापा जा सकता है उसे मापें, और जो नहीं मापा जा सकता उसे मापने योग्य बनाएं।"
    },
    story: {
      en: "Knowledge was once locked in monasteries. Movable type made books mass-producible. Curved glass lenses cracked open two unseen universes: the colossal planets orbiting in space, and the microscopic cells living within us.",
      hi: "ज्ञान पहले कुछ लोगों तक सीमित था। प्रिंटिंग प्रेस ने पुस्तकों को घर-घर पहुंचाया। कांच के लेंसों ने दो छिपे हुए ब्रह्मांड खोल दिए: अंतरिक्ष के विशाल ग्रह और सूक्ष्म कोशिकाएं।"
    },
    scienceFact: {
      en: "Refraction through curved lenses bends light rays via Snell's Law (n1 sinθ1 = n2 sinθ2), magnifying distant wavefronts into sharp visible images.",
      hi: "कांच के मुड़े हुए लेंस स्नेल के अपवर्तन नियम के तहत प्रकाश किरणों को मोड़कर दूर की धुंधली छवियों को आवर्धित और स्पष्ट करते हैं।"
    },
    requiredDiscoveries: ["clear_glass", "optical_lens", "telescope", "printing_press", "compound_microscope"],
    puzzleId: "optics_puzzle"
  },
  {
    id: 6,
    code: "steam_and_factories",
    name: { en: "Steam & Industry", hi: "भाप और कारखाने" },
    period: { en: "About 1750 to 1900", hi: "लगभग 1750 से 1900" },
    themeColor: "#7f8c8d",
    badge: "🚂",
    quote: {
      en: "Steam is an Englishman: it works indefatigably, obeys orders, and never sleeps.",
      hi: "भाप ऊर्जा का ऐसा सेवक है जो बिना थके, लगातार भारी से भारी पहियों को घुमाता है।"
    },
    story: {
      en: "For thousands of years, work was limited by human and animal muscle. The steam engine converted ancient underground solar energy stored in coal into mechanical work, launching railways and manufacturing.",
      hi: "सदियों से इंसान की ताकत उसकी मांसपेशियों तक सीमित थी। भाप के इंजन ने कोयले में संचित ऊर्जा को यांत्रिक गति में बदलकर उद्योग और रेल क्रांति को जन्म दिया।"
    },
    scienceFact: {
      en: "Phase change of liquid water to steam expands volume by 1,700 times. Constraining this thermal expansion within a closed cylinder creates immense motive force.",
      hi: "पानी जब उबलकर भाप बनता है तो उसका आयतन 1,700 गुना फैल जाता है। इस विशाल दबाव को पिस्टन में नियंत्रित करके शक्तिशाली गति प्राप्त होती है।"
    },
    requiredDiscoveries: ["high_pressure_steam", "steam_engine", "locomotive_railway", "germ_theory"],
    puzzleId: "steam_puzzle"
  },
  {
    id: 7,
    code: "spark_of_logic",
    name: { en: "The Spark of Logic", hi: "विद्युत और तर्क" },
    period: { en: "About 1850 to 1990", hi: "लगभग 1850 से 1990" },
    themeColor: "#f1c40f",
    badge: "⚡",
    quote: {
      en: "Electricity is really just organized lightning, tamed to think for us.",
      hi: "बिजली बादलों की कड़क है, जिसे तारों में बांधकर हमने सोचना सिखा दिया।"
    },
    story: {
      en: "Taming the invisible electron revolutionized communication. From telegraph clicks across ocean cables to the vacuum tube and solid-state silicon transistor, humans learned to encode human thought into binary ones and zeros.",
      hi: "अदृश्य इलेक्ट्रॉन को नियंत्रित करने से दुनिया सिमट गई। समुद्र के नीचे बिछे टेलीग्राफ तारों से लेकर सिलिकॉन ट्रांजिस्टर तक, हमने मानव बुद्धि को शून्य और एक (0, 1) में कोड किया।"
    },
    scienceFact: {
      en: "Transistors act as solid-state electrical valves without moving parts. By doping silicon with phosphorus or boron, a minute gate voltage controls massive current flow.",
      hi: "ट्रांजिस्टर बिना किसी हिलते हुए पुर्जे के स्विच का काम करते हैं। सिलिकॉन में डोपिंग करके सूक्ष्म वोल्टेज से विशाल धारा को नियंत्रित किया जाता है।"
    },
    requiredDiscoveries: ["chemical_battery", "electromagnet", "transistor", "logic_gates"],
    puzzleId: "logic_puzzle"
  },
  {
    id: 8,
    code: "silicon_frontier",
    name: { en: "The Silicon Frontier & Beyond", hi: "सिलिकॉन क्रांति और भविष्य" },
    period: { en: "1990 to Today & The Future", hi: "1990 से वर्तमान और भविष्य" },
    themeColor: "#00cec9",
    badge: "🌐",
    quote: {
      en: "We are the universe contemplating itself through silicon, code, and curiosity.",
      hi: "हम ब्रह्मांड का वह हिस्सा हैं जो कोड, सिलिकॉन और विज्ञान के जरिए स्वयं को समझ रहा है।"
    },
    story: {
      en: "Billions of transistors packed onto fingernail-sized chips interconnected the entire planet. As humanity grapples with climate boundaries, science unlocks clean fusion, renewable grids, and artificial intelligence.",
      hi: "नाखून जितने आकार की चिप पर अरबों ट्रांजिस्टरों ने पूरी पृथ्वी को जोड़ दिया। अब विज्ञान सौर ऊर्जा और कृत्रिम बुद्धिमत्ता के जरिए एक नए युग का निर्माण कर रहा है।"
    },
    scienceFact: {
      en: "Photovoltaic cells use the photoelectric effect: incoming photons knock valence electrons free from silicon atoms, directly generating clean direct current (DC).",
      hi: "सौर सेल फोटोइलेक्ट्रिक प्रभाव पर काम करते हैं: सूर्य के फोटॉन सिलिकॉन परमाणुओं से इलेक्ट्रॉनों को मुक्त कर सीधे स्वच्छ विद्युत उत्पन्न करते हैं।"
    },
    requiredDiscoveries: ["microprocessor", "the_internet", "solar_grid", "artificial_intelligence"],
    puzzleId: "grid_puzzle"
  }
];

export const ELEMENTS = {
  // ERA 1: Stone & Spark
  stone: { id: "stone", name: { en: "Stone", hi: "पत्थर" }, era: 1, icon: "🪨", category: "raw", desc: { en: "Dense river cobble. Hard, heavy, but brittle.", hi: "नदी का कठोर और भारी पत्थर।" } },
  wood: { id: "wood", name: { en: "Wood", hi: "लकड़ी" }, era: 1, icon: "🪵", category: "raw", desc: { en: "Dry branches rich in cellulose and lignin.", hi: "सूखी टहनियां और सेल्यूलोज से भरपूर तने।" } },
  dry_leaves: { id: "dry_leaves", name: { en: "Dry Leaves & Tinder", hi: "सूखे पत्ते व घास" }, era: 1, icon: "🍂", category: "raw", desc: { en: "Fine, highly flammable organic matter with low moisture.", hi: "बारीक सूखी पत्तियां जो आसानी से चिंगारी पकड़ती हैं।" } },
  sharp_flint: { id: "sharp_flint", name: { en: "Sharp Flint Blade", hi: "नुकीला पत्थर (ब्लेड)" }, era: 1, icon: "🔪", category: "tool", isBreakthrough: true, desc: { en: "Knapped flint creating a razor-thin cutting edge. The first tool.", hi: "तराशा गया चकमक पत्थर। मानव का पहला धारदार औज़ार।" }, science: { en: "Conchoidal fractures produce an edge only nanometers thick.", hi: "दबाव से बना यह ब्लेड शल्य चिकित्सा के औज़ार से भी तेज़ होता है।" } },
  friction_heat: { id: "friction_heat", name: { en: "Friction Heat", hi: "घर्षण ताप" }, era: 1, icon: "💨", category: "energy", desc: { en: "Kinetic energy converted into thermal energy.", hi: "लकड़ियों को तेज़ी से रगड़ने से उत्पन्न गतिज ताप।" } },
  controlled_fire: { id: "controlled_fire", name: { en: "Controlled Fire", hi: "नियंत्रित आग" }, era: 1, icon: "🔥", category: "energy", isBreakthrough: true, desc: { en: "Humanity's first external energy source. Cooked food, warmed caves, and deterred predators.", hi: "मानव द्वारा आग पर नियंत्रण। भोजन पकाना, ठंड से बचना और जंगली जानवरों से सुरक्षा।" }, science: { en: "Rapid exothermic reaction: Fuel + O2 -> CO2 + H2O + intense Heat & Light.", hi: "दहन एक तीव्र ऊष्माक्षेपी अभिक्रिया है जिससे अपार ऊर्जा निकलती है।" } },
  spear: { id: "spear", name: { en: "Hunting Spear", hi: "शिकार का भाला" }, era: 1, icon: "🗡️", category: "tool", isBreakthrough: true, desc: { en: "Flint-tipped wooden shaft extending defensive reach.", hi: "लकड़ी पर बंधा नुकीला पत्थर। दूर से शिकार करने का साधन।" } },
  charcoal: { id: "charcoal", name: { en: "Charcoal", hi: "कोयला (चारकोल)" }, era: 1, icon: "⬛", category: "compound", isBreakthrough: true, desc: { en: "Pure carbon fuel created by burning wood under smothered low-oxygen soil.", hi: "कम हवा में लकड़ी सुलगाकर बना शुद्ध कार्बन जो बहुत तेज़ जलता है।" } },

  // ERA 2: The Green Awakening
  wild_seeds: { id: "wild_seeds", name: { en: "Wild Seeds", hi: "जंगली बीज" }, era: 2, icon: "🌱", category: "raw", desc: { en: "Ancestral grass grains (wheat, barley, and rice).", hi: "जंगली घासों के बीज (अनाज के पूर्वज)।" } },
  clay: { id: "clay", name: { en: "River Clay", hi: "नदी की मिट्टी" }, era: 2, icon: "🧱", category: "raw", desc: { en: "Fine-grained natural sediment rich in silicates and minerals.", hi: "नदी के किनारे की महीन चिपचिपी मिट्टी।" } },
  river_water: { id: "river_water", name: { en: "Fresh River Water", hi: "नदी का मीठा जल" }, era: 2, icon: "💧", category: "raw", desc: { en: "Flowing freshwater essential for biological life and hydration.", hi: "स्वच्छ प्राकृतिक जल।" } },
  wet_clay: { id: "wet_clay", name: { en: "Molded Clay", hi: "गीली गूंथी मिट्टी" }, era: 2, icon: "🏺", category: "compound", desc: { en: "Pliable clay ready to be shaped into pots and bricks.", hi: "पानी में गूंथी मिट्टी जिससे बर्तन बनाए जा सकते हैं।" } },
  ceramic_pot: { id: "ceramic_pot", name: { en: "Fired Ceramic Pot", hi: "पका मिट्टी का बर्तन" }, era: 2, icon: "🏺", category: "tool", isBreakthrough: true, desc: { en: "Fire-hardened pottery for cooking soup and storing grain safely from vermin.", hi: "आग में पकाया जलरोधी पक्का बर्तन।" } },
  agriculture: { id: "agriculture", name: { en: "Farming & Crops", hi: "व्यवस्थित खेती (कृषि)" }, era: 2, icon: "🌾", category: "compound", isBreakthrough: true, desc: { en: "Planting and harvesting domesticated crops, enabling settled villages.", hi: "बीज बोना और फसल काटना, जिसने स्थायी बस्तियों को जन्म दिया।" } },
  primitive_hoe: { id: "primitive_hoe", name: { en: "Primitive Hoe & Plough", hi: "हल और कुदाल" }, era: 2, icon: "⛏️", category: "tool", isBreakthrough: true, desc: { en: "Leverage applied to loosen and aerate compacted topsoil.", hi: "मिट्टी जोतने वाला पहला लकड़ी व पत्थर का हल।" } },
  irrigation_canal: { id: "irrigation_canal", name: { en: "Irrigation Canal", hi: "सिंचाई नहर" }, era: 2, icon: "🌊", category: "tool", isBreakthrough: true, desc: { en: "Engineered waterways delivering river water straight to crops during dry months.", hi: "खेतों तक नदी की धारा मोड़ने वाली नहरें।" } },

  // ERA 3: The Crucible & The Word
  copper_ore: { id: "copper_ore", name: { en: "Copper Ore", hi: "तांबा अयस्क" }, era: 3, icon: "🟢", category: "raw", desc: { en: "Greenish rocks containing natural metallic copper.", hi: "प्राकृतिक तांबे के खनिज वाला पत्थर।" } },
  tin_ore: { id: "tin_ore", name: { en: "Tin Ore", hi: "टिन अयस्क" }, era: 3, icon: "⚪", category: "raw", desc: { en: "Heavy mineral ore containing low-melting tin dioxide.", hi: "आसानी से पिघलने वाली टिन धातु का अयस्क।" } },
  river_reed: { id: "river_reed", name: { en: "River Reed", hi: "नदी का नरकट" }, era: 3, icon: "🎋", category: "raw", desc: { en: "Stiff triangular marsh stalk for stylus impression.", hi: "कठोर डंडी जिससे मिट्टी पर लिखा जा सके।" } },
  melted_copper: { id: "melted_copper", name: { en: "Molten Copper", hi: "पिघला तांबा" }, era: 3, icon: "🟠", category: "compound", desc: { en: "Malleable red metal melted at 1,085°C.", hi: "1085°C पर पिघला लचीला तांबा।" } },
  melted_tin: { id: "melted_tin", name: { en: "Molten Tin", hi: "पिघला टिन" }, era: 3, icon: "⚪", category: "compound", desc: { en: "Silvery metal that melts at a modest 232°C.", hi: "कम तापमान पर पिघलने वाली सफेद धातु।" } },
  bronze_alloy: { id: "bronze_alloy", name: { en: "Forged Bronze Alloy", hi: "कांस्य मिश्रधातु" }, era: 3, icon: "🛡️", category: "tool", isBreakthrough: true, desc: { en: "Copper fused with tin. Tough interlocking crystal lattice.", hi: "तांबे और टिन का मिश्रण। अत्यंत मजबूत कांसा।" } },
  cuneiform_tablet: { id: "cuneiform_tablet", name: { en: "Inscribed Clay Tablet", hi: "लिखित पट्टिका (लिपि)" }, era: 3, icon: "📜", category: "tool", isBreakthrough: true, desc: { en: "Written script stamped on wet clay to record knowledge.", hi: "गीली मिट्टी पर लिखी गई पहली लिखित लिपि।" } },
  spoked_wheel: { id: "spoked_wheel", name: { en: "The Spoked Wheel", hi: "पहिया" }, era: 3, icon: "☸️", category: "tool", isBreakthrough: true, desc: { en: "Circular mechanism converting friction into smooth rolling transport.", hi: "परिवहन को तेज़ करने वाला आरेदार पहिया।" } },

  // ERA 4: The Merchant & The Stars
  gold_nugget: { id: "gold_nugget", name: { en: "Gold Ore", hi: "सोना अयस्क" }, era: 4, icon: "🪙", category: "raw", desc: { en: "Malleable precious metal unaffected by corrosion.", hi: "चमकदार और लचीली बहुमूल्य धातु।" } },
  plant_fiber: { id: "plant_fiber", name: { en: "Plant Fiber", hi: "पौधों के रेशे" }, era: 4, icon: "🌿", category: "raw", desc: { en: "Fibrous cellulose pulp extracted from marsh plants.", hi: "पेड़ों और घासों से निकाले गए बारीक रेशे।" } },
  iron_ore: { id: "iron_ore", name: { en: "Iron Ore", hi: "लोहा अयस्क" }, era: 4, icon: "⛏️", category: "raw", desc: { en: "Abundant mineral requiring high-temperature smelting.", hi: "प्रचुर मात्रा में उपलब्ध खनिज जिसे पिघलाने के लिए उच्च तापमान चाहिए।" } },
  standard_coinage: { id: "standard_coinage", name: { en: "Standardized Coinage", hi: "मुद्रा व सिक्के" }, era: 4, icon: "💰", category: "tool", isBreakthrough: true, desc: { en: "Certified currency tokens replacing barter with flexible commerce.", hi: "प्रमाणित सिक्के जिन्होंने बाज़ार में व्यापार को गति दी।" } },
  paper_sheets: { id: "paper_sheets", name: { en: "Paper Sheets", hi: "काग़ज़" }, era: 4, icon: "📄", category: "tool", isBreakthrough: true, desc: { en: "Portable, lightweight sheets for recording books and decrees.", hi: "हल्का कागज़ जिसने भारी पट्टियों की जगह ली।" } },
  astrolabe: { id: "astrolabe", name: { en: "The Astrolabe", hi: "खगोलीय यंत्र" }, era: 4, icon: "🧭", category: "tool", isBreakthrough: true, desc: { en: "Analog celestial calculator to measure star elevation and sea latitude.", hi: "तारों की ऊंचाई मापकर अक्षांश बताने वाला यंत्र।" } },
  merchant_cart: { id: "merchant_cart", name: { en: "Merchant Carts & Roads", hi: "व्यापार मार्ग व गाड़ियां" }, era: 4, icon: "🛒", category: "tool", isBreakthrough: true, desc: { en: "Iron-axle carts traveling long-distance highways.", hi: "महाद्वीपों को जोड़ने वाली व्यापारिक गाड़ियां व सड़कें।" } },

  // ERA 5: The Age of Reason
  silica_sand: { id: "silica_sand", name: { en: "Silica Sand", hi: "सिलिका रेत" }, era: 5, icon: "🏖️", category: "raw", desc: { en: "High-purity quartz sand which melts into liquid glass.", hi: "शुद्ध क्वार्ट्ज रेत जो पिघलकर पारदर्शी कांच बनाती है।" } },
  metal_letters: { id: "metal_letters", name: { en: "Lead-Tin Type Alloy", hi: "शीशा-टिन मुद्राक्षर" }, era: 5, icon: "🔤", category: "raw", desc: { en: "Durable metal castings of alphabet letters.", hi: "अक्षरों के धातुई सांचे।" } },
  clear_glass: { id: "clear_glass", name: { en: "Clear Optical Glass", hi: "पारदर्शी कांच" }, era: 5, icon: "🪟", category: "compound", isBreakthrough: true, desc: { en: "Transparent solid allowing light to transmit cleanly.", hi: "पारदर्शी कांच जो प्रकाश को बिना बाधा निकलने देता है।" } },
  optical_lens: { id: "optical_lens", name: { en: "Polished Optical Lens", hi: "ऑप्टिकल लेंस" }, era: 5, icon: "🔍", category: "tool", isBreakthrough: true, desc: { en: "Precision ground glass curving light via refraction.", hi: "प्रकाश को मोड़ने और बड़ा दिखाने वाला तराशा हुआ लेंस।" } },
  telescope: { id: "telescope", name: { en: "Refracting Telescope", hi: "खगोलीय दूरबीन" }, era: 5, icon: "🔭", category: "tool", isBreakthrough: true, desc: { en: "Aligned lenses revealing planets and stars in deep space.", hi: "ब्रह्मांड के रहस्यों को उजागर करने वाली दूरबीन।" } },
  compound_microscope: { id: "compound_microscope", name: { en: "Compound Microscope", hi: "सूक्ष्मदर्शी" }, era: 5, icon: "🔬", category: "tool", isBreakthrough: true, desc: { en: "Dual-lens magnification showing microscopic cells and bacteria.", hi: "सूक्ष्म कोशिकाओं को दिखाने वाला यंत्र।" } },
  printing_press: { id: "printing_press", name: { en: "Movable Type Printing Press", hi: "प्रिंटिंग प्रेस" }, era: 5, icon: "📰", category: "tool", isBreakthrough: true, desc: { en: "Cast metal type mass-producing books for all humankind.", hi: "पुस्तकों का बड़े पैमाने पर उत्पादन करने वाला छापाखाना।" } },

  // ERA 6: Steam & Industry
  coal_fuel: { id: "coal_fuel", name: { en: "Mineral Coal", hi: "खनिज कोयला" }, era: 6, icon: "🪨", category: "raw", desc: { en: "Dense fossil fuel burning much hotter and longer than wood.", hi: "भूमिगत जीवाश्म ईंधन जो अत्यधिक ऊर्जा देता है।" } },
  pathogen_sample: { id: "pathogen_sample", name: { en: "Microbial Culture", hi: "सूक्ष्म जीवाणु नमूना" }, era: 6, icon: "🧫", category: "raw", desc: { en: "Fermenting culture showing cellular bacteria under the microscope.", hi: "सूक्ष्मदर्शी से देखे जाने वाले जीवाणुओं का नमूना।" } },
  high_pressure_steam: { id: "high_pressure_steam", name: { en: "High-Pressure Steam", hi: "उच्च दाब भाप" }, era: 6, icon: "💨", category: "energy", isBreakthrough: true, desc: { en: "Water vapor expanding 1,700 times, producing massive kinetic force.", hi: "1700 गुना फैलकर विशाल दबाव बनाने वाली भाप।" } },
  steam_engine: { id: "steam_engine", name: { en: "Steam Engine Piston", hi: "भाप का इंजन" }, era: 6, icon: "⚙️", category: "tool", isBreakthrough: true, desc: { en: "Mechanical piston converting thermal expansion into continuous rotation.", hi: "ऊष्मा को यांत्रिक गति में बदलने वाला शक्तिशाली इंजन।" } },
  locomotive_railway: { id: "locomotive_railway", name: { en: "Steam Locomotive & Railway", hi: "रेलगाड़ी" }, era: 6, icon: "🚂", category: "tool", isBreakthrough: true, desc: { en: "Steam engines moving heavy cargo across iron rail networks.", hi: "लोहे की पटरियों पर दौड़ती तेज रफ्तार रेलगाड़ी।" } },
  germ_theory: { id: "germ_theory", name: { en: "Germ Theory & Antiseptics", hi: "रोगाणु सिद्धांत" }, era: 6, icon: "🧪", category: "tool", isBreakthrough: true, desc: { en: "Discovery of pathogens leading to sterile surgery and vaccines.", hi: "रोगाणुओं की खोज जिससे चिकित्सा में नई क्रांति आई।" } },

  // ERA 7: The Spark of Logic
  zinc_metal: { id: "zinc_metal", name: { en: "Zinc Plates & Acid", hi: "जस्ता और अम्ल" }, era: 7, icon: "⚗️", category: "raw", desc: { en: "Reactive metal plates and electrolyte for chemical reaction.", hi: "रासायनिक अभिक्रिया उत्पन्न करने वाली धातु व अम्ल।" } },
  silicon_crystal: { id: "silicon_crystal", name: { en: "Silicon Ingot", hi: "सिलिकॉन क्रिस्टल" }, era: 7, icon: "💎", category: "raw", desc: { en: "High-purity semiconducting metalloid crystal.", hi: "अर्धचालक सिलिकॉन जो आधुनिक इलेक्ट्रॉनिक्स की नींव है।" } },
  chemical_battery: { id: "chemical_battery", name: { en: "Voltaic Chemical Battery", hi: "रासायनिक बैटरी" }, era: 7, icon: "🔋", category: "energy", isBreakthrough: true, desc: { en: "Continuous direct electrical current from chemical oxidation.", hi: "निरंतर विद्युत प्रवाह देने वाली पहली बैटरी।" } },
  electromagnet: { id: "electromagnet", name: { en: "Electromagnet", hi: "विद्युत चुंबक" }, era: 7, icon: "🧲", category: "tool", isBreakthrough: true, desc: { en: "Coiled wire generating strong magnetic force when powered.", hi: "बिजली दौड़ते ही चुंबक बनने वाला कॉइल।" } },
  transistor: { id: "transistor", name: { en: "Silicon Transistor", hi: "सिलिकॉन ट्रांजिस्टर" }, era: 7, icon: "🔌", category: "tool", isBreakthrough: true, desc: { en: "Solid-state electronic switch with zero moving parts.", hi: "कंप्यूटर की नींव: नन्हा इलेक्ट्रॉनिक स्विच।" } },
  logic_gates: { id: "logic_gates", name: { en: "Binary Logic Gates", hi: "बाइनरी लॉजिक गेट्स" }, era: 7, icon: "🔀", category: "tool", isBreakthrough: true, desc: { en: "Circuits executing Boolean logic operations (1s and 0s).", hi: "सत्य व असत्य पर निर्णय लेने वाले तार्किक परिपथ।" } },

  // ERA 8: The Silicon Frontier & Beyond
  fiber_optic_cable: { id: "fiber_optic_cable", name: { en: "Fiber Optic & Satellite", hi: "ऑप्टिक फाइबर व उपग्रह" }, era: 8, icon: "🛰️", category: "raw", desc: { en: "High-speed light transmission cables and orbit transceivers.", hi: "प्रकाश की गति से डेटा भेजने वाले आधुनिक तार व संचार उपग्रह।" } },
  photovoltaic_cell: { id: "photovoltaic_cell", name: { en: "Silicon PV Cell", hi: "फोटोवोल्टिक सेल" }, era: 8, icon: "☀️", category: "raw", desc: { en: "Doped semiconductor converting solar photons into electricity.", hi: "सूर्य के प्रकाश से बिजली बनाने वाला सिलिकॉन सेल।" } },
  microprocessor: { id: "microprocessor", name: { en: "Microprocessor CPU", hi: "माइक्रोप्रोसेसर" }, era: 8, icon: "🔲", category: "tool", isBreakthrough: true, desc: { en: "Billions of microscopic transistors executing billions of calculations per second.", hi: "कंप्यूटर का शक्तिशाली मस्तिष्क।" } },
  the_internet: { id: "the_internet", name: { en: "The Internet & Web", hi: "इंटरनेट और वेब" }, era: 8, icon: "🌐", category: "tool", isBreakthrough: true, desc: { en: "Planetary communications mesh uniting knowledge.", hi: "पूरी मानवता के ज्ञान को जोड़ने वाला वैश्विक नेटवर्क।" } },
  solar_grid: { id: "solar_grid", name: { en: "Clean Solar Energy Grid", hi: "सौर ऊर्जा ग्रिड" }, era: 8, icon: "☀️", category: "energy", isBreakthrough: true, desc: { en: "Direct conversion of photons into clean electrical current.", hi: "धूप को सीधे स्वच्छ बिजली में बदलने वाले सौर पैनल।" } },
  artificial_intelligence: { id: "artificial_intelligence", name: { en: "Artificial Intelligence (AI)", hi: "कृत्रिम बुद्धिमत्ता (AI)" }, era: 8, icon: "🧠", category: "tool", isBreakthrough: true, desc: { en: "Deep neural networks reasoning and synthesizing complex insights.", hi: "मानव मस्तिष्क की तरह सीखने और सोचने वाली AI प्रणाली।" } }
};

export const RECIPES = [
  // Era 1 Recipes
  { inputs: ["stone", "stone"], result: "sharp_flint", story: { en: "Chipped off a razor-sharp blade by striking stones together!", hi: "दो पत्थरों को टकराकर आपने धारदार ब्लेड बना लिया!" } },
  { inputs: ["wood", "wood"], result: "friction_heat", story: { en: "Twirling dry wood creates intense friction heat and smoke!", hi: "लकड़ियों को तेज़ी से रगड़ने से घर्षण ताप पैदा हुआ!" } },
  { inputs: ["friction_heat", "dry_leaves"], result: "controlled_fire", story: { en: "The spark ignites the tinder into roaring Controlled Fire!", hi: "चिंगारी ने सूखे पत्तों को पकड़कर आग सुलगा दी!" } },
  { inputs: ["wood", "sharp_flint"], result: "spear", story: { en: "Lashed sharp flint to a wooden shaft: Hunting Spear created!", hi: "लकड़ी पर नुकीला पत्थर बांधकर शिकार का भाला बनाया!" } },
  { inputs: ["controlled_fire", "wood"], result: "charcoal", story: { en: "Smothering hot wood embers yields high-temperature Charcoal!", hi: "कम हवा में लकड़ी सुलगाने से शुद्ध चारकोल (कोयला) बन गया!" } },

  // Era 2 Recipes
  { inputs: ["stone", "wood"], result: "primitive_hoe", story: { en: "Lashed a heavy stone wedge to a sturdy wooden shaft to plough hard soil!", hi: "कठोर मिट्टी जोतने के लिए लकड़ी के हत्थे पर पत्थर का फाल बांधकर हल तैयार किया!" } },
  { inputs: ["clay", "river_water"], result: "wet_clay", story: { en: "River water makes clay pliable and ready for pottery.", hi: "पानी मिलाने से मिट्टी बर्तन बनाने योग्य हो गई।" } },
  { inputs: ["wet_clay", "controlled_fire"], result: "ceramic_pot", story: { en: "Kiln fire bakes wet clay into durable waterproof Ceramic Pottery!", hi: "आग की तपिश ने मिट्टी को पकाकर जलरोधी बर्तन बना दिया!" } },
  { inputs: ["wild_seeds", "wet_clay"], result: "agriculture", story: { en: "Planting seeds in fertile soil begins Agriculture!", hi: "उपजाऊ मिट्टी में बीज बोने से कृषि की शुरुआत हुई!" } },
  { inputs: ["primitive_hoe", "river_water"], result: "irrigation_canal", story: { en: "Carved water channels to deliver river water to crops!", hi: "खेतों तक पानी लाने के लिए सिंचाई नहर खोदी गई!" } },

  // Era 3 Recipes
  { inputs: ["copper_ore", "charcoal"], result: "melted_copper", story: { en: "Charcoal heat melts green ore into shiny Molten Copper!", hi: "चारकोल की भट्टी ने अयस्क से तांबा पिघला दिया!" } },
  { inputs: ["tin_ore", "charcoal"], result: "melted_tin", story: { en: "Tin ore melts smoothly into pure molten tin liquid.", hi: "टिन अयस्क पिघलकर सफेद तरल में बदल गया।" } },
  { inputs: ["melted_copper", "melted_tin"], result: "bronze_alloy", story: { en: "Fusing copper and tin yields Bronze—stronger and tougher than both!", hi: "तांबे और टिन के मेल से बना अत्यंत मजबूत कांसा!" } },
  { inputs: ["river_reed", "wet_clay"], result: "cuneiform_tablet", story: { en: "Stamped reed stylus into damp clay: Written Script is born!", hi: "नरकट से गीली मिट्टी पर लिखकर पहली लिपि का जन्म हुआ!" } },
  { inputs: ["wood", "bronze_alloy"], result: "spoked_wheel", story: { en: "Using bronze tools to fashion wooden spokes creates the Wheel!", hi: "कांस्य के औज़ारों से आरेदार पहिया बनाया गया!" } },

  // Era 4 Recipes
  { inputs: ["gold_nugget", "controlled_fire"], result: "standard_coinage", story: { en: "Smelted gold stamped with standard weight and purity: Coinage!", hi: "सोने को पिघलाकर प्रामाणिक सिक्के ढाले!" } },
  { inputs: ["plant_fiber", "river_water"], result: "paper_sheets", story: { en: "Macerated plant pulp pressed and dried into uniform paper sheets!", hi: "पौधों के गूदे को सुखाकर सुगम कागज़ बनाया!" } },
  { inputs: ["bronze_alloy", "stone"], result: "astrolabe", story: { en: "Machined circular bronze dials to track celestial coordinates!", hi: "तारों और अक्षांश की गणना के लिए कांस्य का एस्ट्रोलेब बनाया!" } },
  { inputs: ["spoked_wheel", "wood"], result: "merchant_cart", story: { en: "Constructed rugged heavy carts to transport goods over long roads!", hi: "लंबी दूरी के व्यापार के लिए मजबूत मालवाहक गाड़ियां बनाईं!" } },

  // Era 5 Recipes
  { inputs: ["silica_sand", "controlled_fire"], result: "clear_glass", story: { en: "Fused silica sand at high heat into transparent optical glass!", hi: "सिलिका रेत को तपाकर पारदर्शी शीशा बनाया!" } },
  { inputs: ["clear_glass", "stone"], result: "optical_lens", story: { en: "Carefully ground glass curves to refract and magnify light wavefronts!", hi: "कांच को तराशकर प्रकाश मोड़ने वाला शक्तिशाली लेंस तैयार किया!" } },
  { inputs: ["optical_lens", "wood"], result: "telescope", story: { en: "Mounted lenses in an aligned tube to observe moons and planetary rings!", hi: "लेंसों को नली में जोड़कर ग्रहों को देखने वाली दूरबीन बनाई!" } },
  { inputs: ["optical_lens", "clear_glass"], result: "compound_microscope", story: { en: "Dual magnifying lenses reveal the teeming invisible world of cells!", hi: "दोहरे लेंस से सूक्ष्म कोशिकाओं और कीटाणुओं का संसार दिखा!" } },
  { inputs: ["metal_letters", "paper_sheets"], result: "printing_press", story: { en: "Inked movable metal alloy types to print thousands of books rapidly!", hi: "धातु के सांचों से पुस्तकों का बड़े पैमाने पर मुद्रण शुरू हुआ!" } },

  // Era 6 Recipes
  { inputs: ["river_water", "coal_fuel"], result: "high_pressure_steam", story: { en: "Vaporized water inside sealed vessel expands 1,700 times with violent pressure!", hi: "कोयले की आग से पानी को 1700 गुना फैलने वाली उच्च दाब भाप में बदला!" } },
  { inputs: ["high_pressure_steam", "iron_ore"], result: "steam_engine", story: { en: "Harnessed expanding steam against an iron piston to output relentless mechanical torque!", hi: "भाप के दबाव को लोहे के पिस्टन में बांधकर शक्तिशाली इंजन बनाया!" } },
  { inputs: ["steam_engine", "merchant_cart"], result: "locomotive_railway", story: { en: "Connected steam engine to flanged wheels on iron rails: Locomotive Railway!", hi: "भाप इंजन को पटरियों पर दौड़ाकर पहली रेलगाड़ी बनाई!" } },
  { inputs: ["compound_microscope", "pathogen_sample"], result: "germ_theory", story: { en: "Proved microorganisms cause disease, revolutionizing sterile medicine and vaccines!", hi: "रोगाणुओं की पहचान कर आधुनिक चिकित्सा और स्वच्छता की क्रांति लाई!" } },

  // Era 7 Recipes
  { inputs: ["zinc_metal", "copper_ore"], result: "chemical_battery", story: { en: "Layered zinc and copper in acid to generate continuous direct current: The Voltaic Battery!", hi: "जस्ता और तांबे की रासायनिक क्रिया से निरंतर बिजली देने वाली बैटरी बनाई!" } },
  { inputs: ["chemical_battery", "iron_ore"], result: "electromagnet", story: { en: "Current through wire coil transforms iron into a powerful controllable magnet!", hi: "बिजली दौड़ते ही लोहे को शक्तिशाली चुंबक में बदल दिया!" } },
  { inputs: ["silicon_crystal", "chemical_battery"], result: "transistor", story: { en: "Created a solid-state microscopic gate switching electrons without moving parts!", hi: "बिना हिलते पुर्जों के बिजली को स्विच करने वाला सिलिकॉन ट्रांजिस्टर बनाया!" } },
  { inputs: ["transistor", "transistor"], result: "logic_gates", story: { en: "Arranged transistors to execute Boolean truth tables (AND, OR, NOT)!", hi: "ट्रांजिस्टरों को जोड़कर तार्किक बाइनरी लॉजिक गेट्स तैयार किए!" } },

  // Era 8 Recipes
  { inputs: ["logic_gates", "silicon_crystal"], result: "microprocessor", story: { en: "Etched billions of logic gates onto a silicon die: Microprocessor CPU!", hi: "सिलिकॉन चिप पर अरबों लॉजिक गेट्स उकेरकर माइक्रोप्रोसेसर बनाया!" } },
  { inputs: ["microprocessor", "fiber_optic_cable"], result: "the_internet", story: { en: "Interlinked planet-wide computing nodes with high-speed fiber optics: The Internet!", hi: "पूरी दुनिया के कंप्यूटरों को जोड़कर वैश्विक इंटरनेट बनाया!" } },
  { inputs: ["photovoltaic_cell", "chemical_battery"], result: "solar_grid", story: { en: "Converted solar photons directly to DC electricity backed by mega-batteries!", hi: "सौर ऊर्जा को विशाल बैटरी स्टोरेज ग्रिड से जोड़कर स्वच्छ ऊर्जा बनाई!" } },
  { inputs: ["microprocessor", "the_internet"], result: "artificial_intelligence", story: { en: "Trained planetary neural networks to reason, code, and expand human discovery: AI!", hi: "ज्ञान और गणना को मिलाकर कृत्रिम बुद्धिमत्ता (AI) को साकार किया!" } }
];
