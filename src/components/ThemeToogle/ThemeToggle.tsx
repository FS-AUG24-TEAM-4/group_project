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
        <div className={styles.circle}>
          {theme === Themes.DARK ? (
            <FaMoon className={styles.moonIcon} />
          ) : (
            <FaSun className={styles.sunIcon} />
          )}
        </div>
      </div>
    </div>
  );
};
