export default function doLogin(userName, password){
    console.log(userName + ":" + password)

    const apiUrl = "http://localhost:8080"
    const loginUrl = apiUrl + "/login"

    fetch(loginUrl,{
        method: "POST", 
        mode: "cors",
        headers: {
            "Accept": "application/json, text/plain",
            "Content-Type":"application/json",
        },
        body: JSON.stringify({
            userName: userName,
            password: password
        })
    }).then((response) => response.json())
    .then((data) => {
        console.log(data);
    })
    .catch((err) => {
        console.log(err);
    });
}