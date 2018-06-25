import React, { Component } from 'react';
import Comment from './Comment';
import commentData from '../../services/CommentService';

class Story extends Component {

    constructor(props) {
        super(props);
        this.state = {
            allComments: [],
            show: ''
        };
    }

    componentDidMount() {
        let commentIDs;
        this.props.value.kids === undefined ? commentIDs = []
            : commentIDs = this.props.value.kids.slice(0, 2);
        let comments = [];

        commentIDs.map(el => {
            commentData.getComment(el)
                .then(data => {
                    comments.push(data)
                    this.setState({
                        allComments: comments
                    })
                })
        })

    }

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

    toggleClass = (event) => {
        let className = this.state.show === "" ? "show" : "";
        this.setState({ show: className });
    }

    render() {
        return (
            <div className="story">
                <a className="title" href={this.props.value.url} target="_blank">{this.props.value.title}</a>
                <p>- by {this.props.value.by}</p>
                <p>- score {this.props.value.score}</p>
                <p>- <a href="javascript:void(0)" onClick={this.toggleClass}>{this.numComments()}</a> -</p>
                <div className={`all-comments ${this.state.show}`}>
                    {this.state.allComments.map(el => {
                        return <Comment value={el} key={el.id} />
                    })}
                </div>
            </div>

        );
    }
};

export default Story;