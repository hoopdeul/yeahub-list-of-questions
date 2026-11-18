import QuestionList from '../QuestionList/QuestionList';
import Sidebar from '../Sidebar/Sidebar';
import styles from './styles.module.css';
import { useState } from 'react';

const initialFilters = {
    spec: null,
    skills: [],
    complexity: [],
    rate: [],
    keywords: ''
}

const Main = () => {
    const [filters, setFilters] = useState(initialFilters);

    const updateFilter = (key, updater) => {
  setFilters((prev) => ({
    ...prev,
    [key]: typeof updater === 'function' ? updater(prev[key]) : updater,
  }));
};

    return (
        <div className={styles.main}>
            <QuestionList filters={filters}/>

            <Sidebar filters={filters}
            updateFilter={updateFilter}/>
        </div>
    )
}

export default Main;