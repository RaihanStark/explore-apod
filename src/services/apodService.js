import axios from "axios";

const apiKey = process.env.REACT_APP_API_KEY || "DEMO_KEY";
const URL = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`;

const getApod = () => {
  return axios.get(URL);
};

export { getApod };
