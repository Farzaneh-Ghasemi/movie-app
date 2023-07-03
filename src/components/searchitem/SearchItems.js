import React from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useEffect, useState, useCallback } from 'react'
import SingleContent from '../singlecntent/SingleContent'
import style from './SearchItems.module.css'

const SearchItems = () => {
  const params = useParams();
  const navigate = useNavigate();
  const query = params.query;
  const [searchResult, setSearchResult] = useState([]);

  { console.log(params.query) }

  const fetchMovies = () => {
    axios.get('/jsonData/movies.json')
      .then((response) => {
        searchMovies(response.data);

      })
      .catch((error) => {
        console.log(error);
      })
  }
  useEffect(() => {
    window.scrollTo(0, 0);
    fetchMovies();
  }, [query]);

  const searchMovies = (result) => {
    console.log(result);
    if (result) {
      const newSearchResult = result.filter((element) =>
        element.Title.toLowerCase().includes(query.toLowerCase().trim())
      );
      setSearchResult(newSearchResult);
    } else {
      console.log('error');
    }
  };

const notFoundMovie=()=>{
setTimeout(() => {
  navigate('/movies')
}, 3000);
}
  return (
    <div>
      <span className={style.pageTitle}>
        {searchResult.length > 0 ? 'Search Result' : `The " ${query}" Not Found`}
      </span>
      <div className={style.search}>
        {
          searchResult.length>0 ? searchResult.map((movie) =>
            <SingleContent
              key={movie.Id}
              id={movie.Id}
              poster={movie.Poster}
              title={movie.Title}
              date={movie.Year}
              media_type={movie.Type}
              vote_average={movie.imdbRating}
              plot={movie.Plot}
            />
          )
          :
          notFoundMovie()
        }

      </div>
    </div>
  );
};

export default SearchItems;
