import React from 'react'

type TooltipContextType = {
  openContent: boolean
  // for react state dispatch
  setOpenContent: (open: boolean) => void
}

/**
 *
 *    // Radix tooltips are not designed to work with touch by default this is a workaround for mobile
 *    // https://github.com/radix-ui/primitives/issues/955#issuecomment-1144445691
 */
const TooltipContext = React.createContext<TooltipContextType>(null as unknown as TooltipContextType)

export function useTooltipContext() {
  const context = React.useContext(TooltipContext)
  if (!context) {
    throw new Error(`Tooltip compound components cannot be rendered outside the Tooltip component`)
  }

  return context
}

export function TooltipContextProvider({ children, ...contextArg }: { children: React.ReactNode }) {
  const [openContent, setOpenContent] = React.useState(false)

  const context = {
    openContent,
    setOpenContent,
    ...contextArg,
  }

  return <TooltipContext.Provider value={context}>{children}</TooltipContext.Provider>
}
