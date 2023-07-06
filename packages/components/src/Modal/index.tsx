import React from 'react'
import { Root, Trigger, Portal, Overlay, Content, Close } from '@radix-ui/react-dialog'
import { Close as CloseIcon } from '../icons/informative/close'

export function Modal({
  children,
  open,
  ...props
}: { children: React.ReactNode; closeModal?: () => void } & React.ComponentProps<typeof Root>) {
  return (
    <Root open>
      <Portal>
        <Overlay className="fixed inset-0 z-40 bg-[rbga(0,0,0,0.5)] backdrop-blur-sm  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" />
        {children}
      </Portal>
    </Root>
  )
}

export const ModalContent = React.forwardRef<
  React.ElementRef<typeof Content>,
  React.ComponentPropsWithoutRef<typeof Content> & { closeModal?: () => void }
>(({ className, closeModal, children, ...props }, ref) => (
  <Content
    ref={ref}
    className="fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-black p-6 shadow-lg duration-200 
      data-[state=open]:animate-in data-[state=closed]:animate-out 
      data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 
      data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] 
      data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] 
      sm:rounded-lg md:w-full text-white border-wet-concrete100"
    {...props}
  >
    {children}
    <Close className="absolute top-0 right-0 p-2 [&_svg]:text-violet20 focus-visible:outline-wet-concrete100 group">
      <CloseIcon className="w-6 h-6 group-hover:stroke-white  transition-all" />
    </Close>
  </Content>
))
