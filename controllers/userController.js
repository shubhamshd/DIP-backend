
const {loginUserQuery, registerUserQuery } = require('../queries/userQuery')


const loginUser = async(req,res) => {
    try {
        const response = await loginUserQuery(req.body)
        .then((resp) => {
            res.status(200).json(resp);
        });
        
    } catch (error) {
        console.log(error);
    }
}

const registerUser = async(req,res)=>{
    try {
        const response = await registerUserQuery(req.body)
        .then((resp) => {
            res.status(200).json(resp);
        });
        
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    loginUser,
    registerUser
}