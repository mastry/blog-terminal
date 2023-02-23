import React, { ReactNode } from "react";

export interface TerminalOutputProps {
    content: ReactNode | string
}

const TerminalOutput: React.FC<TerminalOutputProps> = (props) => {
    return <div className=''>
        {props.content}
    </div>
}

export default TerminalOutput;