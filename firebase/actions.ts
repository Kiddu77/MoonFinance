import { createUserWithEmailAndPassword, UserCredential } from "firebase/auth";
import { auth } from "./firebase-config"; 

export const handleEmailRegister = async (userEmail: string, userPass: string): Promise<string> => {
  try {
    const userCredential: UserCredential = await createUserWithEmailAndPassword(auth, userEmail, userPass);
    const user = userCredential.user;
    console.log(user);
    return user.uid;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message);
    }
    throw new Error('An unknown error occurred');
  }
};
