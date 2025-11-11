module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy({"src/assets": "assets"});
  eleventyConfig.addFilter("json", (v) => JSON.stringify(v, null, 2));
  return {
    dir: {
      input: "src",
      includes: "layouts",
      data: "data",
      output: "_site"
    },
    templateFormats: ["njk", "md", "html"],
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk"
  };
};
