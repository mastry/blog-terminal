import { useEffect, useState } from 'react';

export type Theme = 'dark' | 'light';

function useTheme() {
    const [theme, setTheme] = useState<Theme>(userPrefersDark() ? 'dark' : 'light')

    useEffect(() => {
        const savedTheme = window.localStorage.getItem('theme')
        if (savedTheme) {
            setTheme(savedTheme as Theme)
        }
    }, [])

    useEffect(() => {
        window.localStorage.setItem('theme', theme)
        if (theme === 'dark') {
            document.documentElement.classList.add('dark')
        } else {
            document.documentElement.classList.remove('dark')
        }
    }, [theme])

    return [theme, setTheme] as const
}

function userPrefersDark() {
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
}

export default useTheme;