import styles from "./Movie.module.css";
import PropTypes from "prop-types";


function Movie({id, coverImg, title, onClick}){
  return(
    <li className={styles.movie} onClick={onClick} id={id}>
      <img src={coverImg} alt={title} className={styles.movie_img} onClick={onClick} id={id}/>
      <div className={styles.title_wrap} onClick={onClick} id={id}>
        <h3 className={styles.movie_title}>{title}</h3>
      </div>
    </li>
  );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  coverImg : PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Movie;