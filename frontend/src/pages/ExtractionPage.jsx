import { useEffect, useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import {
  User, Target, Lightbulb, Briefcase, ArrowRight,
  CheckCircle, Sparkles, AlertTriangle, Edit3, X, Save,
} from 'lucide-react'
import { useIdea } from '../data/IdeaContext'
import { SAMPLE_EXTRACTION } from '../data/sampleData'

const STEPS = ['Describe Idea', 'Review Understanding', 'Market Research']

function StepBar({ current }) {
  return (
    <div className="step-indicator" style={{ marginBottom: 32 }}>
      {STEPS.map((s, i) => (
        <div key={s} className="step-item" style={{ display: 'flex', alignItems: 'center' }}>
          <div className={`step-bubble ${i < current ? 'completed' : i === current ? 'active' : 'pending'}`}>
            {i < current ? <CheckCircle size={14} /> : i + 1}
          </div>
          <span
            className={`step-label ${i < current ? 'completed' : i === current ? 'active' : ''}`}
            style={{ marginLeft: 6 }}
          >
            {s}
          </span>
          {i < STEPS.length - 1 && (
            <div className={`step-connector ${i < current ? 'completed' : ''}`} style={{ margin: '0 10px' }} />
          )}
        </div>
      ))}
    </div>
  )
}

/* ── Single extraction field (view mode) ── */
function ExtractionField({ icon: Icon, label, value, colour, onEdit }) {
  return (
    <div className="extraction-card">
      <div className="extraction-card__label" style={{ color: colour || 'var(--color-teal)' }}>
        <Icon size={13} />
        {label}
      </div>
      <div className="extraction-card__value">{value || '—'}</div>
      {onEdit && (
        <button
          type="button"
          className="extraction-card__edit-btn"
          onClick={onEdit}
          aria-label={`Edit ${label}`}
        >
          <Edit3 size={12} />
          Edit
        </button>
      )}
    </div>
  )
}

/* ── Inline edit field ── */
function EditableField({ icon: Icon, label, fieldKey, value, colour, onSave, onCancel }) {
  const [draft, setDraft] = useState(value)
  return (
    <div className="extraction-card extraction-card--editing">
      <div className="extraction-card__label" style={{ color: colour || 'var(--color-teal)' }}>
        <Icon size={13} />
        {label}
      </div>
      <textarea
        className="form-textarea"
        rows={3}
        value={draft}
        onChange={e => setDraft(e.target.value)}
        style={{ marginBottom: 10, minHeight: 72 }}
        autoFocus
      />
      <div style={{ display: 'flex', gap: 8 }}>
        <button
          type="button"
          className="btn btn--primary btn--sm"
          onClick={() => onSave(fieldKey, draft)}
          style={{ gap: 5 }}
        >
          <Save size={12} /> Save
        </button>
        <button
          type="button"
          className="btn btn--ghost btn--sm"
          onClick={onCancel}
          style={{ gap: 5 }}
        >
          <X size={12} /> Cancel
        </button>
      </div>
    </div>
  )
}

/* ── Loading animation ── */
function AnalysingScreen() {
  const dots = [
    'Identifying key themes…',
    'Extracting the problem…',
    'Understanding your audience…',
    'Preparing a summary…',
  ]
  const [step, setStep] = useState(0)

  useEffect(() => {
    const t = setInterval(() => setStep(s => (s + 1) % dots.length), 900)
    return () => clearInterval(t)
  }, [])

  return (
    <div style={{ textAlign: 'center', padding: '80px 24px' }}>
      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 24 }}>
        <div className="loading-spinner" style={{ width: 52, height: 52, borderWidth: 4 }} />
      </div>
      <h3 style={{ marginBottom: 10 }}>Understanding your idea</h3>
      <p className="loading-pulse" style={{ color: 'var(--color-muted)', fontSize: '0.9375rem', marginBottom: 8 }}>
        {dots[step]}
      </p>
      <p style={{ fontSize: '0.8125rem', color: 'var(--color-muted)', maxWidth: 360, margin: '0 auto' }}>
        In the live product, this step calls the AI backend to extract and structure
        your idea. For this prototype, sample content is used.
      </p>
    </div>
  )
}

