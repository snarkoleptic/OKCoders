// import modules and define variables
const express = require('express');
const app = express();

const port = 4000;

app.get('/', (req, res) =>{
    res.send("Hello, world!");
});

const testData = [
    {
        name: "Bryan Salsieder",
        id: 1,
        email: "bsalsieder@gmail.com"
    },
    {
        name: "Rik Cottontree",
        id: 2,
        email: "aegisofsnow@gmail.com"
    }
]

app.get('/users/:userId', (req,res) =>{
    let userData = null;
    const userID = req.params.userID;

    if (userID === '1'){
        userData = testData[0];
    }

    if (userID === '2'){
        userData = testData[1];
    }

    if (userID === null){
        res.status(404).send();
        return;
    }

    res.json({
        success:true,
        data: userData
    });
});

app.post('/users', (req, res) =>{
// Receive data
    const data = req.body;
// Validate data
    if (!data.name || !data.email){
        res.status(422).send();
        return;    
    }
//Send back response
    let returnData = {
        id:3,
        ...data,
    };
    res.status(201).send(returnData);
});

/*
C - Create - POST
R - Read - GET
U - Update - PUT/PATCH
D - Delete - DELETE
*/

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});

// export OR start a server
//npm run start