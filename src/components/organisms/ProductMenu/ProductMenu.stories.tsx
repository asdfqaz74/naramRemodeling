import { Meta, StoryObj } from '@storybook/react';
import { MemoryRouter } from 'react-router-dom';
import ProductMenu from './ProductMenu';

const meta = {
  title: 'Product/organisms/ProductMenu',
  component: ProductMenu,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
} satisfies Meta<typeof ProductMenu>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
