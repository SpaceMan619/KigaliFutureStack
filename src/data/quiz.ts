import type { QuizQuestion, Archetype } from '@/types/quiz';

export const quizQuestions: QuizQuestion[] = [
  {
    id: 1,
    question: "Where are you right now?",
    questionRw: "Uri hehe ubu?",
    options: [
      { 
        id: "student", 
        label: "University student (undergraduate)", 
        labelRw: "Umuhanga wa kaminuza (undergraduate)",
        scores: { scrappy: 2, hustler: 1 },
        tags: ["low-capital", "flexible-time"]
      },
      { 
        id: "recent-grad", 
        label: "Recent graduate (< 2 years out)", 
        labelRw: "Urwaga kaminuza (< imyaka 2)",
        scores: { technical: 1, hustler: 2, expert: 1 },
        tags: ["medium-capital", "job-transition"]
      },
      { 
        id: "professional", 
        label: "Working professional", 
        labelRw: "Umukozi",
        scores: { expert: 3, technical: 2 },
        tags: ["higher-capital", "industry-experience"]
      },
      { 
        id: "existing-founder", 
        label: "Already running something small", 
        labelRw: "Ufite ubucuruzi boroheje",
        scores: { hustler: 3, scrappy: 2 },
        tags: ["has-revenue", "proven"]
      }
    ]
  },
  {
    id: 2,
    question: "What do you bring to the table? (Pick your strongest)",
    questionRw: "Ni iki wazanira ku meza? (Hitamo irikomeye)",
    options: [
      { 
        id: "tech", 
        label: "I can code / build tech products", 
        labelRw: "Nshobora gushyira porogaramu / kubaka ibikoresho",
        scores: { technical: 4 },
        tags: ["tech-skills", "builder"]
      },
      { 
        id: "sales", 
        label: "I can sell / convince people", 
        labelRw: "Nshobora kugurisha / guhitamo abantu",
        scores: { hustler: 4 },
        tags: ["sales-skills", "growth"]
      },
      { 
        id: "domain", 
        label: "I know a specific industry deeply", 
        labelRw: "Nzi ubucuruzi runaka neza",
        scores: { expert: 4 },
        tags: ["domain-knowledge", "insider"]
      },
      { 
        id: "design", 
        label: "I can design / create content", 
        labelRw: "Nshobora gushushanya / gukora ibikubiye",
        scores: { creative: 3, technical: 1 },
        tags: ["design-skills", "content"]
      },
      { 
        id: "operations", 
        label: "I can raise money / manage operations", 
        labelRw: "Nshobora gutera amafaranga / gucunga",
        scores: { hustler: 2, expert: 2 },
        tags: ["ops-skills", "funding"]
      }
    ]
  },
  {
    id: 3,
    question: "How much can you personally invest to start?",
    questionRw: "Ni angahe amafaranga washobora gushora?",
    options: [
      { 
        id: "under-100", 
        label: "Under $100 (basically ramen money)", 
        labelRw: "Hasi ya $100",
        scores: { scrappy: 4, creative: 2 },
        tags: ["micro-capital", "service-based"]
      },
      { 
        id: "100-1k", 
        label: "$100 - $1,000", 
        labelRw: "$100 - $1,000",
        scores: { scrappy: 2, technical: 1 },
        tags: ["low-capital", "mvp-ready"]
      },
      { 
        id: "1k-5k", 
        label: "$1,000 - $5,000", 
        labelRw: "$1,000 - $5,000",
        scores: { technical: 2, hustler: 1, expert: 1 },
        tags: ["medium-capital", "can-hire"]
      },
      { 
        id: "5k-plus", 
        label: "$5,000+ or I have access to funding", 
        labelRw: "$5,000+ cyangwa nafite amafaranga",
        scores: { expert: 2, technical: 2, hustler: 2 },
        tags: ["high-capital", "growth-ready"]
      }
    ]
  },
  {
    id: 4,
    question: "How stable does your income need to be?",
    questionRw: "Amafaranga yawe agomba kuba yizewe gute?",
    options: [
      { 
        id: "3-months", 
        label: "I need something paying within 3 months", 
        labelRw: "Nkeneye amafaranga mu mezi 3",
        scores: { scrappy: 3, hustler: 2 },
        tags: ["immediate-revenue", "services"]
      },
      { 
        id: "6-months", 
        label: "I can survive 6 months with no income", 
        labelRw: "Nshobora kumara amezi 6 nta mafaranga",
        scores: { technical: 2, creative: 1 },
        tags: ["medium-runway", "mvp-building"]
      },
      { 
        id: "12-months", 
        label: "I can go 12+ months chasing this", 
        labelRw: "Nshobora kumara umwaka ukurikira",
        scores: { technical: 3, expert: 2 },
        tags: ["long-runway", "venture-backable"]
      },
      { 
        id: "safety-net", 
        label: "I have a safety net / side income", 
        labelRw: "Nafite inkingi / ahandi nvana amafaranga",
        scores: { expert: 3, technical: 2 },
        tags: ["stable", "experiment-friendly"]
      }
    ]
  },
  {
    id: 5,
    question: "How fast do you want to move?",
    questionRw: "Urashaka kwihuta gute?",
    options: [
      { 
        id: "this-semester", 
        label: "I want to start something THIS semester", 
        labelRw: "Nshaka gutangira muri iki gihe cya kaminuza",
        scores: { scrappy: 4, hustler: 3 },
        tags: ["immediate", "experiment"]
      },
      { 
        id: "wait-right", 
        label: "I can wait for the right opportunity", 
        labelRw: "Nshobora gutegereza amahirwe yiza",
        scores: { expert: 2, technical: 1 },
        tags: ["patient", "strategic"]
      },
      { 
        id: "just-exploring", 
        label: "I'm just exploring, no rush", 
        labelRw: "Ndashaka gusa, nta mpungenge",
        scores: { creative: 2 },
        tags: ["learning", "low-commitment"]
      }
    ]
  },
  {
    id: 6,
    question: "Do you have a co-founder?",
    questionRw: "Ufite uwo mufatanya?",
    options: [
      { 
        id: "has-cofounder", 
        label: "Yes, we have complementary skills", 
        labelRw: "Yego, dufite ubuhanga butandukanye",
        scores: { technical: 2, hustler: 2, expert: 2 },
        tags: ["team-ready", "can-build-fast"]
      },
      { 
        id: "interested", 
        label: "I have someone interested but not committed", 
        labelRw: "Nafite uwishimiye ariko ataremeza",
        scores: { hustler: 1 },
        tags: ["potential-team", "needs-convincing"]
      },
      { 
        id: "solo", 
        label: "I'm solo right now", 
        labelRw: "Ndi wenyine ubu",
        scores: { scrappy: 2, expert: 1 },
        tags: ["solo-founder", "needs-co-founder"]
      },
      { 
        id: "looking", 
        label: "I'm looking for a co-founder", 
        labelRw: "Nshaka uwifatanya",
        scores: { technical: 1, hustler: 1 },
        tags: ["seeking-team", "networking"]
      }
    ]
  },
  {
    id: 7,
    question: "What's driving you? (Be honest)",
    questionRw: "Ni iki kukurikirana? (Mwitondere)",
    options: [
      { 
        id: "money", 
        label: "I want to make money and be financially independent", 
        labelRw: "Ndashaka kubona amafaranga",
        scores: { hustler: 3, technical: 1 },
        tags: ["profit-driven", "scalable"]
      },
      { 
        id: "impact", 
        label: "I want to solve a real problem I see in Rwanda", 
        labelRw: "Ndashaka gukora ikibazo nkibona mu Rwanda",
        scores: { expert: 3, creative: 1 },
        tags: ["impact-driven", "mission"]
      },
      { 
        id: "experience", 
        label: "I want the experience / to learn entrepreneurship", 
        labelRw: "Ndashaka ubumenyi / kwiga ubucuruzi",
        scores: { scrappy: 2, creative: 2 },
        tags: ["learning", "experiment"]
      },
      { 
        id: "escape", 
        label: "I don't want a traditional 9-5 job", 
        labelRw: "Ndashaka akazi kanjye",
        scores: { creative: 3, hustler: 2 },
        tags: ["independent", "freedom"]
      }
    ]
  },
  {
    id: 8,
    question: "Which areas do you actually care about?",
    questionRw: "Ni ipi sekta wishimiye?",
    options: [
      { 
        id: "agriculture", 
        label: "Agriculture / helping farmers", 
        labelRw: "Ubuhinzi / gufasha abahinzi",
        scores: { expert: 2 },
        tags: ["agriculture", "rural-impact"]
      },
      { 
        id: "finance", 
        label: "Finance / making money move better", 
        labelRw: "Imari / kugira ngo amafaranga agende neza",
        scores: { technical: 2, hustler: 1 },
        tags: ["fintech", "financial-inclusion"]
      },
      { 
        id: "education", 
        label: "Education / teaching people", 
        labelRw: "Uburezi / kwigisha abantu",
        scores: { creative: 1, expert: 1 },
        tags: ["edtech", "human-capital"]
      },
      { 
        id: "health", 
        label: "Health / saving lives", 
        labelRw: "Ubuzima / gukiza abantu",
        scores: { expert: 2, technical: 1 },
        tags: ["healthtech", "social-impact"]
      },
      { 
        id: "creative", 
        label: "Creative / arts, content, media", 
        labelRw: "Ubukore / ubuhanga, ibikubiye",
        scores: { creative: 3 },
        tags: ["creative-economy", "content"]
      },
      { 
        id: "environment", 
        label: "Environment / climate solutions", 
        labelRw: "Ibidukikije / ibisubizo",
        scores: { expert: 1 },
        tags: ["climate-tech", "green"]
      },
      { 
        id: "no-preference", 
        label: "No strong preference — I just want something that works", 
        labelRw: "Nta cyo nshaka cyane — nshaka ibikora",
        scores: { hustler: 2, scrappy: 1 },
        tags: ["opportunistic", "flexible"]
      }
    ]
  }
];

