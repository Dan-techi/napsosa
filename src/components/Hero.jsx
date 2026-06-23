import { Link } from 'react-router-dom'
import styles from './Hero.module.css'

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.overlay} />
      <div className={styles.content}>
        <h2>
          Connecting Generations,<br />
          <span>Inspiring Success</span>
        </h2>
        <p>
          Welcome to the official home of Nabingoola Public
          Old Students Association (NAPOSA). Together, we support our alma mater and build
          a brighter future for generations to come.
        </p>
        <div className={styles.btns}>
          <a href="https://forms.gle/7DyeoTazPqgtEZwcA" target="_blank" rel="noreferrer" className={`${styles.btn} ${styles.primary}`}>
            <i className="fa fa-envelope" /> JOIN NAPOSA
          </a>
          <a href="#" className={`${styles.btn} ${styles.gold}`}>
            <i className="fa fa-heart" /> DONATE NOW
          </a>
          <Link to="/alumni" className={`${styles.btn} ${styles.outline}`}>
            <i className="fa fa-users" /> ALUMNI DIRECTORY
          </Link>
        </div>
      </div>
    </section>
  )
}
