import styles from './styles.module.css';

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.logo}>Yeahub</div>
        <p className={styles.text}>
          Выбери, каким будет IT завтра, вместе с нами
        </p>
        <p className={styles.description}>
          YeaHub — это полностью открытый проект, призванный объединить и
          улучшить IT-сферу. Наш исходный код доступен для просмотра на GitHub.
          Дизайн проекта также открыт для ознакомления в Figma.
        </p>

        <div className={styles.info}>
            <p>©&nbsp;2026&nbsp;YeaHub</p>
        </div>
      </div>
    </footer>
  );
}