
import Head from 'next/head'

export default function NickPage() {
  return (
    <div className='page'>
      <Head>
        <title>Nick | CSCI 1000</title>
        <meta
          name='description'
          content='Nick’s CSCI 1000 page exploring the connection between computer science and aerospace engineering.'
        />
      </Head>

      <header>
        <a href='/'>&larr; Group homepage</a>
        <span>CSCI 1000</span>
      </header>

      <main>
        <p className='label'>Nick · Personal page</p>
        <h1>Combining computer science and aerospace engineering</h1>

        <p className='intro'>
          I'm Nick, a Computer Science major with a strong interest in
          aerospace engineering. I'm especially interested in how
          programming, algorithms, and mathematical models can be used
          to solve problems in aviation and space exploration. For my
          project, I came up with OrbitLab, a satellite orbit simulator
          that uses JavaScript to model how satellites move around Earth.
        </p>

        <section aria-labelledby='project-heading'>
          <h2 id='project-heading'>My project: OrbitLab</h2>

          <p className='project-intro'>
            OrbitLab is a concept for a program that calculates and
            visualizes a satellite's position as it travels around Earth.
            It uses basic orbital mathematics and JavaScript to simulate
            movement over time. The goal is to show how computer
            programming can help engineers understand and study space.
          </p>

          <h3>How it works</h3>

          <ol>
            <li>
              <strong>Set the parameters</strong>
              <p>
                Choose basic values such as the satellite's orbital
                altitude and estimated orbital period.
              </p>
            </li>

            <li>
              <strong>Calculate movement</strong>
              <p>
                Use JavaScript and mathematical equations to estimate
                the satellite's position as time passes.
              </p>
            </li>

            <li>
              <strong>Visualize the orbit</strong>
              <p>
                Display the satellite moving along a simplified circular
                path around Earth.
              </p>
            </li>
          </ol>
        </section>

        <section className='about' aria-labelledby='interest-heading'>
          <h2 id='interest-heading'>Why I'm interested</h2>
          <p>
            Aerospace engineering and computer science are closely
            connected. Modern aircraft, spacecraft, and satellites
            depend on software to process information, calculate
            trajectories, and control complex systems. I want to
            explore how I can use my background in programming to
            contribute to the future of aerospace technology.
          </p>
        </section>

        <p className='note'>
          OrbitLab is a conceptual educational project using a
          simplified orbital model, rather than real satellite
          navigation software.
        </p>
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

        header a {
          color: #275642;
          text-underline-offset: 0.25em;
        }

        header span, .label {
          color: #36594a;
          font-weight: 650;
        }

        main {
          padding: clamp(2rem, 7vw, 5.25rem) 0 3rem;
        }

        .label {
          margin: 0 0 0.8rem;
        }

        h1 {
          max-width: 17ch;
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
          margin-bottom: 1.5rem;
        }

        h2 {
          margin: 0 0 1rem;
          font-size: 1.6rem;
        }

        h3 {
          margin: 1.7rem 0 1rem;
          font-size: 1.15rem;
        }

        .project-intro, .about p {
          line-height: 1.65;
          max-width: 65ch;
        }

        ol {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1rem 2.3rem;
          margin: 0;
          padding-left: 1.4rem;
        }

        li::marker {
          color: #b8e59a;
          font-weight: 700;
        }

        li p {
          margin: 0.35rem 0 0;
          line-height: 1.5;
        }

        .about {
          background: #dce9d8;
          color: #132d24;
        }

        .note {
          color: #527060;
          font-size: 0.85rem;
          line-height: 1.5;
        }

        @media (max-width: 640px) {
          ol {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      <style jsx global>{`
        body {
          margin: 0;
        }
      `}</style>
    </div>
  )
}
