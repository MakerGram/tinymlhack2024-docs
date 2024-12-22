// pages/_document.js
import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          {/* Set custom Open Graph meta tags */}
          <meta property="og:title" content="TinyML Hack Docs 📚" />
          <meta property="og:description" content="Explore guides, examples, and resources for the TinyML Hackathon 2024." />
          <meta property="og:url" content="https://tinymlhack.com/docs" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="description" content="Explore guides, examples, and resources for the TinyML Hackathon 2024." />

          {/* You can also define other meta tags as needed */}
          <meta name="robots" content="index, follow" />
          <meta property="og:type" content="website" />
          <meta property="og:image" content="https://example.com/your-image.jpg" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
