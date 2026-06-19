import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import styles from './Navbar.module.css'

const links = [
  { label: 'Home', to: '/' },
  { label: 'About Us', to: '/about', dropdown: true },
  { label: 'School', to: '/school', dropdown: true },
  { label: 'Alumni', to: '/alumni', dropdown: true },
  { label: 'Projects', to: '/projects', dropdown: true },
  { label: 'Events', to: '/events' },
  { label: 'Governance', to: '/governance' },
  { label: 'Contact Us', to: '/contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className={styles.nav}>
      <Link to="/" className={styles.logo}>
        <div className={styles.badge}>N</div>
        <div className={styles.logoText}>
          <strong>NAPSSOSA</strong>
          <span>Nabingoola Public Secondary School<br />Old Students Association</span>
        </div>
      </Link>

      <ul className={`${styles.links} ${open ? styles.open : ''}`}>
        {links.map(l => (
          <li key={l.label}>
            <NavLink
              to={l.to}
              className={({ isActive }) => isActive ? styles.active : ''}
              onClick={() => setOpen(false)}
            >
              {l.label}{l.dropdown && <span className={styles.arrow}>▾</span>}
            </NavLink>
          </li>
        ))}
      </ul>

      <Link to="/join" className={styles.btnJoin}>JOIN NAPSSOSA</Link>

      <button className={styles.hamburger} onClick={() => setOpen(o => !o)} aria-label="Menu">
        <i className={`fa ${open ? 'fa-times' : 'fa-bars'}`} />
      </button>
    </nav>
  )
}
