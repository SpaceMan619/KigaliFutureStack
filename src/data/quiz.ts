import type { QuizQuestion, Archetype } from '@/types/quiz';

export const quizQuestions: QuizQuestion[] = [
  // Section 1: You (4 questions)
  {
    id: 1,
    question: "Where are you right now?",
    questionRw: "Uri hehe ubu?",
    section: 1,
    sectionName: "You",
    sectionNameRw: "Wowe",
    options: [
      { 
        id: "student", 
        label: "University student (undergraduate)", 
        labelRw: "Umuhanga wa kaminuza (undergraduate)",
        scores: { scrappy: 2, creative: 1 },
        tags: ["low-capital", "flexible-time", "campus-resources"]
      },
      { 
        id: "recent-grad", 
        label: "Recent graduate (< 2 years out)", 
        labelRw: "Urwaga kaminuza (< imyaka 2)",
        scores: { technical: 1, hustler: 2, expert: 1 },
        tags: ["medium-capital", "job-transition", "needs-income"]
      },
      { 
        id: "professional", 
        label: "Working professional", 
        labelRw: "Umukozi",
        scores: { expert: 3, technical: 2 },
        tags: ["higher-capital", "industry-experience", "part-time"]
      },
      { 
        id: "existing-founder", 
        label: "Already running something small", 
        labelRw: "Ufite ubucuruzi boroheje",
        scores: { hustler: 3, scrappy: 2 },
        tags: ["has-revenue", "proven", "growth-ready"]
      }
    ]
  },
  {
    id: 2,
    question: "What's your highest level of education?",
    questionRw: "Ni iyihe kipe y'amashuri yawe yisumbuye?",
    section: 1,
    sectionName: "You",
    sectionNameRw: "Wowe",
    options: [
      { 
        id: "high-school", 
        label: "High school / A-levels", 
        labelRw: "Amashuri yisumbuye",
        scores: { scrappy: 2, creative: 1 },
        tags: ["young", "needs-training"]
      },
      { 
        id: "tvet", 
        label: "Vocational / TVET", 
        labelRw: "Imyuga (TVET)",
        scores: { expert: 2, technical: 1 },
        tags: ["hands-on", "technical-skills"]
      },
      { 
        id: "undergrad", 
        label: "University undergraduate", 
        labelRw: "Kaminuza (undergraduate)",
        scores: { technical: 2, creative: 1 },
        tags: ["student", "campus-access"]
      },
      { 
        id: "graduate", 
        label: "University graduate / Masters", 
        labelRw: "Kaminuza (graduate/Masters)",
        scores: { expert: 3, technical: 2 },
        tags: ["educated", "network"]
      }
    ]
  },
  {
    id: 3,
    question: "Where in Rwanda are you based?",
    questionRw: "Uri mu kihe gice cya Rwanda?",
    section: 1,
    sectionName: "You",
    sectionNameRw: "Wowe",
    options: [
      { 
        id: "kigali-center", 
        label: "Kigali (City center)", 
        labelRw: "Kigali (downtown)",
        scores: { hustler: 2, creative: 1 },
        tags: ["kigali", "high-rent", "network-access"]
      },
      { 
        id: "kigali-outskirts", 
        label: "Kigali outskirts", 
        labelRw: "Kigali (imbuga)",
        scores: { scrappy: 2, technical: 1 },
        tags: ["kigali", "lower-rent", "growing"]
      },
      { 
        id: "secondary-city", 
        label: "Secondary city (Musanze, Rubavu, etc.)", 
        labelRw: "Imijyi yindi",
        scores: { expert: 2, impact: 1 },
        tags: ["secondary-city", "lower-cost", "niche-markets"]
      },
      { 
        id: "rural", 
        label: "Rural area", 
        labelRw: "Icyaro",
        scores: { expert: 3, impact: 2 },
        tags: ["rural", "agriculture", "community"]
      }
    ]
  },
  {
    id: 4,
    question: "What do you bring to the table? (Pick your strongest)",
    questionRw: "Ni iki wazanira ku meza? (Hitamo irikomeye)",
    section: 1,
    sectionName: "You",
    sectionNameRw: "Wowe",
    options: [
      { 
        id: "tech", 
        label: "I can code / build tech products", 
        labelRw: "Nshobora gushyira porogaramu / kubaka ibikoresho",
        scores: { technical: 4 },
        tags: ["tech-skills", "builder", "scalable"]
      },
      { 
        id: "sales", 
        label: "I can sell / convince people", 
        labelRw: "Nshobora kugurisha / guhitamo abantu",
        scores: { hustler: 4 },
        tags: ["sales-skills", "growth", "revenue"]
      },
      { 
        id: "domain", 
        label: "I know a specific industry deeply", 
        labelRw: "Nzi ubucuruzi runaka neza",
        scores: { expert: 4 },
        tags: ["domain-knowledge", "insider", "problem-aware"]
      },
      { 
        id: "design", 
        label: "I can design / create content", 
        labelRw: "Nshobora gushushanya / gukora ibikubiye",
        scores: { creative: 3, technical: 1 },
        tags: ["design-skills", "content", "brand"]
      },
      { 
        id: "operations", 
        label: "I can raise money / manage operations", 
        labelRw: "Nshobora gutera amafaranga / gucunga",
        scores: { hustler: 2, expert: 2 },
        tags: ["ops-skills", "funding", "execution"]
      }
    ]
  },

  // Section 2: Resources (4 questions)
  {
    id: 5,
    question: "How much can you personally invest to start?",
    questionRw: "Ni angahe amafaranga washobora gushora?",
    section: 2,
    sectionName: "Resources",
    sectionNameRw: "Ibyawe",
    options: [
      { 
        id: "under-100", 
        label: "Under $100 (basically ramen money)", 
        labelRw: "Hasi ya $100",
        scores: { scrappy: 4, creative: 2 },
        tags: ["micro-capital", "service-based", "side-hustle"]
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
    id: 6,
    question: "How stable does your income need to be?",
    questionRw: "Amafaranga yawe agomba kuba yizewe gute?",
    section: 2,
    sectionName: "Resources",
    sectionNameRw: "Ibyawe",
    options: [
      { 
        id: "3-months", 
        label: "I need something paying within 3 months", 
        labelRw: "Nkeneye amafaranga mu mezi 3",
        scores: { scrappy: 3, hustler: 2 },
        tags: ["immediate-revenue", "services", "urgent"]
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
    id: 7,
    question: "Do you have access to people who can help?",
    questionRw: "Ufite abantu bafasha?",
    section: 2,
    sectionName: "Resources",
    sectionNameRw: "Ibyawe",
    options: [
      { 
        id: "family-business", 
        label: "Family with business experience", 
        labelRw: "Umuryango ufite uburambe bw'ubucuruzi",
        scores: { hustler: 2, expert: 1 },
        tags: ["family-support", "mentorship"]
      },
      { 
        id: "alumni-network", 
        label: "University alumni network", 
        labelRw: "Abanyeshuri ba kaminuza basanzwe",
        scores: { technical: 2, creative: 1 },
        tags: ["campus-network", "peer-support"]
      },
      { 
        id: "work-contacts", 
        label: "Professional contacts from work", 
        labelRw: "Abakozi baziwe",
        scores: { expert: 3, hustler: 2 },
        tags: ["industry-network", "customers"]
      },
      { 
        id: "scratch", 
        label: "Mostly starting from scratch", 
        labelRw: "Ntafite benshi",
        scores: { scrappy: 3, creative: 1 },
        tags: ["solo", "self-reliant", "needs-community"]
      }
    ]
  },
  {
    id: 8,
    question: "How much time can you dedicate per week?",
    questionRw: "Ni amasaha angahe ushobora gukora mu cyumweru?",
    section: 2,
    sectionName: "Resources",
    sectionNameRw: "Ibyawe",
    options: [
      { 
        id: "full-time", 
        label: "Full-time (40+ hours)", 
        labelRw: "Igihe cyose (amasaha 40+)",
        scores: { technical: 3, hustler: 2 },
        tags: ["dedicated", "fast-build"]
      },
      { 
        id: "part-time", 
        label: "Part-time (20-40 hours)", 
        labelRw: "Igihe gito (amasaha 20-40)",
        scores: { technical: 2, creative: 1 },
        tags: ["balanced", "sustainable"]
      },
      { 
        id: "side-project", 
        label: "Side project (10-20 hours)", 
        labelRw: "Ikindi gikorwa (amasaha 10-20)",
        scores: { creative: 2, scrappy: 1 },
        tags: ["side-hustle", "slow-build"]
      },
      { 
        id: "spare-moments", 
        label: "Spare moments (< 10 hours)", 
        labelRw: "Igihe gito (hasi ya 10)",
        scores: { scrappy: 2 },
        tags: ["limited", "micro-project"]
      }
    ]
  },

  // Section 3: Psychology (4 questions)
  {
    id: 9,
    question: "How do you feel about risk?",
    questionRw: "Urameze ute ku byo kwishyira mu kaga?",
    section: 3,
    sectionName: "Psychology",
    sectionNameRw: "Ubwenge",
    options: [
      { 
        id: "avoid-risk", 
        label: "I avoid risk whenever possible", 
        labelRw: "Nkirinda kaga",
        scores: { expert: 2, scrappy: 1 },
        tags: ["risk-averse", "cautious"]
      },
      { 
        id: "calculated", 
        label: "I take calculated risks", 
        labelRw: "Nfata ibyo nigeze gusuzuma",
        scores: { technical: 3, expert: 2 },
        tags: ["analytical", "strategic"]
      },
      { 
        id: "comfortable", 
        label: "I'm comfortable with uncertainty", 
        labelRw: "Nishimira kutazi",
        scores: { hustler: 3, creative: 2 },
        tags: ["adaptable", "entrepreneurial"]
      },
      { 
        id: "thrive-chaos", 
        label: "I thrive in chaos", 
        labelRw: "Ndatsinza mu makuba",
        scores: { hustler: 4, creative: 2 },
        tags: ["high-risk", "pivot-friendly"]
      }
    ]
  },
  {
    id: 10,
    question: "What happens when you fail?",
    questionRw: "Ni iki kibaho igihe utatsinze?",
    section: 3,
    sectionName: "Psychology",
    sectionNameRw: "Ubwenge",
    options: [
      { 
        id: "analyze-retry", 
        label: "I analyze what went wrong and try again", 
        labelRw: "Nsuzuma nkongera",
        scores: { technical: 3, expert: 2 },
        tags: ["resilient", "learner"]
      },
      { 
        id: "break-reassess", 
        label: "I take a break, then reassess", 
        labelRw: "Ndahumeka nkongera",
        scores: { creative: 2, expert: 1 },
        tags: ["reflective", "adaptive"]
      },
      { 
        id: "move-on", 
        label: "I usually move on to something else", 
        labelRw: "Ngenda ahandi",
        scores: { creative: 3, hustler: 2 },
        tags: ["pivoter", "opportunistic"]
      },
      { 
        id: "confidence-hit", 
        label: "Failure really affects my confidence", 
        labelRw: "Kutatsinda kunyica imbaraga",
        scores: { expert: 1 },
        tags: ["needs-support", "early-validation"]
      }
    ]
  },
  {
    id: 11,
    question: "What's driving you? (Be honest)",
    questionRw: "Ni iki kukurikirana? (Mwitondere)",
    section: 3,
    sectionName: "Psychology",
    sectionNameRw: "Ubwenge",
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
        scores: { expert: 3, creative: 1, impact: 3 },
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
    id: 12,
    question: "How do you feel about competition?",
    questionRw: "Urameze ute ku marushanwa?",
    section: 3,
    sectionName: "Psychology",
    sectionNameRw: "Ubwenge",
    options: [
      { 
        id: "few-competitors", 
        label: "I prefer markets with few competitors", 
        labelRw: "Nshaka isoko ridafite abagurisha benshi",
        scores: { expert: 2, scrappy: 1 },
        tags: ["niche", "blue-ocean"]
      },
      { 
        id: "demand-signal", 
        label: "Competition means there's demand", 
        labelRw: "Marushanwa bisobanura ko hari abagura",
        scores: { hustler: 3, technical: 1 },
        tags: ["market-validator", "fast-follower"]
      },
      { 
        id: "crush", 
        label: "I want to crush my competitors", 
        labelRw: "Ndashaka gutsinda abandi",
        scores: { hustler: 4, technical: 2 },
        tags: ["competitive", "aggressive"]
      },
      { 
        id: "collaborate", 
        label: "I'm happy to collaborate with competitors", 
        labelRw: "Nshimira gukorana n'abandi",
        scores: { expert: 2, impact: 2 },
        tags: ["ecosystem-builder", "cooperative"]
      }
    ]
  },

  // Section 4: Market Fit (4 questions)
  {
    id: 13,
    question: "Which areas do you actually care about?",
    questionRw: "Ni ipi sekta wishimiye?",
    section: 4,
    sectionName: "Market Fit",
    sectionNameRw: "Isoko",
    options: [
      { 
        id: "agriculture", 
        label: "Agriculture / helping farmers", 
        labelRw: "Ubuhinzi / gufasha abahinzi",
        scores: { expert: 2, impact: 1 },
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
        scores: { expert: 1, impact: 2 },
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
  },
  {
    id: 14,
    question: "Do you have a specific problem you want to solve?",
    questionRw: "Ufite ikibazo cyihariye ushaka gukora?",
    section: 4,
    sectionName: "Market Fit",
    sectionNameRw: "Isoko",
    options: [
      { 
        id: "personal-experience", 
        label: "Yes, I've experienced it personally", 
        labelRw: "Yego, nigeze kubona",
        scores: { expert: 3, creative: 1 },
        tags: ["problem-found", "authentic"]
      },
      { 
        id: "community-observed", 
        label: "Yes, I've observed it in my community", 
        labelRw: "Yego, nigeze kubona mu muryango",
        scores: { expert: 2, impact: 2 },
        tags: ["community-insight", "local-knowledge"]
      },
      { 
        id: "need-validation", 
        label: "I have some ideas but need validation", 
        labelRw: "Nfite ibitekerezo ariko ngomba gusuzuma",
        scores: { technical: 2, hustler: 1 },
        tags: ["idea-stage", "needs-research"]
      },
      { 
        id: "looking", 
        label: "No, I'm looking for problems to solve", 
        labelRw: "Oya, nshaka ibibazo",
        scores: { hustler: 2, scrappy: 2 },
        tags: ["opportunity-seeker", "flexible"]
      }
    ]
  },
  {
    id: 15,
    question: "How easy is it for you to reach potential customers?",
    questionRw: "Kugerana abakiriya bihora bite?",
    section: 4,
    sectionName: "Market Fit",
    sectionNameRw: "Isoko",
    options: [
      { 
        id: "know-first-10", 
        label: "I already know my first 10 customers", 
        labelRw: "Nzi ba mbere bantu 10",
        scores: { hustler: 3, expert: 2 },
        tags: ["ready-to-sell", "validated"]
      },
      { 
        id: "have-channels", 
        label: "I have channels to reach them (social media, community, etc.)", 
        labelRw: "Nfite uburyo (imbugankoranyambaga, etc.)",
        scores: { hustler: 2, creative: 2 },
        tags: ["reach", "marketing-ready"]
      },
      { 
        id: "need-marketing", 
        label: "I'll need to figure out marketing", 
        labelRw: "Nzamenya uburyo bwo kugera ku bo",
        scores: { technical: 1, scrappy: 1 },
        tags: ["needs-growth", "experiment"]
      },
      { 
        id: "marketing-challenge", 
        label: "Marketing feels like my biggest challenge", 
        labelRw: "Kugera ku bo ni ikibazo cyikomeye",
        scores: { technical: 1 },
        tags: ["needs-hustler", "technical-only"]
      }
    ]
  },
  {
    id: 16,
    question: "Who is your target customer?",
    questionRw: "Ni nde uwo mushaka kugurisha?",
    section: 4,
    sectionName: "Market Fit",
    sectionNameRw: "Isoko",
    options: [
      { 
        id: "rwandans", 
        label: "Only Rwandans", 
        labelRw: "Abanyarwanda gusa",
        scores: { expert: 2, scrappy: 1 },
        tags: ["local", "kinyarwanda"]
      },
      { 
        id: "east-africa", 
        label: "East Africans", 
        labelRw: "Abanyafurika y'Iburasirazuba",
        scores: { hustler: 2, expert: 1 },
        tags: ["regional", "expansion"]
      },
      { 
        id: "africa", 
        label: "Africa-wide", 
        labelRw: "Afurika yose",
        scores: { hustler: 3, technical: 2 },
        tags: ["pan-african", "scalable"]
      },
      { 
        id: "global", 
        label: "Global / International", 
        labelRw: "Isi yose",
        scores: { technical: 3, creative: 2 },
        tags: ["global", "remote"]
      }
    ]
  },

  // Section 5: Execution (4 questions)
  {
    id: 17,
    question: "What have you built or started before?",
    questionRw: "Wubatse iki cyangwa watangiye mbere?",
    section: 5,
    sectionName: "Execution",
    sectionNameRw: "Gukora",
    options: [
      { 
        id: "nothing", 
        label: "Nothing yet — this would be my first", 
        labelRw: "Nta na kimwe — ibya mbere",
        scores: { scrappy: 2, creative: 1 },
        tags: ["first-timer", "needs-validation"]
      },
      { 
        id: "side-projects", 
        label: "Side projects / experiments", 
        labelRw: "Ibindi gikorwa / ibigeragezo",
        scores: { creative: 2, technical: 1 },
        tags: ["tinkerer", "learner"]
      },
      { 
        id: "small-business", 
        label: "Small business or freelance work", 
        labelRw: "Ubucuruzi boroheje cyangwa akazi kanjye",
        scores: { scrappy: 3, hustler: 2 },
        tags: ["experienced", "revenue"]
      },
      { 
        id: "startup-before", 
        label: "I've tried a startup before", 
        labelRw: "Nigeze kugerageza",
        scores: { hustler: 3, technical: 2 },
        tags: ["seasoned", "learned"]
      }
    ]
  },
  {
    id: 18,
    question: "Do you have a co-founder or team?",
    questionRw: "Ufite uwo mufatanya?",
    section: 5,
    sectionName: "Execution",
    sectionNameRw: "Gukora",
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
        label: "I'm actively looking for a co-founder", 
        labelRw: "Nshaka uwifatanya",
        scores: { technical: 1, hustler: 1 },
        tags: ["seeking-team", "networking"]
      }
    ]
  },
  {
    id: 19,
    question: "How do you learn best?",
    questionRw: "Ubigana gute byoroshye?",
    section: 5,
    sectionName: "Execution",
    sectionNameRw: "Gukora",
    options: [
      { 
        id: "reading", 
        label: "Reading books / articles", 
        labelRw: "Gusoma ibitabo / inyandiko",
        scores: { technical: 2, expert: 2 },
        tags: ["researcher", "self-directed"]
      },
      { 
        id: "videos", 
        label: "Watching videos / tutorials", 
        labelRw: "Kubona amashusho / inyigisho",
        scores: { creative: 2, technical: 1 },
        tags: ["visual-learner", "youtube"]
      },
      { 
        id: "doing", 
        label: "Doing it myself / trial and error", 
        labelRw: "Gukora / gugerageza",
        scores: { scrappy: 3, hustler: 2 },
        tags: ["hands-on", "builder"]
      },
      { 
        id: "mentors", 
        label: "Learning from mentors / peers", 
        labelRw: "Kwigira ku banyamwigire",
        scores: { expert: 2, hustler: 1 },
        tags: ["community-learner", "networked"]
      }
    ]
  },
  {
    id: 20,
    question: "How serious are you about starting something?",
    questionRw: "Ufite impungenge ki zo gutangira ikintu?",
    section: 5,
    sectionName: "Execution",
    sectionNameRw: "Gukora",
    options: [
      { 
        id: "exploring", 
        label: "Just exploring ideas right now", 
        labelRw: "Ndashaka gusa ubu",
        scores: { creative: 2 },
        tags: ["curious", "low-commitment"]
      },
      { 
        id: "3-months", 
        label: "I want to start within 3 months", 
        labelRw: "Ndashaka gutangira mu mezi 3",
        scores: { scrappy: 2, hustler: 1 },
        tags: ["planning", "short-timeline"]
      },
      { 
        id: "immediately", 
        label: "I'm ready to start immediately", 
        labelRw: "Nditeguye gutangira nonaha",
        scores: { hustler: 3, technical: 2, scrappy: 2 },
        tags: ["ready", "action"]
      },
      { 
        id: "started", 
        label: "I've already started — just need direction", 
        labelRw: "Ndatangiye — nkeneye inzira",
        scores: { hustler: 2, expert: 2 },
        tags: ["in-progress", "needs-strategy"]
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
