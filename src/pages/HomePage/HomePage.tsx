import styles from './styles.module.scss';

export const HomePage = () => {
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>Welcome to Nice Gadgets store!</h1>

      <div className={styles.slider}></div>

      <div className={styles.newModels}></div>

      <div className={styles.categories}></div>

      <div className={styles.hotPrices}></div>
    </div>
  );
};
