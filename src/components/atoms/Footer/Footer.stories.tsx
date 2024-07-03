import { Meta, StoryObj } from '@storybook/react';
import Footer from './Footer';
import { MemoryRouter } from 'react-router-dom';

const meta = {
  title: 'Footer/atoms',
  component: Footer,
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
} satisfies Meta<typeof Footer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const LayoutPage: Story = {
  args: {},
};
