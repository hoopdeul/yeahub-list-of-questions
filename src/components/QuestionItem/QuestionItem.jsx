import styles from './styles.module.css';
import chevrone from '../../images/chevrone.png'
import { useState } from 'react';
import Spoiler from '../Spoiler/Spoiler';

const QuestionItem = ({question}) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
            <li 
            onClick={() => setIsOpen(prev => !prev)}
            className={styles.questionItem}>

                <div className={styles.questionContent}>
                    <p className={styles.questionTitle}>
                        {question.title}</p>

                    <button
                        type='button'
                        className={styles.chevroneBtn}>
                        <img 
                        className={`${styles.chevrone} ${isOpen ? styles.rotated : ""}`}
                        src={chevrone} alt='open-button' />
                    </button>
                </div>
                
                <Spoiler isOpen={isOpen}
                question={question}
                />
        
            </li>
    )
}

export default QuestionItem;