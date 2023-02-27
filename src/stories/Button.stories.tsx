import Button, { ButtonProps } from '../components/Button';

import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: { handleClick: {action: "handleClick" } }
} as ComponentMeta<typeof Button> ;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Red = Template.bind({});
Red.args = {
  backgroundColor: 'red',
  label: 'Press me',
  size: 'md',
  rounding: 'sm'
};
export const Green = Template.bind({});
Green.args = {
  backgroundColor: 'green',
  label: 'Press me',
  size: 'md',
};
export const Small = Template.bind({});
Small.args = {
  backgroundColor: 'blue',
  label: 'Press me',
  size: 'sm',
  rounding: 'xl'
};
