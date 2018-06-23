import Story from '../entities/StoryClass';
import fetchJsonp from 'fetch-jsonp';

const stories = [];

class StoryService {

    getTopStories() {
        return fetchJsonp('https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty')
            .then(response => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error('SOMETHING WENT WRONG :(');
                }
            })
            .then(response => {
                let firstFifty = response.slice(0, 10);                
                firstFifty.map(el => this.getStory(el));
                return stories;
            })
    }

    getStory(id) {
        return fetchJsonp(`https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`)
        .then(response => response.json())
        .then(data => stories.push(new Story(data)))
    }

}

const storyData = new StoryService();
export default storyData;