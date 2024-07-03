import { Meta, StoryObj } from '@storybook/react';
import AddressIcon from './AddressIcon';
import { MemoryRouter } from 'react-router-dom';

import address from '/address_icon.svg';
import phonNumber from '/phonNumber_icon.svg';
import fex from '/fex_icon.svg';
import letter from '/letter_icon.svg';

const meta = {
  title: 'AddressIcon/atoms',
  component: AddressIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    image_src: { control: 'radio', options: [address, phonNumber, fex, letter] },
    direction: { control: 'select', options: ['flex', 'column'] },
  },

  args: {},
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
} satisfies Meta<typeof AddressIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

const image = {
  src: address,
  alt: '주소 아이콘',
};

export const LayoutPage: Story = {
  args: {
    first_content: '충북 음성군 대소면 소석로 154',
    second_content: '(소석리 51-2)',
    image_src: image.src,
    image_alt: image.alt,
  },
};
