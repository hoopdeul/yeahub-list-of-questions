import styles from './styles.module.css';

const Skeleton = ({type}) => {
    
    return (
        <div className={`${styles[type]}`}>

            {type === 'question' && (
                <>
                    <span className={styles.questionText}></span>
                    <span className={styles.questionButton}></span>
                </>
            )}

        </div>
    )
}

export default Skeleton;