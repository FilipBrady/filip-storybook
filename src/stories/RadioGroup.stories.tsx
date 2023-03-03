import RadioGroup from '../components/RadioGroup';

import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
  title: 'Components/RadioGroup',
  component: RadioGroup,
} as ComponentMeta<typeof RadioGroup>;

const Template: ComponentStory<typeof RadioGroup> = (args: any) => (
  <RadioGroup {...args} />
);

export const Default = Template.bind({});
Default.args = {
  labelText1: 'Text One',
  labelText2: 'Text Two',
  labelText3: 'Text Three',
};
export const RowDirectgion = Template.bind({});
RowDirectgion.args = {
  labelText1: 'Text One',
  labelText2: 'Text Two',
  labelText3: 'Text Three',
  radioDirection: 'row',
  radioGap: 5
};
export const ColumnDirectgion = Template.bind({});
ColumnDirectgion.args = {
  labelText1: 'Text One',
  labelText2: 'Text Two',
  labelText3: 'Text Three',
  radioDirection: 'column',
};
export const FirstCheckedRow = Template.bind({});
FirstCheckedRow.args = {
  labelText1: 'Text One',
  labelText2: 'Text Two',
  labelText3: 'Text Three',
  radioDirection: 'row',
  firstChecked: true
};
