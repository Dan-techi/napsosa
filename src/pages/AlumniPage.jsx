import styles from './AlumniPage.module.css'

export default function AlumniPage() {
  return (
    <main className={styles.page}>
      <div className={styles.hero}>
        <div className={styles.heroContent}>
          <h1>Alumni</h1>
          <p>Our Former Students Community</p>
        </div>
      </div>

      <section className={styles.empty}>
        <i className="fa-solid fa-users" />
        <h2>Alumni Directory Coming Soon</h2>
        <p>We are building a space to celebrate and connect all former students of Nabingoola Public Secondary School. Check back soon.</p>
      </section>
    </main>
  )
}
