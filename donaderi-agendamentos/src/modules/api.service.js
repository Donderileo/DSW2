var requestOptions = {
  headers: { "Content-Type": "application/json" },
};

export function apiUrl() {
  return "http://localhost:3300";
}

export async function makeFetch(body, url, method = "POST") {
  requestOptions.method = method;
  requestOptions.body = JSON.stringify(body);
  return await fetch(apiUrl() + url, requestOptions).then((response) => {
    return handleResponse(response);
  });
}

export async function makeRegister(body, method = "POST") {
  requestOptions.method = method;

  requestOptions.body = JSON.stringify(body);
  return await fetch(apiUrl() + "/register", requestOptions).then(
    (response) => {
      return handleResponse(response);
    }
  );
}

export async function makeLogin(body, method = "POST") {
  requestOptions.method = method;
  if (body.toString() !== "{}") {
    requestOptions.body = JSON.stringify(body);
  }
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

export async function searchProfessional(value) {
  const param = `value=${value}`;
  var requestOptions = {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  };
  //http://localhost:3300/professional/search?value=Don
  return await fetch(
    apiUrl() + "/professional/search?" + param,
    requestOptions
  ).then((response) => {
    return handleResponse(response);
  });
}
