import Header from './Header';
import Footer from './Footer';

const Layout = props => (
  <>
    <Header />
    <section className="body">
      <div className="inner">{props.children}</div>
    </section>
    <Footer />
    <style jsx={true}>{`
      @import url('https://fonts.googleapis.com/css?family=Lora:400,400i,700,700i|Open+Sans:400,600');
      .body {
        margin-top: 65px;
        padding-top: 20px;
        color: rgba(0, 0, 0, 0.84);
        min-height: calc(100vh - 65px - 160px);
      }
      h1,
      h2,
      h3,
      h4,
      h5,
      h6 {
        font-family: 'Open Sans', sans-serif;
        font-weight: 600;
      }
      p,
      span,
      ul,
      li,
      a {
        font-family: 'Lora', serif;
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
    <style jsx={true} global>{`
      body {
        margin: 0;
      }
    `}</style>
  </>
);

export default Layout;
