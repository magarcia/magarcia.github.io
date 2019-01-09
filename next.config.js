const postsFolder = './_posts/';
const fs = require('fs');
const withPlugins = require('next-compose-plugins');
const optimizedImages = require('next-optimized-images');
const withImages = require('next-images');

const range = size =>
  Array(size)
    .fill(1)
    .map((x, y) => x + y);

module.exports = withPlugins([withImages], [optimizedImages], {
  exportPathMap: function() {
    const files = fs.readdirSync(postsFolder);
    const posts = files
      .map(filename => {
        const [year, month, day, ...idParts] = filename.split('-');
        const id = idParts.join('-').replace('.md', '');

        const url = `/${year}/${month}/${day}/${id}`;
        const params = {
          page: '/post',
          query: { year, month, day, id }
        };
        return [url, params];
      })
      .reduce((accu, [url, params]) => ({ ...accu, [url]: params }), {});

    const pages = range(Math.ceil(files.length / 5))
      .map(page => [`/blog/page/${page}`, { page: `/`, query: { page } }])
      .reduce((accu, [url, params]) => ({ ...accu, [url]: params }), {});

    return {
      '/': { page: '/' },
      '/about': { page: '/about' },
      ...posts,
      ...pages
    };
  }
});
