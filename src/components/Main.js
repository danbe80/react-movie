import styles from "./Main.module.css";
import PropTypes from "prop-types";
import { BsFillStarFill }  from "react-icons/bs";

function Main({id, year, coverImg, title, summary, genres, runtime, rating, bgImg}){
  return(
    <div className={styles.cmovie_wrap}>
      <img src={bgImg} alt={title} className={styles.cmovie_bgimg} />
      <div className={styles.cmovie} id={id}>
        <img src={coverImg} alt={title} className={styles.cmovie_img} />
        <div className={styles.cmovie_detail}>
          <h2 className={styles.cmovie_title}>{title}</h2>
          <span className={styles.cmovie_year}>{year}</span>
          <div className={styles.cmovie_detail_ex}>
            <span>{runtime == 0 ? null : `${runtime} min |`} </span> 
            <ul className={styles.cmovie_genres}>
            {genres.map((g) => (
              <li key={g}>{g}</li>
            ))}
          </ul>
          </div>
          <h3 className={styles.cmovie_rating}><span><BsFillStarFill /></span> {rating}</h3>
          <p className={styles.cmovie_summary}>{summary.length > 800 ? `${summary.slice(0,800)}...` : summary}</p>
        </div>
      </div>
    </div>
  );
}


Main.propTypes = {
  id: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
  coverImg : PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
  runtime: PropTypes.number.isRequired,
  rating: PropTypes.number.isRequired
};
export default Main;