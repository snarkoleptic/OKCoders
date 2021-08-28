const mongoose = require("mongoose");

//Define schema
const usersSchema = new mongoose.Schema({
    name: String,
    email: String,
    is_admin: Boolean
});

//Compile model
const User = mongoose.model('User', usersSchema);
//Export model
module.exports = {
    User,
};