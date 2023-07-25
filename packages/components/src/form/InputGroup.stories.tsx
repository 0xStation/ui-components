import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { useForm } from 'react-hook-form'
import { InputGroup, InputGroupProps } from './InputGroup'
import { TextInput } from './TextInput'
import { InputLabel } from './InputLabel'
import { Button } from '../button/'

const meta: Meta<typeof InputGroup> = {
  title: 'forms/InputGroup',
  component: InputGroup,
  tags: ['autodocs'],
  argTypes: {
    label: {
      control: 'string',
      description: 'The label of the group.',
    },
    index: {
      control: 'number',
      description: 'The index of the group.',
    },
  },
}

export default meta

type Story = StoryObj<typeof InputGroup>

const FormWithInputGroup = ({ ...props }: Omit<InputGroupProps, 'register' | 'name'>) => {
  const { register, handleSubmit, formState } = useForm({})
  const { errors } = formState
  const onSubmit = async (data: any) => {
    console.log('data: ', data)
  }

  return (
    <div className="ui-w-[600px]">
      <form className="ui-flex ui-flex-col ui-space-y-2" onSubmit={handleSubmit(onSubmit)}>
        <InputGroup {...props}>
          <>
            <InputLabel label="Demo">
              <TextInput name="demo" register={register} errors={errors} />
            </InputLabel>
            <InputLabel label="Another field">
              <TextInput name="another" register={register} errors={errors} />
            </InputLabel>
            <InputLabel label="Last one">
              <TextInput name="last" register={register} errors={errors} />
            </InputLabel>
          </>
        </InputGroup>
        <Button className="mt-4">Submit</Button>
      </form>
    </div>
  )
}

export const Default: Story = {
  name: 'Default Area',
  args: {
    label: 'Group item',
    index: 0,
  },
  render: (args) => {
    return <FormWithInputGroup {...args} />
  },
}
