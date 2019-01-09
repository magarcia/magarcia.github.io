import Link from 'next/link';

const range = size =>
  Array(size)
    .fill(1)
    .map((x, y) => x + y);

export default ({ total, page }) => (
  <div>
    {range(total).map(val => {
      if (page === val) {
        return (
          <a key={val} className="page active">
            {val}
          </a>
        );
      } else {
        return (
          <Link
            key={val}
            as={val === 1 ? '/' : `/blog/page/${val}`}
            href={val === 1 ? '/' : `/?page=${val}`}
          >
            <a className="page">{val}</a>
          </Link>
        );
      }
    })}
    <style jsx="true">{`
      .page {
        text-decoration: none;
        color: rgba(0, 0, 0, 0.84);
        border: 1px solid rgba(0, 0, 0, 0.84);
        margin-right: 10px;
        padding: 2px 12px;
        border-radius: 2px;
        font-family: 'Open Sans', sans-serif;
      }
      .page:hover {
        cursor: pointer;
        color: rgba(0, 0, 0, 1);
      }
      .page.active {
        opacity: 0.5;
        cursor: default;
        color: rgba(0, 0, 0, 0.84);
      }
    `}</style>
  </div>
);
