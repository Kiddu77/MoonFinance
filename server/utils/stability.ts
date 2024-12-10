interface UserResponse {
    [key: string]: number;
  }
  
  export const calcStability = (userResponse: UserResponse): number => {
    const stabilityScore =
      userResponse["1"] * 0.1 +
      userResponse["2"] * 0.1 +
      userResponse["6"] * 0.2 +
      userResponse["7"] * 0.15 +
      userResponse["8"] * 0.15 +
      userResponse["5"] * 0.4;
  
    return parseFloat(stabilityScore.toFixed(4));
  };
  