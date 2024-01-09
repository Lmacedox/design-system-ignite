import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'

import { Tooltip, TooltipProps } from '@design-ui-system-lmdx/react'

export default {
  title: 'Typography/Tooltip',
  component: Tooltip,
  args: {
    children: <button>Hover me!</button>,
    message: 'Tooltip Message!',
  },
  decorators: [
    (Story) => {
      return (
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
            height: '40vh',
            gap: '$2',
          }}
        >
          {Story()}
        </div>
      )
    },
  ],
  argTypes: {
    children: { control: false },
    side: {
      options: ['top', 'right', 'bottom', 'left'],
      control: { type: 'select' },
    },
  },
} as Meta<TooltipProps>

export const Primary: StoryObj<TooltipProps> = {}
