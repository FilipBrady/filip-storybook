import { Snackbar } from './Snackbar';

import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
  component: Snackbar,
} as ComponentMeta<typeof Snackbar>;

const Template: ComponentStory<typeof Snackbar> = args => <Snackbar {...args} />;

export const Default = Template.bind({});
Default.args = { color: 'primary', message: "Snackbar", hideTimeDuration: 3000, align: "top-right" };
