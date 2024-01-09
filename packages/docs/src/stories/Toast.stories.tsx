import React, { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'

import { Button, Toast, ToastProps } from '@design-ui-system-lmdx/react'

const DemoToast = () => {
  const [open, setOpen] = useState(false)

  return (
    <div>
      <Button onClick={() => setOpen(true)}>Agendar</Button>
      <Toast
        open={open}
        onOpenChange={() => setOpen(false)}
        title="Agendamento realizado"
        description="Quarta-feira, 23 de Outubro às 16h"
      />
    </div>
  )
}

export default {
  title: 'Typography/Toast',
  component: DemoToast,
  args: {},
} as Meta<ToastProps>

export const Primary: StoryObj<ToastProps> = {}
