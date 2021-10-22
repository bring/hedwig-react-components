import React from 'react';
import WhiteBadge from './WhiteBadge';

export default {
  title: 'Components/Badge/White',
  component: WhiteBadge,
  parameters: {
    backgrounds: {
      default: 'gray-dark',
      values: [
        { name: 'gray-dark', value: '#6E6E6E' },
        { name: 'black', value: '#000000' },
      ],
    },
  }
};

const Template = (args) => <WhiteBadge {...args}>Badge</WhiteBadge>;

export const White = Template.bind({});
