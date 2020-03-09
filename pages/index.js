import Head from 'next/head'
import Link from 'next/link'

const Home = () => (
  <div className="container">
    <Head>
      <title>Anna Safonova</title>
      <link rel="icon" href="/favicon.ico" />
      <link href="https://fonts.googleapis.com/css?family=El+Messiri:700|Open+Sans:300&display=swap&subset=cyrillic" rel="stylesheet" />
    </Head>

    <main>
      <div className="layout">
        <div className="left">
          <h1 className="title">
            Anna Safonova
          </h1>
          <nav>
            <Link href="/about"><a>about</a></Link>
            <Link href="/projects"><a>my projects</a></Link>
            <Link href="/about"><a>my reviews</a></Link>
            <Link href="/about"><a>other</a></Link>
          </nav>
        </div>
        <div className="right">right</div>
      </div>
    </main>

    <footer>
      <a
        href="https://zeit.co?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
        target="_blank"
        rel="noopener noreferrer"
      >
        Powered by <img src="/zeit.svg" alt="ZEIT Logo" />
      </a>
    </footer>

    <style jsx>{`
      .container {
        min-height: 100vh;
        padding: 0 0.5rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }

      main {
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }

      footer {
        width: 100%;
        height: 100px;
        border-top: 1px solid #eaeaea;
        display: flex;
        justify-content: center;
        align-items: center;
      }

      footer img {
        margin-left: 0.5rem;
      }

      footer a {
        display: flex;
        justify-content: center;
        align-items: center;
      }

      a {
        color: inherit;
        text-decoration: none;
      }

      .title a {
        color: #0070f3;
        text-decoration: none;
      }

      .title a:hover,
      .title a:focus,
      .title a:active {
        text-decoration: underline;
      }

      .title {
        margin: 0;
        line-height: 1.15;
        font-size: 2rem;
        font-family: 'El Messiri', sans-serif;
      }

      .layout {
        display: flex;
        width: 100vw;
      }

      .layout div {
        width: 100%;
        padding: 2rem;
      }

      nav {
        display: flex;
        flex-direction: column;
      }

      .left {
        text-align: right;
        border-right: 1px solid black;
        height: 100vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
      }

    `}</style>

    <style jsx global>{`
      html,
      body {
        padding: 0;
        margin: 0;
        font-family: Open Sans, Segoe UI, Roboto, Oxygen,
          Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
      }

      * {
        box-sizing: border-box;
      }
    `}</style>
  </div>
)

export default Home
