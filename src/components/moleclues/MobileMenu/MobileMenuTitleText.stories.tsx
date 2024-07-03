import { Meta, StoryObj } from '@storybook/react';
import { MemoryRouter } from 'react-router-dom';
import MobileMenuTitleText from './MobileMenuTitleText';

const meta = {
  title: 'MobileMenu/molecules/TitleText',
  component: MobileMenuTitleText,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: { items: { control: 'object' }, title: { control: 'text' } },
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
} satisfies Meta<typeof MobileMenuTitleText>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: '회사소개',
    items: {
      1: { route: '/Introduction', text: 'CEO인사말' },
      2: { route: '/Introduction/#year', text: '연혁' },
      3: { route: '/Introduction/#idle', text: '경영이념' },
      4: { route: '/Introduction/Location', text: '찾아오시는 길' },
    },
  },
};
