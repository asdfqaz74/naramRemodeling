import { Meta, StoryObj } from '@storybook/react';
import { MemoryRouter } from 'react-router-dom';
import MobileMenuTextContainer from './MobileMenuTextContainer';

const meta = {
  title: 'MobileMenu/molecules/TextContainer',
  component: MobileMenuTextContainer,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: { items: { control: 'object' } },
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
} satisfies Meta<typeof MobileMenuTextContainer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    items: {
      1: { route: '/Introduction', text: 'CEO인사말' },
      2: { route: '/Introduction/#year', text: '연혁' },
      3: { route: '/Introduction/#idle', text: '경영이념' },
      4: { route: '/Introduction/Location', text: '찾아오시는 길' },
    },
  },
};
