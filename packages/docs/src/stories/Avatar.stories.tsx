import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'

import { Avatar, AvatarProps } from '@design-ui-system-lmdx/react'

export default {
  title: 'Data display/Avatar',
  component: Avatar,
} as Meta<AvatarProps>

export const Primary: StoryObj<AvatarProps> = {
  args: {
    src: 'https://avatars.githubusercontent.com/u/62385353?s=400&u=69885f3c81a1268a38776d8c0f5db5bd45279fa7&v=4',
    alt: 'Lucas Macedo',
  },
}

export const WithFallback: StoryObj<AvatarProps> = {}
