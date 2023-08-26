import React from 'react'
import { Root, Trigger, Portal, Content } from '@radix-ui/react-popover'
import { cn } from '../lib/utils'

export const Tooltip = ({
  children,
  ...props
}: {
  children: React.ReactNode
} & Omit<React.ComponentProps<typeof Root>, 'open'>) => {
  return <Root {...props}>{children}</Root>
}

Tooltip.Trigger = Trigger

export const TooltipContent = React.forwardRef<
  React.ElementRef<typeof Content>,
  React.ComponentPropsWithoutRef<typeof Content> & {
    /**
     * Whether the tooltip should be rendered inside a portal.
     * @default true
     */
    portal?: boolean
  }
>(({ className, sideOffset = 4, portal = true, children, ...props }, ref) => {
  const content = (
    <Content
      sideOffset={sideOffset}
      ref={ref}
      className={cn('ui-rounded-md ui-bg-gray-90 ui-text-white ui-py-3 ui-px-4 ui-text-base-xs', className)}
      {...props}
    >
      {children}
    </Content>
  )

  if (!portal) return content
  return <Portal>{content}</Portal>
})

TooltipContent.displayName = 'TooltipContent'

Tooltip.Content = TooltipContent
