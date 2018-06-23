class Story {
    constructor(obj){
        this.by = obj.by;
        this.descendants = obj.descendants;
        this.id = obj.id;
        this.kids = obj.kids;
        this.score = obj.score;
        this.time = obj.time;
        this.title = obj.title;
        this.type = obj.type;
        this.url = obj.url;
    }
}

export default Story;
