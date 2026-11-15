import { useEffect, useState } from 'react';
import styles from './styles.module.css';
import { getQuestions } from '../../api/apiQuestions';
import QuestionItem from '../QuestionItem/QuestionItem';
import Pagination from '../Pagination/Pagination';

const QuestionList = () => {

    const [questions, setQuestions] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);
    const pageSize = 10;

    useEffect(() => {
        const fetchQuestions = async () => {
            try {
                const data = await getQuestions(currentPage, pageSize);
                setQuestions(data.data);
                setTotalPages(Math.ceil(data.total / pageSize))
            } catch (error) {
                console.log(error)
            }
        };
        fetchQuestions();
    }, [currentPage]);

    const handleNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(prev => prev + 1)
        }
    }

    const handlePrevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(prev => prev - 1)
        }
    }
    
    const handlePageClick = (pageNumber) => {
            setCurrentPage(pageNumber)
        }
    return (
            <ul className={styles.questionList}>
                <li className={styles.title}>
                    <h1>Вопросы React, JavaScript</h1>
                </li>

                {questions.map(question => (
                    <QuestionItem 
                    key={question.id} 
                    question={question} />
                ))}
                <li>
                    <Pagination 
                    totalPages={totalPages}
                    handleNextPage={handleNextPage}
                    handlePageClick={handlePageClick}
                    handlePrevPage={handlePrevPage}
                    currentPage={currentPage}
                    />
                </li>
            </ul>
    )
}

export default QuestionList;