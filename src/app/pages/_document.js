import { Html, Head, Main, NextScript } from 'next/document';
import Link from 'next/link';
import img from '../../../public/images/image2.jpg'

export default function Document() {
  return (
    <Html>
      <Head>
        {/* Preload the background image */}
        {/* <Link rel="preload" href={img} as="image"></Link> */}
      </Head>
      <body>
        <link rel="preload" href="/images/image2.jpg" as="image"/>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
