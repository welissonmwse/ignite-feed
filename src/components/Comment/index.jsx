import { ThumbsUp, Trash } from 'phosphor-react'
import styles from './styles.module.css'

export function Comment(){
  return (
    <div className={styles.comment}>
      <img className={styles.avatar} src="https://github.com/welissonmwse.png" />
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Welisson Silveira</strong>
              <time title="03 de Junho as 08:41h" dateTime="2022-06-03 08:41:00">Há cerca de 1h</time>
            </div>
            <button>
              <Trash size={20} />
            </button>
          </header>
          <p>Muito bom</p>
        </div>
        <footer>
          <button>
            <ThumbsUp size={24}/>
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  )
}