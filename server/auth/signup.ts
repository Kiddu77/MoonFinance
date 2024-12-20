"use server"
import ConnectToDB from "../config/connect.db"
import Users from "../model/users.model"
import bcrypt from "bcrypt";
import { generateUUID } from "../utils/uuid";

interface SignupData{
    username:string,
    email:string,
    password:string,
    phone:string
}

export async function signup (data: SignupData){
    console.log(data);
    const {username,email,password,phone}=data;
    try {
        await ConnectToDB();
    
        // const { name, email, password, mobileNumber, authType } = req.body;
    
        const saltRounds = 10;
        const existingUser = await Users.findOne({email });
        let hashedPassword = "";
    
        // if (authType === "") {
          if (existingUser) {
            throw new Error(
                "User already exists"
            )
          }
    
          hashedPassword = await bcrypt.hash(password, saltRounds);

        // }
        const userId = generateUUID();
        const newUser = new Users({
          username,
          email,
          phone,
          password: hashedPassword,
          userUid: userId
        });
    
        await newUser.save();

        //send otp for verification 
        
        
    
        return newUser;
        
      } catch (error) {
        console.error(error);
            throw new Error(
                "Internal server error"
            )
       }
}