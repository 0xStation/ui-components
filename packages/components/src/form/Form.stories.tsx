import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { Form, FormField, FormLabel, FormItem, FormControl, FormDescription, FormMessage } from './Form'
import { Input } from './Input'
import { Button } from '../button'

const meta: Meta<typeof Form> = {
  title: 'forms/Form',
  component: Form,
  tags: ['autodocs'],
  argTypes: {},
}

export default meta

type Story = StoryObj<typeof Form>

const FormMain = ({ ...props }) => {
  const formSchema = z.object({
    address: z.string().min(40).max(40),
    name: z.string().min(3).max(10),
  })

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      address: '',
      name: '',
    },
  })

  const onSubmit = async (data: any) => {
    console.log('data: ', data)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="ui-space-y-4">
        <FormField
          control={form.control}
          name="address"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Address</FormLabel>
              <FormDescription>This is your wallet address</FormDescription>
              <FormControl>
                <Input placeholder="0xabc" {...field} {...props} type="text" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input placeholder="Anon" {...field} {...props} type="text" />
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
  name: 'Default label',
  render: () => {
    return <FormMain />
  },
}
