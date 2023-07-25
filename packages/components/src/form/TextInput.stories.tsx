import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { useForm } from 'react-hook-form'
import { TextInput, TextInputProps } from './TextInput'
import { Button } from '../button/'
import { Calendar } from '../icons/calendar'

const meta: Meta<typeof TextInput> = {
  title: 'forms/TextInput',
  component: TextInput,
  tags: ['autodocs'],
  argTypes: {
    name: {
      control: 'string',
      description: 'The name of the form field.',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the input is disabled.',
    },
  },
}

export default meta

type Story = StoryObj<typeof TextInput>

const FormWithTextInput = ({ ...props }: Omit<TextInputProps, 'register' | 'name'>) => {
  const { register, handleSubmit, formState } = useForm({})
  const { errors } = formState
  const onSubmit = async (data: any) => {
    console.log('data: ', data)
  }

  return (
    <form className="ui-flex ui-flex-col ui-space-y-2" onSubmit={handleSubmit(onSubmit)}>
      <TextInput name="demo" register={register} errors={errors} {...props} />
      <Button>Submit</Button>
    </form>
  )
}

export const Default: Story = {
  name: 'Default input',
  args: {
    placeholder: 'Placeholder',
  },
  render: (args) => {
    return <FormWithTextInput {...args} />
  },
}

export const Disabled: Story = {
  name: 'Disabled',
  args: {
    ...Default.args,
  },
  render: (args) => {
    return <FormWithTextInput {...args} disabled={true} />
  },
}

export const WithIcon: Story = {
  name: 'With icon',
  args: {
    ...Default.args,
  },
  render: (args) => {
    return <FormWithTextInput {...args} icon={<Calendar />} />
  },
}

export const Large: Story = {
  name: 'Large',
  args: {
    ...Default.args,
  },
  render: (args) => {
    return <FormWithTextInput {...args} size="large" />
  },
}

export const LargeWithIcon: Story = {
  name: 'Large with icon',
  args: {
    ...Default.args,
  },
  render: (args) => {
    return <FormWithTextInput {...args} size="large" icon={<Calendar />} />
  },
}
