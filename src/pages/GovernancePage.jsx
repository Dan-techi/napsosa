import styles from './GovernancePage.module.css'

const executives = [
  { num: 1, role: 'President' },
  { num: 2, role: 'Vice President' },
  { num: 3, role: 'General Secretary' },
  { num: 4, role: 'Treasurer' },
  { num: 5, role: 'Organising Secretary' },
  { num: 6, role: 'Publicity & Alumni Relations Secretary' },
  { num: 7, role: 'Committee Member – Projects' },
  { num: 8, role: 'Committee Member – Welfare' },
  { num: 9, role: 'Committee Member – Education & Mentorship' },
]

const duties = [
  { role: 'President', desc: 'Presides over meetings, provides leadership, is chief signatory to bank account, and represents NAPSSOSA externally.' },
  { role: 'Vice President', desc: 'Deputises the President in their absence.' },
  { role: 'General Secretary', desc: 'Keeps the membership register, records minutes, handles correspondence, and issues notices.' },
  { role: 'Treasurer', desc: 'Keeps proper books of accounts, prepares budget, presents financial reports, and is joint signatory to the bank account.' },
  { role: 'Organising Secretary', desc: 'Plans and coordinates meetings, reunions, and fundraising events.' },
  { role: 'Publicity & Alumni Relations Secretary', desc: 'Manages the database, social media, newsletters, and links with school administration.' },
  { role: 'Committee Members', desc: 'Head sub-committees and support Executive programmes in their respective portfolios.' },
]

