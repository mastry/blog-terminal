import React, { useRef, useState } from "react";
import useCommandBuffer from "../hooks/buffer";

export interface TerminalPromptProps {
    prompt: string,
    callback: (command: string) => void
}

const TerminalPrompt: React.FC<TerminalPromptProps> = (props) => {
    const [command, setCommand] = useState<string | undefined>()
    const [readPrevious, readNext, write, reset] = useCommandBuffer(20)
    const inputRef = useRef<HTMLInputElement>(null)

    return <div className='flex flex-row justify-start mt-3'>
        <div className='pr-2'>{props.prompt}</div>
        <input type='text'
            ref={inputRef}
            onKeyDown={onChange}
            onChange={e => { setCommand(e.target.value) }}
            value={command || ''}
            autoFocus
            placeholder="enter your command (type help for options)"
            className='w-3/4 placeholder:italic placeholder:text-slate-600 bg-transparent border-0 outline-none focus:border-none' />
    </div>

    function onChange(k: React.KeyboardEvent) {
        if (k.key == 'Enter') {
            if (command && command.length > 0) {
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
            showCommand(cmd)
        }
        else if (k.key == 'ArrowDown') {
            const cmd = readNext()
            showCommand(cmd)
        }
        else if (k.key == 'Tab') {
            k.preventDefault();
        }
    }

    function showCommand(cmd: string | undefined) {
        setCommand(cmd)
        moveCursorToEnd(cmd)
    }

    function moveCursorToEnd(cmd: string | undefined) {
        setTimeout(() => {
            if (cmd && inputRef.current) {
                inputRef.current.focus()
                inputRef.current.setSelectionRange(cmd.length, cmd.length, "forward")
            }
        }, 0)
    }
}

export default TerminalPrompt;