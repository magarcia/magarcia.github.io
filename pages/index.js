import Link from 'next/link';
import fetch from 'isomorphic-unfetch';
import remark from 'remark';
import remarkReact from 'remark-react';
import Layout from '../components/Layout';
import MetaInfo from '../components/MetaInfo';
import Content from '../components/Content';

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
        font-family: medium-content-sans-serif-font, 'Lucida Grande', 'Lucida Sans Unicode',
          'Lucida Sans', Geneva, Arial, sans-serif !important;
      }
      li {
        margin-bottom: 48px;
      }
    `}</style>
  </li>
);

const App = ({ files }) => (
  <Layout>
    <ul>
      {files.map(props => {
        return <PostLink key={props.id} {...props} />;
      })}
    </ul>
    <style jsx={true}>{`
      ul {
        list-style: none;
      }
    `}</style>
  </Layout>
);

App.getInitialProps = async function(context) {
  const url = `http://localhost:3000/_posts/`;
  const res = await fetch(url);
  const files = await res.json();

  return { files };
};

export default App;
