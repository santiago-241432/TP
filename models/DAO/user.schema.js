import mongoose from 'mongoose';

import { Schema } from 'mongoose';

const Userscollection = 'users'

const UserSchema = new mongoose.Schema({
    first_name: String,
    last_name: String,
    email: String,
    age: Number,
    password: String,
    cart:{type: Schema.Types.ObjectId, ref: 'carts'},
    role:{type: String, default: 'user'}
})

const userModel = mongoose.model(Userscollection,UserSchema);

export default userModel;