import QuestionList from '../QuestionList/QuestionList';
import Sidebar from '../Sidebar/Sidebar';
import styles from './styles.module.css';
import { useState } from 'react';

const Main = () => {
    const [selectedSpec, setSelectedSpec] = useState(null);
    const [selectedSkills, setSelectedSkills] = useState([]);
    const [selectedComplexity, setSelectedComplexity] = useState([]);
    const [selectedRate, setSelectedRate] = useState([]);
    return (
        <div className={styles.main}>
            <QuestionList selectedSpec={selectedSpec} 
            selectedSkills={selectedSkills}
            selectedComplexity={selectedComplexity}
            selectedRate={selectedRate}
            />
            <Sidebar selectedSpec={selectedSpec}
            setSelectedSpec={setSelectedSpec}
            selectedSkills={selectedSkills}
            setSelectedSkills={setSelectedSkills}
            selectedComplexity={selectedComplexity}
            setSelectedComplexity={setSelectedComplexity}
            selectedRate={selectedRate}
            setSelectedRate={setSelectedRate}
            />
        </div>
    )
}

export default Main;