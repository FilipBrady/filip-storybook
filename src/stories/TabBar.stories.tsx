import TabBar from '../components/TabBar';

import { ComponentStory, ComponentMeta } from '@storybook/react';


export default {
  title: "Components/Tab-Bar",
  component: TabBar
} as ComponentMeta<typeof TabBar>

const Template: ComponentStory<typeof TabBar> = (args: any) => <TabBar {...args} />

export const Default = Template.bind({})
Default.args = {
  btnTitle1: "Tab One",
  btnTitle2: "Tab Two",
  btnTitle3: "Tab Three",
  tabTitle1: "Tab Title One",
  tabTitle2: "Tab Title Two",
  tabTitle3: "Tab Title Three",
  tabBarBgColor: "#ececec",
  tabBarActiveBtnBgColor: "#8b8bfb",
}
