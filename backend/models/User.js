const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = Schema({
    googleId: String,
    googleAvatar: String
});

mongoose.model('users',userSchema)