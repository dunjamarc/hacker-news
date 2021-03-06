import React, { Component } from 'react';
import Comment from './Comment';
import commentData from '../../services/CommentService';

class Story extends Component {

    constructor(props) {
        super(props);
        this.state = {
            allComments: [],
            show: '',
            load: true,
            clicked: false
        };
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

    fetchComments = (event) => {
        let commentIDs;
        this.props.value.kids === undefined ? commentIDs = []
            : commentIDs = this.props.value.kids;
        let comments = [];

        if (!this.state.clicked) {
            commentIDs.map(el => {
                return commentData.getComment(el)
                    .then(data => {                        
                        comments.push(data)
                        this.setState({
                            allComments: comments,
                            load: false
                        })
                    })
            })
            this.setState({
                clicked: true
            })
        }

        //toggle class
        let className = this.state.show === "" ? "show" : "";
        this.setState({ show: className });
    }

    closeComments = (event) => {
        this.setState({ show: ""});
    }

    render() {
        return (
            <div className="story">
                <a className="title" href={this.props.value.url} target="_blank">{this.props.value.title}</a>
                <p>- by {this.props.value.by}</p>
                <p>- score {this.props.value.score}</p>
                <p>- <input type="button" disabled={this.props.value.kids === undefined ? 'disabled' : ''} onClick={this.fetchComments} value={this.numComments()} /></p>
                <div className={`all-comments ${this.state.show}`}>
                    {this.state.load ? <p>Loading...</p> :
                        this.state.allComments.map(el => {
                            return <Comment value={el} key={el.id} />
                        })}
                    <a onClick={this.closeComments}><i className="fa fa-angle-up"></i></a>
                </div>
            </div>

        );
    }
};

export default Story;