import React, { Component } from 'react';
import Story from './Story';
import storyData from '../../services/StoryService';

class HomePage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            topNewStories: [],
            load: true,
            error: false,
            allStories: "newstories"
        };
        this.counter = 1;
    }

    fetchData = (query) => {
        let topIDs = [];

        storyData.getTopStories(query)
            .then(data => {
                topIDs = data.slice(0, 20 * this.counter);
            })
            .then(() => {
                let stories = [];
                topIDs.map(el => {
                    return storyData.getStory(el)
                        .then(data => {
                            stories.push(data)
                            this.setState({
                                topNewStories: stories,
                                load: false,
                                allStories: query
                            })
                        })
                })
            })
            .catch(error => {
                this.setState({
                    error: error.message
                })
            })
    }

    componentDidMount() {
        let query;
        this.state.allStories === "newstories" ? query = "topstories" : query = "newstories";
        this.fetchData(query);
    }

    changeStories = (event) => {
        let query;
        this.state.allStories === "newstories" ? query = "topstories" : query = "newstories";
        this.fetchData(query);
    }

    loadMore = (event) => {
        this.counter++;
        this.fetchData(this.state.allStories);
    }

    render() {
        return (
            <main>
                <a id="toggle-stories" onClick={this.changeStories}>{this.state.allStories === "newstories" ? "Top Stories" : "New Stories"}</a>
                {this.state.error ? <p className="error">{this.state.error}</p> :
                this.state.load ? <h2>Loading...</h2> : 
                <div className="container">
                    {this.state.topNewStories.map(el => {
                        return <Story value={el} key={el.id} />
                    })}
                    <a id="load" onClick={this.loadMore}>More</a>
                </div>}
            </main>
        );
    }
}

export default HomePage;