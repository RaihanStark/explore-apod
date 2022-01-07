function Apod({ title, thumbnail, copyright, date, explanation }) {
  return (
    <div className="apod-container">
      <div className="apod-thumbnail">
        <img className="apod-image" src={thumbnail} alt="apod title" />
        <div className="apod-title">{title}</div>
      </div>
      <div className="apod-info">
        <div className="apod-header">
          <div className="apod-header_left">
            <div className="apod-card apod-copyright">
              <span className="text-primary">Copyright:</span> {copyright}
            </div>
            <div className="apod-card apod-date">
              <span className="text-primary">DATE:</span> {date}
            </div>
          </div>
          <div className="apod-header_right">
            <button className="btn apod-card">Randomize</button>
            <button className="btn apod-card">Share</button>
            <button className="btn apod-card">Download</button>
          </div>
        </div>
        <div className="apod-card apod-body">
          <span className="text-primary">Explanation:</span> {explanation}
        </div>
      </div>
    </div>
  );
}

export default Apod;