import styles from './Hero.module.css'

const btns = [
  { label: 'JOIN NAPOSA', icon: 'fa-envelope', cls: 'primary' },
  { label: 'DONATE NOW', icon: 'fa-heart', cls: 'gold' },
  { label: 'ALUMNI DIRECTORY', icon: 'fa-users', cls: 'outline' },
]

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
          Welcome to the official home of Nabingoola Public School Old Students
          Association (NAPOSA). Together, we support our alma mater and build
          a brighter future for generations to come.
        </p>
        <div className={styles.btns}>
          {btns.map(b => (
            <a key={b.label} href="#" className={`${styles.btn} ${styles[b.cls]}`}>
              <i className={`fa ${b.icon}`} /> {b.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
