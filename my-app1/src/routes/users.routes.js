import { API_URL } from "./routes";

class Users {
    getUser = () => {
        return new Promise((resolve, reject) => {
            const method = "GET"
            const headers = { "Content-Type": "application/json" }

            fetch(`${API_URL}/`, { method, headers }).then(res => res.json()).then((data) => {
                resolve(data)
            }, (error) => {
                reject(error)
            })
        })
    }



    getUsers = (amount) => {
        return new Promise((resolve, reject) => {
            const method = "GET"
            const headers = { "Content-Type": "application/json" }

            fetch(`${API_URL}/?results=${amount}`, { method, headers }).then(res => res.json()).then((data) => {
                resolve(data)
            }, (error) => {
                reject(error)
            })
        })
    }
}



export const UsersRoutes = new Users();