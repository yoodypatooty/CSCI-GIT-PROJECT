import Head from 'next/head'

export default function YoodyPage() {
  return (
    <div className='page'>
      <Head>
        <title>Yoody | CSCI 1000</title>
        <meta name='description' content='Yoody’s CSCI 1000 page about building a checkpoint in Roblox Studio.' />
      </Head>

      <header>
        <a href='/'>&larr; Group homepage</a>
        <span>CSCI 1000</span>
      </header>

      <main>
        <p className='label'>Yoody · Personal page</p>
        <h1>Building a Roblox checkpoint</h1>
        <p className='intro'>I chose Roblox Studio for my page. A checkpoint is a small feature that makes an obstacle course feel fair. When a player misses a jump, they can retry from the last checkpoint they reached.</p>

        <section aria-labelledby='checkpoint-heading'>
          <h2 id='checkpoint-heading'>How it works</h2>
          <ol>
            <li><strong>Mark the spot</strong><p>Place an easy-to-see checkpoint after a tricky section.</p></li>
            <li><strong>Track progress</strong><p>Record each player’s latest checkpoint when they reach it.</p></li>
            <li><strong>Test the retry</strong><p>Miss a jump on purpose and check where the player respawns.</p></li>
          </ol>
        </section>
      </main>

      <style jsx>{`
        .page {
          min-height: 100vh;
          background: #f2f5ed;
          color: #132d24;
          font-family: Inter, 'Segoe UI', sans-serif;
        }
        header, main {
          width: min(100% - 3rem, 58rem);
          margin-inline: auto;
        }
        header {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          align-items: baseline;
          gap: 0.75rem;
          padding: 1.5rem 0;
          border-bottom: 1px solid #b7c8b8;
          font-size: 0.9rem;
        }
        header a { color: #275642; text-underline-offset: 0.25em; }
        header span, .label { color: #36594a; font-weight: 650; }
        main { padding: clamp(2rem, 7vw, 5.25rem) 0 3rem; }
        .label { margin: 0 0 0.8rem; }
        h1 {
          max-width: 16ch;
          margin: 0;
          font-size: clamp(2.35rem, 7vw, 5.4rem);
          line-height: 1.02;
          letter-spacing: -0.06em;
        }
        .intro {
          max-width: 57ch;
          margin: 1.4rem 0 2.6rem;
          font-size: clamp(1.05rem, 2vw, 1.25rem);
          line-height: 1.6;
        }
        section {
          border-radius: 0.9rem;
          background: #174233;
          color: #fcfff8;
          padding: clamp(1.1rem, 4vw, 2rem);
        }
        h2 { margin: 0 0 1rem; font-size: 1.45rem; }
        ol {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1rem 2.3rem;
          margin: 0;
          padding-left: 1.4rem;
        }
        li::marker { color: #b8e59a; font-weight: 700; }
        li p { margin: 0.35rem 0 0; line-height: 1.5; }
        @media (max-width: 640px) {
          ol { grid-template-columns: 1fr; }
        }
      `}</style>
      <style jsx global>{`
        body { margin: 0; }
      `}</style>
    </div>
  )
}
