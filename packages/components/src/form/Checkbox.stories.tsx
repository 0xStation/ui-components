import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { useForm } from 'react-hook-form'
import { Checkbox } from './Checkbox'

const FormWithCheckbox = ({ ...props }: { name: string }) => {
  const { register } = useForm({})
  return (
    <form>
      <Checkbox register={register} {...props} />
    </form>
  )
}

const CheckboxMeta = {
  title: 'forms/Checkbox',
  component: Checkbox,

  args: {
    name: 'Title',
  },
  argTypes: {
    name: {
      defaultValue: 'Title',
      control: {
        type: 'text',
      },
    },
  },
} satisfies Meta<typeof Checkbox>

export default CheckboxMeta

type Story = StoryObj<typeof Checkbox>

export const Default: Story = {
  render: ({ register, ...props }) => {
    return <FormWithCheckbox {...props} />
  },
}
