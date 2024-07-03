import { Meta, StoryObj } from '@storybook/react';
import { MemoryRouter } from 'react-router-dom';
import DropdownMenu from './DropdownMenu';

const meta = {
  title: 'DropDown/molcules/menu',
  component: DropdownMenu,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    title: { control: 'text' },
    items: { control: 'object' },
  },
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
} satisfies Meta<typeof DropdownMenu>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Introduction: Story = {
  args: {
    title: '회사소개',
    items: [
      { content: 'CEO인사말', route: '/Introduction/#hello' },
      { content: '연혁', route: '/Introduction/#year' },
      { content: '경영이념', route: '/Introduction/#idle' },
      { content: '오시는 길', route: '/Introduction/#location' },
    ],
  },
};

export const Information: Story = {
  args: {
    title: '정보센터',
    items: [
      { content: '공지사항', route: '/Introduction/#notice' },
      { content: '나람 홍보 게시물', route: '/Introduction/#ad' },
    ],
  },
};
