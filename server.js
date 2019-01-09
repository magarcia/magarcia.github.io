const express = require('express');
const next = require('next');
const glob = require('glob');
const matter = require('gray-matter');
const readingTime = require('reading-time');
const fs = require('fs');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

const getFileInfo = (filename, fullContent = false) => {
  const contents = fs.readFileSync(filename).toString();
  const frontmatter = matter(contents);
  const id = filename.replace('./_posts/', '').replace('.md', '');
  const [year, month, day, ...slugParts] = id.split('-');
  return {
    ...(fullContent
      ? { content: frontmatter.content }
      : { intro: frontmatter.content.split('\n\n')[0] }),
    title: frontmatter.data.title,
    readingTime: readingTime(frontmatter.content),
    year,
    month,
    day,
    slug: slugParts.join('-'),
    id
  };
};

function paginate(array, page = 1, limit = 5) {
  return array.slice((page - 1) * limit, page * limit);
}

app
  .prepare()
  .then(() => {
    const server = express();

    server.use(express.static('static'));

    server.get('/_posts', function(req, res) {
      glob('./_posts/*.md', {}, function(er, files) {
        const page = parseInt(req.query.page, 10) || 1;
        const limit = parseInt(req.query.limit, 10) || 5;
        const results = paginate(files.reverse(), page, limit).map(f => getFileInfo(f));
        res.send({
          page,
          limit,
          total: Math.ceil(files.length / limit),
          results
        });
      });
    });
    server.get('/_posts/:filename', function(req, res) {
      const { filename } = req.params;
      res.send(getFileInfo(`./_posts/${filename}.md`, true));
    });

    server.get('/:year/:month/:day/:id', (req, res) => {
      const actualPage = '/post';
      const { year, month, day, id } = req.params;
      app.render(req, res, actualPage, { year, month, day, id });
    });

    server.get('/blog/page/:page', (req, res) => {
      const actualPage = '/';
      const { page } = req.params;
      app.render(req, res, actualPage, { page });
    });

    server.get('*', (req, res) => {
      return handle(req, res);
    });

    server.listen(3000, err => {
      if (err) throw err;
      console.log('> Ready on http://localhost:3000');
    });
  })
  .catch(ex => {
    console.error(ex.stack);
    process.exit(1);
  });
