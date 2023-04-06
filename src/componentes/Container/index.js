import styles from './Container.module.css'
import React from 'react'

export default function Container({children}) {
  return (
    <section className={styles.container}>
        {children}
    </section>
  )
}
