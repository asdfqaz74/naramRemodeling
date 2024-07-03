import { Meta, StoryObj } from '@storybook/react';
import ProductTitleHead from './ProductTitleHead';

const meta = {
  title: 'Product/atoms/head',
  component: ProductTitleHead,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ProductTitleHead>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
