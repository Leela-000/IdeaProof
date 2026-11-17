// ── Sample / mock data for the UI prototype ──
// ⚠️  SAMPLE CONTENT ONLY – clearly labelled for demonstration purposes.
// When the Python FastAPI backend + Tavily Web Search Agent is connected,
// replace these with real API responses. No API keys belong in this file.

// ── Idea extraction output (simulates LLM understanding stage) ──
export const SAMPLE_EXTRACTION = {
  name:     'AI Learning Path',
  industry: 'Education & Learning',
  problem:
    'College students struggle to find structured, personalised study plans that adapt to their learning pace and goals. Most online courses are one-size-fits-all.',
  solution:
    'An AI-powered platform that creates custom learning paths, recommends curated resources, and tracks progress for each student — adapting as they learn.',
  audience:
    'College and university students aged 18–26, particularly those studying STEM or preparing for professional certifications.',
  summary:
    'AI Learning Path is a personalised education platform that uses AI to generate adaptive study plans for college students. By understanding a student\'s goals, current skill level, and schedule, it curates the most relevant courses, videos, and practice exercises — helping learners progress more efficiently and confidently.',
}

// ── Market research results (simulates Tavily Web Search Agent output) ──
export const SAMPLE_RESULTS = {

  // ── A. Research overview metadata ──
  researchMeta: {
    searchQuery:      'AI personalised learning platform college students EdTech 2024',
    retrievedAt:      '17 Nov 2026, 14:00 IST',
    resultsReturned:  12,
    status:           'complete',
    agentUsed:        'Tavily Web Search Agent (simulated)',
    note:             'This is sample data for the Milestone 1 UI prototype. No real web search has been performed.',
  },

  // ── B. Market-related search insights ──
  marketInsights: [
    {
      id:        'mi1',
      category:  'Industry Development',
      icon:      '📈',
      title:     'Personalised EdTech Is Attracting Growing Investor Interest',
      snippet:
        'Reports from EdTech analysts highlight a rising number of funding rounds for AI-driven adaptive learning startups. Investors cite personalisation and measurable learning outcomes as the primary drivers of interest in 2023–2024.',
      source:     'EdTech Magazine',
      sourceUrl:  'https://edtechmagazine.com',
      date:       'Oct 2024',
      type:       'search-finding',
    },
    {
      id:        'mi2',
      category:  'Customer Discussion',
      icon:      '💬',
      title:     'Students Report Frustration with One-Size-Fits-All Courses',
      snippet:
        'Forum threads and student surveys from Reddit and academic forums suggest that learners frequently abandon online courses due to irrelevant pacing, lack of direction, and no feedback on progress. This points to an unmet need for structured, goal-oriented guidance.',
      source:     'Reddit r/learnprogramming (aggregated)',
      sourceUrl:  'https://www.reddit.com/r/learnprogramming',
      date:       'Nov 2024',
      type:       'search-finding',
    },
    {
      id:        'mi3',
      category:  'Emerging Technology',
      icon:      '🤖',
      title:     'Large Language Models Are Being Integrated into Curriculum Tools',
      snippet:
        'Early-stage EdTech startups are using LLMs to auto-generate quizzes, suggest learning resources, and explain concepts in multiple ways. The barrier to building AI-enhanced learning tools has lowered significantly with available APIs.',
      source:     'TechCrunch',
      sourceUrl:  'https://techcrunch.com',
      date:       'Sep 2024',
      type:       'search-finding',
    },
    {
      id:        'mi4',
      category:  'Market Development',
      icon:      '🌐',
      title:     'Online Learning Adoption Remains Elevated After 2020',
      snippet:
        'Post-pandemic data shows that students continue to supplement in-person education with digital tools. Platforms offering structured progress tracking report higher completion and satisfaction rates than unguided course libraries.',
      source:     'Harvard Business Review',
      sourceUrl:  'https://hbr.org',
      date:       'Aug 2024',
      type:       'search-finding',
    },
  ],

  // ── C. Search results / existing solutions ──
  existingSolutions: [
    {
      id:          'es1',
      company:     'Coursera',
      title:       'Coursera – Online Degrees and Professional Certificates',
      description:
        'Coursera offers university-level courses and degree programmes online. It provides structured learning paths, but personalisation is limited and plans can feel rigid for self-directed learners.',
      source:      'coursera.org',
      sourceUrl:   'https://www.coursera.org',
      date:        null,
      whyMatters:  'Shows that structured, university-partnered online learning has strong demand — but deep personalisation is still largely absent.',
    },
    {
      id:          'es2',
      company:     'Khan Academy',
      title:       'Khan Academy – Mastery-Based Adaptive Learning',
      description:
        'Khan Academy uses mastery-based learning and adapts question difficulty based on performance. It is well-established in K-12 but has limited coverage for higher education and professional topics.',
      source:      'khanacademy.org',
      sourceUrl:   'https://www.khanacademy.org',
      date:        null,
      whyMatters:  'Demonstrates that adaptive learning mechanics work for engagement — the gap is in serving college-level and professional learners.',
    },
    {
      id:          'es3',
      company:     'Duolingo',
      title:       'Duolingo – Gamified AI-Driven Language Learning',
      description:
        'Duolingo is a highly successful example of adaptive, gamified learning. While focused on languages, its AI-driven progress tracking and habit-building mechanics are widely studied as a model for engagement.',
      source:      'duolingo.com',
      sourceUrl:   'https://www.duolingo.com',
      date:        null,
      whyMatters:  'Proves that AI-paced, habit-forming learning loops work at consumer scale — a model worth studying for any learning platform.',
    },
    {
      id:          'es4',
      company:     'Notion AI',
      title:       'Notion AI – AI-Assisted Knowledge Management',
      description:
        'Notion AI adds AI-writing and summarisation features to the popular note-taking tool. Many students use it to organise study notes and generate summaries, though it is not primarily an educational platform.',
      source:      'notion.so',
      sourceUrl:   'https://www.notion.so',
      date:        null,
      whyMatters:  'Signals that students already use general-purpose AI tools for learning — an opportunity to offer something purpose-built for structured study.',
    },
  ],

  // ── D. Research signal themes (qualitative — no fake numbers) ──
  researchSignals: [
    {
      icon:     '🎯',
      label:    'Personalisation',
      colour:   '#0F766E',
      bgColour: '#CCFBF1',
      desc:     'AI-driven adaptive experiences are becoming the expectation. Multiple sources reference personalisation as the key differentiator in EdTech.',
      strength: 'Strong signal',
    },
    {
      icon:     '📱',
      label:    'Mobile-first Learning',
      colour:   '#D97706',
      bgColour: '#FEF3C7',
      desc:     'Students increasingly learn on mobile devices, favouring bite-sized, on-demand content accessible during commutes and breaks.',
      strength: 'Moderate signal',
    },
    {
      icon:     '🤝',
      label:    'Community & Cohorts',
      colour:   '#7C3AED',
      bgColour: '#EDE9FE',
      desc:     'Social learning features and cohort-based programmes are associated with higher completion rates in search results reviewed.',
      strength: 'Moderate signal',
    },
    {
      icon:     '🏆',
      label:    'Credentials & Outcomes',
      colour:   '#0369A1',
      bgColour: '#E0F2FE',
      desc:     'Learners prioritise platforms that lead to tangible outcomes. Micro-credentials and employer partnerships appear frequently in positive reviews.',
      strength: 'Strong signal',
    },
  ],

  // ── E. Research quality / transparency ──
  researchQuality: {
    sources:        'Sample web search results simulating Tavily Web Search Agent output',
    retrievedAt:    '17 Nov 2026, 14:00 IST',
    contentType:    'Mixed: direct search findings and illustrative sample content',
    unverified:     'Market size figures, CAGR, and revenue data are NOT available in this prototype. Verified market data will appear in a later milestone.',
    disclaimer:     'Always inspect original sources and conduct your own research before making business decisions. This tool is a research assistant, not a substitute for expert advice.',
  },

  // ── Summary / what results suggest ──
  researchSummary: {
    whatResultsSuggest:
      'The search results indicate a growing and competitive landscape for AI-powered education tools. There is clear demand for personalised learning, and several established players already operate in this space — but deep, goal-driven personalisation for college-level learners remains relatively unexplored.',
    existingSolutionsFound:
      'Key players include Coursera (structured courses), Khan Academy (adaptive practice), and Duolingo (gamified learning). These platforms are well-funded and widely adopted but tend to serve broad audiences rather than tailoring experiences to an individual\'s specific goals and schedule.',
    areasToExplore: [
      "How well do existing platforms truly personalise learning for each student's unique goals and schedule?",
      'Is there a specific gap in serving college-level and professional learners — not just K-12?',
      'Could integrating with university LMS platforms (Moodle, Canvas) be a meaningful differentiator?',
      'What barriers do students face with current tools — cost, relevance, motivation, or lack of direction?',
    ],
  },

  // ── Questions to explore next (research prompts, not AI recommendations) ──
  questionsToExplore: [
    { q: 'Who experiences this problem most?',         hint: 'Age group, study type, subject area, year of study.' },
    { q: 'What are existing solutions actually doing?', hint: 'Sign up for free trials and experience them firsthand.' },
    { q: 'What information is still missing?',         hint: 'What could you only learn by talking to real users?' },
    { q: 'What makes this idea genuinely different?',  hint: 'One sentence: why would someone choose this over Coursera?' },
  ],

  // ── Future milestone roadmap ──
  futureMilestones: [
    { milestone: 2, feature: 'Market Opportunity & Customer Segmentation',  desc: 'Understand the size of your target market and who your most likely first customers are.' },
    { milestone: 2, feature: 'Competitor Discovery & Comparison',           desc: 'Find and compare direct competitors with structured side-by-side analysis.' },
    { milestone: 3, feature: 'SWOT & Risk Analysis',                        desc: 'Identify your idea\'s strengths, weaknesses, opportunities, and key risks.' },
    { milestone: 3, feature: 'MVP Feature Recommendations',                 desc: 'Get a prioritised list of features to include in your first version.' },
    { milestone: 3, feature: 'Go-to-Market Strategy',                       desc: 'A plain-English guide to reaching your first users.' },
    { milestone: 4, feature: 'Complete Validation Report & Download',       desc: 'A downloadable summary of everything — ready to share with mentors or investors.' },
  ],
}
