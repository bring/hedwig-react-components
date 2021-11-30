import React from 'react';
import Link from './Link';

export default {
  title: 'Components/Link/Default',
  component: Link,
};

const Template = (args) => <Link {...args}>This is a link</Link>;

export const input = Template.bind({});
input.args = {
  href: '#'
};

input.storyName="Default";
