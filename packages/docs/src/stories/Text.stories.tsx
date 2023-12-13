import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'

import { Text, TextProps } from '@design-ui-system-lmdx/react'

export default {
  title: 'Typography/Text',
  component: Text,
  args: {
    children:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur quis vero, aliquam quam sapiente doloribus eveniet, corrupti facilis blanditiis hic ratione aliquid magni.',
  },
  argTypes: {
    children: { control: 'text' },
  },
} as Meta<TextProps>

export const Primary: StoryObj<TextProps> = {}
