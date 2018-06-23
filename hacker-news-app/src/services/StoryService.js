import Story from '../entities/StoryClass';
import fetchJsonp from 'fetch-jsonp';

class StoryService {

    getTopStories() {
        return fetchJsonp('https://hacker-news.firebaseio.com/v0/topstories')
            .then(response => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error('SOMETHING WENT WRONG :(');
                }
            })
            .then(response => response.map(el => this.getStory(el)))
    }

    getStory(id) {
        return fetchJsonp(`https://hacker-news.firebaseio.com/v0/${id}`)
        .then(response => response.json())
        .then(data => new Story(data))
    }

}

const storyData = new StoryService();
export default storyData;