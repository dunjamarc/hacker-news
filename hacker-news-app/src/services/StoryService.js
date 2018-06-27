import Story from '../entities/StoryClass';
import fetchJsonp from 'fetch-jsonp';

class StoryService {

    getStory(id) {
        return fetchJsonp(`https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`)
        .then(response => response.json())
        .then(data => new Story(data))
    }

    getTopStories(query) {
        return fetch(`https://hacker-news.firebaseio.com/v0/${query}.json?print=pretty`)
            .then((response) => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error('SOMETHING WENT WRONG :(');
                }
            })
            .then((response) => {
                return response.slice(0, 30);
            })
    }

}

const storyData = new StoryService();
export default storyData;