import { ComponentMeta, ComponentStory } from '@storybook/react';
import RegisterForm from '../components/RegisterForm';

import { Default } from './BasicInput.stories';
import { BigTextInput } from './BasicInput.stories';

export default {
  title: 'Components/RegisterForm',
  component: RegisterForm,
} as ComponentMeta<typeof RegisterForm>;

const Template: ComponentStory<typeof RegisterForm> = args => (
  <RegisterForm {...args} />
);

// const OneInput: ComponentStory<typeof RegisterForm> = (args: any) => <RegisterForm {...args} >
//   <Default {...Default.args} />
// </RegisterForm>
export const OneInput = Template.bind({});
OneInput.args = {
  children: <BigTextInput {...BigTextInput.args} />,
};
export const OneInputDef = Template.bind({});
OneInputDef.args = {
  children: (
    <div>
      <Default {...Default.args} />
      <BigTextInput {...BigTextInput.args} />
    </div>
  ),
};
