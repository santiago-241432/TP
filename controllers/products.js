import  productModel  from "../models/DAO/product.schema.js";

class Product {

    constructor() {
        
    }

    async getAll(){
        return await productModel.find();
    }

    async getById(id){
        return await productModel.findById(id);
    }

    async create(data) {
        return await productModel.create(data)
    }


    async delete(id){
        return await productModel.findByIdAndDelete(id);
    }
}

export default new Product();
