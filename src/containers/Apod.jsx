function Apod({
  title,
  thumbnail,
  imageHd,
  copyright,
  date,
  explanation,
  mediaType,
  refreshApodHandler,
}) {
  const downloadHandler = () => {
    window.open(imageHd, "_blank"); //to open new page
  };

  const displayHero = () => {
    if (mediaType === "video") {
      return (
        <div className="video-container">
          <iframe src={thumbnail} title={title} frameborder="0"></iframe>
        </div>
      );
    } else {
      return <img className="apod-image" src={thumbnail} alt="apod title" />;
    }
  };

  return (
    <div className="apod-container">
      <div className="apod-thumbnail">
        {displayHero()}
        <div
          className={`apod-title ${
            mediaType === "video" ? "apod-video" : null
          }`}
        >
          {title}
        </div>
      </div>
      <div className="apod-info">
        <div className="apod-header">
          <div className="apod-header_left">
            <div className="apod-card apod-copyright">
              <span className="text-primary">Copyright:</span> {copyright}
            </div>
            <div className="apod-card apod-date">
              <span className="text-primary">Date:</span> {date}
            </div>
          </div>
          <div className="apod-header_right">
            <button className="btn apod-card" onClick={refreshApodHandler}>
              Random Picture
            </button>
            <button className="btn apod-card" onClick={downloadHandler}>
              Download HD
            </button>
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
