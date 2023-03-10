import React, { useState } from "react";
import useCommandBuffer from "../hooks/CommandBuffer";

export interface TerminalPromptProps {
    prompt: string,
    callback: (command: string) => void
}

const TerminalPrompt: React.FC<TerminalPromptProps> = (props) => {
    const [command, setCommand] = useState("")
    const [readPrevious, readNext, write, reset] = useCommandBuffer(20)

    return <div className='flex flex-row justify-start mt-3'>
        <div className='pr-2'>{props.prompt}</div>
        <input type='text'
            onKeyDown={onChange}
            onChange={e => { setCommand(e.target.value) }}
            value={command}
            autoFocus
            placeholder="enter your command (type help for options)"
            className='w-3/4 placeholder:italic placeholder:text-slate-600 bg-transparent border-0 outline-none focus:border-none' />
    </div>

    function onChange(k: React.KeyboardEvent) {
        if (k.key == 'Enter') {
            if (command.length > 0) {
                const cmd = command
                write(cmd)
                setCommand('')
                props.callback(cmd)
                reset()
            }
        }
        else if (k.key == 'Escape') {
            setCommand('')
            reset()
        }
        else if (k.key == 'ArrowUp') {
            const cmd = readPrevious()
            setCommand(cmd)
        }
        else if (k.key == 'ArrowDown') {
            const cmd = readNext()
            setCommand(cmd)
        }
        else if(k.key == 'Tab') {
            k.preventDefault();
        }
    }
}

export default TerminalPrompt;