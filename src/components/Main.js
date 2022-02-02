import styles from "./Main.module.css";

function Main({id, year, coverImg, title, summary, genres}){
  return(
    <div className={styles.cmovie} id={id}>
      <img src={coverImg} alt={title} className={styles.movie_img} />
      <div>
        <span>{year}</span>
      </div>
      <p>{summary}</p>
    </div>
  );
}
export default Main;