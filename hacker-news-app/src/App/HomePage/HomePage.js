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
        storyData.getTopStories()
            .then(data => {
                this.setState({
                    topStories: data
                })
            })
    }

    render() {
        return (
            <main>
                <div className="container">
                    {this.state.topStories.map(el => {
                        console.log(el);
                        
                    })}
                </div>
            </main>

        );
    }
}

export default HomePage;