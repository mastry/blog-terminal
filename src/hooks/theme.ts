import { useEffect, useState } from 'react';

export type Theme = 'dark' | 'light';

function useTheme() {
    const [theme, setTheme] = useState<Theme>(getSavedThemeOrDefault())

    useEffect(() => {
        applyTheme(theme)
    }, [])

    function applyTheme(newTheme: Theme) {
        if (newTheme === 'dark') {
            document.documentElement.classList.add('dark')
        } else {
            document.documentElement.classList.remove('dark')
        }

        window.localStorage.setItem('theme', newTheme)
        setTheme(newTheme)
    }

    return [applyTheme] as const
}

function getSavedThemeOrDefault(): Theme {
    const savedTheme = window.localStorage.getItem('theme')
    if (savedTheme) {
        return savedTheme as Theme
    }

    return userPrefersDark() ? 'dark' : 'light'
}

function userPrefersDark() {
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
}

export default useTheme;