import React, { Component } from 'react';
import Story from './Story';
//import Comment from './Comment';
import storyService from '../../services/storyService'; 

class HomePage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            topStories: []
        };
    }

    componentDidMount() {
        storyService.topStories()
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
                    {this.state.topStories.map(el => <Story value={el} key={el.id} />)}
                </div>
            </main>

        );
    }
}

export default HomePage;