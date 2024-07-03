import { Meta, StoryObj } from '@storybook/react';
import MainBoardText from './MainBoardText';

const meta = {
  title: 'MainPageBoard/atoms/text',
  component: MainBoardText,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: { text: { control: 'text' } },
} satisfies Meta<typeof MainBoardText>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    text: '(주)나람 홈페이지 Renewal 오픈!!',
  },
};
