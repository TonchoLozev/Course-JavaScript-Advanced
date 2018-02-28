function result(input) {

    if (input === 'upvote') {
        this.upvotes++;
    } else if (input === 'downvote') {
        this.downvotes++;
    } else if (input === 'score') {
        return calculation(this.upvotes, this.downvotes);
    }

    function calculation(upVotes, downVotes) {
        let upVotesToShow = Number(upVotes);
        let downVotesToShow = Number(downVotes);
        let totalVotes = upVotesToShow + downVotesToShow;
        let type = '';
        if (totalVotes > 50) {
            let numToAdd = Math.max(upVotes, downVotes);
            numToAdd = Math.ceil((numToAdd * 25) / 100);
            upVotesToShow += numToAdd;
            downVotesToShow += numToAdd;
        }
        let totalScore = upVotesToShow - downVotesToShow;

        if (totalVotes < 10) {
            type = 'new';
        } else if ((upVotes / totalVotes) > 0.66) {
            type = 'hot';
        } else if ((downVotes / totalVotes <= 0.66) && totalScore >= 0 && (upVotes > 100 || downVotes > 100)) {
            type = 'controversial';
        } else if (totalScore < 0 && totalVotes >= 10) {
            type = 'unpopular';
        } else {
            type = 'new';
        }
        return [upVotesToShow, downVotesToShow, totalScore, type];
    }
}

let forumPost = {
    id: '1234',
    author: 'author name',
    content: 'these fields are irrelevant',
    upvotes: 4,
    downvotes: 5
};
console.log(result.call(forumPost, 'score'));
//expected = [4, 5, -1, 'new'];

result.call(forumPost, 'downvote');
console.log(result.call(forumPost, 'score'));
//expected = [4, 6, -2, 'unpopular'];

result.call(forumPost, 'upvote');
result.call(forumPost, 'upvote');
console.log(result.call(forumPost, 'score'));
//expected = [6, 6, 0, 'new'];

// 38 Upvotes
for (let i = 0; i < 38; i++) {
    result.call(forumPost, 'upvote');
}
console.log(result.call(forumPost, 'score'));
//expected = [44, 6, 38, 'hot'];

// Past obfuscation threshold
result.call(forumPost, 'downvote');
console.log(result.call(forumPost, 'score'));
//expected = [55, 18, 37, 'hot'];

// Bellow hot threshold
forumPost.upvotes = 132;
forumPost.downvotes = 68;

console.log(result.call(forumPost, 'score'));
//expected = [165, 101, 64, 'controversial'];

// Past hot threshold
forumPost.upvotes = 133;

console.log(result.call(forumPost, 'score'));
//expected = [167, 102, 65, 'hot'];

