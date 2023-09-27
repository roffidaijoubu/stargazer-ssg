const markdown = require("markdown-it")({
  html: true,
  breaks: true,
  linkify: true,
});

module.exports = function (eleventyConfig) {
  eleventyConfig.addFilter("markdown", function (rawString) {
    return markdown.render(rawString);
  });

  eleventyConfig.addFilter("thousandSeparator", function (number) {
    // Convert the number to a string and add thousand separators
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  });

  // Add asset copy
  eleventyConfig.addPassthroughCopy("src/assets");
  return {
    dir: {
      input: "src",
      output: "_site",
      data: "_data",
    },
  };
};
