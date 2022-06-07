import {environment} from "../../environments/environment";


let {API} = environment;


export const urls = {
  movie:`${API}discover/movie`,
  genre:`${API}genre/movie/list`,
  movieDetails:`${API}movie`,
  FilmByGenre:`${API}discover/movie?with_genres=`,
  search:`${API}search/movie?query=`,
  topMovie:`${API}movie/top_rated`
}
