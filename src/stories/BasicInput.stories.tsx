import BasicInput from '../components/BasicInput';

import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
  title: 'Components/BasicInput',
  component: BasicInput,
} as ComponentMeta<typeof BasicInput>;

const Template: ComponentStory<typeof BasicInput> = (args: any) => (
  <BasicInput {...args} />
);
export const Default = Template.bind({});
Default.args = {
  inputType: 'text',
  inputPlaceholder: 'Your Name',
  inputPadding: 'md',
  inputFontSize: 18,
  inputBorderRadius: 'md',
  inputBorder: 1,
  inputBorderColor: '#b2b2b2',
};
export const BigTextInput = Template.bind({});
BigTextInput.args = {
  inputType: 'text',
  inputPlaceholder: 'Your Name',
  inputPadding: 'lg',
  inputFontSize: 22,
  inputBorderRadius: 'lg',
  inputBorder: 1,
  inputBorderColor: '#b2b2b2',
};
export const SmallTextInput = Template.bind({});
SmallTextInput.args = {
  inputType: 'text',
  inputPlaceholder: 'Your Name',
  inputPadding: 'sm',
  inputFontSize: 16,
  inputBorderRadius: 'sm',
  inputBorder: 1,
  inputBorderColor: '#b2b2b2',
};
export const DefaultPasswordInput = Template.bind({});
DefaultPasswordInput.args = {
  inputType: 'password',
  inputPlaceholder: 'Your Password',
  inputPadding: 'md',
  inputFontSize: 18,
  inputBorderRadius: 'md',
  inputBorder: 1,
  inputBorderColor: '#b2b2b2',
};
export const SmallPasswordInput = Template.bind({});
SmallPasswordInput.args = {
  inputType: 'password',
  inputPlaceholder: 'Your Password',
  inputPadding: 'sm',
  inputFontSize: 16,
  inputBorderRadius: 'sm',
  inputBorder: 1,
  inputBorderColor: '#b2b2b2',
};
export const BigPasswordInput = Template.bind({});
BigPasswordInput.args = {
  inputType: 'password',
  inputPlaceholder: 'Your Password',
  inputPadding: 'lg',
  inputFontSize: 22,
  inputBorderRadius: 'lg',
  inputBorder: 1,
  inputBorderColor: '#b2b2b2',
};
