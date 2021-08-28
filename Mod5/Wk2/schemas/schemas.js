const { Mongoose } = require("mongoose");

//Define schema
const usersSchema = new Mongoose.Schema({
    name: String,
    email: String,
    is_admin: Boolean
});

//Compile model
const User = Mongoose.model('User', usersSchema);
//Export model
module.exports = {
    User,
};