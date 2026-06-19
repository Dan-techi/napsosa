import styles from './AboutPage.module.css'

export default function AboutPage() {
  return (
    <main className={styles.page}>
      <div className={styles.hero}>
        <h1>About NAPOSA</h1>
        <p>Nabingoola Public School Old Students Association</p>
      </div>

      <div className={styles.container}>

        {/* PREAMBLE */}
        <section className={styles.section}>
          <h2>Preamble</h2>
          <p>
            We, the former students of Nabingoola Public School Old Students Association, recognising the value of unity, service, and giving back to our
            alma mater, and desiring to promote the welfare of members and the development
            of the school, do hereby adopt and enact this constitution to govern the affairs
            of our Association.
          </p>
        </section>

        {/* ARTICLE 1 */}
        <section className={styles.section}>
          <h2>Article 1: Name, Office &amp; Motto</h2>
          <div className={styles.infoGrid}>
            <div className={styles.infoItem}>
              <span className={styles.infoLabel}>Name</span>
              <span>NAPOSA (Nabingoola Public School Old Students Association)</span>
            </div>
            <div className={styles.infoItem}>
              <span className={styles.infoLabel}>Registered Office</span>
              <span>Nabingoola Public School, Mubende District, Uganda</span>
            </div>
            <div className={styles.infoItem}>
              <span className={styles.infoLabel}>Motto</span>
              <span>&ldquo;Connecting Generations, Inspiring Success&rdquo;</span>
            </div>
            <div className={styles.infoItem}>
              <span className={styles.infoLabel}>Emblem &amp; Colours</span>
              <span>As approved by the General Assembly</span>
            </div>
          </div>
        </section>

        {/* ARTICLE 2 */}
        <section className={styles.section}>
          <h2>Article 2: Aims &amp; Objectives</h2>
          <div className={styles.objectives}>
            <div className={styles.objective}>
              <span className={styles.number}>2.1</span>
              <div>
                <h3>Unity &amp; Lifelong Fellowship</h3>
                <p>To unite all former students of Nabingoola Public School and foster lifelong fellowship.</p>
              </div>
            </div>
            <div className={styles.objective}>
              <span className={styles.number}>2.2</span>
              <div>
                <h3>Resource Mobilisation &amp; School Development</h3>
                <p>To mobilise resources and support projects that improve infrastructure, academics, and welfare at Nabingoola Public School.</p>
              </div>
            </div>
            <div className={styles.objective}>
              <span className={styles.number}>2.3</span>
              <div>
                <h3>Mentorship, Guidance &amp; Scholarships</h3>
                <p>To provide mentorship, career guidance, internship linkages, and scholarships to current students.</p>
              </div>
            </div>
            <div className={styles.objective}>
              <span className={styles.number}>2.4</span>
              <div>
                <h3>Upholding the School's Reputation &amp; Values</h3>
                <p>To uphold, protect, and promote the reputation and values of Nabingoola Public School.</p>
              </div>
            </div>
            <div className={styles.objective}>
              <span className={styles.number}>2.5</span>
              <div>
                <h3>Professional Networking &amp; Community Service</h3>
                <p>To network members for professional growth and community service.</p>
              </div>
            </div>
            <div className={styles.objective}>
              <span className={styles.number}>2.6</span>
              <div>
                <h3>Advancing Our Mission Through Lawful Activity</h3>
                <p>To engage in any lawful activity that advances the objectives of the Association.</p>
              </div>
            </div>
          </div>
        </section>

        {/* ARTICLE 3 */}
        <section className={styles.section}>
          <h2>Article 3: Membership</h2>
          <p>
            Membership is open to any person who attended Nabingoola Public School
            for at least one full term.
          </p>

          <div className={styles.membershipGrid}>
            <div className={styles.memberCard}>
              <h3>Ordinary Member</h3>
              <p>Pays annual subscription of UGX 20,000. Has full voting rights.</p>
            </div>
            <div className={styles.memberCard}>
              <h3>Life Member</h3>
              <p>Pays a one-time fee as set by AGM. Has full voting rights and is exempt from annual fees.</p>
            </div>
            <div className={styles.memberCard}>
              <h3>Honorary Member</h3>
              <p>Conferred by AGM on persons who rendered outstanding service. No voting rights, no subscription.</p>
            </div>
          </div>

          <div className={styles.memberRules}>
            <div className={styles.rule}>
              <strong>Admission</strong>
              <span>Application on prescribed form + payment of registration fee. Approved by Executive Committee.</span>
            </div>
            <div className={styles.rule}>
              <strong>Rights</strong>
              <span>Vote, be elected, attend meetings, access minutes/accounts, and propose motions.</span>
            </div>
            <div className={styles.rule}>
              <strong>Duties</strong>
              <span>Pay subscriptions, obey the constitution, attend meetings, and promote NAPOSA objectives.</span>
            </div>
            <div className={styles.rule}>
              <strong>Cessation</strong>
              <span>Membership ends by resignation, death, failure to pay fees for 2 consecutive years, or expulsion.</span>
            </div>
            <div className={styles.rule}>
              <strong>Discipline</strong>
              <span>A member acting against NAPOSA interests may be suspended or expelled by a ⅔ vote of the Executive Committee. Right of appeal to AGM within 30 days.</span>
            </div>
          </div>
        </section>

        {/* EXECUTIVE COMMITTEE */}
        <section className={styles.section}>
          <h2>Executive Committee</h2>
          <div className={styles.teamGrid}>
            {[
              { role: 'President', name: 'Ayebazibwe Emmanuel' },
              { role: 'Vice President', name: 'Natugonza Cresent' },
              { role: 'General Secretary', name: 'Asaba Nicholas Peter' },
              { role: 'Vice Secretary', name: 'Nalugwa Bridget' },
              { role: 'Publicity Secretary', name: 'Ssekabito David' },
              { role: 'Vice Publicity Secretary', name: 'Mary Gorret' },
              { role: 'Finance Secretary', name: 'Elly' },
              { role: 'Minister of Constitutional Affairs', name: 'Habib Tumwesige' },
              { role: 'Chief Advisor', name: 'Nsereko Emmy' },
              { role: 'Patron', name: 'Idah Nattabi' },
            ].map(m => (
              <div key={m.role} className={styles.teamCard}>
                <div className={styles.teamAvatar}>{m.name.charAt(0)}</div>
                <div className={styles.teamInfo}>
                  <span className={styles.teamRole}>{m.role}</span>
                  <strong>{m.name}</strong>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* COMMITMENT */}
        <section className={styles.section}>
          <h2>Our Commitment</h2>
          <p>
            NAPOSA is more than an alumni body — it is a movement. A movement driven by
            gratitude for what Nabingoola gave us, and by a determination to ensure that
            every student who passes through its gates has access to the same opportunities,
            if not better ones, than we had. Together, we are stronger. Together, we move
            Nabingoola forward.
          </p>
        </section>

      </div>
    </main>
  )
}
