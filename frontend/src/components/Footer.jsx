import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__inner">
          <div>
            <span className="footer__logo-text">
              Worth<span>It</span> AI
            </span>
            <p className="footer__tagline" style={{ marginTop: 6 }}>
              Every great startup begins with an idea.
            </p>
          </div>

          <ul className="footer__links">
            <li><a href="/">Home</a></li>
            <li><a href="/#how">How It Works</a></li>
            <li><a href="/#about">About</a></li>
            <li><Link to="/submit">Validate an Idea</Link></li>
          </ul>

          <div className="footer__divider" />

          <p className="footer__copy">
            © {new Date().getFullYear()} WorthIt AI · Milestone 1 Prototype ·
            Sample data is used for demonstration purposes only.
          </p>
        </div>
      </div>
    </footer>
  )
}