/* ── Main page ── */
export default function ExtractionPage() {
  const { idea, updateIdea } = useIdea()
  const navigate = useNavigate()
  const [loading, setLoading] = useState(true)
  const [editing, setEditing] = useState(null) // which field key is being edited

  // Merge user's real input with sample defaults where fields are empty
  const [display, setDisplay] = useState({
    name:     idea.name     || SAMPLE_EXTRACTION.name,
    industry: idea.industry || SAMPLE_EXTRACTION.industry,
    problem:  idea.problem  || SAMPLE_EXTRACTION.problem,
    solution: idea.solution || SAMPLE_EXTRACTION.solution,
    audience: idea.audience || SAMPLE_EXTRACTION.audience,
    summary:  SAMPLE_EXTRACTION.summary, // Always use sample summary in prototype
  })

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 2200)
    return () => clearTimeout(t)
  }, [])

  function handleSave(field, value) {
    const updated = { ...display, [field]: value }
    setDisplay(updated)
    updateIdea({ [field]: value })
    setEditing(null)
  }

  const FIELDS = [
    { key: 'problem',  icon: Target,   label: 'Problem Identified', colour: 'var(--color-teal)' },
    { key: 'solution', icon: Lightbulb, label: 'Proposed Solution', colour: 'var(--color-amber)' },
    { key: 'audience', icon: User,      label: 'Target Audience',   colour: '#7C3AED' },
    { key: 'industry', icon: Briefcase, label: 'Industry',          colour: 'var(--color-info)' },
  ]

  if (loading) {
    return (
      <div>
        <div className="page-header">
          <div className="container container--narrow" style={{ textAlign: 'center' }}>
            <h1 style={{ color: 'white' }}>Analysing your idea</h1>
            <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '1rem', marginTop: 8 }}>
              Extracting key details so we know exactly what to research.
            </p>
          </div>
        </div>
        <div className="section section--sm">
          <div className="container container--narrow">
            <AnalysingScreen />
          </div>
        </div>
      </div>
    )
  }

  return (
    <>
      <div className="page-header">
        <div className="container container--narrow" style={{ textAlign: 'center' }}>
          <span className="badge badge--teal" style={{ marginBottom: 16, display: 'inline-flex' }}>
            Step 2 of 3
          </span>
          <h1 style={{ color: 'white', marginBottom: 10 }}>Here's how we understood your idea</h1>
          <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '1rem' }}>
            Review the details below. If anything looks incorrect, use the{' '}
            <strong style={{ color: 'rgba(255,255,255,0.9)' }}>Edit</strong> button to
            correct it before continuing.
          </p>
        </div>
      </div>

      <div className="section section--sm">
        <div className="container container--narrow">
          <StepBar current={1} />

          {/* Prototype notice */}
          <div className="sample-notice" style={{ marginBottom: 24 }}>
            <AlertTriangle size={16} color="#D97706" style={{ flexShrink: 0 }} />
            <span>
              <strong>Prototype notice:</strong> The idea summary and inferred fields below use
              sample content to demonstrate the LLM extraction stage. In the live product,
              these will be generated by the AI backend from your actual submission.
            </span>
          </div>

          {/* Idea name banner */}
          <div style={{
            display: 'flex', alignItems: 'center', gap: 14, marginBottom: 24,
            padding: '20px 24px', background: 'var(--color-teal-pale)',
            borderRadius: 'var(--radius-lg)', border: '1px solid #99E6DC',
          }}>
            <div style={{
              width: 44, height: 44, background: 'var(--color-teal)', borderRadius: 12,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>
              <Sparkles size={22} color="white" />
            </div>
            <div style={{ flex: 1 }}>
              <div style={{
                fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.08em',
                textTransform: 'uppercase', color: 'var(--color-teal)', marginBottom: 2,
              }}>
                Idea Name — extracted by AI
              </div>
              <h3 style={{ color: 'var(--color-navy)', marginBottom: 0 }}>{display.name}</h3>
            </div>
            <span className="badge badge--teal">{display.industry}</span>
          </div>

          {/* What "extracted by AI" means */}
          <div style={{
            padding: '12px 16px', background: 'var(--color-info-bg)',
            border: '1px solid #BAE6FD', borderRadius: 'var(--radius-md)', marginBottom: 20,
            fontSize: '0.875rem', color: 'var(--color-info)', display: 'flex', gap: 8,
          }}>
            <span style={{ fontWeight: 600 }}>💡 What is "LLM extraction"?</span>
            <span>
              In the live product, an AI model will read your submission and automatically identify
              the problem, solution, audience, and industry. The result is shown here so you can
              verify and correct it before we run the market research.
            </span>
          </div>

          {/* Extraction grid — editable */}
          <div className="extraction-grid" style={{ marginBottom: 24 }}>
            {FIELDS.map(f =>
              editing === f.key ? (
                <EditableField
                  key={f.key}
                  icon={f.icon}
                  label={f.label}
                  fieldKey={f.key}
                  value={display[f.key]}
                  colour={f.colour}
                  onSave={handleSave}
                  onCancel={() => setEditing(null)}
                />
              ) : (
                <ExtractionField
                  key={f.key}
                  icon={f.icon}
                  label={f.label}
                  value={display[f.key]}
                  colour={f.colour}
                  onEdit={() => setEditing(f.key)}
                />
              )
            )}
          </div>

          {/* AI summary card */}
          <div className="extraction-card extraction-card--full" style={{ marginBottom: 32, borderRadius: 'var(--radius-lg)', padding: '28px 32px' }}>
            <div className="extraction-card__label">
              <Sparkles size={13} />
              Idea Summary — generated by AI
            </div>
            <p style={{ color: 'rgba(255,255,255,0.88)', lineHeight: 1.8, fontSize: '0.9375rem', margin: 0 }}>
              {display.summary}
            </p>
          </div>

          {/* Edit notice */}
          <div style={{
            padding: '10px 16px', borderRadius: 'var(--radius-md)',
            background: 'var(--color-surface-alt)', border: '1px solid var(--color-border)',
            fontSize: '0.8125rem', color: 'var(--color-muted)', marginBottom: 24,
            display: 'flex', alignItems: 'center', gap: 8,
          }}>
            <Edit3 size={13} color="var(--color-teal)" />
            Each field above has an <strong style={{ color: 'var(--color-navy)' }}>Edit</strong> button.
            Use it to correct any detail the AI interpreted incorrectly before you continue.
          </div>

          {/* Actions */}
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <button
              onClick={() => navigate('/results')}
              className="btn btn--primary btn--lg"
              style={{ flex: 1 }}
            >
              Continue to Market Research
              <ArrowRight size={18} />
            </button>
            <Link to="/submit" className="btn btn--outline btn--lg" style={{ flexShrink: 0 }}>
              Edit My Idea
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
