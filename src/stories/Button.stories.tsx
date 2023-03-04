import Button, { ButtonProps } from '../components/Button';

import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: { handleClick: { action: 'handleClick' } },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = args => <Button {...args} />;

export const RedBtn = Template.bind({});
RedBtn.args = {
  backgroundColor: 'red',
  label: 'Press me',
  size: 'md',
  rounding: 'sm',
};
export const SuccesBtn = Template.bind({});
SuccesBtn.args = {
  backgroundColor: '#01ea01',
  label: 'Press me',
  size: 'md',
  rounding: 'xl',
};
export const SmallSuccesBtn = Template.bind({});
SmallSuccesBtn.args = {
  backgroundColor: '#01ea01',
  label: 'Press me',
  size: 'sm',
  rounding: 'xl',
};
export const BigSuccesBtn = Template.bind({});
BigSuccesBtn.args = {
  backgroundColor: '#01ea01',
  label: 'Press me',
  size: 'lg',
  rounding: 'xl',
};
export const BigBtn = Template.bind({});
BigBtn.args = {
  backgroundColor: 'blue',
  label: 'Press me',
  size: 'xl',
  rounding: 'xl',
};
export const DisabledBtn = Template.bind({});
DisabledBtn.args = {
  backgroundColor: 'blue',
  label: 'Press me',
  size: 'md',
  rounding: 'xl',
  disableBtn: true,
};
export const SmallDisabledBtn = Template.bind({});
SmallDisabledBtn.args = {
  backgroundColor: 'blue',
  label: 'Press me',
  size: 'sm',
  rounding: 'xl',
  disableBtn: true,
};
export const BigDisabledBtn = Template.bind({});
BigDisabledBtn.args = {
  backgroundColor: 'blue',
  label: 'Press me',
  size: 'lg',
  rounding: 'xl',
  disableBtn: true,
};
