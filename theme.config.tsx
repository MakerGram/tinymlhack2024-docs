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
      <title>tinyML Hack Docs 📚</title>
      <meta name="description" content="Explore guides, examples, and resources for the TinyML Hackathon." />
    </>
  ),
}

export default config
