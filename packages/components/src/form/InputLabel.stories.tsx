import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { useForm } from 'react-hook-form'
import { TextInput, TextInputProps } from './TextInput'
import { InputLabel } from './InputLabel'
import { Button } from '../button'

const meta: Meta<typeof InputLabel> = {
  title: 'forms/InputLabel',
  component: InputLabel,
  tags: ['autodocs'],
  argTypes: {
    label: {
      control: 'string',
      description: 'The label of the input.',
    },
    description: {
      control: 'string',
      description: 'Subtitle of the input.',
    },
  },
}

export default meta

type Story = StoryObj<typeof TextInput>

const FormWithTextInput = ({ ...props }) => {
  const { register, handleSubmit, formState } = useForm({})
  const { errors } = formState
  const onSubmit = async (data: any) => {
    console.log('data: ', data)
  }

  return (
    <form className="ui-flex ui-flex-col ui-space-y-2" onSubmit={handleSubmit(onSubmit)}>
      <InputLabel label="Demo" {...props}>
        <TextInput name="demo" register={register} errors={errors} />
      </InputLabel>
      <Button>Submit</Button>
    </form>
  )
}

export const Default: Story = {
  name: 'Default label',
  render: () => {
    return <FormWithTextInput />
  },
}

export const DefaultLarge: Story = {
  name: 'Default large label',
  render: () => {
    return <FormWithTextInput size="large" />
  },
}

export const Description: Story = {
  name: 'Label with description',
  render: () => {
    return <FormWithTextInput description={'Testing this...'} />
  },
}

export const DescriptionLarge: Story = {
  name: 'Large label with description',
  render: () => {
    return <FormWithTextInput description={'Testing this...'} size="large" />
  },
}
