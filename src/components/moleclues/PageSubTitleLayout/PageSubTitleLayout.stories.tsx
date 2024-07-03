import { Meta, StoryObj } from '@storybook/react';
import PageSubTitleLayout from './PageSubTitleLayout';
import { MemoryRouter } from 'react-router-dom';
import IntroductionContent from '@/pages/CompanyIntroduction/components/IntroductionContent';

const meta = {
  title: 'PageSubTitleLayout/molecules',
  component: PageSubTitleLayout,
  parameters: {
    layout: 'centered',
  },
  // tags: ['autodocs'],
  argTypes: {},
  args: {},
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
} satisfies Meta<typeof PageSubTitleLayout>;

export default meta;
type Story = StoryObj<typeof meta>;

export const LayoutPage: Story = {
  args: {
    firstTitle: 'COMPANY',
    secondTitle: '회사',
    thirdTitle: '고객의 만족은 우리의 기쁨 ',
    thirdSubTitle: '나람사료',
    children: <IntroductionContent />,
  },
};
