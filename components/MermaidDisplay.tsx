'use client'

import React from 'react'
import { MermaidDiagram } from '@lightenna/react-mermaid-diagram'

type MermaidDisplayProps = {
  chart: string
}

export function MermaidDisplay({ chart }: MermaidDisplayProps) {
  return (
    <div style={{ overflowX: 'auto' }}>
      <MermaidDiagram>{chart}</MermaidDiagram>
    </div>
  )
}

