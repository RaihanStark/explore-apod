import axios from "axios";

const apiKey = process.env.REACT_APP_API_KEY || "DEMO_KEY";
const URL = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`;

const getApod = () => {
  return axios.get(URL).then((response) => response.data);
};

const getRandomApod = () => {
  return axios.get(`${URL}&count=1`).then((response) => response.data[0]);
};

export { getApod, getRandomApod };
