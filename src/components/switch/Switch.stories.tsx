import { Switch } from "./Switch";
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
  component: Switch
} as ComponentMeta<typeof Switch>

const Template: ComponentStory<typeof Switch> = args => <Switch {...args} />
export const Default = Template.bind({})
Default.args = {
  title: "Hello switch"
}