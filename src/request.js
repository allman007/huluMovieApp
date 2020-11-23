const API_KEY = "57e33840b910e97d6a61a7c8ea23d5d5";
const header =
  "Authorization: Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1N2UzMzg0MGI5MTBlOTdkNmE2MWE3YzhlYTIzZDVkNSIsInN1YiI6IjVmYWU0NTRkN2E5N2FiMDAzZWNkNTg1YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.IvdTzP2q4NQKmB6cCakPkSciAerGQje02iNO-blUzRM";

module.exports = {
  fetchTreanding: `/trending/all/week?api_key=${API_KEY}&language=en-US${header}`,
  fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US${header}`,
  fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
  fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
  fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
  fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=12`,
  fetchMystery: `/discover/movie?api_key=${API_KEY}&with_genres=9648`,
  fetchWestern: `/discover/movie?api_key=${API_KEY}&with_genres=37`,
  fetchAnimation: `/discover/movie?api_key=${API_KEY}&with_genres=16`,
  fetchTV: `/discover/movie?api_key=${API_KEY}&with_genres=10752`,
  fetchSciFi: `/discover/movie?api_key=${API_KEY}&with_genres=343611`,
};
