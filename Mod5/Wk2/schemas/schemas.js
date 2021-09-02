const mongoose = require("mongoose");

//Define schema
const usersSchema = new mongoose.Schema({
    name: String,
    email: String,
});

//Compile model, User is the Collection name
const User = mongoose.model('User', usersSchema);
//Export model
module.exports = {
    User,
};