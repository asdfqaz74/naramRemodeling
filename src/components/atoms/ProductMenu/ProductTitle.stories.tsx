import { Meta, StoryObj } from '@storybook/react';
import ProductTitle from './ProductTitle';
import { MemoryRouter } from 'react-router-dom';

const meta = {
  title: 'Product/atoms/title',
  component: ProductTitle,
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
} satisfies Meta<typeof ProductTitle>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: '양돈',
    route: '/product/pork',
  },
};
