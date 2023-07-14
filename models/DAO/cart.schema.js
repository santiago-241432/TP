import mongoose from 'mongoose';

import { Schema } from 'mongoose';


const cartCollection = 'carts';

const cartSchema = new mongoose.Schema({
    products: {
        type: [
            {
                product: {type: Schema.Types.ObjectId, ref: 'products'},
                quantity: {type: Number}
            }
        ], default: []
    }
})

cartSchema.pre('findOne', function() {
    this.populate('products.product');
})

const cartModel = mongoose.model(cartCollection, cartSchema);

export default cartModel;