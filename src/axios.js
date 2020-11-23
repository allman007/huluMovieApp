import axios from "axios";

// base url to make requests to the movie db
const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",

  // headers: "Content-Type: application/json;charset=utf-8",
});

export default instance;