export const archetypes: Archetype[] = [
  {
    id: "technical-builder",
    name: "The Technical Builder",
    nameRw: "Umubaji wa Tehniki",
    description: "You can build products fast. Your superpower is turning ideas into working MVPs. You need a partner who can sell and validate.",
    descriptionRw: "Washobora kubaka ibikoreho vuba. Ukeneye uwo guhiga.",
    strengths: ["Fast prototyping", "Technical problem-solving", "Can build alone"],
    strengthsRw: ["Gukora vuba", "Gukemura ibibazo", "Kubaka wenyine"],
    challenges: ["May over-engineer", "Need sales/marketing partner", "Risk of building without validation"],
    challengesRw: ["Wagutera", "Ukeneye uhiga", "Kubaka utabaze"],
    bestSectors: ["fintech", "edtech", "healthtech", "agritech"],
    icon: "Code"
  },
  {
    id: "the-hustler",
    name: "The Hustler",
    nameRw: "Umunyamagara",
    description: "You can sell before you build. Your network and persuasion skills are your edge. You need a technical partner to execute.",
    descriptionRw: "Washobora kugurisha mbere yo kubaka. Ukeneye uwubaka.",
    strengths: ["Sales & persuasion", "Network access", "Moves fast"],
    strengthsRw: ["Kugurisha", "Amafaranga", "Kunyaruka"],
    challenges: ["May oversell", "Need technical co-founder", "Risk of promising without delivery"],
    challengesRw: ["Kugurisha byinshi", "Ukeneye uwubaka", "Kubwira utabaze"],
    bestSectors: ["ecommerce", "creative-economy", "tourism-tech"],
    icon: "Zap"
  },
  {
    id: "domain-expert",
    name: "The Domain Expert",
    nameRw: "Umwiga",
    description: "You know an industry inside-out. You see problems others miss. You need to pair with someone who can build and scale.",
    descriptionRw: "Uzi ubucuruzi neza. Ubona ibibazo. Ukeneye uwubaka.",
    strengths: ["Deep industry knowledge", "Real problem identification", "Credibility"],
    strengthsRw: ["Ubumenyi", "Gukemura ibibazo", "Igiciro"],
    challenges: ["May be too niche", "Need technical skills", "Risk of building for yourself not market"],
    challengesRw: ["Kuba hanze", "Ukeneye tehniki", "Kubaka utabaze"],
    bestSectors: ["agritech", "construction-tech", "manufacturing", "healthtech"],
    icon: "Target"
  },
  {
    id: "scrappy-starter",
    name: "The Scrappy Starter",
    nameRw: "Uratangira",
    description: "You start with nothing and figure it out. You're resourceful and move fast. Perfect for service-based or content businesses.",
    descriptionRw: "Utangira nta cyo. Ukora byose. Ni byiza ku mafaranga make.",
    strengths: ["Resourceful", "Low capital needs", "Fast iteration"],
    strengthsRw: ["Gukoresha", "Amafaranga make", "Kunyaruka"],
    challenges: ["Limited by time/skill", "Harder to scale", "Risk of staying small"],
    challengesRw: ["Gihe", "Kugabanuka", "Kuba munini"],
    bestSectors: ["creative-economy", "tourism-tech", "fintech"],
    icon: "Rocket"
  },
  {
    id: "creative-maker",
    name: "The Creative Maker",
    nameRw: "Umuremyi",
    description: "You create things people love. Design, content, experiences — that's your zone. Build a business around your craft.",
    descriptionRw: "Ukora ibintu abantu bakunda. Gushushanya, ibikubiye.",
    strengths: ["Design & aesthetics", "Content creation", "Brand building"],
    strengthsRw: ["Gushushanya", "Gukora ibikubiye", "Kubaka brand"],
    challenges: ["May neglect business side", "Need business partner", "Pricing challenges"],
    challengesRw: ["Ubucuruzi", "Ukeneye ubufatanye", "Igiciro"],
    bestSectors: ["creative-economy", "tourism-tech", "edtech"],
    icon: "Palette"
  },
  {
    id: "impact-seeker",
    name: "The Impact Seeker",
    nameRw: "Ushaka Ingaruka",
    description: "You want to change Rwanda for the better. Mission-driven, patient, and willing to tackle hard problems. Grants and impact investors are your friends.",
    descriptionRw: "Urashaka guhindura u Rwanda. Intego nziza, impungenge.",
    strengths: ["Mission-driven", "Resilient", "Attracts support"],
    strengthsRw: ["Intego nziza", "Kurwana", "Gufashwa"],
    challenges: ["Slower returns", "Complex problems", "Need patient capital"],
    challengesRw: ["Kugaruka buhoro", "Ibibazo bikomeye", "Amafaranga"],
    bestSectors: ["climate-tech", "healthtech", "edtech", "agritech"],
    icon: "Heart"
  }
];

