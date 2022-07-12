import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Main from './index';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Modal',
  component: Main,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof Main>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Main> = (args) => <Main />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {};
Primary.parameters = {
  layout: 'fullscreen',
};

// export const Secondary = Template.bind({});
// Secondary.args = {};
// Secondary.parameters = {
//   layout: 'fullscreen',
// };
