module.exports = function(eleventyConfig) {
    // Add asset copy
    eleventyConfig.addPassthroughCopy("src/assets");
    return {
        dir: {
            input: "src",
            output: "_site"
        }
    };
};
