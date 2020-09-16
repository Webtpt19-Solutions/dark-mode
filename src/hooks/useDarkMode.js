import useLocalStorage from './useLocalStorage.js';
import { useEffect } from 'react';

const useDarkMode = (initialValue) => {
    const [ darkMode, setDarkMode ] = useLocalStorage('darkMode', initialValue)

    useEffect(() => {
        const body = document.body;

        darkMode ? body.classList.add('dark-mode') : body.classList.remove('dark-mode')
    }, [darkMode])

    return [darkMode, setDarkMode]
};

export default useDarkMode;