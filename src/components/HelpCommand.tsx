const Help = () => {
    return <table>
        <tbody>
            <HelpCommand name='about' description='Everything you never wanted to know about me' />
            <HelpCommand name='banner' description='Print that gnarley banner again' />
            <HelpCommand name='clear' description='Clear the screen' />
            <HelpCommand name='gui-mode' description='You wimp' />
            <HelpCommand name='posts' description='List all the boring posts you can read here (but probably won&apos;t)' />
            <HelpCommand name='projects' description='Take a peek at my awesomeness' />
            <HelpCommand name='theme [dark|light]' description='Change the theme to dark or light' />

            <HelpNoteProps text="All commands are case sensitive. If you're a VB programmer, please ask for help." />
            <HelpNoteProps text="Use the up and down arrow keys to cycle through your command history." />
        </tbody>
    </table>
}

interface HelpCommandProps {
    name: string,
    description: string
}

const HelpCommand = (props: HelpCommandProps) => {
    return <tr>
        <td className='w-1/4'>{props.name}</td>
        <td className='w-3/4'>{props.description}</td>
    </tr>
}

interface HelpNoteProps {
    text: string
}

const HelpNoteProps = (props: HelpNoteProps) => {
    return <tr>
        <td colSpan={2} className='pt-2 dark:text-yellow-200 text-yellow-600 italic'>
            {props.text}
        </td>
    </tr>
}

export default Help