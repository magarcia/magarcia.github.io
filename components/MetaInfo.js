import Moment from 'react-moment';

export default ({ year, month, day, readingTime, small = false }) => (
  <div className="postMetaInline">
    <Moment date={`${year}-${month}-${day}`} format="ll" />
    <span className="middotDivider" />
    <span className="readingTime" title={readingTime.text} />
    <style jsx="true">{`
      .postMetaInline {
        font-weight: 400;
        font-style: normal;
        letter-spacing: 0;
        font-size: ${small ? '15px' : '16px'};
        line-height: 20px;
        color: rgba(0, 0, 0, 0.54);
        margin: 24px 0;
      }
      .middotDivider {
        padding-right: 0.3em;
        padding-left: 0.3em;
        font-size: 15px;
      }
      .middotDivider:after {
        content: '\00B7';
      }
      .readingTime:after {
        content: attr(title);
      }
    `}</style>
  </div>
);
