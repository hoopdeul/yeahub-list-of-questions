import styles from './styles.module.css';
import QuestionItem from '../QuestionItem/QuestionItem';
import Pagination from '../Pagination/Pagination';
import Skeleton from '../Skeleton/Skeleton';
import {useDebounce} from '../../helpers/useDebounce';
import { useQuestions, PAGE_SIZE } from '../../helpers/useQuestions';

const QuestionList = ({filters}) => {

    const debounceSearch = useDebounce(filters.keywords, 1000);

    const {
        questions,
        isLoading,
        currentPage,
        totalPages,
        goToNextPage,
        goToPrevPage,
        goToPage} = useQuestions(filters, debounceSearch)

    return (
        <section className={styles.questionContainer}>
            <h1 className={styles.title}>
                {isLoading ? (<Skeleton type='title' />) : 'Вопросы React, JavaScript'}
            </h1>

            <ul className={styles.questionList}>
                {isLoading ? (
                    Array.from({ length: PAGE_SIZE }).map((_, index) => (
                        <li key={index}>
                            <Skeleton type="question" />
                        </li>
                    ))
                ) : (
                    questions.map(question => (
                <QuestionItem 
                    key={question.id} 
                    question={question} 
                />))
                )}   
            </ul>

            {isLoading ? (
                <Skeleton type='pagination' />
            ) :
                <Pagination 
                    totalPages={totalPages}
                    currentPage={currentPage}
                    handleNextPage={goToNextPage}
                    handlePrevPage={goToPrevPage}
                    handlePageClick={goToPage}
                />
            }
        </section>
)
}

export default QuestionList;