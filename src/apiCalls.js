import axios from "axios";

export const LoginCall = async (userCredentials, dispatch) => {
    dispatch({
        type: "LOGIN_START",
    });
    try {
        const response = await axios.post("http://localhost:8000/api/auth/login", userCredentials);
        dispatch({
            type: "LOGIN_SUCCESS",
            payload: response.data,
        });
    }
    catch (error) {
        dispatch({
            type: "LOGIN_FAILURE",
            payload: error,
        });
    }
};