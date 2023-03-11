import { Input } from './Input';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { useState } from 'react'

export default {
  component: Input,
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = args => {
  const [value, setValue] = useState("")
  return <Input {...args} value={value} 
  onChange={(vlue) => setValue(vlue.toString())} />;
};

export const Default = Template.bind({});
Default.args = {
  type: 'text',
  placeholder: 'Your Name',
  title: 'Name',
  variant: 'filled'
};
