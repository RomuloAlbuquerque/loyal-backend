import service from "./service"
import userDTO from "../dto/user";

const login = {
    fazerLogin : (login:object)=> {
        let auth = false
        const email = Object.values(login)[0];
        const password = Object.values(login)[1];
        const user = service.listAdmin().find(obj => obj.email === email)
        if(user?.password === password){
            auth = true
        }
        console.log(auth)
        return auth
    }
}

export default login