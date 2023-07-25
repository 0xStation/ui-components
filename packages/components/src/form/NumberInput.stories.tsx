import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { useForm } from 'react-hook-form'
import { NumberInput } from './NumberInput'

const FormWithNumberInput = ({ ...props }: { name: string }) => {
  const { register } = useForm({})
  return (
    <form>
      <NumberInput register={register} {...props} />
    </form>
  )
}

const NumberInputMeta = {
  title: 'forms/NumberInput',
  component: NumberInput,
  args: {
    name: 'amount',
    placeholder: '1111',
    decimals: 0,
  },
  argTypes: {
    name: {
      defaultValue: 'amount',
      control: {
        type: 'text',
      },
    },
    placeholder: {
      defaultValue: '111',
      control: {
        type: 'text',
      },
    },
    decimals: {
      defaultValue: 0,
      control: {
        type: 'number',
      },
    },
  },
} satisfies Meta<typeof NumberInput>

export default NumberInputMeta

type Story = StoryObj<typeof NumberInput>

export const Default: Story = {
  render: ({ register, ...props }) => {
    return <FormWithNumberInput {...props} />
  },
}
