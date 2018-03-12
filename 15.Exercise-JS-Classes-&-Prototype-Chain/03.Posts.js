function solve() {
    class Post {
        constructor(title, content) {
            this.title = title;
            this.content = content;
        }

        toString() {
            let text = `Post: ${this.title}\nContent: ${this.content}`;
            return text;
        }
    }

    class SocialMediaPost extends Post {
        constructor(title, content, likes, dislikes) {
            super(title, content);
            this.likes = likes;
            this.dislikes = dislikes;
            this.comments = [];
        }

        addComment(comment) {
            this.comments.push(comment);
        }

        toString() {
            let text = `Post: ${this.title}\nContent: ${this.content}`;
            text += `\nRating: ${this.likes - this.dislikes}`;
            if (this.comments.length > 0) {
                text += `\nComments:\n`;
                for (let i = 0; i < this.comments.length; i++) {
                    if (i === this.comments.length - 1) {
                        text += ` * ${this.comments[i]}`;
                    } else {
                        text += ` * ${this.comments[i]}\n`;
                    }
                }
            }
            return text;
        }
    }

    class BlogPost extends Post {
        constructor(title, content, views) {
            super(title, content);
            this.views = views;
        }

        view() {
            this.views +=1;
            return this;
        }

        toString() {
            let text = `Post: ${this.title}\nContent: ${this.content}\nViews: ${this.views}`;
            return text;
        }
    }

    return {Post, SocialMediaPost, BlogPost};
}

let classes = solve();

let Post = classes.Post;
let SocialMediaPost = classes.SocialMediaPost;
let BlogPost = classes.BlogPost;

let test = new classes.BlogPost("TestTitle", "TestContent", 5);
test.view().view().view();
console.log(test.toString());