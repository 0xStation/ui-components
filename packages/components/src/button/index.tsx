import React from 'react'
import { cva, VariantProps } from 'class-variance-authority'
import { cn } from '../lib/utils'

//temporary button setup
const buttonVariants = cva(
  'ui-flex ui-flex-shrink ui-items-center ui-justify-center ui-rounded-md ui-text-center ui-font-favoritpro ui-border ui-outline-none ui-font-bold ui-transition-all ui-duration-75  disabled:ui-opacity-50 disabled:ui-cursor-not-allowed disabled:ui-pointer-events-none ui-whitespace-nowrap ui-text-ellipsis ui-overflow-hidden',
  {
    variants: {
      variant: {
        primary: '!ui-bg-violet-100 ui-border-violet-100 hover:ui-opacity-80 !ui-text-black ',
        secondary: '!ui-bg-transparent ui-border-violet-100 hover:ui-bg-gray-90 !ui-text-violet-100',
        input: '!ui-bg-gray-100 ui-border-gray-100 !ui-text-marbleWhite hover:ui-bg-gray-80',
        unemphasized: '!ui-bg-transparent ui-border-white hover:ui-bg-gray-90 !ui-text-white',
        error: '!ui-bg-transparent ui-border-red-100 hover:ui-bg-gray-90 !ui-text-red-100',
        danger: '!ui-bg-red-100 !ui-text-white ui-border-red-100 hover:ui-bg-gray-90',
      },
      size: {
        sm: 'ui-px-4 ui-text-base-xxs ui-max-h-7 ui-h-7',
        md: 'ui-px-5 ui-text-base-sm ui-max-h-9 ui-h-9',
        lg: 'ui-px-6 ui-text-base-md ui-max-h-11 ui-h-11',
      },
      fullWidth: {
        true: 'ui-w-full',
      },
    },
  },
)

export const Button = React.forwardRef<
  HTMLButtonElement,
  React.ComponentPropsWithoutRef<'button'> &
    VariantProps<typeof buttonVariants> & {
      children: React.ReactNode
      loading?: boolean
    }
>(({ children, className, variant = 'primary', size = 'md', fullWidth = false, loading, ...props }, ref) => {
  const buttonRef = React.useRef<HTMLButtonElement>(null)

  React.useImperativeHandle(ref, () => buttonRef.current as HTMLButtonElement)

  return (
    <button
      ref={buttonRef}
      className={cn(buttonVariants({ variant, size, fullWidth }), loading && 'ui-cursor-wait', className)}
      {...props}
    >
      {loading ? (
        <Spinner variant={variant} size={size} />
      ) : typeof children === 'string' ? (
        <div className="ui-whitespace-nowrap ui-text-ellipsis ui-overflow-hidden">{children}</div>
      ) : (
        children
      )}
    </button>
  )
})

const spinnerVariants = cva('animate-spin', {
  variants: {
    variant: {
      primary: 'ui-text-black',
      secondary: 'ui-text-violet-100',
      input: 'ui-text-marbleWhite',
      unemphasized: 'ui-text-white',
      error: 'ui-text-red100',
      danger: 'ui-text-white',
    },
    size: {
      sm: 'ui-w-5 ui-h-5',
      md: 'ui-w-6 ui-h-6',
      lg: 'ui-w-8 ui-h-8',
    },
  },
})

export const Spinner = ({ variant = 'primary', size = 'md' }: VariantProps<typeof spinnerVariants>) => (
  // this is custom made from this sample CodePen: https://codepen.io/mtvv/pen/JjdoPRr
  // and this tutorial: https://www.benmvp.com/blog/how-to-create-circle-svg-gradient-loading-spinner/
  // it works by making two semi-circle arcs and applying 0->50 gradient on one and 50-100 gradient
  // on the other to make it look like one continuous 0->100 gradient
  <svg
    className={cn(
      'animate-spin',
      spinnerVariants({
        variant,
        size,
      }),
    )}
    width="24"
    height="24"
    viewBox="0 0 24 24"
    color="#687385"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <linearGradient id="spinner-firstHalf">
        <stop offset="0%" stopOpacity="1" stopColor="currentColor" />
        <stop offset="100%" stopOpacity="0.4" stopColor="currentColor" />
      </linearGradient>
      <linearGradient id="spinner-secondHalf">
        <stop offset="0%" stopOpacity="0" stopColor="currentColor" />
        <stop offset="100%" stopOpacity="0.5" stopColor="currentColor" />
      </linearGradient>
    </defs>

    <g fill="currentColor" transform="translate(4,4)">
      <path fill="url(#spinner-firstHalf)" d="M 0 8 A 8 8 0 0 0 16 8 L 13 8 A 5 5 0 0 1 3 8 L 0 8 Z" />
      <path fill="url(#spinner-secondHalf)" d="M 16 8 A 8 8 0 0 0 0 8 L 3 8 A 5 5 0 0 1 13 8 L 16 8 Z" />
    </g>
  </svg>
)
