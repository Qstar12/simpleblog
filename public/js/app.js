import { Post } from '../js/post.js';
import { PostList } from '../js/postList.js';

const postElement = document.getElementById('post');

postElement.post = [
    {
        title: 'My first post',
        description: 'This is my first post'
    },
    {
        title: 'My second post',
        description: 'This is my second post'
    }
];