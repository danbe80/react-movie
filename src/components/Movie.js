import styles from "./Movie.module.css";
import PropTypes from "prop-types";

function Movie({id, year, coverImg, title, summary, genres, onClick}){
  return(
    <div className={styles.movie} >
      <img src={coverImg} alt={title} className={styles.movie_img} onClick={onClick} id={id}/>
      <div>
        <h3 className={styles.movie_title} onClick={onClick} id={id}>{title}</h3>
      </div>
    </div>
  );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
  coverImg : PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default Movie;