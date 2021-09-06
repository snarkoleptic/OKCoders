// import modules and define variables
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const { User } = require('./schemas/schemas');
const dotenv = require('dotenv');
dotenv.config();

main().catch((err) => console.log(err));

async function main(){
    // await mongoose.connect(`mongodb://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_DATABASE}/?authSource=admin`);
    await mongoose.connect(`mongodb://${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_DATABASE}`);
}

// const testData = [
//     {
//         name: "Bryan Salsieder",
//         id: 1,
//         email: "bsalsieder@gmail.com"
//     },
//     {
//         name: "Rik Cottontree",
//         id: 2,
//         email: "aegisofsnow@gmail.com"
//     }
// ]

const port = 5000;

// Middlewares
app.use(express.json());

// Routes
app.get('/', async (req, res) =>{
    res.send("Hello, world!");
});

app.get('/users', async (req, res) =>{
    const users = await User.find({}).select('_id name email');
    
    res.json({
        success:true,
        users,
    });
});

app.get('/users/:userId', async (req,res) =>{
    try {
        const userId = req.params.userId;
        const user = await User.findById(userId).select('_id name email');
        
        res.json({
            success:true,
            user,
        });

    } catch (e) {
        console.log(e);
        res.status(500).send();
    }
});

app.post('/users', async (req, res) =>{
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

// app.put('/users', async (req, res) =>{}); Full replacement of whole document.
// app.patch('/users', async (req, res) =>{}); Patial replacement of variables.
// app.delete('/users', async (req, res) =>{});


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