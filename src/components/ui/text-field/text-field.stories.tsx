import type { Meta, StoryObj } from '@storybook/react'

import { useState } from 'react'

import { TextField } from '../../../components/ui/text-field/text-field'

const meta = {
  component: TextField,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  title: 'Components/TextField',
} satisfies Meta<typeof TextField>

export default meta
type Story = StoryObj<typeof meta>

export const InputDefault: Story = {}

export const InputSearch: Story = {
  args: {
    type: 'search',
  },
}

export const InputEye: Story = {
  args: {
    label: 'Some label text',
    placeholder: 'Password',
    type: 'password',
  },
  render: args => {
    const [value, setValue] = useState('')

    const handleChangeValue = (value: string) => {
      setValue(value)
    }

    return <TextField {...args} onChangeValue={handleChangeValue} value={value} />
  },
}
