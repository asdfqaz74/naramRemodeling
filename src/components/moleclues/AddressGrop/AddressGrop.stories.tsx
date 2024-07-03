import { Meta, StoryObj } from '@storybook/react';
import AddressGrop from './AddressGrop';
import { MemoryRouter } from 'react-router-dom';

const meta = {
  title: 'AddressGrop/molecules',
  component: AddressGrop,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    type: { control: 'radio', options: ['desktop', 'mobile'] },
  },

  args: {},
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
} satisfies Meta<typeof AddressGrop>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Desktop: Story = {
  args: {
    type: 'desktop',
  },
};

export const Mobile: Story = {
  args: {
    type: 'Mobile',
  },
};
