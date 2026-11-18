import Search from '../Search/Search';
import styles from './styles.module.css';
import { COMPLEXITY_RANGES, RATE_VALUES } from '../../constants/filters';
import { getList } from '../../api/apiFilters';
import { useFetchList } from '../../helpers/useFetchList';
import FilterList from '../FilterList/FilterList';
import {toggleInArray, toggleRange, toggleSingle} from '../../helpers/toggleFilters'

const fetchSpecializations = () => getList('specializations');
const fetchSkills = () => getList('skills');

const Sidebar = ({selectedSpec, 
    setSelectedSpec, 
    selectedSkills, 
    setSelectedSkills,
    selectedComplexity,
    setSelectedComplexity,
    selectedRate,
    setSelectedRate,
    keywords,
    setKeywords
}) => {


    const {items: specializations, isLoading: specLoading} = useFetchList(fetchSpecializations);
    const {items: skills, isLoading: skillsLoading} = useFetchList(fetchSkills);
    

    // const toggleValue = (value, selected, setSelected) => {
    //     setSelected(prev =>
    //         prev.includes(value)
    //             ? prev.filter(item => item !== value)
    //             : [...prev, value]
    //     );
    // };

    return (
        <div className={styles.sidebar}>
            <Search keywords={keywords} setKeywords={setKeywords} />

            <FilterList
                title='Специализация'
                items={specializations}
                isLoading={specLoading}
                isSelected={(spec) => selectedSpec === spec.id}
                onToggle={(id) => setSelectedSpec(prev => toggleSingle(prev, id))}
            />

            <FilterList
                title='Навыки'
                items={skills}
                isLoading={skillsLoading}
                isSelected={(skill) => selectedSkills.includes(skill.id)}
                onToggle={(id) => setSelectedSkills(prev => toggleInArray(prev, id))}
            />

            <FilterList
                title='Сложность'
                items={COMPLEXITY_RANGES}
                getLabel={range => range.label}
                getValue={range => range.values}
                isSelected={(range) => range.values.every(v => selectedComplexity.includes(v))}
                onToggle={(values) => setSelectedComplexity(prev => toggleRange(prev, values))}
            />

            <FilterList
                title='Рейтинг'
                items={RATE_VALUES}
                // getLabel={String}
                // getValue={v => v}
                isSelected={(v) => selectedRate.includes(v)}
                onToggle={(v) => setSelectedRate(prev => toggleInArray(prev, v))}
            />

        </div>
    )
}

export default Sidebar;