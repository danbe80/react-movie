import {useEffect, useState} from "react";
import Movie from "../components/Movie";
import Main from "../components/Main";
import styles from "./Home.module.css";

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
    setCurrent(cmovie[0]);
    console.log(cmovie[0])
  }
  useEffect(()=>{
    getMovies();
  }, []);
  return(
    <div>
      {loading ? <h1>Loading...</h1> :
      <div>
        <div className={styles.main_wrap}>
          {
            current == null ? <h1>No click</h1> : 
            <Main 
            key={current.id}
            id={current.id}
            year={current.year}
            coverImg={current.medium_cover_image}
            title={current.title}
            summary={current.summary}
            genres={current.genres}
            runtime={current.runtime}
            rating={current.rating}
          />
          }
        </div>
        <hr />
        <h2>Movie</h2>
        <div className={styles.movie_wrap}>
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