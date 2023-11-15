
import { BASE_URL } from "./baseurl"
import { commonAPI } from "./commonAPI"

// Register
export const registerAPI = async(user) => {
    return await commonAPI("POST",`${BASE_URL}/user/register`,user,"")
} 

// login
export const loginAPI = async(user) => {
    return await commonAPI("POST",`${BASE_URL}/user/login`,user,"")
} 

// Add project

export const addProjectAPI = async(reqBody,reqHeader) => {
    return await commonAPI("POST",`${BASE_URL}/project/add`,reqBody,reqHeader) 
}