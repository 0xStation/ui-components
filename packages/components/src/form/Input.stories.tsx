import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { Form, FormField, FormLabel, FormItem, FormControl, FormDescription, FormMessage } from './Form'
import { Input } from './Input'
import { Button } from '../button'
import { Calendar } from '../icons/calendar'

const meta: Meta<typeof Input> = {
  title: 'forms/Input',
  component: Input,
  argTypes: {},
}

export default meta

type Story = StoryObj<typeof Form>

const FormWrapper = ({ ...props }) => {
  const formSchema = z.object({
    address: z.string().min(40).max(40),
  })

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      address: '',
    },
  })

  const onSubmit = async (data: any) => {
    console.log('data: ', data)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="address"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Address</FormLabel>
              <FormDescription>This is your wallet address</FormDescription>
              <FormControl>
                <Input {...field} placeholder="0xabc" type="text" {...props} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  )
}

export const Default: Story = {
  name: 'Default input',
  args: {},
  render: (args) => {
    return <FormWrapper {...args} />
  },
}

export const Disabled: Story = {
  name: 'Disabled',
  args: {
    ...Default.args,
  },
  render: (args) => {
    return <FormWrapper {...args} disabled={true} />
  },
}

export const WithIcon: Story = {
  name: 'With icon',
  args: {
    ...Default.args,
  },
  render: (args) => {
    return <FormWrapper {...args} icon={<Calendar />} />
  },
}

export const Large: Story = {
  name: 'Large',
  args: {
    ...Default.args,
  },
  render: (args) => {
    return <FormWrapper {...args} inputSize="large" />
  },
}

export const LargeWithIcon: Story = {
  name: 'Large with icon',
  args: {
    ...Default.args,
  },
  render: (args) => {
    return <FormWrapper {...args} inputSize="large" icon={<Calendar />} />
  },
}
