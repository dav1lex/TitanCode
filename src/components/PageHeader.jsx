import styles from './PageHeader.module.css';

const PageHeader = ({ title, description }) => {
  return (
    <section className={styles.pageHeader}>
      <div className="container">
        <div className={styles.pageHeaderContent}>
          <h1 className={styles.pageTitle}>{title}</h1>
          {description && <p className={styles.pageDescription}>{description}</p>}
          <div className={styles.pageTitleUnderline}></div>
        </div>
      </div>
    </section>
  );
};

export default PageHeader; 