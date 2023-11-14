
import { BASE_URL } from "./baseurl"
import { commonAPI } from "./commonAPI"

// Register
export const registerAPI = async(user) => {
    return await commonAPI("POST",`${BASE_URL}/user/register`,user,"")
} 