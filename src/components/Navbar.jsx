import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import styles from './Navbar.module.css'

const links = [
  { label: 'Home', to: '/' },
  { label: 'About Us', to: '/about', dropdown: true },
  { label: 'School', to: '/school', dropdown: true },
  { label: 'Alumni', to: '/alumni', dropdown: true },
  { label: 'Projects', to: '/projects', dropdown: true },
  { label: 'Events', to: '/events', dropdown: true },
  { label: 'Governance', to: '/governance', dropdown: true },
  { label: 'Contact Us', to: '/contact', dropdown: true },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className={styles.nav}>
      <Link to="/" className={styles.logo}>
        <img src="https://kgfurnitures.odoo.com/web/image/1013-2e0c55d1/naposa%20logo.webp" alt="NAPOSA Logo" className={styles.logoImg} />
        <div className={styles.logoText}>
          <strong>NAPOSA</strong>
          <span>NABINGOOLA PUBLIC OLD STUDENTS ASSOCIATION</span>
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
        <li className={styles.joinMobileItem}>
          <a href="https://forms.gle/7DyeoTazPqgtEZwcA" target="_blank" rel="noreferrer" className={styles.joinMobile} onClick={() => setOpen(false)}>
            JOIN NAPOSA
          </a>
        </li>
      </ul>

      <a href="https://forms.gle/7DyeoTazPqgtEZwcA" target="_blank" rel="noreferrer" className={styles.btnJoin}>JOIN NAPOSA</a>

      <button className={styles.hamburger} onClick={() => setOpen(o => !o)} aria-label="Menu">
        <i className={`fa ${open ? 'fa-times' : 'fa-bars'}`} />
      </button>
    </nav>
  )
}
