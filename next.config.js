const postsFolder = './_posts/';
const fs = require('fs');

module.exports = {
  exportPathMap: function() {
    const posts = fs
      .readdirSync(postsFolder)
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

    return {
      '/': { page: '/' },
      '/about': { page: '/about' },
      ...posts
    };
  }
};
