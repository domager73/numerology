import axios from "axios";

class AuthApi {
    #axios;

    constructor() {
        this.#axios = axios.create({
            baseURL: "http://localhost:8080/"
        });
    }
}

export default AuthApi;