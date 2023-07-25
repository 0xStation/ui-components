import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { useForm } from 'react-hook-form'
import { TextArea, TextAreaProps } from './TextArea'
import { Button } from '../button/'

const meta: Meta<typeof TextArea> = {
  title: 'forms/TextArea',
  component: TextArea,
  tags: ['autodocs'],
  argTypes: {
    name: {
      control: 'string',
      description: 'The name of the form field.',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the Area is disabled.',
    },
  },
}

export default meta

type Story = StoryObj<typeof TextArea>

const FormWithTextArea = ({ ...props }: Omit<TextAreaProps, 'register' | 'name'>) => {
  const { register, handleSubmit, formState } = useForm({})
  const { errors } = formState
  const onSubmit = async (data: any) => {
    console.log('data: ', data)
  }

  return (
    <form className="ui-flex ui-flex-col ui-space-y-2" onSubmit={handleSubmit(onSubmit)}>
      <TextArea name="demo" register={register} errors={errors} {...props} />
      <Button>Submit</Button>
    </form>
  )
}

export const Default: Story = {
  name: 'Default Area',
  args: {
    placeholder: 'Placeholder',
  },
  render: (args) => {
    return <FormWithTextArea {...args} />
  },
}

export const Disabled: Story = {
  name: 'Disabled',
  args: {
    ...Default.args,
  },
  render: (args) => {
    return <FormWithTextArea {...args} disabled={true} />
  },
}

export const Large: Story = {
  name: 'Large',
  args: {
    ...Default.args,
  },
  render: (args) => {
    return <FormWithTextArea {...args} size="large" />
  },
}
