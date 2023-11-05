import { useState } from 'react'
import About from './components/AboutCommand'
import Banner from './components/Banner'
import ClsCommand from './components/ClsCommand'
import GuiModeCommand from './components/GuiModeCommand'
import Help from './components/HelpCommand'
import PostsCommand from './components/PostsCommand'
import ProjectsCommand from './components/ProjectsCommand'
import { SetThemeCommand } from './components/SetThemeCommand'
import TerminalOutput from './components/TerminalOutput'
import TerminalPrompt from './components/TerminalPrompt'
import UnknownCommand from './components/UnknownCommand'

function App() {
    const [output, setOutput] = useState(Banner)

    return <div className='min-h-screen font-terminal text-lg p-8 bg-slate-50 text-black dark:bg-slate-800 dark:text-white'>
        <TerminalOutput content={output} />
        <TerminalPrompt prompt='jeffmastry.dev &gt;' callback={command => {
            if (command === 'clear') {
                setOutput(<></>)
            }
            else {
                setOutput(<>
                    {output}
                    <div className='pt-2 text-blue dark:text-yellow-500'>
                        {command}
                    </div>
                    <div className='pl-3'>
                        {run(command)}
                    </div>
                </>)
            }
        }} />
    </div>

    function run(command: string): React.ReactElement {
        switch (command) {
            case 'about':
                return <About />
            case 'help':
                return <Help />
            case 'banner':
                return Banner
            case 'cls':
                return <ClsCommand />
            case 'gui-mode':
                return <GuiModeCommand />
            case 'theme dark':
                return <SetThemeCommand theme='dark' />
            case 'theme light':
                return <SetThemeCommand theme='light' />
            case 'posts':
                return <PostsCommand />
            case 'projects':
                return <ProjectsCommand onRenderComplete={scrollToBottom} />
            default:
                return <UnknownCommand />
        }
    }
}

function scrollToBottom() {
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })
}

export default App
