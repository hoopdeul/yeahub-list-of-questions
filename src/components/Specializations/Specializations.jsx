import { getList } from '../../api/apiFilters';
import styles from './styles.module.css';
import { useEffect, useState } from 'react';

const Specializations = ({selectedSpec, setSelectedSpec}) => {
    const [specializations, setSpecializations] = useState([]);
    const [showAll, setShowAll] = useState(false);

    useEffect(() => {
            const fetchSpecializations = async () => {
                try {
                    const data = await getList("specializations");
                    setSpecializations(data.data);
                } catch (error) {
                    console.log(error)
                }
            };
            fetchSpecializations();
        }, []);
    return (
        <div>
            <p className={styles.title}>Специализация</p>
            <div className={`${styles.container} ${showAll ? styles.expanded : ''}`}>
                {specializations.slice(0, showAll ? specializations.length : 5)
                .map(spec => (<button 
                key={spec.id}
                type='button'
                onClick={() => setSelectedSpec(selectedSpec === spec.id ? null : spec.id)}
                className={`${styles.specializations} ${selectedSpec === spec.id ? styles.active : ''}`}
                >
                    {spec.title}</button>))}
            </div>
            {specializations.length > 5 && (
                <button
                type='button'
                className={styles.showMore}
                onClick={() => setShowAll(prev => !prev)}>
                    {showAll ? 'Скрыть' : 'Посмотреть все'}
                </button>
            )}
        </div>
        
    )
}

export default Specializations;