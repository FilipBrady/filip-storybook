import BasicForm from '../components/BasicForm';

import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
  title: 'Components/BasicForm',
  component: BasicForm,
} as ComponentMeta<typeof BasicForm>;

const Template: ComponentStory<typeof BasicForm> = (args: any) => (
  <BasicForm {...args} />
);

export const Default = Template.bind({});
Default.args = {
  inputPlaceholder1: 'Your Name',
  inputPlaceholder2: 'Your Email',
  inputPlaceholder3: 'Your Password',
  inputType1: 'text',
  inputType2: 'email',
  inputType3: 'password',
  checkBoxLabel1: 'I agree with this',
  checkBoxLabel2: 'And Also This',
  radioGroupTitle: "Your Gender",
  radioBtnLabel1: 'Man',
  radioBtnLabel2: 'Woman',
  radioBtnLabel3: 'Else',
  SubmitBtnValue: 'Save',
};
