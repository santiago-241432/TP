import productDao from '../models/DAO/productDAO.js';
import { generateProducts } from '../mocks/generateproducts.js';

const product = new productDao();

const mockingProducts = (req,res) =>{
    let products = [];
    for (let i = 0; i < 100; i++) {
     products.push(generateProducts());   
        
    }
    res.status(200).send(products);
};

const getAllProducts = async (req,res) =>{
    const result = await product.getAll();
    res.status(200).send(result);
};

const getProductById = async (req,res) =>{
    const { id } = req.params;
    if(!id){
        return res.status(400).send("Se necesita ID");
    }
    const result = await product.getProductByID(id);
    res.status(200).send(result);
};

const createProduct = async (req,res) =>{
    const result = await product.create(req.body);
    res.status(200).send(result);
};

export{
    getAllProducts,
    getProductById,
    createProduct,
    mockingProducts
}
