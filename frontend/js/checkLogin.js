const token = localStorage.getItem('token')

if(!token){
    //redirect to login
    window.location.href = "/login.html"
}
else {
    var {_, username, role} = parseJwt(token)
    if(!role){
        //redirect to complete cadastro
        //window.location.href = "/complete.html"
    }
    if(role == 'adm'){
        window.location.href = "/dashboard-admin.html"
    }
}

function parseJwt (token) {
    var base64Url = token.split('.')[1];
    var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    var jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));

    return JSON.parse(jsonPayload);
};