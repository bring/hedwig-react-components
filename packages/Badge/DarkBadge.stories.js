import React from 'react';
import DarkBadge from './DarkBadge';

export default {
  title: 'Components/Badge/Dark',
  component: DarkBadge
};


const Template = (args) => <DarkBadge {...args}>Badge</DarkBadge>;

export const Dark = Template.bind({});
