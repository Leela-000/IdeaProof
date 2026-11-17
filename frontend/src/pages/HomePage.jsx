import { Link } from 'react-router-dom'
import { Lightbulb, Search, Compass, ArrowRight, Sparkles, CheckCircle } from 'lucide-react'

const HOW_IT_WORKS = [
  {
    step: '01',
    icon: Lightbulb,
    iconBg: 'var(--color-teal-pale)',
    iconColor: 'var(--color-teal)',
    title: 'Share Your Idea',
    desc: 'Describe your startup idea in your own words. No business jargon required — a rough draft is perfectly fine.',
  },
  {
    step: '02',
    icon: Search,
    iconBg: 'var(--color-amber-light)',
    iconColor: 'var(--color-amber)',
    title: 'Explore the Market',
    desc: 'We search the web to find relevant market information, existing products, and what others are building in your space.',
  },
  {
    step: '03',
    icon: Compass,
    iconBg: '#EDE9FE',
    iconColor: '#7C3AED',
    title: 'Discover Opportunities',
    desc: 'Review a clear summary of what\'s already out there and what areas might be worth exploring further.',
  },
]

const BENEFITS = [
  'No business experience required',
  'Plain English — no jargon',
  'Takes less than 5 minutes',
  'Free to use',
]

export default function HomePage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="hero">
        <div className="container">
          <div className="hero__inner">
            <div className="hero__eyebrow animate-fadeInUp">
              <Sparkles size={13} />
              Milestone 1 Prototype
            </div>

            <h1 className="hero__title animate-fadeInUp delay-100">
              Every great startup{' '}
              <mark>begins with an idea.</mark>
              <br />
              Let's find out where yours can go.
            </h1>

            <p className="hero__subtitle animate-fadeInUp delay-200">
              WorthIt AI helps you explore your startup idea by showing you
              what's already out there, who's building similar things, and what
              gaps might be worth exploring — all in plain English.
            </p>

            <div className="hero__actions animate-fadeInUp delay-300">
              <Link to="/submit" className="btn btn--primary btn--lg">
                Validate Your Idea
                <ArrowRight size={18} />
              </Link>
              <a href="#how" className="btn btn--outline btn--lg">
                See How It Works
              </a>
            </div>

            {/* Benefits */}
            <div
              className="animate-fadeInUp delay-400"
              style={{ display: 'flex', gap: 20, justifyContent: 'center', flexWrap: 'wrap' }}
            >
              {BENEFITS.map(b => (
                <span
                  key={b}
                  style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: '0.875rem', color: 'var(--color-muted)' }}
                >
                  <CheckCircle size={15} color="var(--color-teal)" />
                  {b}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── How It Works ── */}
      <section className="hiw section" id="how">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 12 }}>
            <span className="badge badge--teal">Process</span>
          </div>
          <h2 style={{ textAlign: 'center', marginBottom: 12 }}>
            Three simple steps
          </h2>
          <p style={{ textAlign: 'center', maxWidth: 480, margin: '0 auto', color: 'var(--color-muted)' }}>
            From rough idea to market overview in minutes — no sign-up,
            no business plan, no prior experience needed.
          </p>

          <div className="hiw__grid">
            {HOW_IT_WORKS.map((item, i) => {
              const Icon = item.icon
              return (
                <div className="card hiw__card" key={item.step}>
                  <div
                    className="hiw__icon-wrap"
                    style={{ background: item.iconBg }}
                  >
                    <Icon size={26} color={item.iconColor} />
                  </div>
                  <div
                    className="hiw__step-num"
                    style={{ color: item.iconColor }}
                  >
                    Step {item.step}
                  </div>
                  <h3 style={{ marginBottom: 10 }}>{item.title}</h3>
                  <p style={{ fontSize: '0.9375rem' }}>{item.desc}</p>
                </div>
              )
            })}
          </div>

          <div style={{ textAlign: 'center', marginTop: 40 }}>
            <Link to="/submit" className="btn btn--primary btn--lg">
              Get Started — It's Free
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── About ── */}
      <section className="section" id="about" style={{ background: 'var(--color-bg)' }}>
        <div className="container container--narrow">
          <div
            className="card card--navy"
            style={{ padding: '48px', textAlign: 'center' }}
          >
            <span className="badge badge--teal" style={{ marginBottom: 20, display: 'inline-flex' }}>
              About WorthIt AI
            </span>
            <h2 style={{ color: 'white', marginBottom: 16 }}>
              Built for first-time founders
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1rem', maxWidth: 520, margin: '0 auto 28px' }}>
              Most startup validation tools are built for experienced entrepreneurs
              with business backgrounds. WorthIt AI is designed for everyone else —
              students, curious thinkers, and people with an idea and no idea where
              to start.
            </p>
            <p style={{
              display: 'inline-block',
              padding: '12px 20px',
              background: 'rgba(255,255,255,0.08)',
              borderRadius: 'var(--radius-md)',
              color: 'rgba(255,255,255,0.65)',
              fontSize: '0.875rem',
              border: '1px solid rgba(255,255,255,0.12)',
            }}>
              🛠 Milestone 1 Prototype · More features coming in future milestones
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
