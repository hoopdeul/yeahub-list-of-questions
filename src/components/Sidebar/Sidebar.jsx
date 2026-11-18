import Search from '../Search/Search';
import styles from './styles.module.css';
import { COMPLEXITY_RANGES, RATE_VALUES } from '../../constants/filters';
import { getList } from '../../api/apiFilters';
import { useFetchList } from '../../helpers/useFetchList';
import FilterList from '../FilterList/FilterList';
import {toggleInArray, toggleRange, toggleSingle} from '../../helpers/toggleFilters'

const fetchSpecializations = () => getList('specializations');
const fetchSkills = () => getList('skills');

const Sidebar = ({filters, updateFilter}) => {

    const {items: specializations, isLoading: specLoading} = useFetchList(fetchSpecializations);
    const {items: skills, isLoading: skillsLoading} = useFetchList(fetchSkills);

    return (
        <div className={styles.sidebar}>
            <Search 
                keywords={filters.keywords}
                setKeywords={value => updateFilter('keywords', value)}
            />

            <FilterList
                title='Специализация'
                items={specializations}
                isLoading={specLoading}
                isSelected={(spec) => filters.spec === spec.id}
                onToggle={(id) => updateFilter('spec', prev => toggleSingle(prev, id))}
            />

            <FilterList
                title='Навыки'
                items={skills}
                isLoading={skillsLoading}
                isSelected={(skill) => filters.skills.includes(skill.id)}
                onToggle={(id) => updateFilter('skills', prev => toggleInArray(prev, id))}
            />

            <FilterList
                title='Сложность'
                items={COMPLEXITY_RANGES}
                getLabel={range => range.label}
                getValue={range => range.values}
                isSelected={(range) => range.values.every(v => filters.complexity.includes(v))}
                onToggle={(values) => updateFilter('complexity', prev => toggleRange(prev, values))}
            />

            <FilterList
                title='Рейтинг'
                items={RATE_VALUES}
                // getLabel={String}
                // getValue={v => v}
                isSelected={(v) => filters.rate.includes(v)}
                onToggle={(v) => updateFilter('rate', prev => toggleInArray(prev, v))}
            />

        </div>
    )
}

export default Sidebar;