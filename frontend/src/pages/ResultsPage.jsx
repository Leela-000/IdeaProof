import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  CheckCircle, ExternalLink, TrendingUp, Search,
  FileText, Compass, ArrowRight, AlertTriangle,
  BookOpen, Globe, ChevronRight, Lightbulb,
  Info, Clock, Shield, BarChart2, HelpCircle,
  MessageSquare, Lock, Layers,
} from 'lucide-react'
import { useIdea } from '../data/IdeaContext'
import { SAMPLE_RESULTS } from '../data/sampleData'

/* ══════════════════════════════════════════════════════════
   NAV CONFIG
══════════════════════════════════════════════════════════ */
const NAV_ITEMS = [
  { id: 'overview',   label: 'Research Overview',    icon: Lightbulb },
  { id: 'insights',   label: 'Market Insights',      icon: TrendingUp },
  { id: 'solutions',  label: 'Search Results',       icon: Search },
  { id: 'signals',    label: 'Research Signals',     icon: BarChart2 },
  { id: 'meaning',    label: 'What This Means',      icon: MessageSquare },
  { id: 'questions',  label: 'Questions to Explore', icon: HelpCircle },
  { id: 'roadmap',    label: 'What\'s Coming Next',  icon: Layers },
  { id: 'quality',    label: 'About This Research',  icon: Shield },
]

function scrollTo(id) {
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

/* ══════════════════════════════════════════════════════════
   SHARED COMPONENTS
══════════════════════════════════════════════════════════ */
function SectionHeading({ icon: Icon, title, subtitle, id, badge }) {
  return (
    <div id={id} style={{ marginBottom: 20, scrollMarginTop: 88 }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 6 }}>
        <div style={{
          width: 36, height: 36, background: 'var(--color-teal-pale)',
          borderRadius: 10, display: 'flex', alignItems: 'center', justifyContent: 'center',
          flexShrink: 0,
        }}>
          <Icon size={18} color="var(--color-teal)" />
        </div>
        <h2 style={{ fontSize: '1.25rem', marginBottom: 0 }}>{title}</h2>
        {badge && <span className="badge badge--sample" style={{ marginLeft: 4 }}>{badge}</span>}
      </div>
      {subtitle && (
        <p style={{ fontSize: '0.875rem', color: 'var(--color-muted)', paddingLeft: 46, margin: 0 }}>
          {subtitle}
        </p>
      )}
    </div>
  )
}

