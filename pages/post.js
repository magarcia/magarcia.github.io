import { withRouter } from 'next/router';
import fetch from 'isomorphic-unfetch';
import remark from 'remark';
import remarkReact from 'remark-react';
import Layout from '../components/Layout';
import MetaInfo from '../components/MetaInfo';
import Content from '../components/Content';
import Gist from 'react-gist';
const visit = require(`unist-util-visit`);

const gistPlugin = () => {
  const globalReact = require('react');
  const globalCreateElement = globalReact.createElement;
  function isUrlValid(userInput) {
    var res = userInput.match(
      /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g
    );
    if (res == null) return false;
    else return true;
  }
  return transformer;

  function transformer(tree) {
    visit(tree, `inlineCode`, node => {
      const { value } = node;

      if (value.startsWith(`gist:`) || value.startsWith(`iframe:`)) {
        const gistUrl = value.substr(5);

        if (isUrlValid(gistUrl)) {
          node.type = `gist`;
          node.value = value;
        }
      }
    });

    return tree;
  }
};

const Post = ({ content, title, year, month, day, readingTime }) => (
  <Layout>
    <article className="post">
      <h1 className="title">{title}</h1>
      <MetaInfo {...{ year, month, day, readingTime }} />
      <Content>
        {
          remark()
            .use(gistPlugin)
            .use(remarkReact, {
              remarkReactComponents: {
                p: ({ children }) => {
                  if (children.length > 0 && typeof children[0] === 'string') {
                    console.log('children', children[0]);
                    if (children[0].startsWith('gist:')) {
                      const url = children[0].replace('gist:', '');
                      const props = {
                        id: url.split('/')[4].split('.')[0]
                      };
                      if (url.indexOf('?file=') > -1) {
                        props.file = url.split('?file=')[1];
                      }
                      return <Gist {...props} />;
                    }
                    if (children[0].startsWith('iframe:')) {
                      const url = children[0].replace('iframe:', '');
                      console.log(children, url);
                      return (
                        <iframe
                          src={url}
                          frameborder="0"
                          width="736"
                          height="443"
                          allowfullscreen="true"
                          mozallowfullscreen="true"
                          webkitallowfullscreen="true"
                        />
                      );
                    }
                  }
                  return <p>{children}</p>;
                }
              }
            })
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
  console.log();
  console.log('id', id, context.query);
  console.log();
  const url = `http://localhost:3000/_posts/${year}-${month}-${day}-${id}`;
  const res = await fetch(url);
  return await res.json();
};

export default withRouter(Post);
