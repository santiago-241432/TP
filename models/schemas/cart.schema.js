import mongoose from "mongoose";


const cartCollection = 'carts'

const cartSchema = new mongoose.Schema({
    Cart: {

        type: [
            {
                cart: {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: "products"
                },
                quantity: {type: Number, default: 1},
            }
        ],
        default: [],
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "users"
        } 
    }
});


const cartModel = new mongoose.model(cartCollection, cartSchema);

export default cartModel;