import React from 'react'
import SourceCode from './SourceCode'

export default function Question({question}) {
    const collapsable_id = `question-${question.id}`
    const collapsable_link = `#${collapsable_id}`
    return (
        <div className="collapsable p-4 m-2">
            <p data-toggle="collapse" href={collapsable_link} role="button" aria-expanded="false" aria-controls={collapsable_id}>
                <span className="mr-4">{question.question_number}</span>
                <span>{question.question_title}</span>
            </p>
            <div className="collapse" id={collapsable_id}>
                <SourceCode url={question.url}/>
            </div>
        </div>
    )
}
