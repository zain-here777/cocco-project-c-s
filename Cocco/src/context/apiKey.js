export const apiKey = () =>{
       const  username=import.meta.env.REACT_APP_USERNAME_KEY ;
       const password= import.meta.env.REACT_APP_PASSWORD_KEY;
        const auth = btoa(`${username}:${password}`)
    return auth;

}