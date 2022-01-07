import { useState, useEffect } from "react";

import { getApod, getRandomApod } from "./services/apodService";

import Header from "./containers/Header";
import Apod from "./containers/Apod";

function App() {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const [notAvailable, setNotAvailable] = useState(false);

  useEffect(() => {
    getApod().then((apodData) => {
      if (apodData.media_type !== "image") {
        setNotAvailable(true);
        return;
      }
      setData(apodData);
      setLoading(false);
    });
  }, []);

  const refreshApodHandler = () => {
    setData({ ...data, url: "" });
    setLoading(true);
    getRandomApod().then((apodData) => {
      if (apodData.media_type !== "image") {
        return getRandomApod();
      }
      setData(apodData);
      setLoading(false);
    });
  };

  return (
    <>
      <Header />
      {loading || notAvailable ? (
        <div style={{ textAlign: "center" }}>
          {notAvailable
            ? "APOD is not available for today, check again later"
            : "Loading..."}
        </div>
      ) : (
        <Apod
          title={data.title}
          thumbnail={data.url}
          imageHd={data.hdurl}
          copyright={data.copyright || "NASA"}
          date={data.date.replaceAll("-", ".")}
          explanation={data.explanation}
          refreshApodHandler={refreshApodHandler}
        />
      )}
    </>
  );
}

export default App;
