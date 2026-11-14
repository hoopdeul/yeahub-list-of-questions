import styles from './styles.module.css'
import logo from '../../images/logo.png'
const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <img src={logo} alt='logo'/>

                <nav className={styles.nav}>
                    <a href='#'>База вопросов</a>
                    <a href='#'>Тренажер</a>
                    <a href='#'>Материалы</a>
                    <a href='#'>Навыки (hh)</a>
                </nav>

                <div className={styles.actions}>
                    <button className={styles.loginBtn}>
                        Вход
                    </button>

                    <button className={styles.registerBtn}>
                        Регистрация
                    </button>
                </div>
            </div>
            
        </header>
    )
}

export default Header;