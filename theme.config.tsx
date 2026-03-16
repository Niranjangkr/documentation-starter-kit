import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: (
    <img
      src="/logo.svg"
      alt="Agile Receivables"
      style={{ height: 50, width: 'auto' }}
    />
  ),
  // Force light mode and hide the dark/light toggle
  darkMode: false,
  nextThemes: {
    forcedTheme: 'light',
  },
  footer: {
    text: 'Agile Receivables API Docs',
  },
}

export default config
