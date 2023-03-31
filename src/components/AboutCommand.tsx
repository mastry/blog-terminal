import React, { ReactElement, useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGFM from 'remark-gfm'

const About: React.FC = () => {
    const [content, setContent] = useState<ReactElement | undefined>()

    useEffect(() => {
        fetch('/pages/about.md')
            .then(markdown => {
                markdown.text()
                    .then(t => {
                        setContent(<ReactMarkdown children={t} remarkPlugins={[remarkGFM]} />)
                    })
            })
    }, [])

    return <div className="markdown">
        {content}
    </div>
}

export default About