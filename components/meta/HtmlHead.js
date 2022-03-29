import Head from 'next/head';

export default function HtmlHead({ title = 'Web Application' }) {
  return (
    <Head>
      <meta httpEquiv='X-UA-Compatible' content='IE=edge' />
      <meta name='viewport' content='width=device-width, initial-scale=1.0' />
      <title>{title}</title>
    </Head>
  );
}
