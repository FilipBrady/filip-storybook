import BasicInput from '../components/BasicInput';

import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
  title: 'Components/Form-Parts/BasicInput',
  component: BasicInput,
} as ComponentMeta<typeof BasicInput>;

const Template: ComponentStory<typeof BasicInput> = (args: any) => (
  <BasicInput {...args} />
);
export const Default = Template.bind({})
Default.args = {
  inputType: "text",
  inputPlaceholder: "Your Name",
  inputPadding: "md",
  inputFontSize: 18,
  inputBorderRadius: "md",
  inputBorder: 1,
  inputBorderColor: "#b2b2b2"
} 
export const BigTextInput = Template.bind({})
BigTextInput.args = {
  inputType: "text",
  inputPlaceholder: "Your Name",
  inputPadding: "lg",
  inputFontSize: 22,
  inputBorderRadius: "lg",
  inputBorder: 1,
  inputBorderColor: "#b2b2b2"
} 