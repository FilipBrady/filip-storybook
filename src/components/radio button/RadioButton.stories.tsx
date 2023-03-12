import { RadioButton } from './RadioButton';

import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
  component: RadioButton,
} as ComponentMeta<typeof RadioButton>;

const Template: ComponentStory<typeof RadioButton> = args => <RadioButton {...args} />;

export const Default = Template.bind({});
Default.args = { label: "Radio Button", color: "primary", variant: "default" };
