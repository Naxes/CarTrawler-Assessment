const path = require('path');
module.exports = {
  "stories": [
    "../src/**/stories.mdx",
    "../src/**/*.stories.mdx"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials"
  ],
  webpackFinal: async (config, { configType }) => {
    config.resolve.modules = [
      path.resolve(__dirname, ".."),
      "node_modules",
    ]

    config.resolve.alias = {
      ...config.resolve.alias,
      "@/utils": path.resolve(__dirname, "../src/utils"),
      "@/providers": path.resolve(__dirname, "../src/providers"),
      "@/atoms": path.resolve(__dirname, "../src/components/atoms"),
      "@/molecules": path.resolve(__dirname, "../src/components/molecules"),
    };

    return config;
  }
}
