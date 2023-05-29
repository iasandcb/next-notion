import * as React from 'react'

import Script from 'next/script'

import { CodeBlock } from 'notion-types'
import { getBlockTitle } from 'notion-utils'

import { useNotionContext } from 'react-notion-x'

export const Code: React.FC<{
  block: CodeBlock
}> = ({ block }) => {
  const { recordMap } = useNotionContext()
  const content = getBlockTitle(block, recordMap)
  const caption = block.properties.caption
  const language = block.properties.language[0][0]
//  const inlineStrategy = language === 'TypeScript' ? 'lazyOnload' : 'afterInteractive'
  const scriptType = language === 'TypeScript' ? 'text/typescript' : 'text/javascript'
  if (caption) {
    const link = caption.reduce(
      (accumulator, currentValue) => accumulator + currentValue[0],
      ''
    );
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
        <Script scriptType={scriptType}>
          {content}
        </Script>
      </>
    )    
  }
}
