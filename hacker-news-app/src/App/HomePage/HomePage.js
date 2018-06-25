import React, { Component } from 'react';
import Story from './Story';
import storyData from '../../services/StoryService';

class HomePage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            topStories: [],
            load: true
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
                                topStories: stories,
                                load: false
                            })
                        })
                })
            })
    }

    render() {
        return (
            <main>
                {this.state.load ? <h2>Loading...</h2> : 
                <div className="container">
                    {this.state.topStories.map(el => {
                        return <Story value={el} key={el.id} />
                    })}
                </div>}
            </main>
        );
    }
}

export default HomePage;