import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { useForm } from 'react-hook-form'
import { AddressInput } from './AddressInput'

const FormWithAddressInput = ({ ...props }: { name: string }) => {
  const { register } = useForm({})
  return (
    <form>
      <AddressInput register={register} {...props} />
    </form>
  )
}

const AddressInputMeta = {
  title: 'forms/AddressInput',
  component: AddressInput,

  args: {
    name: 'Title',
    placeholder: 'Placeholder',
  },
  argTypes: {
    name: {
      defaultValue: 'Title',
      control: {
        type: 'text',
      },
    },
    placeholder: {
      defaultValue: 'Placeholder',
      control: {
        type: 'text',
      },
    },
  },
} satisfies Meta<typeof AddressInput>

export default AddressInputMeta

type Story = StoryObj<typeof AddressInput>

export const Default: Story = {
  render: ({ register, ...props }) => {
    return <FormWithAddressInput {...props} />
  },
}
