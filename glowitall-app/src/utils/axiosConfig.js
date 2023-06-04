export const base_url = "http://localhost:5000/api/";

const getTokenFromLocalStorage = localStorage.getItem("userToken")
    ? localStorage.getItem("userToken") : null;

export const config = {
    headers: {
        "userToken": `${getTokenFromLocalStorage !== null ? getTokenFromLocalStorage.token : ""}`,
        Accept: "application/json",
    }
};