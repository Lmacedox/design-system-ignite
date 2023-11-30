import { ComponentProps } from 'react'
import { styled } from '../styles'

export const Box = styled('div', {
  padding: '$4',
  borderRadius: '$md',
  backgroundColor: '$gray800',
  border: '1px solid',
})

export interface BoxProps extends ComponentProps<typeof Box> {}

Box.displayName = 'Box'
