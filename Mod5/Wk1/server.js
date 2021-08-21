//npm run start

// import modules
const express = require('express');
const app = express();

const port = 3000;
// do some stuff

app.get('/', (req, res) =>{
    res.send('Hello World!');
});

app.get('/test', (req,res) =>{
    res.json({success:true, failure:false});
});


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});

// export OR start a server