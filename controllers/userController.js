import userDao from '../models/DAO/usersDAO.js';
import EErrors from '../services/errors/enums.js';
import customError from '../services/errors/customError.js';
import {getUserErrorInfo} from '../services/errors/info.js';

const user = new userDao();

const getAllUsers = async (req,res) =>{
    const result = await user.getAll();
    res.status(200).send(result);
};

const getUserById = async (req,res) =>{
    const { id } = req.params;
    if(!id){
        customError.createError({
            name: "Error al buscar el usuario",
            cause: getUserErrorInfo(),
            message: "Error al buscar el usuario",
            code: EErrors.INVALID_TYPE_ERROR
        })
    }
    const result = await user.getUserByID(id);
    res.status(200).send(result);
};

const createUser = async (req,res) =>{
    const result = await user.create(req.body);
    
    res.status(200).send(result);
};

const updateUser = async (req,res) =>{
    const { id } = req.params;
    if(!id){
        return res.status(400).send("Se necesita ID");
    }
    const result = await user.updateUserById(id,req.body);
    res.status(200).send(result);
};

export{
    getAllUsers,
    getUserById,
    createUser,
    updateUser
}
