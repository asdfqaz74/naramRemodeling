import { Meta, StoryObj } from '@storybook/react';
import { MemoryRouter } from 'react-router-dom';
import DropdownMenuNav from './DropdownMenuNav';

const meta = {
  title: 'DropDown/organisms/menu',
  component: DropdownMenuNav,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
} satisfies Meta<typeof DropdownMenuNav>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Introduction: Story = {
  args: {
    isClicked: false,
  },
};
