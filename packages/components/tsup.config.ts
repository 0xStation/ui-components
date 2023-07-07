import { defineConfig } from 'tsup'

export default defineConfig({
  name: 'components',
  entry: ['src', '!src/**/*.stories.{ts,tsx}', '!src/**/*.spec.{ts,tsx}', '!src/stories'],
  splitting: true,
  sourcemap: true,
  clean: true,
  minify: true,
  treeshake: true,
})
