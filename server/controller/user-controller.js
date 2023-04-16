import User from "../model/user.js";


export const  signupUser = async(request, response) => {
    try{
        const user = request.body;
        const newUser = new User(user);
        await newUser.save();

        return response.status(200).json({msg:"successfully saved to database"})
    }catch(error){
        return response.status(500).json({msg:"failed to save to database"})
    }
}