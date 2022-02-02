import styles from "./Movie.module.css";
import {Link} from "react-router-dom";
import PropTypes from "prop-types";

function Movie({id, year, coverImg, title, summary, genres, onClick}){
  return(
    <div className={styles.movie} onClick={onClick} id={id}>
      <img src={coverImg} alt={title} className={styles.movie_img} />
      <div>
        <ul>
          {genres.map((g) => (
            <li key={g}>{g}</li>
          ))}
        </ul>
        <h2 className={styles.movie_title}>
            <Link to={`/movie/${id}`}>{title}</Link>
        </h2>
        <span>{year}</span>
      </div>
      <p>{summary.length > 235 ? `${summary.slice(0, 235)}...` : summary}</p>
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