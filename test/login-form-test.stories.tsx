import type { Meta, StoryObj } from '@storybook/react'

import { LoginFormTest } from 'test/login-form-test'

const meta = {
  component: LoginFormTest,
  tags: ['autodocs'],
  title: 'Auth/LoginFormTest',
} satisfies Meta<typeof LoginFormTest>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    onSubmit: data => {
      console.log(data)
    },
  },
}
