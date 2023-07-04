import React, { ReactElement } from 'react'
import { cleanup, render, RenderOptions, waitFor, waitForOptions } from '@testing-library/react'
import { afterAll, beforeEach, vi } from 'vitest'

function Wrapper({ children }: { children: ReactElement }) {
  return <>{children}</>
}

Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: vi.fn().mockImplementation((query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: vi.fn(), // Deprecated
    removeListener: vi.fn(), // Deprecated
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    dispatchEvent: vi.fn(),
  })),
})

const IntersectionObserverMock = vi.fn(() => ({
  disconnect: vi.fn(),
  observe: vi.fn(),
  takeRecords: vi.fn(),
  unobserve: vi.fn(),
}))

vi.stubGlobal('IntersectionObserver', IntersectionObserverMock)

function customCleanup() {
  cleanup()
}

function customRender(ui: ReactElement, options?: Omit<RenderOptions, 'wrapper'>): ReturnType<typeof render> {
  // Mocking DOM APIs
  global.ResizeObserver = require('resize-observer-polyfill')

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  window.scrollTo = vi.fn()
  window.global = window
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  HTMLCanvasElement.prototype.getContext = vi.fn()

  return render(ui, {
    wrapper: Wrapper,
    ...options,
  })
}

beforeEach(customCleanup)
afterAll(customCleanup)

function customWaitFor(callback: () => unknown, options?: waitForOptions | undefined): Promise<unknown> {
  return waitFor(callback, { timeout: 10_000, ...options })
}

export * from '@testing-library/react'
export { customRender as render }
export { customCleanup as cleanup }
export { customWaitFor as waitFor }
