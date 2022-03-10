module.exports = function(eleventyConfig) {
    eleventyConfig.addWatchTarget("./src/sass/");

    eleventyConfig.addPassthroughCopy("./src/assets");
    eleventyConfig.addPassthroughCopy("./src/js");


    // Return your Object options:
    return {
      dir: {
        input: "src",
        output: "public"
      }
    };
  };