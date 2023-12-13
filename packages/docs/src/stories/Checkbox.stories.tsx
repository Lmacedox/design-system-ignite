import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'

import { Box, Text, CheckBox, CheckboxProps } from '@design-ui-system-lmdx/react'

export default {
  title: 'form/Checkbox',
  component: CheckBox,
  decorators: [
    (Story) => {
      return (
        <Box css={{ display: 'flex', flexDirection: 'row', gap: '$2' }}>
          {Story()}
          <Text size="sm">Aceitar termos</Text>
        </Box>
      )
    },
  ],
} as Meta<CheckboxProps>

export const Primary: StoryObj<CheckboxProps> = {}
