import styles from './styles.module.css'

export function Post(){
  return(
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img className={styles.avatar} src="https://github.com/welissonmwse.png" />
          <div className={styles.authorInfo}>
            <strong>Welisson Silveira</strong>
            <span>Web Developer</span>
          </div>
        </div>
        <time title="03 de Junho as 08:41h" dateTime="2022-06-03 08:41:00">Públicado há 1h</time>
      </header>
      <div className={styles.content}>
        <p>Fala galeraa 👋</p>
        <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>
        <p>👉 <a href=''>jane.design/doctorcare</a></p>
        <p><a href=''>#novoprojeto</a><a href=''> #nlw </a> <a href=''> #rocketseat</a></p>
      </div>

      <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>
        <textarea placeholder="Deixe um comnetário" />

        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>
    </article>
  )
}