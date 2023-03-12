import { ActionButton } from './ActionButton';

import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
  component: ActionButton,
} as ComponentMeta<typeof ActionButton>;

const Template: ComponentStory<typeof ActionButton> = args => (
  <ActionButton {...args} />
);

export const Default = Template.bind({});
Default.args = {
  color: 'primary',
  svg: (
    <svg
      width='35px'
      height='35px'
      viewBox='0 0 1024 1024'
      xmlns='http://www.w3.org/2000/svg'
    >
      <circle cx='512' cy='512' r='256' fill-rule='evenodd' />
    </svg>
  ),
  value: 'Value',
  variant: 'extended',
};
