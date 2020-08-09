import React from 'react'
import Gist from 'super-react-gist'

export default function SourceCode({url}) {
    return (
        <div>
            <Gist url={url} />
        </div>
    )
}
