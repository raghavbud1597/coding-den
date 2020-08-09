import React from 'react'
import '../styles/collapsable.scss'
import Question from './Question'

export default function collapsable({topic}) {
    const topicTitle = topic.title;
    const questions = topic.questions.map(question => <Question question={question} />)

    return (
        <div>
            <h2 className="mt-5">{ topicTitle }</h2>
            { questions }
        </div>
    )
}
