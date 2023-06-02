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
      <div id={content}>
      </div>
    </>
  )
}
