import Head from "next/head";

export default function Seo({ title }) {
  return (
    <Head>
      <title>{title.title} | Next Movies</title>
      <meta property="og:title" content="My page title" key="title" />
    </Head>
  );
}
