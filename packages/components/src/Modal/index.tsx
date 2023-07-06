import React from 'react'
import { Root, Trigger, Portal, Overlay, Content } from '@radix-ui/react-dialog'

export function Modal({ children, open, ...props }: { children: React.ReactNode } & React.ComponentProps<typeof Root>) {
  return (
    <Root open={open ? open : true} {...props}>
      <Portal>
        <Overlay className="fixed inset-0 z-50 bg-[rbga(0,0,0,0.5)] backdrop-blur-sm  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" />
        {children}
      </Portal>
    </Root>
  )
}

export const ModalContent = React.forwardRef<
  React.ElementRef<typeof Content>,
  React.ComponentPropsWithoutRef<typeof Content>
>(({ className, children, ...props }, ref) => (
  <Content ref={ref} className={className} {...props}>
    {children}
  </Content>
))

// DialogOverlay = React.forwardRef<
//   React.ElementRef<typeof DialogPrimitive.Overlay>,
//   React.ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay>
// >(({ className, ...props }, ref) => (
//   <DialogPrimitive.Overlay
//     ref={ref}
//     className={cn(
//       "fixed inset-0 z-50 bg-background/80 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
//       className
//     )}
//     {...props}
//   />
// ))
// DialogOverlay.displayName = DialogPrimitive.Overlay.displayName
