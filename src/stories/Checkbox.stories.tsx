import Checkbox from '../components/Checkbox';

import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
  title: 'Components/Checkbox',
  component: Checkbox,
} as ComponentMeta<typeof Checkbox>;

const Template: ComponentStory<typeof Checkbox> = (args: any) => (
  <Checkbox {...args} />
);

export const Default = Template.bind({});
Default.args = {
  labelText: 'CheckBox Label Text',
  labelSite: 'left',
};
export const Right = Template.bind({})
Right.args = {
  labelText: 'CheckBox Label Text',
  labelSite: 'right',
}
export const Left = Template.bind({})
Left.args = {
  labelText: 'CheckBox Label Text',
  labelSite: 'left',
}
export const Disabled = Template.bind({})
Disabled.args = {
  labelText: 'CheckBox Label Text',
  labelSite: 'left',checkBoxDisabled: true
}
export const Checked = Template.bind({})
Checked.args = {
  labelText: 'CheckBox Label Text',
  labelSite: 'left',checkBoxChecked: true
}
