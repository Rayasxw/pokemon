import React from 'react'
import styles from './Pagination.module.scss'
function Pagination({prev, next, page}) {
  return (
    <div className={styles.wrapper}>
        <button>Prev</button>
        <p>page {page}</p>
        <button>Next</button>
    </div>
  )
}

export default Pagination