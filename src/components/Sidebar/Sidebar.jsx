import Search from '../Search/Search';
import Skills from '../Skills/Skills';
import Specializations from '../Specializations/Specializations';
import styles from './styles.module.css';
import { COMPLEXITY_RANGES, RATE_VALUES } from '../../constants/filters';

 
const Sidebar = ({selectedSpec, setSelectedSpec, selectedSkills, setSelectedSkills, selectedComplexity,
    setSelectedComplexity,
    selectedRate,
    setSelectedRate,
    keywords,
    setKeywords
}) => {

    const toggleValue = (value, selected, setSelected) => {
        setSelected(prev =>
            prev.includes(value)
                ? prev.filter(item => item !== value)
                : [...prev, value]
        );
    };

    return (
        <div className={styles.sidebar}>
            <Search keywords={keywords} setKeywords={setKeywords} />
            <Specializations selectedSpec={selectedSpec} setSelectedSpec={setSelectedSpec} />
            <Skills selectedSkills={selectedSkills} setSelectedSkills={setSelectedSkills} />
            <div>
                <p className={styles.title}>
                    Сложность
                </p>
                
                <div className={styles.complexity}>
                    {COMPLEXITY_RANGES.map(range => {
                        const isActive = range.values.every(value =>
                            selectedComplexity.includes(value)
                        );

                        return (
                            <button
                                key={range.label}
                                type="button"
                                onClick={() => {
                                    setSelectedComplexity(prev => {
                                        const allSelected = range.values.every(
                                            value => prev.includes(value)
                                        );

                                        return allSelected
                                            ? prev.filter(value => !range.values.includes(value))
                                            : [...new Set([...prev, ...range.values])];
                                    });
                                }}
                                className={`${styles.button} ${
                                    isActive ? styles.active : ''
                                }`}
                            >
                                {range.label}
                            </button>
                        );
                    })}
                </div>
            </div>
            <div>
                <p className={styles.title}>
                    Рейтинг
                </p>
                <div className={styles.complexity}>
                    {RATE_VALUES.map(value => (
                        <button
                            key={value}
                            type="button"
                            onClick={() => toggleValue(
                                value,
                                selectedRate,
                                setSelectedRate
                            )}
                            className={`${styles.button} ${
                                selectedRate.includes(value) ? styles.active : ''
                            }`}
                        >
                            {value}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Sidebar;