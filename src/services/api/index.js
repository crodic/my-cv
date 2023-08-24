import Axios from "../axios/axios";
export const fetchTest = () => {
    return Axios.get("https://reqres.in/api/users?page=2");
}