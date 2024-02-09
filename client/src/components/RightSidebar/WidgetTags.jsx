import React from 'react'

const WidgetTags = () => {

    const tags = ['c', 'c++', 'express', 'firebase', 'mongodb', 'html', 'css', 'javascript', 'java', 'mysql', 'nodejs', 'nextjs', 'php', 'reactjs', 'python', 'mern']

    return ( <
        div className = 'widget-tags' >
        <
        h4 > Watched tags < /h4> <
        div className = "widget-tags-div" > {
            tags.map((tag) => ( <
                p key = { tag } > { tag } < /p>
            ))
        } <
        /div>

        <
        /div>
    )
}

export default WidgetTags