import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import { ReactElement } from "react-markdown/lib/react-markdown";
import remarkGFM from 'remark-gfm';

export interface ProjectsCommandProps {
    onRenderComplete: () => void
}

const ProjectsCommand = (props: ProjectsCommandProps) => {
    const [content, setContent] = useState<ReactElement | undefined>()

    useEffect(() => {
        fetch('/pages/projects.md')
            .then(markdown => {
                markdown.text()
                    .then(t => {
                        setContent(<ReactMarkdown children={t} remarkPlugins={[remarkGFM]} />)
                    })
                    .then(() => {
                        props.onRenderComplete()
                    })
            })
    }, [])

    return <div className="markdown">
        {content}
    </div>
}

export default ProjectsCommand