import { Meta, StoryObj } from '@storybook/react';
import { MemoryRouter } from 'react-router-dom';
import MainBoardBox from './MainBoardBox';

const meta = {
  title: 'MainPageBoard/molcules/box',
  component: MainBoardBox,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    title: {
      control: 'text',
    },
    path: {
      control: 'text',
    },
    isNotice: { boolean: true },
  },
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
} satisfies Meta<typeof MainBoardBox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    isNotice: true,
    title: '공지사항',
    path: '/path',
  },
};
