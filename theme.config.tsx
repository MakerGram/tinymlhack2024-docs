import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: <span>tinyML Hack Docs 📚</span>,
  project: {
    link: 'https://github.com/MakerGram/tinymlhack2024-docs',
  },
  docsRepositoryBase: 'https://github.com/MakerGram/tinymlhack2024-docs',
  footer: {
    text: 'tinyML Hackathon Docs',
  },
  head: (
    <>
      <title>TinyML Hack Docs 📚</title>
      <meta name="description" content="Explore guides, examples, and resources for the TinyML Hackathon 2024." />
      <meta property="og:title" content="TinyML Hack Docs 📚" />
      <meta property="og:description" content="Explore guides, examples, and resources for the TinyML Hackathon 2024." />
      <meta property="og:url" content="https://tinymlhack.com/docs" />
      <meta name="twitter:card" content="TinyML Hack Docs 📚" />
    </>
  ),
}

export default config

