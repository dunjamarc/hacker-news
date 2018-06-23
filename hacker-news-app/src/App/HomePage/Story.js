import React from 'react';

const Story = (props) => {
console.log(3);

    return (
        <div className="story">
            <h2>{props.value.title}</h2>
            <p>by {props.value.by}</p>
            <p>score {props.value.score}</p>
            <p>comments</p>
        </div>

    );
};

export default Story;