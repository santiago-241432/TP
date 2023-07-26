import mongoose from 'mongoose';

const usersCollection = 'Users';

const usersSchema = new mongoose.Schema({
    firstname: {type: String},
    lastname: {type: String},
    email: {type: String},
    age: {type: Number},
    password: {type: String},
    rol: {
        type: String,
        default: "user"
    }   
});


const users = new mongoose.model(usersCollection, usersSchema);

export default users;