import { axiosInstance } from "./";

// register a new user

export const RegisterUser = async (value) => {
  try {
    const response = await axiosInstance.post("api/users/register", value); // call localhost:8082/api/users/register
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const LoginUser = async (value) => {
  try {
    const response = await axiosInstance.post("api/users/login", value); // call localhost:8082/api/users/login
    return response.data;
  } catch (error) {
    console.log(error);
  }
};