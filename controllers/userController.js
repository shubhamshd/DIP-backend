
const {loginUserQuery, registerUserQuery } = require('../queries/userQuery')


const loginUser = async(req,res) => {
    try {
        await loginUserQuery(req,req.body.body)
        .then((resp) => {
            res.status(200).json(resp);
        });
        
    } catch (error) {
        console.log(error);
    }
}

const registerUser = async(req,res)=>{
    try {
        await registerUserQuery(req,req.body.body)
        .then((resp) => {
            res.status(200).json(resp);
        });
        
    } catch (error) {
        res.json(error);
    }
}

module.exports = {
    loginUser,
    registerUser
}