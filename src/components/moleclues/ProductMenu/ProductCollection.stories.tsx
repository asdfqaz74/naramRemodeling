import { Meta, StoryObj } from '@storybook/react';
import { MemoryRouter } from 'react-router-dom';
import ProductCollection from './ProductCollection';

const meta = {
  title: 'Product/molcules/collection',
  component: ProductCollection,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: { title: { control: 'text' } },
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
} satisfies Meta<typeof ProductCollection>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: '양돈',
  },
};
