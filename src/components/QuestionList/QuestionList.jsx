import { useEffect, useState } from 'react';
import styles from './styles.module.css';
import { getQuestions } from '../../api/apiQuestions';
import QuestionItem from '../QuestionItem/QuestionItem';
import Pagination from '../Pagination/Pagination';
import Skeleton from '../Skeleton/Skeleton';
import {useDebounce} from '../../helpers/useDebounce';


const QuestionList = ({selectedSpec, selectedSkills, selectedComplexity, selectedRate, keywords}) => {

    const [questions, setQuestions] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);
    const pageSize = 10;
    const [isLoading, setIsLoading] = useState(true);
    const debounceSearch = useDebounce(keywords, 1000);

    useEffect(() => {
        const fetchQuestions = async () => {
            setIsLoading(true);
            try {
                const data = await getQuestions(currentPage,
                    pageSize,
                    {
                        ...(selectedSpec && {
                            specializationId: selectedSpec
                        }),

                        ...(selectedSkills.length > 0 && {
                            skills: selectedSkills,
                            skillFilterMode: 'ANY'
                        }),

                        ...(selectedComplexity.length > 0 && {
                            complexity: selectedComplexity
                        }),

                        ...(selectedRate.length > 0 && {
                            rate: selectedRate
                        }),
                        ...(debounceSearch.trim().length > 0 && {
                            titleOrDescription: debounceSearch.trim()
                        })
                    }
                );
                setQuestions(data.data);
                setTotalPages(Math.ceil(data.total / pageSize));
            } catch (error) {
                console.log(error)
            } finally {
                setIsLoading(false);
            }
        };
        fetchQuestions();
    }, [currentPage, selectedSpec, selectedSkills, selectedComplexity, selectedRate, debounceSearch]);


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
            <section className={styles.questionContainer}>

                <h1 className={styles.title}>{isLoading ? (<Skeleton type='title' />) : 'Вопросы React, JavaScript'}</h1>

                <ul className={styles.questionList}>
                    {isLoading ? (
                        Array.from({ length: pageSize }).map((_, index) => (
                            <li key={index}>
                                <Skeleton type="question" />
                            </li>
                        ))
                    ) : (
                        questions.map(question => (
                    <QuestionItem 
                    key={question.id} 
                    question={question} />
                ))
                    )}
                    
                </ul>
                {isLoading ? (
                    <Skeleton type='pagination' />
                ) :
                <Pagination 
                totalPages={totalPages}
                handleNextPage={handleNextPage}
                handlePageClick={handlePageClick}
                handlePrevPage={handlePrevPage}
                currentPage={currentPage}
                /> }
            </section>
    )
}

export default QuestionList;