import { Meta, StoryObj } from '@storybook/react';
import MobileMenuSignIn from './MobileMenuSignIn';
import { MemoryRouter } from 'react-router-dom';

const meta = {
  title: 'MobileMenu/atoms/SignIn',
  component: MobileMenuSignIn,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: { isLogin: { control: 'boolean' } },
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
} satisfies Meta<typeof MobileMenuSignIn>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Login: Story = {
  args: {
    isLogin: false,
  },
};

export const Logout: Story = {
  args: {
    isLogin: true,
  },
};
