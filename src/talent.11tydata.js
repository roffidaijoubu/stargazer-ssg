module.exports = {
  eleventyComputed: {
    title: (data) => {
      return data.talent.talent_name.stringValue;
    },
    permalink: (data) => {
      return `talent/${data.talent.talent_slug.stringValue}/`;
    },
  },
};
