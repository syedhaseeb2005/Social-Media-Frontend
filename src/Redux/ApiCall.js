import axios from "axios"
import { loginFailed, loginStart, loginSuccess, logout } from "./userSlice"

export const login = async (dispatch , user) =>{
    try {
        dispatch(loginStart())
        const res = await axios.post("http://localhost:7000/api/auth/login",user)
        // console.log(res.data);
        const token = res.data.token
        localStorage.setItem("token",token)
        dispatch(loginSuccess(res.data))
    } catch (error) {
        dispatch(loginFailed(error))
        console.log(error);
    }
}
export const Logout = (dispatch) => {
    try {
        localStorage.removeItem("token");
        dispatch(logout());
    } catch (error) {
        console.log(error);
    }
};