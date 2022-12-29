
const UserModel = require('../models/userModel');
const {encryptPassword, decryptPassword } = require('../functions/encryption')

const loginUserQuery = async(body) => {

    try{
        const findUser = await UserModel.findOne({email_id:body.email_id});
        if(findUser){
            let checkPassword = decryptPassword(body.password,findUser.password);
            if(checkPassword){
                return Promise.resolve({status:true,msg:"login successfully"});
            }
            else{
                return Promise.resolve({status:false,msg:"password is incorrect"});
            }
        }
        else{
            return Promise.resolve({status:false,msg:"please first login then try to login"});
        }
    }
    catch(err){
        return Promise.reject([500, 'Internal Server Error'])
    }
}

const registerUserQuery = async(body)=>{

    try{
        let encryptpassword = encryptPassword(body.password);
        let doc = {
            first_name: body.first_name,
            last_name: body.last_name ,
            email_id: body.email_id,
            password: encryptpassword,
        }
        const response = await UserModel.create(doc);
        return Promise.resolve({ status: true, data:response})
    }
    catch(err){
        return Promise.reject([500, 'Internal Server Error'])
    }
}

module.exports = {
    loginUserQuery,
    registerUserQuery
}