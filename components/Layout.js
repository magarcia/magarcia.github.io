import Header from './Header';

const Layout = props => (
  <>
    <Header />
    <section className="body">
      <div className="inner">{props.children}</div>
    </section>
    <style jsx={true}>{`
      .body {
        margin-top: 65px;
        padding-top: 20px;
      }
      .inner {
        max-width: 740px;
        padding-left: 20px;
        padding-right: 20px;
        width: 100%;
        margin: 0 auto;
        box-sizing: border-box;
      }
    `}</style>
  </>
);

export default Layout;
