import React from 'react';
import SimpleLink from './SimpleLink';

export default {
  title: 'Components/Link/Simple',
  component: SimpleLink,
};

const Template = (args) => <SimpleLink {...args}>Link with no underline to be used in other components that are also links (i.e Cards)</SimpleLink>;

export const input = Template.bind({});
input.args = {
  href: '#'
};

input.storyName="Simple";
