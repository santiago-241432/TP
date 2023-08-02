import EErrors from  '../../services/errors/enums.js';

export default(error, req, res, next) => {
    console.log(error.cause);
    switch(error.code){
        case EErrors.INVALID_TYPE_ERROR:
            res.send({error: error.name});
            break;
        default:
            res.send({error:"unhandled error"});
            break;

    }
}