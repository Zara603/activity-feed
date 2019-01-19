import React from 'react'
import './TextElement.css'

interface Props {
    content : string
}


export const TextElement = (
    ({ content } : Props) => (
        <span className="text">
            {content}
        </span>
    )
)

export default TextElement
