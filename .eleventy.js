module.exports = function (eleventyConfig) {
  // Copy static assets from project root into _site/
  eleventyConfig.addPassthroughCopy({ "style.css": "style.css" });
  eleventyConfig.addPassthroughCopy({ "script.js": "script.js" });
  eleventyConfig.addPassthroughCopy({ assets: "assets" });

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
    },
    templateFormats: ["njk"],
    htmlTemplateEngine: "njk",
  };
};
