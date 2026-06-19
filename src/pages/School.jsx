import styles from './School.module.css'

export default function School() {
  return (
    <main>
      {/* Hero Banner */}
      <div className={styles.hero}>
        <div className={styles.overlay} />
        <div className={styles.heroContent}>
          <h1>Nabingoola Public Secondary School</h1>
          <p>United For Success &mdash; UNEB Centre No. U2542</p>
        </div>
      </div>

      {/* Essay Content */}
      <section className={styles.article}>
        <div className={styles.inner}>

          <div className={styles.label}>OUR SCHOOL</div>
          <h2>A Legacy of Excellence in the Heart of Mubende</h2>

          <p>
            Nabingoola Public Secondary School is a government-aided institution
            nestled in Nabingoola Town Council, Mubende District, Uganda. Since
            its establishment in <strong>1998</strong>, the school has grown to
            become one of the most respected centres of learning in the region,
            recognised by the Uganda National Examinations Board under centre
            number <strong>U2542</strong>.
          </p>

          <p>
            The school offers both <strong>Ordinary Level (O' Level)</strong> and
            <strong> Advanced Level (A' Level)</strong> education, providing
            students with a comprehensive academic pathway from Senior One through
            to Senior Six. This dual-level structure ensures that learners are
            nurtured not only for national examinations but also for the demands
            of higher education and professional life.
          </p>

          <p>
            Under the dedicated leadership of the current Head Teacher,{' '}
            <strong>Mrs. Natabi Idah</strong>, the school has continued to uphold
            its founding motto — <em>United For Success</em>. Her stewardship
            has seen consistent improvements in academic performance, student
            welfare, and institutional development. The teaching staff remain
            committed to fostering a culture of hard work, integrity, and
            excellence in every learner.
          </p>

          <p>
            Nabingoola Public Secondary School takes pride in its diverse student
            body drawn from across Mubende District and beyond. The school
            environment promotes not only academic achievement but also character
            development, community values, and a sense of belonging — qualities
            that continue to define the graduates who carry the school's name into
            the wider world.
          </p>

          <p>
            It is from this proud institution that the members of the Nabingoola
            Public School Old Students Association (NAPOSA) trace their roots.
            The bonds forged within these walls have endured for decades, and it
            is the mission of NAPOSA to give back to the school that shaped
            them — ensuring that every generation of students that passes through
            its gates has the very best opportunity to succeed.
          </p>

          {/* Quick Facts */}
          <div className={styles.facts}>
            <div className={styles.fact}>
              <span className={styles.factVal}>1998</span>
              <span className={styles.factKey}>Year Established</span>
            </div>
            <div className={styles.fact}>
              <span className={styles.factVal}>U2542</span>
              <span className={styles.factKey}>UNEB Centre No.</span>
            </div>
            <div className={styles.fact}>
              <span className={styles.factVal}>O' &amp; A'</span>
              <span className={styles.factKey}>Levels Offered</span>
            </div>
            <div className={styles.fact}>
              <span className={styles.factVal}>Mubende</span>
              <span className={styles.factKey}>District</span>
            </div>
          </div>

        </div>
      </section>
    </main>
  )
}
