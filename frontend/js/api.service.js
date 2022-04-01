
var requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
};

function apiUrl() {
    return 'http://localhost:3300'
}

async function makeRegister(body) {
    
    requestOptions.body = JSON.stringify(body)
    return await fetch(apiUrl() + '/register', requestOptions).then((response) => {
        return handleResponse(response)
    })
}

async function makeLogin(body) {
    
    requestOptions.body = JSON.stringify(body)
    return await fetch(apiUrl() + '/login', requestOptions).then((response) => {
        return handleResponse(response)
    })
}

async function finishRegister(body, route) {

    requestOptions.body = JSON.stringify(body)
    return await fetch(apiUrl() + route, requestOptions).then((response) => {
        return handleResponse(response)
    })
}

function handleResponse(response) {
    return response.text().then(text => {
        const data = text && JSON.parse(text);
        return data
    });
}

async function searchProfessional(value) {

    const param = `value=${value}`
    requestOptions.method = 'GET'
    //http://localhost:3300/professional/search?value=Don
    return await fetch(apiUrl() + '/professional/search?' + param, requestOptions).then((response) => {
        return handleResponse(response)
    })
}

function parseJwt (token) {
    var base64Url = token.split('.')[1];
    var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    var jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));

    return JSON.parse(jsonPayload);
};