import { Meta, StoryObj } from '@storybook/react';
import MainMap from './MainMap';

const meta = {
  title: 'MainMap/atoms',
  component: MainMap,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof MainMap>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
