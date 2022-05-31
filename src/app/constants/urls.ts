import {environment} from "../../environments/environment";

let {API} = environment;


export const urls = {
  movie:`${API}discover/movie`,
  genre:`${API}genre/movie/list`,
  movieDetails:`${API}movie`
}
