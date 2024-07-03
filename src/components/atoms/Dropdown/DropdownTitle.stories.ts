import { Meta, StoryObj } from '@storybook/react';
import DropdownTitle from './DropdownTitle';

const meta = {
  title: 'DropDown/atoms/title',
  component: DropdownTitle,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    title: { control: 'text' },
  },
} satisfies Meta<typeof DropdownTitle>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: '회사소개',
  },
};
