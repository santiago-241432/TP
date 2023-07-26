import productDao from '../models/DAO/productDAO.js';
const product = new productDao();

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
    createProduct
}
