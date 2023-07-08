import React from 'react'
import { cva, VariantProps } from 'class-variance-authority'
import { cn } from '../../lib/utils'

//temporary button setup
const buttonVariants = cva(
  'flex items-center justify-center rounded-md text-center font-favoritpro border outline-none font-bold transition-all duration-75 h-full disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none',
  {
    variants: {
      variant: {
        primary: 'bg-violet100 border-violet100 hover:opacity-80 !text-black ',
        secondary: 'bg-transparent border-violet100 hover:bg-wet-concrete100 !text-violet100',
        input: 'bg-concrete90 border-concrete90 !text-marbleWhite hover:bg-wet-concrete115',
        unemphasized : 'bg-transparent border-white hover:bg-wet-concrete100 !text-white',
        error: 'bg-transparent border-red100 hover:bg-wet-concrete100 !text-red100',
      },
      size: {
        sm: 'px-4 text-base-xxs max-h-7 h-7',
        md: 'px-5 text-base-sm max-h-9 h-9',
        lg: 'px-6 text-base-md max-h-11 h-11',
      },
      fullWidth: {
        true: 'w-full',
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
>(({ children, className, variant = 'primary', size = 'md', fullWidth, loading, ...props }, ref) => (
  <button ref={ref} className={cn(buttonVariants({ variant, size, fullWidth }), className)} {...props}>
    {loading ? <Spinner variant={variant} size={size} /> : children}
  </button>
))

const spinnerVariants = cva('animate-spin', {
  variants: {
    variant: {
      primary: 'text-black',
      secondary: 'text-violet100',
      input: 'text-marbleWhite',
      unemphasized: 'text-white',
      error: 'text-red100',
    },
    size: {
      sm: 'w-5 h-5',
      md: 'w-6 h-6',
      lg: 'w-8 h-8',
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
