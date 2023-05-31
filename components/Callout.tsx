import * as React from 'react'

import { CalloutBlock } from 'notion-types'
import { getBlockTitle } from 'notion-utils'

import { useNotionContext } from 'react-notion-x'

export const Callout: React.FC<{
  block: CalloutBlock
}> = ({ block }) => {
  const { recordMap } = useNotionContext()
  const content = getBlockTitle(block, recordMap)

  return (
    <>
      <button id={block.id} name={content}>
          {content}
      </button>
    </>
  )
}
