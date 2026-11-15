import styles from './styles.module.css';
import preBtn from '../../images/previousBtn.png';
import nextBtn from '../../images/nextBtn.png'  
import { getPages } from '../../helpers/getPages';

const Pagination = ({totalPages, handleNextPage, handlePageClick, handlePrevPage, currentPage}) => {

    return (
        <div className={styles.pagination}>
            <button 
            onClick={handlePrevPage} 
            className={styles.previousBtn}
            disabled={currentPage === 1}>
                <img src={preBtn} alt='<'/>
            </button>
            <div className={styles.pageNumber}>
                {getPages(totalPages, currentPage).map((page, index) => (
                    page ==='...' ? (
                        <span key={`dots-${index}`}>...</span>
                    ) : (
                    <button 
                    onClick={() => handlePageClick(page)}
                    disabled={page === currentPage}
                    key={page}>
                        {page}
                    </button>
                )))}
            </div>
            <button 
            onClick={handleNextPage} 
            className={styles.nextBtn}
            disabled={currentPage === totalPages}>
                <img src={nextBtn} alt='>'/>
            </button>
        </div>
    )
}

export default Pagination;