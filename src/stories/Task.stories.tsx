import Task from '../components/Task'

import { ComponentStory, ComponentMeta } from '@storybook/react';


export default {
  title: 'Components/Task',
  component: Task,
} as ComponentMeta<typeof Task>;

const Template: ComponentStory<typeof Task> = (args) => <Task {...args} />

export const Default = Template.bind({})
Default.args = {
  task: {
    id: 1,
    title: 'Title one',
    state: 'TASK_INBOX'
  }
};

export const Pinned = Template.bind({})
Pinned.args = {
  task: {
    ...Default.args.task,
    state: 'TASK_PINNED'
  },
};

export const Archived = Template.bind({})
Archived.args = {
  task: {
    ...Default.args.task,
    state: 'TASK_ARCHIVED'
  }
}