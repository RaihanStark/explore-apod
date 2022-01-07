import { useState, useEffect } from "react";

import { getApod } from "./services/apodService";

import Header from "./containers/Header";
import Apod from "./containers/Apod";

function App() {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const [notAvailable, setNotAvailable] = useState(false);
  useEffect(() => {
    getApod().then((response) => {
      if (response.data.media_type !== "image") {
        setNotAvailable(true);
        return;
      }
      setData(response.data);
      setLoading(false);
    });
  }, []);

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
          thumbnail={data.hdurl || data.url}
          copyright={data.copyright}
          date={data.date.replaceAll("-", ".")}
          explanation={data.explanation}
        />
      )}
    </>
  );
}

export default App;
