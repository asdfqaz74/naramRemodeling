import { Meta, StoryObj } from '@storybook/react';
import { MemoryRouter } from 'react-router-dom';
import MobileMenuText from './MobileMenuText';

const meta = {
  title: 'MobileMenu/atoms/text',
  component: MobileMenuText,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: { route: { control: 'text' }, text: { control: 'text' } },
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
} satisfies Meta<typeof MobileMenuText>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    route: '/Introduction',
    text: 'CEO인사말',
  },
};
