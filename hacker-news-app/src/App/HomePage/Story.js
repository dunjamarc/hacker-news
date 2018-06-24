import React, { Component } from 'react';

class Story extends Component {

    /*constructor(props) {
        super(props);
        this.state = {
            topStories: []
        };
    }*/

    numComments = () => {
        let count = "";
        if (this.props.value.kids === undefined) {
            count = "0 comments";
        } else if (this.props.value.kids.length === 1) {
            count = "1 comment";
        } else {
            count = `${this.props.value.kids.length} comments`;
        }
        return count;
    }

    render() {
        return (
            <div className="story">
                <a href={this.props.value.url} target="_blank">{this.props.value.title}</a>
                <p>- by {this.props.value.by}</p>
                <p>- score {this.props.value.score}</p>
                <p>- {this.numComments()} -</p>
                <div className="comments">
                    
                </div>
            </div>

        );
    }
};

export default Story;