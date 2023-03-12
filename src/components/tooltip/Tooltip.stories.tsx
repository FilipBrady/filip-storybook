import { Tooltip } from './Tooltip';

import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Button } from '../button';

export default {
  component: Tooltip,
} as ComponentMeta<typeof Tooltip>;

const Template: ComponentStory<typeof Tooltip> = args => <Tooltip {...args} />;

export const Default = Template.bind({});
Default.args = {
  value: 'Tooltip',
  children: <Button color='secondary' value='Button' variant='filled' />,
};
