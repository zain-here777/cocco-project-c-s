export const apiKey = () =>{
       const  username='ck_2f9c9314fab7cd06cedae7a2f5c41473aaf86471';
       const password= 'cs_9b05a70ce1ac2012c503b3c622d3d9e801e6f2fa';
        const auth = btoa(`${username}:${password}`)
    return auth;

}