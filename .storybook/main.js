const path = require('path');

module.exports = {
  "stories": [
    "../stories/**/*.stories.mdx",
    "../**/*.stories.@(js|jsx|ts|tsx)",
    "../**/*.stories.mdx"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials"
  ]
}

