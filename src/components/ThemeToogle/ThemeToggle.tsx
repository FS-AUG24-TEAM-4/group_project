import { useTheme } from '@/hooks/useTheme';
import styles from './styles.module.scss';
import { Themes } from '@/enums/Themes';
import cn from 'classnames';
import { FaSun, FaMoon } from 'react-icons/fa';

export const ThemeToggle = () => {
  const { handleToggleTheme, theme } = useTheme();

  return (
    <div className={styles.container} onClick={handleToggleTheme}>
      <div
        className={cn(styles.slider, {
          [styles.active]: theme === Themes.DARK,
        })}
      >
        <FaSun className={styles.sunIcon} />
        <FaMoon className={styles.moonIcon} />
        <div className={styles.circle}></div>
      </div>
    </div>
  );
};
