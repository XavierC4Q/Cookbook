const mongoose = require('mongoose');
const PassportLocalMongoose = require('passport-local-mongoose');
const schema = mongoose.Schema;

const UserSchema = new schema({
    username: {
        type: String,
        unique: true,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    firstName: String,
    lastName: String,
    age: {
        type: Number,
        required: true
    }
});

UserSchema.plugin(PassportLocalMongoose);

const User = mongoose.model('User', UserSchema);

module.exports = User;