import products from '../schemas/product.schema.js';
import MongooseSingleton from '../../config/dbConnect.js';

class productDao{
    constructor (){
        const db = MongooseSingleton.getInstance();
    }

    getAll = async () => await products.find();

    getProductByID = async (id) => await products.findOne({_id: id});

    create = async (info) => await products.create(info);

}

export default productDao;