import * as React from 'react'

import Script from 'next/script'

import { CodeBlock } from 'notion-types'
import { getBlockTitle } from 'notion-utils'

import { useNotionContext } from 'react-notion-x'

export const Code: React.FC<{
  block: CodeBlock
  defaultLanguage?: string
  className?: string
}> = ({ block, defaultLanguage = 'javascript', className }) => {
  const { recordMap } = useNotionContext()
  const content = getBlockTitle(block, recordMap)
  const caption = block.properties.caption

  if (caption) {
    let link = '';
    for (let c of caption) {
      link += c[0]
    }
    console.log('L', link);
    return (
      <>
        <Script 
          src={link} 
          strategy="beforeInteractive"
        />
      </>
    )
  } else {
    return (
      <>
        <Script>
          {content}
        </Script>
      </>
    )    
  }
}
