// import modules and define variables
const express = require('express');
const app = express();

const port = 3000;
// do some stuff

app.get('/', (req, res) =>{
    res.send('Hello World!');
});

app.get('/users', (req,res) =>{
    res.json({
        success:true,
        data: [
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
    });
});

app.get('/users/:id', (req,res) =>{
    let userData = null;
    const userID = req.params.userID;

    if (userID === "1"){
        userData = {                
            name: "Bryan Salsieder",
            id: 1,
            email: "bsalsieder@gmail.com"
        }
    }

    if (userID === "2"){
        userData = {                
            name: "Rik Cottontree",
            id: 2,
            email: "aegisofsnow@gmail.com"
        }
    }

    if (userID === null){
        res.status('404').send();
        return;
    }

    res.json({
        success:true,
        data: userData
    });
});

app.post('', (req, res) =>{
// Interact with request sent
// Receive data 
// Validate user authority.
//Send back response
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