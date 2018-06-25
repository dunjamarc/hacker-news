import Comment from '../entities/CommentClass';
import fetchJsonp from 'fetch-jsonp';

class CommentService {

    getComment(id) {
        return fetchJsonp(`https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`)
        .then(response => response.json())
        .then(data => new Comment(data))
    }

}

const commentData = new CommentService();
export default commentData;