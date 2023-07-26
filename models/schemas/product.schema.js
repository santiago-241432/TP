import mongoose from 'mongoose';

const productCollection = 'products'

const productSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    stock: { type: Number, required: true },
    category: { type: String, required: true, index: true }
    
})


const products = new mongoose.model(productCollection, productSchema);

export default products;