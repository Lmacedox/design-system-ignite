import { ComponentProps } from 'react'
import * as ToastElement from '@radix-ui/react-toast'
import {
  ToastClose,
  ToastDescription,
  ToastRoot,
  ToastTitle,
  ToastViewPort,
} from './styles'
import { X } from 'phosphor-react'

export interface ToastProps extends ComponentProps<typeof ToastRoot> {
  title?: string
  description?: string
}

export function Toast({ title, description, ...props }: ToastProps) {
  return (
    <ToastElement.Provider>
      <ToastRoot {...props}>
        {title && <ToastTitle>{title}</ToastTitle>}
        <ToastClose asChild>
          <X
            weight="light"
            size={20}
            color="#A9A9B2"
            style={{ cursor: 'pointer' }}
          />
        </ToastClose>

        {description && <ToastDescription>{description}</ToastDescription>}
      </ToastRoot>

      <ToastViewPort />
    </ToastElement.Provider>
  )
}

Toast.displayName = 'Toast'
