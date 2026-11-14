import styles from './styles.module.css';
import preBtn from '../../images/previousBtn.png';
import nextBtn from '../../images/nextBtn.png'  

const Pagination = ({totalPages, handleNextPage, handlePageClick, handlePrevPage, currentPage}) => {
    return (
        <div className={styles.pagination}>
            <button onClick={handlePrevPage} className={styles.previousBtn}>
                <img src={preBtn} alt='<'/>
            </button>
            <div className={styles.pageNumber}>
                {[...Array(totalPages)].map((_, index) => {
                    return <button 
                    onClick={() => handlePageClick(index + 1)}
                    disabled={index + 1 === currentPage}
                    key={index}>
                        {index + 1}
                    </button>
                })}
            </div>
            <button onClick={handleNextPage} className={styles.nextBtn}>
                <img src={nextBtn} alt='>'/>
            </button>
        </div>
    )
}

export default Pagination;