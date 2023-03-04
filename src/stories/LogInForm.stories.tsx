import { ComponentMeta, ComponentStory } from '@storybook/react';
import LogInForm from '../components/LogInForm';

import { Default } from './BasicInput.stories';
import { BigTextInput } from './BasicInput.stories';

export default {
  title: 'Components/LogInForm',
  component: LogInForm,
} as ComponentMeta<typeof LogInForm>;

const Template: ComponentStory<typeof LogInForm> = args => (
  <LogInForm {...args} />
);

// const OneInput: ComponentStory<typeof LogInForm> = (args: any) => <LogInForm {...args} >
//   <Default {...Default.args} />
// </LogInForm>
export const DefaultCenterLogIn = Template.bind({});
DefaultCenterLogIn.args = {
  inputSize: 'md',
  formElementsGap: 12,
  formAlignment: 'center',
  submitBtnSize: 'md',
  submitBtnDisabeled: false,
};
export const RightLogInForm = Template.bind({});
RightLogInForm.args = {
  inputSize: 'md',
  formElementsGap: 12,
  formAlignment: 'flex-end',
  submitBtnSize: 'md',
  submitBtnDisabeled: false,
};
export const LeftLogInForm = Template.bind({});
LeftLogInForm.args = {
  inputSize: 'md',
  formElementsGap: 12,
  formAlignment: 'flex-start',
  submitBtnSize: 'md',
  submitBtnDisabeled: false,
};
