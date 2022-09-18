import Layout from "../components/Layout";
import styles from '../styles/Resource.module.css'

export default function Resources() {
    return(
    <div className={styles.container}>
      <Layout>
      <main className={styles.main}>
        <p className={styles.description}>
        feeling stuck? need help getting started? we've compiled some resources to guide you on your coding journey. if you have other resources to suggest, please{' '}
          <code className={styles.code}> contact us!</code>
        </p>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h2>Coding 101 &rarr;</h2>
            <p>Our favorite resources for learning to code, from basic HTML to JavaScript exercises</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h2>Databases &rarr;</h2>
            <p>Resources for learning how to create databases, as well as for helping you decide which type of database best suits your needs</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/canary/examples"
            className={styles.card}
          >
            <h2>Examples &rarr;</h2>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h2>Deploy &rarr;</h2>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </main>
      </Layout>
    </div>
    )
}