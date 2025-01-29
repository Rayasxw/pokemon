import React from 'react'
import styles from './Pagination.module.scss'
function Pagination({prev, next, page = 1}) {
  return (
    <div className={styles.wrapper}>
        <button onClick={prev}>Prev</button>
        <p>{page}</p>
        <button onClick={next}>Next</button>
    </div>
  )
}

export default Pagination