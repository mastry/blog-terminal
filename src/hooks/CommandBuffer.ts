import { useState } from "react";

function useCommandBuffer(size: number): [()=>string, ()=>string, (cmd:string)=> void, ()=>void] {
    const [buffer, setBuffer] = useState<string[]>([])
    const [readPtr, setReadPtr] = useState(-1)

    return [readPrevious, readNext, write, reset]

    function readPrevious(): string {
        let ptr = readPtr + 1
        if(ptr >= buffer.length) {
            ptr = -1
        }
        setReadPtr(ptr)
        return ptr == -1 ? "" : buffer[ptr]
    }

    function readNext(): string {
        let ptr = readPtr - 1
        if(ptr < -1) {
            ptr = buffer.length - 1
        }
        setReadPtr(ptr)
        return ptr == -1 ? "" : buffer[ptr]
    }

    function write(command: string): void {
        let b = buffer.filter(x => x !== command)
        if(b.length >= size) {
            b = b.slice(0, size -1)
        }

        setBuffer([command, ...b])
    }

    function reset() {
        setReadPtr(-1)
    }
}

export default useCommandBuffer