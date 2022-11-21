import { Overview } from './overview.js';
import { OverviewContent } from './overviewContent.js';
import { Hero } from './hero.js';
import { Cards } from './cards.js'
import { CardsContent } from './cardsContent.js';
const postElement = document.getElementById('post');
const listElement = document.getElementById('list');
postElement.post = [
    {
        title: 'Hi Im Amario',
        header: 'Welcome to my portfolio',
        description: 'I am a full time learner and I have developed this webpage to share my experiences along the way. Yes...I actually hand coded this website using good ole HTML CSS and Javascript.<br>  ',
    
    },
];

listElement.list = [
    { 
        title: "Code Switchin",
        description: "Blacks have become comfortable change the way they spek in order to fit in around people from different races and cultural background."
    },
    { 
        title: "Role Models",
        description: "The black role model has been removed from our homes and has taken to the streets for acceptance."
    }
]