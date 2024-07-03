import { Meta, StoryObj } from '@storybook/react';
import MobileMenuTitle from './MobileMenuTitle';

const meta = {
  title: 'MobileMenu/atoms/title',
  component: MobileMenuTitle,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: { title: { control: 'text' }, isClicked: { control: 'boolean' } },
} satisfies Meta<typeof MobileMenuTitle>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: '회사소개',
    isClicked: false,
    onClick: () => console.log('clicked'),
  },
};
