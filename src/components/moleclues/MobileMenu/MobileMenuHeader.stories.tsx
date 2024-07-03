import { Meta, StoryObj } from '@storybook/react';
import { MemoryRouter } from 'react-router-dom';
import MobileMenuHeader from './MobileMenuHeader';

const meta = {
  title: 'MobileMenu/molecules/Header',
  component: MobileMenuHeader,
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
} satisfies Meta<typeof MobileMenuHeader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const LogIn: Story = {
  args: {
    isLogin: false,
  },
};

export const LogOut: Story = {
  args: {
    isLogin: true,
  },
};
