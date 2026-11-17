import QuestionList from '../QuestionList/QuestionList';
import Sidebar from '../Sidebar/Sidebar';
import styles from './styles.module.css';
import { useState } from 'react';

const Main = () => {
    const [selectedSpec, setSelectedSpec] = useState(null);
    const [selectedSkills, setSelectedSkills] = useState([]);
    const [selectedComplexity, setSelectedComplexity] = useState([]);
    const [selectedRate, setSelectedRate] = useState([]);
    const [keywords, setKeywords] = useState('');

    return (
        <div className={styles.main}>
            <QuestionList selectedSpec={selectedSpec} 
            selectedSkills={selectedSkills}
            selectedComplexity={selectedComplexity}
            selectedRate={selectedRate}
            keywords={keywords}
            />
            <Sidebar selectedSpec={selectedSpec}
            setSelectedSpec={setSelectedSpec}
            selectedSkills={selectedSkills}
            setSelectedSkills={setSelectedSkills}
            selectedComplexity={selectedComplexity}
            setSelectedComplexity={setSelectedComplexity}
            selectedRate={selectedRate}
            setSelectedRate={setSelectedRate}
            keywords={keywords}
            setKeywords={setKeywords}
            />
        </div>
    )
}

export default Main;