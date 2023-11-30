import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'

import { Box, Text, TextInput, TextInputProps } from '@ignite-ui/react'

export default {
  title: 'form/TextInput',
  component: TextInput,
  args: {},
  argTypes: {
    children: { control: 'text' },
  },
} as Meta<TextInputProps>

export const Primary: StoryObj<TextInputProps> = {
  args: {
    placeholder: 'Type your name',
  },
}

export const Disabled: StoryObj<TextInputProps> = {
  args: {
    disabled: true,
  },
}

export const WithPrefix: StoryObj<TextInputProps> = {
  args: {
    prefix: 'cal.com/',
  },
}

export const WithLabel: StoryObj<TextInputProps> = {
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
