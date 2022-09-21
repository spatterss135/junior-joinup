import Head from 'next/head'
import Layout from '../components/Layout'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>jr.joinUp()</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
      <main className={styles.main}>
        <p className={styles.description}>
          a platform for amateur web developers, designers, and engineers to connect and collaborate
        </p>
      </main>
      </Layout>
    </div>
  )
}