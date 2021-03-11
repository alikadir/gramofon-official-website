import Head from 'next/head';

function About(props) {
  return (
    <div>
      <Head>
        <title>Gramofon - About</title>
      </Head>
      <h2>Gramofon</h2>
      <p>
        With a power of 22 years' experience in the automotive industry, we will develop a huge digital
        ecosystem for the automotive industry called Gramofon via modern technology.
      </p>
      <p>
        render time: <b>{props.date}</b>
      </p>
      <p>
        render time (utc): <b>{props.dateUtc}</b>
      </p>
    </div>
  );
}
export async function getStaticProps() {
  return { props: { dateUtc: new Date().toUTCString(), date: new Date().toString() } };
}

export default About;
