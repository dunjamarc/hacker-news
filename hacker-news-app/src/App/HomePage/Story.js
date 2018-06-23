import React from 'react';

const Story = (props) => {
    
    const numComments = () => {
        let count = "";
        if(props.value.kids === undefined){
            count = "0 comments";
        } else if(props.value.kids.length === 1){
            count = "1 comment";
        } else {
            count = `${props.value.kids.length} comments`;
        }
        return count;
    } 

    return (
        <div className="story">
            <a href={props.value.url} target="_blank">{props.value.title}</a>
            <p>by {props.value.by}</p>
            <p>score {props.value.score}</p>
            <p>{numComments()}</p>
        </div>

    );
};

export default Story;