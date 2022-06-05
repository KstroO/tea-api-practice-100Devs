const app = require('express')();
const cors = require('cors');
PORT = 8000;

app.use(cors());

const tea = {
    'oolong':{
        'type': 'black',
        'origin': 'Yo momma\'s house',
        'waterTemp': 200,
        'steepTimeSecs': 180,
        'caffeinated': true ,
        'flavor': 'tea flavor'
    },
    'matcha': {
        'type': 'green',
        'origin': 'Yo momma\'s house',
        'waterTemp': 200,
        'steepTimeSecs': 180,
        'caffeinated': false ,
        'flavor': 'green tea flavor'
    },
    'unknown' : {
        'type': 'unknown',
        'origin': 'unknown',
        'waterTemp': 0,
        'steepTimeSecs': 0,
        'caffeinated': false,
        'flavor': 'unknown'
    }
};

//handlers
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.get('/api/:name', (req, res) => {
    const name = req.params.name;
    if(tea[name]) res.json(tea[name]);
    else res.json(tea['unknown']);
});

//listen
app.listen(process.env.PORT || PORT, () => {
    console.log(`Listening on port ${PORT}: http://localhost:${PORT}`);
});