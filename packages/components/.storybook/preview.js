import '../src/tailwind.css'
/** @type { import('@storybook/react').Preview } */
const preview = {
  parameters: {
    layout: 'centered',
    backgrounds: {
      default: 'slate',
      values: [
        { name: 'slate', value: '#111111' },
        { name: 'concrete', value: '#858585' },
      ],
    },
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
}

export default preview
