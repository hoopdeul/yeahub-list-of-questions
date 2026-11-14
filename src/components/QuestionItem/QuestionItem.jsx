// import { useEffect, useState } from 'react';
import styles from './styles.module.css';
// import { fetchQuestions } from '../../api/apiQuestions';

const QuestionItem = ({question}) => {
    return (
            <li className={styles.questionItem}>
                <p>{question.title}</p>
            </li>
    )
}

export default QuestionItem;