import { useEffect } from 'react'
import useTheme, { Theme } from '../hooks/theme'

export interface SetThemeCommandProps {
    theme: Theme
}

export const SetThemeCommand = (props: SetThemeCommandProps) => {
    const [theme, setTheme] = useTheme()

    useEffect(() => {
        setTheme(props.theme)
    }, [props.theme])
    return <></>
}