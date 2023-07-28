const pluginRss = require("@11ty/eleventy-plugin-rss"); // needed for absoluteUrl feature
const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");
const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const redirectsPlugin = require("eleventy-plugin-redirects");

// Base setup for builds, needed for og tags and correct image paths
// (mostly for github pages deployment, see build-deploy.yaml)
const baseUrl = process.env.BASE_URL || "http://localhost:8080";
// e.g. 'https://mandrasch.github.io/'
const pathPrefix = process.env.PATH_PREFIX || "/";
// e.g. '/11ty-plain-boostrap5/'
console.log("baseUrl is set to ...", baseUrl);
console.log("pathPrefix is set to ...", pathPrefix);

// will be accessible in all templates via
// see "eleventyConfig.addGlobalData("site", globalData);"" below
// related: https://github.com/11ty/eleventy/issues/1641
const globalSiteData = {
  title: "Digital Latin Library",
  description: "The main site for the Digital Latin Library",
  locale: "en",
  baseUrl: baseUrl,
  pathPrefix: pathPrefix,
  lang: "en",
  home: "https://digitallatin.org/",
};
// Add CSS to Markdown text.
// From https://giuliachiola.dev/posts/add-html-classes-to-11ty-markdown-content/
const markdownIt = require("markdown-it");
const markdownItAttrs = require("markdown-it-attrs");

const markdownItOptions = {
  html: true,
  breaks: true,
  linkify: true,
};

const markdownLib = markdownIt(markdownItOptions).use(markdownItAttrs);
// Make 'filters' directory known to 11ty.
const filters = require("./src/js/filters");
// https://www.11ty.dev/docs/plugins/image/#use-this-in-your-templates
const Image = require("@11ty/eleventy-img");

async function imageShortcode(src, alt, sizes = "100vw") {
  if (alt === undefined) {
    // You bet we throw an error on missing alt (alt="" works okay)
    throw new Error(`Missing \`alt\` on responsiveimage from: ${src}`);
  }

  // TODO: pathPrefix must be '/path/', check existence of trailing slash?!
  let metadata = await Image(src, {
    widths: [600, 1200],
    formats: ["webp", "jpeg"],
    urlPath: `${pathPrefix}img`,
    // outputDir: "./img/" is default
    outputDir: "./_site/img/", // passthrough below didn't work, write to output dir by now
  });

  let lowsrc = metadata.jpeg[0];
  let highsrc = metadata.jpeg[metadata.jpeg.length - 1];

  return `<picture>
    ${Object.values(metadata)
      .map((imageFormat) => {
        return `  <source type="${imageFormat[0].sourceType}" srcset="${imageFormat
          .map((entry) => entry.srcset)
          .join(", ")}" sizes="${sizes}">`;
      })
      .join("\n")}
        <img
            src="${lowsrc.url}"
            width="${highsrc.width}"
            height="${highsrc.height}"
            alt="${alt}"
            loading="lazy"
            decoding="async">
</picture>`;
}

module.exports = function (eleventyConfig) {
  // Set Markdown library
  eleventyConfig.setLibrary("md", markdownLib);

  // Dates
  eleventyConfig.addFilter("readableDate", filters.readableDate);
  eleventyConfig.addFilter("currentYear", function () {
    return new Date().getFullYear();
  });

  // Syntax highlighting
  eleventyConfig.addPlugin(syntaxHighlight);

  // Set site title
  eleventyConfig.addGlobalData("site", globalSiteData);

  // Add plugins
  eleventyConfig.addPlugin(pluginRss);
  eleventyConfig.addPlugin(eleventyNavigationPlugin);
  eleventyConfig.addPlugin(redirectsPlugin, {
    template: "clientSide",
  });

  // Copy dist/ files from laravel mix
  eleventyConfig.addPassthroughCopy("dist/"); // path is relative from root

  // Copy (static) files to output (_site)
  eleventyConfig.addPassthroughCopy("src/assets");

  eleventyConfig.addPassthroughCopy("src");

  eleventyConfig.setBrowserSyncConfig({
    // Enable serving files from the 'dist' directory
    server: "dist",
  });

  // Copy transformed images
  // TODO: this is executed too soon? imgs not there?
  eleventyConfig.addPassthroughCopy("img/");

  // Important for watch: Eleventy will not add a watch for files or folders that
  // are in .gitignore (--> dist/),unless setUseGitIgnore is turned off. See this chapter:
  // https://www.11ty.dev/docs/watch-serve/#add-your-own-watch-targets
  eleventyConfig.setUseGitIgnore(false);

  // Watch for changes (and reload browser)
  eleventyConfig.addWatchTarget("./src/assets"); // normal (static) assets
  eleventyConfig.addWatchTarget("./dist"); // laravel-mix output changes

  // RandomId function for IDs used by labelled-by
  // Thanks https://github.com/mozilla/nunjucks/issues/724#issuecomment-207581540
  // TODO: replace with addNunjucksGlobal? https://github.com/11ty/eleventy/issues/1498
  eleventyConfig.addFilter("generateRandomIdString", function (prefix) {
    return prefix + "-" + Math.floor(Math.random() * 1000000);
  });

  // eleventy-img config
  eleventyConfig.addNunjucksAsyncShortcode("image", imageShortcode);
  // Create a list of tags.
  // From https://stackoverflow.com/a/66186773/2943704
  eleventyConfig.addCollection("tagsList", (collectionApi) => {
    const tagsSet = new Set();
    collectionApi.getAll().forEach((item) => {
      if (!item.data.tags) return;
      item.data.tags.filter((tag) => !["foo", "bar"].includes(tag)).forEach((tag) => tagsSet.add(tag));
    });
    return [...tagsSet].sort((a, b) => b.localeCompare(a));
  });
  // Set posts as a collection
  eleventyConfig.addCollection("posts", function (collectionApi) {
    return collectionApi.getFilteredByGlob("./src/posts/*.md");
  });
  eleventyConfig.addCollection("about", function (collection) {
    return collection.getFilteredByGlob("./src/about/**/*.md");
  });
  eleventyConfig.addCollection("blog", function (collection) {
    return collection.getFilteredByGlob("./src/blog/**/*.md");
  });
  eleventyConfig.addCollection("research", function (collection) {
    return collection.getFilteredByGlob("./src/research/**/*.md");
  });
  eleventyConfig.addCollection("videos", function (collection) {
    return collection.getFilteredByGlob("./src/videos/**/*.md");
  });

  // Base Config
  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "includes", // this path is releative to input-path (src/)
      layouts: "layouts", // this path is releative to input-path (src/)
      data: "data", // this path is releative to input-path (src/)
    },
    templateFormats: ["njk", "md"],
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk",
    // important for github pages build (subdirectory):
    pathPrefix: pathPrefix,
  };
};
