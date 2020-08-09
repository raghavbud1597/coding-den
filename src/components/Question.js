import React, { Component } from 'react'
import SourceCode from './SourceCode'

export default class Question extends Component {
    constructor() {
        super()
        this.state = {
            collapse: true
        }
    }

    renderCode() {
        if(this.state.collapse) {
            return this.setState({
                    collapse: false
                })
        }
        return this.setState({
            collapse: true
        })
    }
    render() {
        const collapsable_id = `question-${this.props.question.id}`;
        const collapsable_link = `#${collapsable_id}`;

        let code;
        if(this.state.collapse){
            code = <div></div>
        }
        else {
            code = <SourceCode url={this.props.question.url}/>
        }
        return (
            <div className="collapsable p-4 m-2">
                <p data-toggle="collapse" href={collapsable_link} role="button" aria-expanded="false" aria-controls={collapsable_id} onClick={this.renderCode.bind(this)}>
                    <span className="mr-4">{this.props.question.question_number}</span>
                    <span>{this.props.question.question_title}</span>
                </p>
                <div className="collapse" id={collapsable_id}>
                    {code}
                </div>
            </div>
        )
    }
}

