import React from 'react'
import { cva, VariantProps } from 'class-variance-authority'
import { cn } from '../lib/utils'

//temporary button setup
const buttonVariants = cva(
  'ui-flex ui-items-center ui-justify-center ui-rounded-md ui-text-center ui-font-favoritpro ui-border ui-outline-none ui-font-bold ui-transition-all ui-duration-75  disabled:ui-opacity-50 disabled:ui-cursor-not-allowed disabled:ui-pointer-events-none',
  {
    variants: {
      variant: {
        primary: 'ui-bg-violet100 ui-border-violet100 hover:ui-opacity-80 !ui-text-black ',
        secondary: 'ui-bg-transparent ui-border-violet100 hover:ui-bg-wet-concrete100 !ui-text-violet100',
        input: 'ui-bg-concrete90 ui-border-concrete90 !ui-text-marbleWhite hover:ui-bg-wet-concrete115',
        unemphasized: 'ui-bg-transparent ui-border-white hover:ui-bg-wet-concrete100 !ui-text-white',
        error: 'ui-bg-transparent ui-border-red100 hover:ui-bg-wet-concrete100 !ui-text-red100',
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
>(({ children, className, variant = 'primary', size = 'md', fullWidth = false, loading, ...props }, ref) => (
  <button ref={ref} className={cn(buttonVariants({ variant, size, fullWidth }), className)} {...props}>
    {loading ? <Spinner variant={variant} size={size} /> : children}
  </button>
))

const spinnerVariants = cva('animate-spin', {
  variants: {
    variant: {
      primary: 'ui-text-black',
      secondary: 'ui-text-violet100',
      input: 'ui-text-marbleWhite',
      unemphasized: 'ui-text-white',
      error: 'ui-text-red100',
    },
    size: {
      sm: 'ui-w-5 ui-h-5',
      md: 'ui-w-6 ui-h-6',
      lg: 'ui-w-8 ui-h-8',
    },
  },
})

export const Spinner = ({ variant = 'primary', size = 'md' }: VariantProps<typeof spinnerVariants>) => (
  <svg
    className={cn(
      spinnerVariants({
        variant,
        size,
      }),
    )}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12 4.75V6.25" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path
      d="M17.1266 6.87347L16.0659 7.93413"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path d="M19.25 12L17.75 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path
      d="M17.1266 17.1265L16.0659 16.0659"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path d="M12 17.75V19.25" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path
      d="M7.9342 16.0659L6.87354 17.1265"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path d="M6.25 12L4.75 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path
      d="M7.9342 7.93413L6.87354 6.87347"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)
