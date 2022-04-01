
const btn = document.querySelector('.btn-enviar');
var username, password, passwordConfirm;

btn.addEventListener("click",async (e) => {
	username = document.querySelector('#username').value
	password = document.querySelector('#password').value

	var err = document.querySelector('#err')
	err.innerHTML = ""
	const response = await makeLogin({username: username, password: password})
	
	if(response.message == "Ok"){
		localStorage.setItem('token', response.token)
		window.location.href = "dashboard.html"
	}
	else {
		err.innerHTML = "Invalid User / Password"
	}
	
})

