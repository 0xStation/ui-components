import React from 'react'
import { Root, Portal, Overlay, Content, Close } from '@radix-ui/react-dialog'
import { Close as CloseIcon } from '../icons/Close'
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
        <Overlay className="ui-fixed ui-inset-0 ui-z-40 ui-bg-[rbga(0,0,0,0.5)] ui-backdrop-blur-sm  data-[state=open]:ui-animate-in data-[state=closed]:ui-animate-out data-[state=closed]:ui-fade-out-0 data-[state=open]:ui-fade-in-0" />
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
      'ui-fixed ui-left-[50%] ui-top-[50%] ui-z-50 ui-grid ui-w-full ui-max-w-xl ui-translate-x-[-50%] ui-translate-y-[-50%] ui-border ui-bg-black ui-pt-10 ui-pb-4 ui-px-5 ui-shadow-lg ui-duration-200 data-[state=open]:ui-animate-in data-[state=closed]:ui-animate-out data-[state=closed]:ui-fade-out-0 data-[state=open]:ui-fade-in-0 data-[state=closed]:ui-zoom-out-95 data-[state=open]:ui-zoom-in-95 data-[state=closed]:ui-slide-out-to-left-1/2 data-[state=closed]:ui-slide-out-to-top-[48%] data-[state=open]:ui-slide-in-from-left-1/2 data-[state=open]:ui-slide-in-from-top-[48%] ui-rounded-md md:ui-w-full ui-text-white ui-border-wet-concrete100 ui-gap-4',
      className,
    )}
    {...props}
  >
    {!hideClose && (
      <Close className="ui-absolute ui-right-4 ui-top-4 [&_svg]:ui-text-violet20 focus-visible:ui-outline-wet-concrete100 group">
        <CloseIcon className="ui-w-6 ui-h-6 ui-fill-concrete100 group-hover:ui-fill-white ui-transition-all" />
      </Close>
    )}
    {children}
  </Content>
))

const headingVariants = cva('ui-font-favoritpro ui-text-marbleWhite ui-capitalize', {
  variants: {
    size: {
      sm: 'ui-text-heading-lg ui-font-bold',
      lg: 'ui-text-heading-2xl ui-font-bold',
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
      <div className={cn('ui-flex ui-justify-end', className)} ref={ref}>
        <div className="ui-flex ui-w-full md:ui-w-1/2 ui-flex-col-reverse sm:ui-flex-row sm:ui-justify-end ui-gap-1 md:ui-gap-2">
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
  <div
    className={cn('ui-flex ui-flex-col-reverse sm:ui-flex-row sm:ui-justify-end sm:ui-space-x-2', className)}
    ref={ref}
  >
    {children}
  </div>
))

ModalFooter.displayName = 'ModalFooter'

Modal.Content = ModalContent
Modal.StandardFooter = StandardModalFooter
Modal.Footer = ModalFooter
Modal.Header = ModalHeader

export { Root, Portal }
