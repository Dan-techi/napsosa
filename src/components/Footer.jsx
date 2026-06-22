import { Link } from 'react-router-dom'
import styles from './Footer.module.css'

const socials = [
  { icon: 'fa-facebook-f', href: '#', label: 'Facebook' },
  { icon: 'fa-tiktok', href: '#', label: 'TikTok' },
  { icon: 'fa-linkedin-in', href: '#', label: 'LinkedIn' },
  { icon: 'fa-instagram', href: '#', label: 'Instagram' },
]

const links = [
  { label: 'Home', to: '/' },
  { label: 'About Us', to: '/about' },
  { label: 'School', to: '/school' },
  { label: 'Governance', to: '/governance' },
  { label: 'Events', to: '/events' },
  { label: 'Contact Us', to: '/contact' },
]

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.top}>

        <div className={styles.brand}>
          <div className={styles.logo}>
            <img src={`${import.meta.env.BASE_URL}NAPOSA Logo.jpg`} alt="NAPOSA Logo" className={styles.logoImg} />
            <div>
              <strong>NAPOSA</strong>
              <span>Nabingoola Public<br />Old Students Association</span>
            </div>
          </div>
          <p>
            Uniting former students of Nabingoola Public
            to foster fellowship, support school development, and mentor
            the next generation.
          </p>
        </div>

        <div className={styles.col}>
          <h4>Quick Links</h4>
          <ul>
            {links.map(l => (
              <li key={l.label}><Link to={l.to}>{l.label}</Link></li>
            ))}
          </ul>
        </div>

        <div className={styles.col}>
          <h4>Contact Us</h4>
          <ul className={styles.contactList}>
            <li><i className="fa fa-envelope" /><a href="mailto:info@napssosa.org">info@napssosa.org</a></li>
            <li><i className="fa fa-phone" /><a href="tel:+256778986345">+256 778 986345</a></li>
            <li><i className="fa fa-location-dot" /><span>Nabingoola Town Council, Mubende District, Uganda</span></li>
          </ul>

          <h4 className={styles.socialHeading}>Follow Us</h4>
          <div className={styles.socials}>
            {socials.map(s => (
              <a key={s.icon} href={s.href} aria-label={s.label}>
                <i className={`fab ${s.icon}`} />
              </a>
            ))}
          </div>
        </div>

      </div>

      <div className={styles.bottom}>
        &copy; {new Date().getFullYear()} <span>NAPOSA</span> – Nabingoola Public Old Students Association. All rights reserved.
      </div>
    </footer>
  )
}
