const mongoose = require('mongoose');
const { User } = require('./schemas/schemas');
const dotenv = require('dotenv');
dotenv.config();
console.log(process.env.DB_URI);

// Config/init
main()
    .then(() => {
        const testor = new User({
            name: 'Testor',
            email: 'testor@test.com',
            id: '999'
        });
        return testor.save();
    })
    .then((res) => {
        console.log('Result: ', res);
    })
    .catch((err) => {
        console.log("Error: ", err);
        process.exit(1);
});

async function main(){
    await mongoose.connect(`mongodb://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_DATABASE}/?authSource=admin`);
}