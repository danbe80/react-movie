import {useEffect, useState} from "react";
import Movie from "../components/Movie";
import Main from "../components/Main";
import { number } from "prop-types";

function Home(){
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]); // 영화 API
  const [current, setCurrent] = useState();

  const getMovies = async () => {
    const json = await(
      await fetch(`https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year`)
    ).json();
    setMovies(json.data.movies);
    setLoading(false);
  }
  const onClick = (event)=>{
    const cmovie = movies.filter((movie) => movie.id == event.target.id);
    setCurrent(cmovie)
  }
  useEffect(()=>{
    getMovies();
  }, []);
  console.log(current)
  return(
    <div>
      {loading ? <h1>Loading...</h1> :
      <div>
        <div>
          {
            current == null ? <h1>No click</h1> : 
            <Main 
            key={current[0].id}
            id={current[0].id}
            year={current[0].year}
            coverImg={current[0].medium_cover_image}
            title={current[0].title}
            summary={current[0].summary}
            genres={current[0].genres}
          />
          }
        </div>
        <hr />
        <div>
          {movies.map((movie) => (
            <Movie 
            onClick={onClick}
            key={movie.id}
            id={movie.id}
            year={movie.year}
            coverImg={movie.medium_cover_image}
            title={movie.title}
            summary={movie.summary}
            genres={movie.genres}
            />
          ))}
        </div>
      </div>
      }
    </div>
  );
}
export default Home;