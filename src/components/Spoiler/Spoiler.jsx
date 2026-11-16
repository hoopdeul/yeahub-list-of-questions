import styles from './styles.module.css';

const Spoiler = ({isOpen, shortAnswer}) => {
    
    return (

        <div
            className={`${styles.answerContent} ${isOpen ? styles.answerOpen : ''}`}>
                <div className={styles.details}>
                    <p>Рейтинг: </p>
                    <p>Сложность: </p>
                </div>
                <div dangerouslySetInnerHTML={{
                __html: shortAnswer
            }}/>

        </div>
        
    )
}

export default Spoiler;