/* ══════════════════════════════════════════════════════════
   A. RESEARCH OVERVIEW
══════════════════════════════════════════════════════════ */
function ResearchOverview({ idea }) {
  const meta = SAMPLE_RESULTS.researchMeta
  const d    = SAMPLE_RESULTS.researchSummary
  const displayName     = idea.name     || 'AI Learning Path'
  const displayIndustry = idea.industry || 'Education & Learning'
  const displayDesc     = idea.description || 'An AI-powered personalised learning platform for college students.'

  return (
    <section style={{ marginBottom: 40 }}>
      <SectionHeading
        icon={Lightbulb}
        title="Research Overview"
        id="overview"
        badge="📋 Sample content"
        subtitle="A snapshot of your submitted idea and the research that was run."
      />

      {/* Idea snapshot */}
      <div className="card" style={{ padding: '24px 28px', marginBottom: 16 }}>
        <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: 16, flexWrap: 'wrap', gap: 10 }}>
          <div>
            <h3 style={{ marginBottom: 6 }}>{displayName}</h3>
            <span className="badge badge--teal">{displayIndustry}</span>
          </div>
          <div style={{
            display: 'flex', alignItems: 'center', gap: 6,
            padding: '6px 14px', borderRadius: 'var(--radius-md)',
            background: 'var(--color-success-bg)', border: '1px solid #BBF7D0',
          }}>
            <CheckCircle size={14} color="var(--color-success)" />
            <span style={{ fontSize: '0.8125rem', fontWeight: 600, color: 'var(--color-success)' }}>
              Research complete
            </span>
          </div>
        </div>
        <p style={{ marginBottom: 16, fontSize: '0.9375rem' }}>{displayDesc}</p>

        {/* Research stats row */}
        <div style={{
          display: 'flex', gap: 24, flexWrap: 'wrap',
          padding: '14px 16px', background: 'var(--color-surface-alt)',
          borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border)',
        }}>
          <div className="overview-stat">
            <span className="overview-stat__value">{meta.resultsReturned}</span>
            <span className="overview-stat__label">Search results found</span>
          </div>
          <div style={{ width: 1, background: 'var(--color-border)' }} />
          <div className="overview-stat">
            <span className="overview-stat__value">{SAMPLE_RESULTS.marketInsights.length}</span>
            <span className="overview-stat__label">Market insights</span>
          </div>
          <div style={{ width: 1, background: 'var(--color-border)' }} />
          <div className="overview-stat">
            <span className="overview-stat__value">{SAMPLE_RESULTS.existingSolutions.length}</span>
            <span className="overview-stat__label">Existing solutions found</span>
          </div>
          <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: 6 }}>
            <Clock size={13} color="var(--color-muted)" />
            <span style={{ fontSize: '0.8rem', color: 'var(--color-muted)' }}>{meta.retrievedAt}</span>
          </div>
        </div>
      </div>

      {/* One-line research agent note */}
      <div style={{
        padding: '10px 16px', borderRadius: 'var(--radius-md)',
        background: 'var(--color-info-bg)', border: '1px solid #BAE6FD',
        fontSize: '0.8125rem', color: 'var(--color-info)',
        display: 'flex', gap: 8, alignItems: 'flex-start',
      }}>
        <Info size={14} style={{ flexShrink: 0, marginTop: 1 }} />
        <span>
          <strong>Research agent used:</strong> {meta.agentUsed}. {meta.note}
        </span>
      </div>
    </section>
  )
}

/* ══════════════════════════════════════════════════════════
   B. MARKET INSIGHTS
══════════════════════════════════════════════════════════ */
const CATEGORY_COLOURS = {
  'Industry Development': { bg: '#CCFBF1', text: '#0F766E' },
  'Customer Discussion':  { bg: '#EDE9FE', text: '#7C3AED' },
  'Emerging Technology':  { bg: '#FEF3C7', text: '#D97706' },
  'Market Development':   { bg: '#E0F2FE', text: '#0369A1' },
}

