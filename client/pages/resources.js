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
            <h2>tutorials &rarr;</h2>
            <p>our favorite resources for learning to code, from basic HTML to building full-scale applications</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h2>compare &rarr;</h2>
            <p>how to decide which language, styling framework, or type of database best suits the needs of your project</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/canary/examples"
            className={styles.card}
          >
            <h2>highlights &rarr;</h2>
            <p>explore common issues for junior developers, fun quirks of various coding languages, and cool projects that we want to shoutout</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h2>documentation &rarr;</h2>
            <p>
              documentation (installation/usage information) for most coding languages and frameworks
            </p>
          </a>
          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h2>jargon &rarr;</h2>
            <p>
              keep hearing a word or phrase but don't really understand what it means? check out this page for definitions and examples
            </p>
          </a>
          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h2>templates &rarr;</h2>
            <p>
              basic templates for everything from html boilerplate code, to contact forms, to configuration files
            </p>
          </a>
        </div>
      </main>
      </Layout>
    </div>
    )
}