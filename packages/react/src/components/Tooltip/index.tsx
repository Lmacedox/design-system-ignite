import { ComponentProps, ReactNode } from 'react'
import * as TooltipElement from '@radix-ui/react-tooltip'
import { TooltipContent } from './styles'

export interface TooltipProps extends ComponentProps<typeof TooltipContent> {
  children?: ReactNode
  message: string
}

export function Tooltip({ children, message, ...props }: TooltipProps) {
  return (
    <TooltipElement.Provider>
      <TooltipElement.Root>
        <TooltipElement.Trigger asChild>{children}</TooltipElement.Trigger>
        <TooltipElement.Portal>
          <TooltipContent sideOffset={10} {...props}>
            {message}
            <TooltipElement.Arrow />
          </TooltipContent>
        </TooltipElement.Portal>
      </TooltipElement.Root>
    </TooltipElement.Provider>
  )
}

Tooltip.displayName = 'Tooltip'
