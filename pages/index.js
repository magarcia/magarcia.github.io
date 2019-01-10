import Link from 'next/link';
import matter from 'gray-matter';
import readingTime from 'reading-time';
import remark from 'remark';
import remarkReact from 'remark-react';
import Layout from '../components/Layout';
import MetaInfo from '../components/MetaInfo';
import Content from '../components/Content';
import Pagination from '../components/Pagination';

const PostLink = ({ year, month, day, slug, title, intro, readingTime }) => (
  <li>
    <Link
      as={`/${year}/${month}/${day}/${slug}`}
      href={`/post?id=${slug}&year=${year}&month=${month}&day=${day}`}
    >
      <a className="title-link">
        <h2>{title}</h2>
      </a>
    </Link>
    <div className="summary">
      <Content small={true}>
        {
          remark()
            .use(remarkReact)
            .processSync(intro).contents
        }
      </Content>
    </div>
    <MetaInfo {...{ year, month, day, readingTime }} small={true} />
    <style jsx="true" global>{`
      .summary .post-content p {
        width: 100%;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
    `}</style>
    <style jsx="true">{`
      .title-link {
        text-decoration: none;
        color: rgba(0, 0, 0, 0.84);
      }
      h2 {
        overflow: hidden;
        max-height: 84px;
        text-overflow: ellipsis;
        cursor: pointer;
        font-family: 'Open Sans', sans-serif;
      }

      li {
        margin-bottom: 48px;
      }
    `}</style>
  </li>
);

const App = ({ results, page, total }) => (
  <Layout>
    <ul>
      {results.map(props => {
        return <PostLink key={props.id} {...props} />;
      })}
    </ul>
    <Pagination total={total} page={page} />
    <style jsx="true">{`
      ul {
        list-style: none;
      }
    `}</style>
  </Layout>
);
function paginate(array, page = 1, limit = 5) {
  return array.slice((page - 1) * limit, page * limit);
}
const getFileInfo = (filename, contents, fullContent = false) => {
  const frontmatter = matter(contents);
  const id = filename.replace('./', '').replace('.md', '');
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
App.getInitialProps = async function(context) {
  const page = parseInt(context.query.page, 10) || 1;
  const limit = 5;
  const posts = (ctx => {
    const files = ctx
      .keys()
      .map(f => f.replace('./', '').replace('.md', ''))
      .sort();
    const contents = ctx.keys().map(ctx);
    const results = paginate(files.map((f, i) => [f, contents[i]]).reverse(), page, limit).map(
      ([f, c]) => getFileInfo(f, c)
    );
    return {
      page,
      limit,
      total: Math.ceil(files.length / limit),
      results
    };
  })(require.context('../_posts', true, /\.md$/));

  return {
    ...posts
  };
};

export default App;
