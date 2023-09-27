module.exports = {
  eleventyComputed: {
    title: (data) => {
      return data.article.article_title.stringValue;
    },
    permalink: (data) => {
      return `article/${data.article.article_slug.stringValue}/`;
    },
  },
};
