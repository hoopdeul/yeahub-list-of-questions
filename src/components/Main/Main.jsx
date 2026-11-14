import QuestionList from '../QuestionList/QuestionList';
import Sidebar from '../Sidebar/Sidebar';
import styles from './styles.module.css';

const Main = () => {
    return (
        <div className={styles.main}>
            <QuestionList />
            <Sidebar />
        </div>
    )
}

export default Main;