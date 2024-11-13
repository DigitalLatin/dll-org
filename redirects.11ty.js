class Redirects {
  data() {
    return {
      pagination: {
        data: "collections.redirects",
        size: 1,
        alias: "redirect",
      },
      layout: "layouts/redirects.njk",
      eleventyComputed: {
        permalink: ({ redirect }) => `${redirect.from}/index.html`,
      },
      eleventyExcludeFromCollections: true,
    };
  }

  render() {
    return "Redirect Page Rendered";
  }
}

module.exports = Redirects;
