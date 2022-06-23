import React from 'react'
import Question from '../../components/QuestionComponent/Question'
import styles from './Homepage.module.css'



const Homepage = () => {

  return (
    <div className={styles.container}>

            <Question />

    </div>
  )
}

export default Homepage