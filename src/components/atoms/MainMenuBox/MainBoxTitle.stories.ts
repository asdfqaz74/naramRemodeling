import { Meta, StoryObj } from '@storybook/react';
import MainBoxTitle from './MainBoxTitle';
('.');

const meta = {
  title: 'MainPageBox/atoms/title',
  component: MainBoxTitle,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: { title: { control: 'text' }, color: { control: 'color' } },
} satisfies Meta<typeof MainBoxTitle>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: '고객센터',
    color: '#333',
    isBox: true,
  },
};
