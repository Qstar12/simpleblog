const express = require('express');
const app = express();
const path = require('path');
const myData = require('./data.json');
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.get('/', (req, res, next) => {
    const data = myData['podcast'];
    res.render('home', {...data});
    if(data){
        console.log('--data', data);
        next();
    }else{
        res.send('Sorry, no data found');
    }
})

app.get('/codeswitching', (req, res, next)=> {
    const data = myData['codeswitching'];
    res.render('codeswitching', {...data});
    if(data){
        console.log('--data', data);
        next();
    }else{
        res.send('Sorry, no data found');
    }
})
app.listen(3000, () => {
    console.log('Server is running on port 3000');
 
})