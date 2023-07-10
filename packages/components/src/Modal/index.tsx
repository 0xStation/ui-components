import React from 'react'
import { Root, Trigger, Portal, Overlay, Content, Close } from '@radix-ui/react-dialog'
import { Close as CloseIcon } from '../icons/action/Close'
import { cn } from '../lib/utils'
import { cva } from 'class-variance-authority'
import { ModalContext, useModalContext } from './ModalContext'
import { Button } from '../button'

export function Modal({
  children,
  ...props
}: { children: React.ReactNode; closeModal?: () => void } & React.ComponentProps<typeof Root> &
  React.ContextType<typeof ModalContext>) {
  return (
    <Root {...props}>
      <Portal>
        <Overlay className="fixed inset-0 z-40 bg-[rbga(0,0,0,0.5)] backdrop-blur-sm  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" />
        <ModalContext.Provider value={{ size: props.size }}>{children}</ModalContext.Provider>
      </Portal>
    </Root>
  )
}

export const ModalContent = React.forwardRef<
  React.ElementRef<typeof Content>,
  React.ComponentPropsWithoutRef<typeof Content> & { hideClose?: boolean }
>(({ className, hideClose = false, children, ...props }, ref) => (
  <Content
    ref={ref}
    className={cn(
      'fixed left-[50%] top-[50%] z-50 grid w-full max-w-xl translate-x-[-50%] translate-y-[-50%] border bg-black pt-10 pb-4 px-5 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-outdata-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] rounded-md md:w-full text-white border-wet-concrete100 gap-4',
      className,
    )}
    {...props}
  >
    {!hideClose && (
      <Close className="absolute right-4 top-4 [&_svg]:text-violet20 focus-visible:outline-wet-concrete100 group">
        <CloseIcon className="w-6 h-6 fill-concrete100 group-hover:fill-white  transition-all" />
      </Close>
    )}
    {children}
  </Content>
))

const headingVariants = cva('font-favoritpro text-marbleWhite capitalize', {
  variants: {
    size: {
      sm: 'text-heading-lg font-bold',
      lg: 'text-heading-2xl font-bold',
    },
  },
})

export const ModalHeader = React.forwardRef<
  HTMLHeadingElement,
  {
    className?: string
    children: React.ReactNode
  }
>(({ children, className }, ref) => {
  const { size } = useModalContext()
  return (
    <h2 className={cn(headingVariants({ size }), className)} ref={ref}>
      {children}
    </h2>
  )
})

ModalHeader.displayName = 'ModalHeader'
/**
 *
 */

/**
 * @note This is the Standard Modal Footer component with primary and secondary actions.
 * If you need to customize the footer do not use this component, instead create your own footer
 * component using the ModalFooter instead.
 */
export const StandardModalFooter = React.forwardRef<
  HTMLDivElement,
  {
    className?: string
    primaryLabel: string
    primaryAction: () => void
    primaryLoading?: boolean
    primaryDisabled?: boolean
    secondaryLabel: string
    secondaryAction: () => void
    secondaryLoading?: boolean
    secondaryDisabled?: boolean
  }
>(
  (
    {
      primaryLabel,
      primaryAction,
      primaryLoading,
      primaryDisabled,
      secondaryLabel,
      secondaryAction,
      secondaryLoading,
      secondaryDisabled,
      className,
    },
    ref,
  ) => {
    const { size } = useModalContext()
    const buttonSize = size === 'sm' ? 'md' : 'lg'
    return (
      <div className={cn('flex justify-end', className)} ref={ref}>
        <div className="flex w-full md:w-1/2 flex-col-reverse sm:flex-row sm:justify-end gap-1 md:gap-2">
          <Button
            fullWidth
            variant="secondary"
            onClick={secondaryAction}
            disabled={secondaryDisabled}
            loading={secondaryLoading}
            size={buttonSize}
          >
            {secondaryLabel}
          </Button>
          <Button
            fullWidth
            variant="primary"
            onClick={primaryAction}
            disabled={primaryDisabled}
            loading={primaryLoading}
            size={buttonSize}
          >
            {primaryLabel}
          </Button>
        </div>
      </div>
    )
  },
)
StandardModalFooter.displayName = 'StandardModalFooter'

export const ModalFooter = React.forwardRef<
  HTMLDivElement,
  {
    children: React.ReactNode
    className?: string
  }
>(({ children, className }, ref) => (
  <div className={cn('flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2', className)} ref={ref}>
    {children}
  </div>
))

ModalFooter.displayName = 'ModalFooter'

Modal.Content = ModalContent
Modal.StandardFooter = StandardModalFooter
Modal.Footer = ModalFooter
Modal.Header = ModalHeader
