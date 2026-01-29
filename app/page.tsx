import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>
          Welcome to&nbsp;
          <code className={styles.code}>High Vibe Life Coach</code>
        </p>
        <div>
          <a href="https://vercel.com">
            Powered by Vercel with Speed Insights enabled
          </a>
        </div>
      </div>

      <div className={styles.center}>
        <h1>Calm Daily Mindset App</h1>
        <p>Start your journey to a high-vibe lifestyle</p>
      </div>

      <div className={styles.grid}>
        <a href="#" className={styles.card}>
          <h2>
            Daily Affirmations <span>-&gt;</span>
          </h2>
          <p>Begin your day with positive affirmations</p>
        </a>

        <a href="#" className={styles.card}>
          <h2>
            Meditation <span>-&gt;</span>
          </h2>
          <p>Guided meditation sessions for mindfulness</p>
        </a>

        <a href="#" className={styles.card}>
          <h2>
            Gratitude Journal <span>-&gt;</span>
          </h2>
          <p>Track your daily gratitude and positive moments</p>
        </a>

        <a href="#" className={styles.card}>
          <h2>
            Insights <span>-&gt;</span>
          </h2>
          <p>View your progress and wellness insights</p>
        </a>
      </div>
    </main>
  );
}
