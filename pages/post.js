import { withRouter } from 'next/router';
import fetch from 'isomorphic-unfetch';
import remark from 'remark';
import remarkReact from 'remark-react';
import Layout from '../components/Layout';
import MetaInfo from '../components/MetaInfo';
import Content from '../components/Content';

const Post = ({ content, title, year, month, day, readingTime }) => (
  <Layout>
    <article className="post">
      <h1 className="title">{title}</h1>
      <MetaInfo {...{ year, month, day, readingTime }} />
      <Content>
        {
          remark()
            .use(remarkReact)
            .processSync(content).contents
        }
      </Content>
    </article>
    <style jsx={true}>{`
      article {
        outline: 0;
        word-break: break-word;
        word-wrap: break-word;
      }
      .title {
        padding-top: 16px;
        font-family: medium-content-title-font, Georgia, Cambria, 'Times New Roman', Times, serif;
        font-style: normal;
        font-weight: 400;
        line-height: 1.25;
        letter-spacing: 0;
        font-size: 42px;
        margin: 0;
      }
    `}</style>
  </Layout>
);

Post.getInitialProps = async function(context) {
  const { id, year, month, day } = context.query;
  const url = `http://localhost:3000/_posts/${year}-${month}-${day}-${id}`;
  const res = await fetch(url);
  return await res.json();
};

export default withRouter(Post);
