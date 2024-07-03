import { Meta, StoryObj } from '@storybook/react';
import DropdownContents from './DropdownContents';
import { MemoryRouter } from 'react-router-dom';

const meta = {
  title: 'DropDown/atoms/contents',
  component: DropdownContents,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    content: { control: 'text' },
    route: { control: 'text' },
  },
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
} satisfies Meta<typeof DropdownContents>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    content: '회사소개',
    route: '/company',
  },
};
