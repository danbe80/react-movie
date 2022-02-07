import {useEffect, useState} from "react";
import Movie from "../components/Movie";
import Main from "../components/Main";
import Default from "../components/Default";
import styles from "./Home.module.css";
import { BsChevronCompactLeft, BsChevronCompactRight }  from "react-icons/bs";

function Home(){
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]); // 영화 API
  const [current, setCurrent] = useState();
  const [currentIdx, setCurrentIdx] = useState(0);
  let threeTimesEvents = [];
  // 영화 API로 영화정보 받아오기 (비동기 사용: async await)
  const getMovies = async () => {
    const json = await(
      await fetch(`https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year`)
    ).json();
    const events = json.data.movies;
    threeTimesEvents = await [...events, ...events, ...events ];
    setMovies(threeTimesEvents);
    setLoading(false);
  }
  // click event
  const onClick = (event)=>{
    const cmovie = movies.filter((movie) => movie.id == event.target.id);
    setCurrent(cmovie[0]);
    console.log(cmovie[0])
  }
  // btn click event(slide)
  const onPrev = (event) => {
    console.log(event)
  }
  const onNext = () => {

  }
  useEffect(() => {

  }, [currentIdx])
  useEffect(()=>{
    getMovies();
  }, []);
  return(
    <div>
      {loading ? <h1>Loading...</h1> :
      <div className={styles.wrap}>
        <div className={styles.main_wrap}>
          {
            current == null ? 
            <Default /> : 
            <Main 
            id={current.id}
            year={current.year}
            coverImg={current.medium_cover_image}
            bgImg={current.large_cover_image}
            title={current.title}
            summary={current.summary}
            genres={current.genres}
            runtime={current.runtime}
            rating={current.rating}
          />
          }
        </div>
        <h2 className={styles.list_title}>Movie</h2>
        <div className={styles.movie_wrap}>
          <ul className={styles.movie_container}>
           {movies.map((movie) => (
             <Movie 
             onClick={onClick}
             id={movie.id}
             coverImg={movie.medium_cover_image}
             title={movie.title}
             />
             ))}
          </ul>
          <div className={styles.btn_wrap}>
            <div className={styles.slide_btn} onClick={onPrev}><BsChevronCompactLeft /></div>
            <div className={styles.slide_btn} onClick={onNext}><BsChevronCompactRight /></div>
          </div>
        </div>
      </div>
      }
    </div>
  );
}
export default Home;