export const sectorMatches: Record<string, Record<string, { why: string; whyRw: string; score: number }>> = {
  fintech: {
    "technical-builder": { why: "High technical complexity creates moats", whyRw: "Ubuhanga buremereye", score: 95 },
    "the-hustler": { why: "Trust is everything in finance", whyRw: "Kwizerwa", score: 90 },
    "scrappy-starter": { why: "Start with specific niche, expand later", whyRw: "Tangira hanze", score: 70 }
  },
  agritech: {
    "domain-expert": { why: "Farmers trust insiders who understand them", whyRw: "Abahinzi bizerwa", score: 95 },
    "technical-builder": { why: "IoT, data, and mobile apps are core", whyRw: "Porogaramu", score: 85 },
    "impact-seeker": { why: "Direct impact on 70% of population", whyRw: "Ingaruka", score: 90 }
  },
  edtech: {
    "creative-maker": { why: "Engagement and design matter in education", whyRw: "Gushushanya", score: 85 },
    "technical-builder": { why: "Platform and content delivery tech", whyRw: "Porogaramu", score: 80 },
    "impact-seeker": { why: "NST2's 1 million coders target", whyRw: "1M abaprogrameri", score: 95 }
  },
  healthtech: {
    "domain-expert": { why: "Regulatory and clinical knowledge needed", whyRw: "Amategeko", score: 90 },
    "technical-builder": { why: "Secure, reliable systems are critical", whyRw: "Umutekano", score: 85 },
    "impact-seeker": { why: "Directly saves lives", whyRw: "Gukiza", score: 95 }
  },
  ecommerce: {
    "the-hustler": { why: "Supply chain hustle and seller acquisition", whyRw: "Kugurisha", score: 95 },
    "scrappy-starter": { why: "Start small, dropship, validate fast", whyRw: "Tangira vuba", score: 85 }
  },
  "creative-economy": {
    "creative-maker": { why: "This IS your domain", whyRw: "Aha ni ahawe", score: 100 },
    "scrappy-starter": { why: "Start with skills you have", whyRw: "Tangira ubufite", score: 80 }
  },
  "tourism-tech": {
    "the-hustler": { why: "Network and relationships with providers", whyRw: "Amahoro", score: 85 },
    "creative-maker": { why: "Experiences and aesthetics sell trips", whyRw: "Ibihugu", score: 90 }
  },
  "climate-tech": {
    "impact-seeker": { why: "Mission alignment with 38% emissions target", whyRw: "Ikirere", score: 95 },
    "domain-expert": { why: "Technical and regulatory complexity", whyRw: "Bikomeye", score: 85 }
  },
  manufacturing: {
    "domain-expert": { why: "Industry knowledge is everything", whyRw: "Ubumenyi", score: 95 },
    "technical-builder": { why: "Automation and IoT integration", whyRw: "Porogaramu", score: 75 }
  },
  "construction-tech": {
    "domain-expert": { why: "Industry relationships and regulations", whyRw: "Amategeko", score: 90 },
    "technical-builder": { why: "PropTech and project management tools", whyRw: "Porogaramu", score: 80 }
  }
};
