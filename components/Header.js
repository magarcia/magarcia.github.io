import Link from 'next/link';

const Header = () => (
  <div className="bar">
    <div className="content">
      <div className="block">
        <Link href="/">
          <h1 className="title">magarcia</h1>
        </Link>
      </div>
      <div className="block right">
        <Link href="/about">
          <a>About</a>
        </Link>
      </div>
    </div>
    <style jsx={true}>{`
      @import url('https://fonts.googleapis.com/css?family=Playfair+Display:700');
      a {
        text-decoration: none;
        color: rgba(0, 0, 0, 0.84);
        font-size: 15px;
      }

      a:hover {
        opacity: 0.6;
      }
      .bar {
        position: absolute;
        z-index: 2;
        width: 100%;
        font-size: 16px;
        background: #fff;
        color: rgba(0, 0, 0, 0.54);
        letter-spacing: 0;
        font-weight: 400;
        font-style: normal;
        box-sizing: border-box;
        top: 0;
        box-shadow: 0 4px 12px 0 rgba(0, 0, 0, 0.05);
      }
      .content {
        position: relative;
        max-width: 1032px;
        padding-left: 20px;
        padding-right: 20px;
        margin-left: auto;
        margin-right: auto;
        justify-content: space-between;
        display: flex;
        align-items: center;
        height: 65px;
      }
      .block {
        flex: 1 1 auto;
      }
      .block.right {
        text-align: right;
      }
      .title {
        font-family: 'Playfair Display', serif;
        color: black;
        font-size: 32px;
        font-weight: 700;
      }
    `}</style>
  </div>
);

export default Header;
