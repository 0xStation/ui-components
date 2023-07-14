import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Modal } from '.'
import clsx from 'clsx'

const ModalMeta = {
  title: 'Modal',
  component: Modal,
  parameters: {
    backgrounds: {
      default: 'concrete',
      values: [{ name: 'concrete', value: '#858585' }],
    },
  },

  argTypes: {
    open: {
      defaultValue: true,
      control: 'boolean',
    },
    size: {
      defaultValue: 'sm',
      control: 'select',
      options: ['sm', 'lg'],
    },
  },
} satisfies Meta<typeof Modal>

export default ModalMeta

type Story = StoryObj<typeof Modal>

export const Defaults: Story = {
  render: (args) => (
    <div className="">
      <Modal size={args.size || 'sm'} open={args.open}>
        <Modal.Content className="text-white">
          <Modal.Header>Modal Header</Modal.Header>
          <p className={clsx(args.size === 'sm' ? 'text-base-xs' : 'text-base-sm')}>
            A window overlaid on either the primary window or another dialog window, rendering the content underneath
            inert.
          </p>
          <Modal.StandardFooter
            className={clsx(args.size === 'sm' ? 'mt-4' : 'mt-5')}
            primaryLabel="Save"
            primaryAction={() => console.log('primary action')}
            secondaryLabel="Cancel"
            secondaryAction={() => console.log('secondary action')}
          />
        </Modal.Content>
      </Modal>
    </div>
  ),
}
