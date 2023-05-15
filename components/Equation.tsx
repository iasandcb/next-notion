import * as React from 'react'

import { EquationBlock } from 'notion-types'
import { getBlockTitle } from 'notion-utils'

import { useNotionContext } from 'react-notion-x'

export const Equation: React.FC<{
  block: EquationBlock
}> = ({ block }) => {
  const { recordMap } = useNotionContext()
  const content = getBlockTitle(block, recordMap)

  return (
    <>
      <button id={block.id}>
          {content}
      </button>
    </>
  )
}
