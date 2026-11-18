import styles from './styles.module.css';
import { useEffect, useState } from 'react';
import { getList } from '../../api/apiFilters';

const Skills = ({selectedSkills, setSelectedSkills}) => {
    const [skills, setSkills] = useState([]);
    const [showAll, setShowAll] = useState(false);

    useEffect(() => {
            const fetchSkills = async () => {
                try {
                    const data = await getList("skills");
                    setSkills(data.data);
                } catch (error) {
                    console.log(error)
                }
            };
            fetchSkills();
        }, []);
    
    const handleSkillClick = (skillId) => {
        setSelectedSkills(prev => prev.includes(skillId) ? (
            prev.filter(id => id !== skillId)
        ) : ([...prev, skillId]))
    }
    return (
        <div>
            <p className={styles.title}>Навыки</p>
            <div className={`${styles.container} ${showAll ? styles.expanded : ''}`}>
                {skills.slice(0, showAll ? skills.length : 5)
                .map(skill => (<button key={skill.id}
                                type="button"
                                onClick={() => handleSkillClick(skill.id)}
                                className={`${styles.skills} ${selectedSkills.includes(skill.id) ? styles.active : ''}`}>
                                    {skill.title}</button>))}
            </div>
            {skills.length > 5 && (
                <button
                    type="button"
                    className={styles.showMore}
                    onClick={() => setShowAll(prev => !prev)}
                >
                    {showAll ? 'Скрыть' : 'Посмотреть все'}
                </button>
            )}
        </div>
    )
}

export default Skills;