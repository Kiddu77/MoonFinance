import { calcRisk } from "./risk";

interface UserResponse {
  [key: string]: number; 
}

export const calcDiversity = (userResponse: UserResponse): number => {
  const diversityScore =
    userResponse["4"] * 0.1 +
    userResponse["5"] * 0.08 +
    userResponse["6"] * 0.1;
  
  const riskScore = calcRisk(userResponse); 
  return parseFloat(diversityScore.toFixed(4));
};
