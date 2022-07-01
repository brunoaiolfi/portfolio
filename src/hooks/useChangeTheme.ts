import { useContext } from 'react';
import { ChangeThemeContext } from '../contexts/changeTheme';

export function useChangeTheme() {
    const value = useContext(ChangeThemeContext);
    return value;
}