import cartDao from '../models/DAO/cartDAO.js';
const cart = new cartDao();

const createCart = async(req, res) => {
    let result = await cart.createCart()
    return result;
}

const getCarts = async(req, res) => {
    try {
        const carts = await cart.getCarts();
        res.status(200).send(carts)
    } catch (err) {
        console.log('Error al obtener los productos', err)
    }
}

const getCartById = async(req, res) => {
    try{
        const cid = req.params.cid;
        const carts = await cart.getCompleteCart(cid);
        const newProducts = carts.Cart.map(data => {
            return {
                Title: data.cart.Title,
                Description: data.cart.Description,
                Price: data.cart.Price,
                Stock: data.cart.Stock,
                Category: data.cart.Category,
                Thumbnail: data.cart.Thumbnail,
                id:data.cart._id,
                quantity:data.quantity
            }
    })     
    res.status(200).render('cart', {products: newProducts});
    } catch (err) {
        console.log(err);
    }
};
    

const addCartByProductId = async(req, res) => {
    try{
        const { cid, pid} = req.params
        const idcart = await cart.getCartById(cid);
        const isInCart = idcart.Cart.some(product => (product.cart).toString() === pid);
        if(isInCart) {
            await cart.addOnlyQuantity(cid, pid);
            await cart.getCompleteCart(cid);
            res.status(200).redirect('/products?limit=6');
            return
        }
        await cart.addCartByProductId(cid, pid);
        await cart.getCompleteCart(cid);
        res.status(200).redirect('/products?limit=6');
    } catch (err) {
        console.log('Error agregar al carrito', err)
    }
}

const deleteAllProducts = async(req, res) => {
    try{
        const { cid } = req.params;
        await cart.deleteProductsCart(cid)
        res.status(200).send('products removed');
    } catch (err) {
        console.log('Error al eliminar los productos del carrito', err)
    }
}

export{
    createCart,
    getCarts,
    getCartById,
    addCartByProductId,
    deleteAllProducts

}
