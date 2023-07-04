import 'vitest-dom/extend-expect'
import * as matchers from 'vitest-dom/matchers'
import { expect } from 'vitest'

expect.extend(matchers)

if (!globalThis.fetch) {
  const { fetch } = await import('undici')

  // @ts-expect-error
  globalThis.fetch = fetch
}
