
let username_token = parseJwt(token).username
const name_tag = document.querySelector('.name')
name_tag.innerHTML = username_token