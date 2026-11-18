import styles from './styles.module.css';
import { useState } from 'react';

const VISIBLE_LIMIT = 5;

const FilterList = ({
    title,
    items,
    isLoading = false,
    getLabel = (item) => item.title ?? item.label ?? String(item),
    getValue = (item) => item.id ?? item,
    isSelected,
    onToggle,
    emptyText = 'Нет данных'
}) => {
    const [showAll, setShowAll] = useState(false);
    const visibleItems = showAll ? items : items.slice(0, VISIBLE_LIMIT);

    return (
        <div>
            <p className={styles.title}>{title}</p>

            {isLoading ? (
                <p className={styles.title}>Загрузка</p>
            ) : (
                items.length === 0 ? (
                    <p className={styles.title}>{emptyText}</p>
                ) : (
                    <>
                    <div 
                    className={`${styles.complexity} ${showAll ? styles.expanded : ''}`}
                    >
                        {visibleItems.map(item => {
                            const value = getValue(item);
                            return (
                                <button
                                key={item.id ?? item.label ?? item}
                                type='button'
                                onClick={() => onToggle(value)}
                                className={`${styles.button} ${
                                    isSelected(item) ? styles.active : ''
                                }`}>
                                    {getLabel(item)}
                                </button>
                            )
                        })}
                    </div>

                    {items.length > VISIBLE_LIMIT && (
                        <button
                        type='button'
                        className={styles.showMore}
                        onClick={()=> setShowAll(prev => !prev)}>
                            {showAll ? 'Скрыть' : 'Посмотреть все'}
                        </button>
                    )}

                    </>
                )
            ) }

        </div>
    )
}

export default FilterList;