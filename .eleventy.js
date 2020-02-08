module.exports = function(config) {
  config.addLayoutAlias('default', 'index.njk');

  return {
    dir: {
      input: "src",
      output: "dist"
    },
    // templateFormats: ["njk", "md", "11ty.js"],
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk",
    passthroughFileCopy: true
  };
};
