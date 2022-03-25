
var requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
};

function apiUrl() {
    return 'http://localhost:3000'
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

function handleResponse(response) {
    return response.text().then(text => {
        const data = text && JSON.parse(text);
        return data
    });
}