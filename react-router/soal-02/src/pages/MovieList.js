import qs from "qs";
import { useLocation } from "react-router-dom";
import MovieCard from "../components/MovieCard";
import MovieListFilter from "../components/MovieListFilter";

import movies from "../dummy-data";

const MovieList = () => {
  const shows = [10, 20, 30];
  const categories = ["TV", "Movie"];
  const fields = ["title", "score"];

  // Variable yang akan menampung parameter yang telah diberikan oleh user
  const queryParam = useLocation();
  // console.log(queryParam);
  const params = qs.parse(queryParam.search, {ignoreQueryPrefix: true});
  console.log(params);

  // Variable yang kita gunakan untuk melakukan penyaringan data
  const filter = {
    show: params.show || shows[0],
    category: params.category || categories[0],
    sort: params.sort || fields[0]
  };

  const sortMovieType = (a, b) => { //before it was sortTitleType
    if(a[filter.sort] > b[filter.sort]){
      return 1;
    }
    else if(a[filter.sort] < b[filter.sort]){
      return -1;
    }
    else {
      return 0;
    }
  }

  // const sortScoreType = (a, b) => {
  //   if(a[filter.sort] > b[filter.sort]){
  //     return -1;
  //   }
  //   else if(a[filter.sort] < b[filter.sort]){
  //     return 1;
  //   }
  //   else {
  //     return 0;
  //   }
  // }

  // const sortType = () => {
  /* I trying to sort by title or score, if sort by title then it would display from a to z (ascending order)
     and if sort by score then it would display from 10 to 1 (descending order). But, it still doesn't work */
  //   if(filter.sort == "title"){
  //     sortTitleType;
  //   }
  //   else if(filter.sort == "score"){
  //     sortScoreType;
  //   }
  // }
  // console.log(sortTitleType);

  // Variable yang akan menyimpan data-data yang sudah difilter menggunakan variable filter diatas
  const filteredMovies = movies
  .filter((movie) => {
    return movie.type === filter.category
  })
  .slice(0, filter.show)
  .sort(sortMovieType);

  return (
    <div className="row">
      <MovieListFilter />
      {filteredMovies.map((movie) => (
        <div className="col-lg-3 col-md-4 col-sm-6 col-12" key={movie.mal_id}>
          <MovieCard movie={movie} />
        </div>
      ))}
    </div>
  );
};

export default MovieList;
