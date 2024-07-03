import { Meta, StoryObj } from '@storybook/react';
import LoginInput from './LoginInput';
import { MemoryRouter } from 'react-router-dom';

const meta = {
  title: 'LoginInput/atoms',
  component: LoginInput,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],

  args: {},
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
} satisfies Meta<typeof LoginInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Input: Story = {
  args: {
    id: '이메일',
    type: '이메일',
    placeholder: '이메일',
  },
};
