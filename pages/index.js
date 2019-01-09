import Link from 'next/link';
import fetch from 'isomorphic-unfetch';
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
      <h2>{title}</h2>
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
    <style jsx={true} global>{`
      .summary .post-content p {
        width: 100%;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
    `}</style>
    <style jsx={true}>{`
      h2 {
        overflow: hidden;
        max-height: 84px;
        text-overflow: ellipsis;
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
    <style jsx={true}>{`
      ul {
        list-style: none;
      }
    `}</style>
  </Layout>
);

App.getInitialProps = async function(context) {
  const page = parseInt(context.query.page, 10) || 1;
  const url = `http://localhost:3000/_posts/?limit=5&page=${page}`;
  const res = await fetch(url);
  const response = await res.json();

  return response;
};

export default App;
