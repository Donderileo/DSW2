var requestOptions = {
  method: "POST",
  headers: { "Content-Type": "application/json" },
};

export function apiUrl() {
  return "http://localhost:3300";
}

export async function makeFetch(body, url) {
  requestOptions.body = JSON.stringify(body);
  return await fetch(apiUrl() + url, requestOptions).then((response) => {
    return handleResponse(response);
  });
}

export async function makeRegister(body) {
  requestOptions.body = JSON.stringify(body);
  return await fetch(apiUrl() + "/register", requestOptions).then(
    (response) => {
      return handleResponse(response);
    }
  );
}

export async function makeLogin(body) {
  requestOptions.body = JSON.stringify(body);
  return await fetch(apiUrl() + "/login", requestOptions).then((response) => {
    return handleResponse(response);
  });
}

export function handleResponse(response) {
  return response.text().then((text) => {
    const data = text && JSON.parse(text);
    return data;
  });
}