function InsightCard({ item }) {
  const cols = CATEGORY_COLOURS[item.category] || { bg: 'var(--color-teal-pale)', text: 'var(--color-teal)' }
  return (
    <div className="insight-card">
      <div className="insight-card__top">
        <div className="insight-card__icon" style={{ background: cols.bg, fontSize: '1.2rem' }}>
          {item.icon}
        </div>
        <div style={{ flex: 1 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'wrap' }}>
            <span
              className="badge"
              style={{ background: cols.bg, color: cols.text, border: `1px solid ${cols.bg}` }}
            >
              {item.category}
            </span>
            <span className="badge badge--sample" style={{ fontSize: '0.7rem' }}>
              Sourced finding
            </span>
          </div>
        </div>
      </div>
      <div className="insight-card__title">{item.title}</div>
      <p className="insight-card__snippet">{item.snippet}</p>
      <div className="insight-card__footer">
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap' }}>
          <span style={{ display: 'flex', alignItems: 'center', gap: 5, fontSize: '0.8rem', color: 'var(--color-muted)' }}>
            <Globe size={12} /> {item.source}
          </span>
          {item.date && (
            <span style={{ display: 'flex', alignItems: 'center', gap: 5, fontSize: '0.8rem', color: 'var(--color-muted)' }}>
              <Clock size={12} /> {item.date}
            </span>
          )}
        </div>
        <a
          href={item.sourceUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn--outline btn--sm"
          style={{ gap: 5 }}
        >
          View Source <ExternalLink size={11} />
        </a>
      </div>
    </div>
  )
}

function MarketInsights() {
  return (
    <section style={{ marginBottom: 40 }}>
      <SectionHeading
        icon={TrendingUp}
        title="Market-Related Search Insights"
        id="insights"
        badge="📋 Sample content"
        subtitle="Information discovered through web search relevant to your idea. Each card links to its source."
      />
      <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
        {SAMPLE_RESULTS.marketInsights.map(item => (
          <InsightCard key={item.id} item={item} />
        ))}
      </div>
    </section>
  )
}

/* ══════════════════════════════════════════════════════════
   C. SEARCH RESULTS / EXISTING SOLUTIONS
══════════════════════════════════════════════════════════ */
function SearchResultCard({ sol }) {
  return (
    <div className="search-result-card">
      <div className="search-result-card__header">
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <div className="search-result-card__logo">
            {sol.company[0]}
          </div>
          <div>
            <div style={{ fontWeight: 700, color: 'var(--color-navy)', fontSize: '0.95rem' }}>
              {sol.company}
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 5, fontSize: '0.78rem', color: 'var(--color-muted)' }}>
              <Globe size={11} /> {sol.source}
              {sol.date && <><span>·</span><Clock size={11} /> {sol.date}</>}
            </div>
          </div>
        </div>
        <span className="badge badge--sample" style={{ flexShrink: 0 }}>Sample</span>
      </div>

      <div className="search-result-card__title">{sol.title}</div>
      <p className="search-result-card__desc">{sol.description}</p>

      {/* Why this matters */}
      <div className="search-result-card__why">
        <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 4 }}>
          <Lightbulb size={12} color="var(--color-amber)" />
          <span style={{ fontWeight: 600, fontSize: '0.8rem', color: 'var(--color-navy)' }}>
            Why this matters for your idea
          </span>
        </div>
        <p style={{ margin: 0, fontSize: '0.8rem', color: 'var(--color-text-light)' }}>
          {sol.whyMatters}
        </p>
      </div>

      <div className="search-result-card__footer">
        <a
          href={sol.sourceUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn--outline btn--sm"
          style={{ gap: 5 }}
        >
          Visit Source <ExternalLink size={11} />
        </a>
      </div>
    </div>
  )
}

function SearchResults() {
  return (
    <section style={{ marginBottom: 40 }}>
      <SectionHeading
        icon={Search}
        title="Search Results — Existing Solutions"
        id="solutions"
        badge="📋 Sample content"
        subtitle="Companies and products already operating in this space. Click 'Visit Source' to inspect any result directly."
      />
      <div className="results-two-col">
        {SAMPLE_RESULTS.existingSolutions.map(sol => (
          <SearchResultCard key={sol.id} sol={sol} />
        ))}
      </div>
    </section>
  )
}

