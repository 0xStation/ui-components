import { defineConfig } from 'tsup'

export default defineConfig({
  name: 'components',
  entry: ['src/**/*.{ts,tsx}'],
  splitting: true,
  sourcemap: true,
  clean: true,
  minify: true,
  treeshake: true,
})
