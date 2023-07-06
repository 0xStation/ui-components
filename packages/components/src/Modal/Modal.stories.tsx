import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Modal, ModalContent } from './'

const ModalMeta = {
  title: 'Modal',
  component: ModalContent,
  parameters: {
    backgrounds: {
      default: 'concrete',
      values: [{ name: 'concrete', value: '#858585' }],
    },
  },
} satisfies Meta<typeof ModalContent>

export default ModalMeta

type Story = StoryObj<typeof ModalContent>

export const ModalStory: Story = {
  render: () => (
    <div className="">
      <Modal>
        <ModalContent>hello</ModalContent>
      </Modal>
    </div>
  ),
}