/* ══════════════════════════════════════════════════════════
   D. MARKET TREND VISUALISATION (qualitative signals only)
══════════════════════════════════════════════════════════ */
function ResearchSignals() {
  return (
    <section style={{ marginBottom: 40 }}>
      <SectionHeading
        icon={BarChart2}
        title="Research Signals"
        id="signals"
        subtitle="Themes that appeared repeatedly across search results. This is a qualitative view — not a market size or growth chart."
      />

      {/* Empty-state notice: no fake numbers */}
      <div className="data-unavailable-notice">
        <div style={{ display: 'flex', gap: 10, alignItems: 'flex-start', marginBottom: 16 }}>
          <BarChart2 size={18} color="var(--color-muted)" style={{ flexShrink: 0, marginTop: 2 }} />
          <div>
            <div style={{ fontWeight: 600, color: 'var(--color-navy)', marginBottom: 4 }}>
              Verified market data not yet available
            </div>
            <p style={{ margin: 0, fontSize: '0.875rem' }}>
              Market size, CAGR, revenue figures, and growth projections require verified third-party
              data sources. These charts will become active in a later milestone when reliable
              market data is integrated. The visualisation below shows only themes found in search results.
            </p>
          </div>
        </div>
        <div style={{
          padding: '10px 14px', background: 'var(--color-surface)',
          borderRadius: 'var(--radius-sm)', fontSize: '0.8rem', color: 'var(--color-muted)',
          border: '1px solid var(--color-border)',
        }}>
          📊 <strong>Planned for future milestones:</strong> Market size over time · Industry growth ·
          Demand trends · Forecast ranges (with source and forecast period)
        </div>
      </div>

      {/* Qualitative signal tiles */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 14, marginTop: 20 }}>
        {SAMPLE_RESULTS.researchSignals.map(sig => (
          <div className="signal-tile" key={sig.label}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 10 }}>
              <div
                className="signal-tile__icon"
                style={{ background: sig.bgColour }}
              >
                <span style={{ fontSize: '1.1rem' }}>{sig.icon}</span>
              </div>
              <div>
                <div style={{ fontWeight: 700, color: sig.colour, fontSize: '0.95rem' }}>{sig.label}</div>
                <span
                  className="badge"
                  style={{ background: sig.bgColour, color: sig.colour, fontSize: '0.7rem', marginTop: 2 }}
                >
                  {sig.strength}
                </span>
              </div>
            </div>
            <p style={{ fontSize: '0.875rem', margin: 0 }}>{sig.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

/* ══════════════════════════════════════════════════════════
   E-ish. WHAT DOES THIS MEAN FOR MY IDEA?
══════════════════════════════════════════════════════════ */
function WhatThisMeans() {
  const { whatResultsSuggest, existingSolutionsFound, areasToExplore } = SAMPLE_RESULTS.researchSummary
  return (
    <section style={{ marginBottom: 40 }}>
      <SectionHeading
        icon={MessageSquare}
        title="What Does This Mean for My Idea?"
        id="meaning"
        badge="📋 Sample content"
        subtitle="A plain-English summary of the search findings. This is not a SWOT analysis or business validation — just what the research found."
      />
      <div className="card" style={{ padding: '24px 28px' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>

          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8 }}>
              <TrendingUp size={15} color="var(--color-teal)" />
              <span style={{ fontWeight: 600, color: 'var(--color-navy)', fontSize: '0.9375rem' }}>
                What the results suggest
              </span>
            </div>
            <p style={{ paddingLeft: 23, fontSize: '0.9rem', margin: 0 }}>{whatResultsSuggest}</p>
          </div>

          <div style={{ height: 1, background: 'var(--color-border)' }} />

          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8 }}>
              <BookOpen size={15} color="var(--color-amber)" />
              <span style={{ fontWeight: 600, color: 'var(--color-navy)', fontSize: '0.9375rem' }}>
                Existing solutions discovered
              </span>
            </div>
            <p style={{ paddingLeft: 23, fontSize: '0.9rem', margin: 0 }}>{existingSolutionsFound}</p>
          </div>

          <div style={{ height: 1, background: 'var(--color-border)' }} />

          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 12 }}>
              <ChevronRight size={15} color="#7C3AED" />
              <span style={{ fontWeight: 600, color: 'var(--color-navy)', fontSize: '0.9375rem' }}>
                Areas worth exploring further
              </span>
            </div>
            <ul style={{ listStyle: 'none', paddingLeft: 23, display: 'flex', flexDirection: 'column', gap: 10 }}>
              {areasToExplore.map((area, i) => (
                <li key={i} style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                  <ChevronRight size={14} color="var(--color-teal)" style={{ marginTop: 3, flexShrink: 0 }} />
                  <span style={{ fontSize: '0.9rem', color: 'var(--color-text-light)' }}>{area}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ══════════════════════════════════════════════════════════
   QUESTIONS TO EXPLORE NEXT
══════════════════════════════════════════════════════════ */
function QuestionsToExplore() {
  return (
    <section style={{ marginBottom: 40 }}>
      <SectionHeading
        icon={HelpCircle}
        title="Questions to Explore Next"
        id="questions"
        subtitle="Research prompts — not AI-generated recommendations. These help you know what to investigate before your next step."
      />
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 14 }}>
        {SAMPLE_RESULTS.questionsToExplore.map((item, i) => (
          <div className="question-card" key={i}>
            <div className="question-card__num">{i + 1}</div>
            <div>
              <div style={{ fontWeight: 600, color: 'var(--color-navy)', marginBottom: 4, fontSize: '0.9375rem' }}>
                {item.q}
              </div>
              <p style={{ margin: 0, fontSize: '0.8rem', color: 'var(--color-muted)' }}>
                💡 {item.hint}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

/* ══════════════════════════════════════════════════════════
   FUTURE MILESTONE ROADMAP
══════════════════════════════════════════════════════════ */
const MILESTONE_COLOURS = {
  2: { bg: '#EDE9FE', text: '#7C3AED', label: 'Milestone 2' },
  3: { bg: '#FEF3C7', text: '#D97706', label: 'Milestone 3' },
  4: { bg: '#E0F2FE', text: '#0369A1', label: 'Milestone 4' },
}

function FutureMilestoneRoadmap() {
  return (
    <section style={{ marginBottom: 40 }}>
      <SectionHeading
        icon={Layers}
        title="What's Coming in Later Milestones"
        id="roadmap"
        subtitle="These features are part of the project roadmap and will be built in future phases. They are clearly marked — no fabricated results are shown."
      />
      <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
        {SAMPLE_RESULTS.futureMilestones.map((item, i) => {
          const cols = MILESTONE_COLOURS[item.milestone]
          return (
            <div className="roadmap-item" key={i}>
              <div className="roadmap-item__lock">
                <Lock size={14} color={cols.text} />
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 4, flexWrap: 'wrap' }}>
                  <span style={{ fontWeight: 600, color: 'var(--color-navy)', fontSize: '0.9375rem' }}>
                    {item.feature}
                  </span>
                  <span
                    className="badge"
                    style={{ background: cols.bg, color: cols.text, fontSize: '0.7rem' }}
                  >
                    Coming in {cols.label}
                  </span>
                </div>
                <p style={{ margin: 0, fontSize: '0.875rem', color: 'var(--color-muted)' }}>
                  {item.desc}
                </p>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}

/* ══════════════════════════════════════════════════════════
   E. RESEARCH QUALITY & TRANSPARENCY
══════════════════════════════════════════════════════════ */
function ResearchQuality() {
  const q = SAMPLE_RESULTS.researchQuality
  return (
    <section style={{ marginBottom: 40 }}>
      <SectionHeading
        icon={Shield}
        title="About This Research"
        id="quality"
        subtitle="Transparency about where the information comes from and what it means."
      />
      <div className="quality-card">
        <div className="quality-card__row">
          <div className="quality-card__key">
            <Globe size={13} /> Sources
          </div>
          <div className="quality-card__val">{q.sources}</div>
        </div>
        <div className="quality-card__row">
          <div className="quality-card__key">
            <Clock size={13} /> Retrieved at
          </div>
          <div className="quality-card__val">{q.retrievedAt}</div>
        </div>
        <div className="quality-card__row">
          <div className="quality-card__key">
            <Info size={13} /> Content type
          </div>
          <div className="quality-card__val">{q.contentType}</div>
        </div>
        <div className="quality-card__row quality-card__row--warn">
          <div className="quality-card__key">
            <AlertTriangle size={13} /> Not verified
          </div>
          <div className="quality-card__val">{q.unverified}</div>
        </div>
        <div className="quality-card__disclaimer">
          <Shield size={13} style={{ flexShrink: 0 }} />
          {q.disclaimer}
        </div>
      </div>
    </section>
  )
}

/* ══════════════════════════════════════════════════════════
   SIDEBAR NAV
══════════════════════════════════════════════════════════ */
function ResultsSidebar({ active, setActive }) {
  return (
    <div className="card results-sidebar" style={{ padding: '16px' }}>
      <div style={{
        fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.08em',
        textTransform: 'uppercase', color: 'var(--color-muted)', padding: '4px 14px 10px',
      }}>
        On this page
      </div>
      <nav className="results-nav">
        {NAV_ITEMS.map(item => {
          const Icon = item.icon
          return (
            <button
              key={item.id}
              className={`results-nav__item ${active === item.id ? 'active' : ''}`}
              onClick={() => { scrollTo(item.id); setActive(item.id) }}
            >
              <Icon size={14} />
              {item.label}
            </button>
          )
        })}
      </nav>

      <div style={{
        marginTop: 16, padding: '14px', background: 'var(--color-surface-alt)',
        borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border)',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 6 }}>
          <CheckCircle size={14} color="var(--color-teal)" />
          <span style={{ fontWeight: 600, fontSize: '0.8125rem', color: 'var(--color-navy)' }}>
            Milestone 1 Complete
          </span>
        </div>
        <p style={{ fontSize: '0.78rem', color: 'var(--color-muted)', margin: 0 }}>
          Idea submitted · LLM extraction shown · Search results displayed.
          More agents coming in Milestones 2–4.
        </p>
      </div>

      <Link to="/submit" className="btn btn--outline btn--sm" style={{ marginTop: 12, width: '100%', justifyContent: 'center' }}>
        Start Over
      </Link>
    </div>
  )
}

/* ══════════════════════════════════════════════════════════
   MAIN PAGE
══════════════════════════════════════════════════════════ */
export default function ResultsPage() {
  const { idea } = useIdea()
  const [activeSection, setActiveSection] = useState('overview')

  return (
    <>
      {/* Header */}
      <div className="page-header">
        <div className="container" style={{ textAlign: 'center' }}>
          <span className="badge badge--teal" style={{ marginBottom: 16, display: 'inline-flex' }}>
            Step 3 of 3
          </span>
          <h1 style={{ color: 'white', marginBottom: 10 }}>Market Research Results</h1>
          <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '1rem' }}>
            Here's what we found about your idea and the space it operates in.
          </p>
        </div>
      </div>

      <div className="section section--sm">
        <div className="container">

          {/* Global sample data notice */}
          <div className="sample-notice" style={{ marginBottom: 32 }}>
            <AlertTriangle size={16} color="#D97706" style={{ flexShrink: 0 }} />
            <span>
              <strong>Prototype notice:</strong> All results below are sample data for UI
              demonstration purposes only. No real web search has been performed.
              In the live product, results will come from the{' '}
              <strong>Tavily Web Search Agent</strong> connected to the Python FastAPI backend.
            </span>
          </div>

          <div className="results-layout">
            {/* Sidebar */}
            <ResultsSidebar active={activeSection} setActive={setActiveSection} />

            {/* Main content */}
            <div>
              <ResearchOverview idea={idea} />
              <MarketInsights />
              <SearchResults />
              <ResearchSignals />
              <WhatThisMeans />
              <QuestionsToExplore />
              <FutureMilestoneRoadmap />
              <ResearchQuality />

              {/* CTA */}
              <div className="card card--navy" style={{ padding: '28px 32px', textAlign: 'center' }}>
                <h3 style={{ color: 'white', marginBottom: 10 }}>Ready to go deeper?</h3>
                <p style={{ color: 'rgba(255,255,255,0.65)', marginBottom: 20, fontSize: '0.9375rem' }}>
                  Future milestones will bring competitor analysis, customer segmentation, SWOT,
                  and a downloadable validation report.
                </p>
                <Link to="/submit" className="btn btn--primary">
                  Validate a New Idea
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