export default function GovernancePage() {
  return (
    <main className={styles.page}>
      <div className={styles.hero}>
        <h1>Governance &amp; Constitution</h1>
        <p>NAPSSOSA — Articles 4 to 13</p>
      </div>

      <div className={styles.container}>

        {/* ARTICLE 4 */}
        <section className={styles.section}>
          <h2>Article 4: Organs of NAPSSOSA</h2>
          <div className={styles.organsGrid}>
            <div className={styles.organ}>
              <i className="fa fa-landmark" />
              <h3>General Assembly / AGM</h3>
              <p>The supreme decision-making body of the Association.</p>
            </div>
            <div className={styles.organ}>
              <i className="fa fa-people-group" />
              <h3>Executive Committee</h3>
              <p>Manages the day-to-day affairs of the Association.</p>
            </div>
            <div className={styles.organ}>
              <i className="fa fa-shield-halved" />
              <h3>Board of Trustees</h3>
              <p>Custodians of all immovable property of the Association.</p>
            </div>
            <div className={styles.organ}>
              <i className="fa fa-sitemap" />
              <h3>Sub-Committees</h3>
              <p>Created by the Executive for specific projects — e.g. Welfare, Education &amp; Mentorship.</p>
            </div>
          </div>
        </section>

        {/* ARTICLE 5 */}
        <section className={styles.section}>
          <h2>Article 5: General Assembly / AGM</h2>
          <div className={styles.rulesList}>
            <div className={styles.ruleItem}>
              <strong>Frequency</strong>
              <span>Once every year, within 4 months after the end of the financial year.</span>
            </div>
            <div className={styles.ruleItem}>
              <strong>Notice</strong>
              <span>21 days' written notice via SMS, WhatsApp, email, or public notice. Agenda attached.</span>
            </div>
            <div className={styles.ruleItem}>
              <strong>Quorum</strong>
              <span>1/3 of registered members or 50 members, whichever is less. If no quorum after 30 minutes, meeting adjourns 30 minutes then proceeds with members present.</span>
            </div>
            <div className={styles.ruleItem}>
              <strong>Voting</strong>
              <span>One member, one vote. Simple majority for normal decisions. Secret ballot for elections if requested by 10 or more members.</span>
            </div>
            <div className={styles.ruleItem}>
              <strong>Special General Meeting</strong>
              <span>Called by the Executive or on written request by 20% of members. 14 days' notice required. Only agenda items discussed.</span>
            </div>
          </div>
          <div className={styles.powers}>
            <h3>Powers of the AGM</h3>
            <ul>
              <li>Receive the Chairperson's report, Secretary's report, and Treasurer's audited accounts</li>
              <li>Elect the Executive Committee every 2 years</li>
              <li>Approve budget and set subscription rates</li>
              <li>Amend the constitution — requires a ⅔ majority</li>
              <li>Appoint auditors and trustees</li>
              <li>Decide on dissolution — requires a ¾ majority</li>
            </ul>
          </div>
        </section>

        {/* ARTICLE 6 */}
        <section className={styles.section}>
          <h2>Article 6: Executive Committee</h2>
          <p className={styles.intro}>
            9 members elected by the AGM for a 2-year term, eligible for one re-election.
            Meetings held at least once every month. Quorum = 5 members.
          </p>
          <div className={styles.execGrid}>
            {executives.map(e => (
              <div key={e.num} className={styles.execCard}>
                <span className={styles.execNum}>{String(e.num).padStart(2, '0')}</span>
                <span className={styles.execRole}>{e.role}</span>
              </div>
            ))}
          </div>
          <div className={styles.rulesList} style={{ marginTop: '24px' }}>
            <div className={styles.ruleItem}>
              <strong>Powers</strong>
              <span>Implement AGM decisions, admit members, manage funds, form sub-committees, and oversee projects.</span>
            </div>
            <div className={styles.ruleItem}>
              <strong>Vacancies</strong>
              <span>The Executive co-opts a member to serve until the next AGM.</span>
            </div>
          </div>
        </section>

        {/* ARTICLE 7 */}
        <section className={styles.section}>
          <h2>Article 7: Duties of Office Bearers</h2>
          <div className={styles.dutiesGrid}>
            {duties.map(d => (
              <div key={d.role} className={styles.dutyCard}>
                <h3>{d.role}</h3>
                <p>{d.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ARTICLE 8 */}
        <section className={styles.section}>
          <h2>Article 8: Board of Trustees</h2>
          <div className={styles.rulesList}>
            <div className={styles.ruleItem}>
              <strong>Appointment</strong>
              <span>3 trustees appointed by the AGM from among life members of good standing, for a 5-year term.</span>
            </div>
            <div className={styles.ruleItem}>
              <strong>Role</strong>
              <span>Hold all land, buildings, and major assets in trust for NAPSSOSA.</span>
            </div>
            <div className={styles.ruleItem}>
              <strong>Authority</strong>
              <span>Cannot sell, mortgage, or lease property without a ⅔ AGM resolution.</span>
            </div>
          </div>
        </section>

        {/* ARTICLE 9 */}
        <section className={styles.section}>
          <h2>Article 9: Finance</h2>
          <div className={styles.rulesList}>
            <div className={styles.ruleItem}>
              <strong>Sources of Funds</strong>
              <span>Registration fees, annual/life subscriptions, donations, grants, fundraising, and investments.</span>
            </div>
            <div className={styles.ruleItem}>
              <strong>Bank Account</strong>
              <span>Opened in the name of NAPSSOSA. Operated by 3 signatories: President, Treasurer, and General Secretary — any 2 to sign.</span>
            </div>
            <div className={styles.ruleItem}>
              <strong>Financial Year</strong>
              <span>1st January to 31st December.</span>
            </div>
            <div className={styles.ruleItem}>
              <strong>Audit</strong>
              <span>Annual audit by a qualified auditor appointed by the AGM.</span>
            </div>
            <div className={styles.ruleItem}>
              <strong>Subscriptions</strong>
              <span>Ordinary: UGX 20,000 per year. Life: UGX — one-time. Registration: UGX —. Rates reviewed by AGM.</span>
            </div>
          </div>
        </section>

        {/* ARTICLE 10 */}
        <section className={styles.section}>
          <h2>Article 10: Meetings &amp; Procedure</h2>
          <div className={styles.rulesList}>
            <div className={styles.ruleItem}>
              <strong>Notice</strong>
              <span>As per Articles 5.2 and 6.2.</span>
            </div>
            <div className={styles.ruleItem}>
              <strong>Minutes</strong>
              <span>Kept by the Secretary and confirmed at the next meeting.</span>
            </div>
            <div className={styles.ruleItem}>
              <strong>Order of Business</strong>
              <span>Call to order → Prayer → Reading of previous minutes → Matters arising → Reports → Elections/Business → Any other business → Adjournment.</span>
            </div>
          </div>
        </section>

        {/* ARTICLES 11–13 */}
        <section className={styles.section}>
          <h2>Articles 11–13: Amendment, Dissolution &amp; Disputes</h2>
          <div className={styles.rulesList}>
            <div className={styles.ruleItem}>
              <strong>Amendment of Constitution (Art. 11)</strong>
              <span>Proposed by the Executive or 20% of members in writing. 21 days' notice to all members. Adoption requires a ⅔ majority vote at AGM or SGM.</span>
            </div>
            <div className={styles.ruleItem}>
              <strong>Dissolution (Art. 12)</strong>
              <span>Decision by ¾ majority at a Special General Meeting called for dissolution. After settling all debts, remaining assets are transferred to Nabingoola Public Secondary School or another registered charity with similar objectives. No member shall receive personal benefit.</span>
            </div>
            <div className={styles.ruleItem}>
              <strong>Interpretation &amp; Dispute Resolution (Art. 13)</strong>
              <span>The Executive Committee interprets this constitution. Disputes among members are first addressed by Executive mediation. Unresolved disputes are referred to arbitration under Ugandan law.</span>
            </div>
          </div>
        </section>

      </div>
    </main>
  )
}
