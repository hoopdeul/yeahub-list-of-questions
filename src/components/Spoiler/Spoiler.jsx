import styles from './styles.module.css';

const Spoiler = ({isOpen, question}) => {
    
    return (
        <div className={`${styles.answerContent} ${isOpen ? styles.answerOpen : ''}`}>
                <div className={styles.details}>
                    <p>
                        <span>Рейтинг:</span>
                        <span className={styles.number}>{question.rate}</span>
                    </p>
                    <p>
                        <span>Сложность:</span>
                        <span className={styles.number}>{question.complexity}</span>
                    </p>
                </div>
                <div dangerouslySetInnerHTML={{
                __html: question.shortAnswer
            }}/>

        </div>
        
    )
}

export default Spoiler;