import { useState } from 'react'
import TerminalOutput from './components/TerminalOutput'
import TerminalPrompt from './components/TerminalPrompt'
import Banner from './components/Banner'
import Help from './components/HelpCommand'
import About from './components/AboutCommand'
import PostCommand from './components/PostsCommand'
import ProjectsCommand from './components/ProjectsCommand'
import ClsCommand from './components/ClsCommand'
import UnknownCommand from './components/UnknownCommand'
import GuiModeCommand from './components/GuiModeCommand'


function App() {
  const [output, setOutput] = useState(Banner)

  return <div className='min-h-screen font-terminal text-lg p-8 bg-slate-200 text-black dark:bg-slate-800 dark:text-white'>
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
        return <About/>
      case 'help':
        return <Help />
      case 'banner':
        return Banner
      case 'cls':
        return <ClsCommand/>
      case 'gui-mode':
        return <GuiModeCommand/>
      case 'posts':
        return <PostCommand/>
      case 'projects':
        return <ProjectsCommand/>
      default:
        return <UnknownCommand/>
    }
  }
}

export default App
