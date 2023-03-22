import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGFM from 'remark-gfm'
import { ReactElement } from "react-markdown/lib/react-markdown";

const ProjectsCommand: React.FC = () => {
    const [content, setContent] = useState<ReactElement | undefined>()

    useEffect(() => {
        fetch('/pages/projects.md')
            .then(markdown => {
                markdown.text()
                .then(t => {
                    setContent(<ReactMarkdown children={t} remarkPlugins={[remarkGFM]}/>)
                })
            })
    }, [])

    return <>
        {content}
    </>
}

export default ProjectsCommand