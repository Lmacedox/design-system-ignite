import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'

import { Box, Text, TextArea, TextAreaProps } from '@ignite-ui/react'

export default {
  title: 'form/TextArea',
  component: TextArea,
  args: {},
  argTypes: {
    children: { control: 'text' },
  },
} as Meta<TextAreaProps>

export const Primary: StoryObj<TextAreaProps> = {
  args: {
    placeholder: 'Type your name',
  },
}

export const Disabled: StoryObj<TextAreaProps> = {
  args: {
    disabled: true,
  },
}

export const WithPrefix: StoryObj<TextAreaProps> = {
  args: {
    prefix: 'cal.com/',
  },
}

export const WithLabel: StoryObj<TextAreaProps> = {
  args: {
    placeholder: 'Type your name',
  },
  decorators: [
    (Story) => {
      return (
        <Box css={{ display: 'flex', flexDirection: 'column', gap: '$2' }}>
          <Text size="sm">User</Text>
          {Story()}
        </Box>
      )
    },
  ],
}
