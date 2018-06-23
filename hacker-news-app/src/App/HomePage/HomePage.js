import React, { Component } from 'react';
import Story from './Story';
//import Comment from './Comment';
import storyData from '../../services/StoryService';

class HomePage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            topStories: []
        };
    }

    componentDidMount() {
        let topIDs = [];

        storyData.getTopStories()
            .then(data => {
                topIDs = data;
            })
            .then(() => {
                let stories = [];
                topIDs.map(el => {
                    storyData.getStory(el)
                        .then(data => {
                            stories.push(data)
                            this.setState({
                                topStories: stories
                            })
                        })
                })
            })
    }

    render() {
        return (
            <main>
                <div className="container">
                    {this.state.topStories.map(el => {
                        return <Story value={el} key={el.id} />
                    })}
                </div>
            </main>
        );
    }
}

export default HomePage;