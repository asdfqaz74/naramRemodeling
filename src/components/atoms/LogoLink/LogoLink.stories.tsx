import { Meta, StoryObj } from '@storybook/react';
import LogoLink from './LogoLink';
import { MemoryRouter } from 'react-router-dom';

const meta = {
  title: 'Header/atoms',
  component: LogoLink,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
} satisfies Meta<typeof LogoLink>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
