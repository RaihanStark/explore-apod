import axios from "axios";

const apiKey = "DEMO_KEY";
const URL = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`;

const getApod = () => {
  return axios.get(URL);
};

export { getApod };
