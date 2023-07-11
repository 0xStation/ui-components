import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Button } from './'
import clsx from 'clsx'

const ButtonMeta = {
  title: 'Button',
  component: Button,
  argTypes: {
    size: {
      defaultValue: 'md',
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
    disabled: {
      defaultValue: false,
      control: 'boolean',
    },
    loading: {
      defaultValue: false,
      control: 'boolean',
    },
    fullWidth: {
      defaultValue: false,
      control: 'boolean',
    },
  },
} satisfies Meta<typeof Button>

export default ButtonMeta

type Story = StoryObj<typeof Button>

const TemplateButton = (args: any) => {
  return (
    <Button {...args} className={clsx(args.size === 'sm' ? 'w-[75px]' : args.size === 'md' ? 'w-[92px]' : 'w-[106px]')}>
      Button
    </Button>
  )
}

export const Primary: Story = {
  render: (args) => <TemplateButton {...args} />,
}

export const Secondary: Story = {
  render: (args) => <TemplateButton variant="secondary" {...args} />,
}

export const Unemphasized: Story = {
  render: (args) => <TemplateButton variant="unemphasized" {...args} />,
}

export const Error: Story = {
  render: (args) => <TemplateButton variant="error" {...args} />,
}

export const Input: Story = {
  render: (args) => <TemplateButton variant="input" {...args} />,
}
