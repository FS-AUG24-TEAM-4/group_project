import { RootState } from '@/app/store';
import { changeThemeMode } from '@/features/theme/themeSlice';
import { useDispatch, useSelector } from 'react-redux';

export const useTheme = () => {
  const dispatch = useDispatch();
  const theme = useSelector((state: RootState) => state.theme.themeMode);

  const handleToggleTheme = () => {
    dispatch(changeThemeMode());
  };

  return { handleToggleTheme, theme };
};
