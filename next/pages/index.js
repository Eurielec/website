import Head from "next/head";

import { Layout, Wave, Intro, EESTEC, Footer, Sponsors } from "/components";

export default function Home() {
  return (
    <div className="home">
      <Head>
        <title>Eurielec</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <Wave>
          <Intro />
        </Wave>

        <EESTEC />
        <Sponsors />
        <Footer />
      </Layout>
    </div>
  );
}
