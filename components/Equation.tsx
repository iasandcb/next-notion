import * as React from 'react'

import { EquationBlock } from 'notion-types'
import { getBlockTitle } from 'notion-utils'

import { useNotionContext } from 'react-notion-x'

export const Equation: React.FC<{
  block: EquationBlock
  className?: string
}> = ({ block, className }) => {
  const { recordMap } = useNotionContext()
  const content = getBlockTitle(block, recordMap)
  console.log('B', block.id);

  return (
    <>
      <button id={block.id}>
          {content}
      </button>
    </>
  )
}
