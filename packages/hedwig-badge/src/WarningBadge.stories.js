import React from 'react';
import WarningBadge from './WarningBadge';

export default {
  title: 'Components/Badge/Warning',
  component: WarningBadge
};

const Template = (args) => <WarningBadge {...args}>Badge</WarningBadge>;

export const Warning = Template.bind({});
