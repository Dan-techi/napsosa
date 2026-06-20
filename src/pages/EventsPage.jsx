import styles from './EventsPage.module.css'

export default function EventsPage() {
  return (
    <main>
      <div className={styles.hero}>
        <div className={styles.overlay} />
        <div className={styles.heroContent}>
          <h1>Events</h1>
          <p>Upcoming &amp; Past Activities</p>
        </div>
      </div>

      <section className={styles.section}>
        <div className={styles.label}>UPCOMING EVENT</div>

        <div className={styles.card}>
          <div className={styles.dateBadge}>
            <span className={styles.day}>03</span>
            <span className={styles.month}>JUL</span>
            <span className={styles.year}>2026</span>
          </div>

          <div className={styles.details}>
            <span className={styles.tag}>Official Launch</span>
            <h2>NAPOSA Official Launch Ceremony</h2>
            <p>
              We are proud to announce the official launch of the Nabingoola Public
              Old Students Association — <strong>NAPOSA</strong>.
              This landmark event marks the formal establishment of our alumni body
              and brings together former students, current staff, school administration,
              and invited guests to celebrate a new chapter in the life of our alma mater.
            </p>
            <p>
              The launch will be held right at the heart of where it all began —
              the grounds of <strong>Nabingoola Public Secondary School</strong>,
              Nabingoola Town Council, Mubende District. It will be a day of
              reflection, celebration, and commitment — as we come together to
              officially declare our intention to serve, support, and uplift the
              institution that shaped us.
            </p>
            <p>
              Expect speeches from founding members and school leadership, the
              unveiling of the NAPOSA constitution and executive committee,
              and an opportunity to reconnect with fellow alumni from across the
              years. This is a moment in history for every old student of
              Nabingoola — do not miss it.
            </p>

            <div className={styles.meta}>
              <div className={styles.metaItem}>
                <i className="fa fa-calendar" />
                <span>Friday, 3rd July 2026</span>
              </div>
              <div className={styles.metaItem}>
                <i className="fa fa-location-dot" />
                <span>Nabingoola Public Secondary School, Mubende District</span>
              </div>
              <div className={styles.metaItem}>
                <i className="fa fa-clock" />
                <span>10:00 AM onwards</span>
              </div>
            </div>

            <a href="/join" className={styles.btn}>REGISTER YOUR ATTENDANCE</a>
          </div>
        </div>
      </section>
    </main>
  )
}
