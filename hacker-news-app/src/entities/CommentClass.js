class Comment {
    constructor(obj){
        this.by = obj.by;
        this.id = obj.id;
        this.kids = obj.kids;
        this.parent = obj.parent;
        this.text = obj.text;
        this.time = obj.time;
        this.type = obj.type;
    }
}

export default Comment;
