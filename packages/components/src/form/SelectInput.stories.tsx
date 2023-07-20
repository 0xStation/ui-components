import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { useForm } from 'react-hook-form'
import { SelectInput } from './SelectInput'

const FormWithSelectInput = ({
  ...props
}: {
  name: string
  selectOptions: {
    value: string
    children: React.ReactNode
  }[]
}) => {
  const { register } = useForm({})
  return (
    <form>
      <SelectInput register={register} {...props} />
    </form>
  )
}

const SelectInputMeta = {
  title: 'forms/SelectInput',
  component: SelectInput,

  args: {
    name: 'Title',
    selectOptions: [
      { value: 'banana', children: <span>Banana</span> },
      { value: 'apple', children: <span>Apple</span> },
    ],
  },
  argTypes: {
    name: {
      defaultValue: 'Title',
      control: {
        type: 'text',
      },
    },
    selectOptions: {
      defaultValue: [
        { value: 'banana', children: <span>Banana</span> },
        { value: 'apple', children: <span>Apple</span> },
      ],
      control: {
        type: 'object',
      },
    },
  },
} satisfies Meta<typeof SelectInput>

export default SelectInputMeta

type Story = StoryObj<typeof SelectInput>

export const Default: Story = {
  render: ({ register, ...props }) => {
    return <FormWithSelectInput {...props} />
  },
}
