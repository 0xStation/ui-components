import React from 'react'

export const ModalContext = React.createContext<{
  size: 'sm' | 'lg'
  closeModal?: () => void
}>({
  size: 'sm',
})

export function useModalContext() {
  const context = React.useContext(ModalContext)
  if (!context) {
    throw new Error(`Modal compound components cannot be rendered outside the Modal component`)
  }

  return context
}
