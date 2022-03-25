
const btn = document.querySelector('.btn-enviar');
var username, password, passwordConfirm;

btn.addEventListener("click",async (e) => {
	username = document.querySelector('#username').value
	password = document.querySelector('#password').value
	passwordConfirm = document.querySelector('#passwordConfirm').value

	var err = document.querySelector('#err')
	if(password != passwordConfirm) {
		err.innerHTML = "Error! Passwords don't match"
	} else {
		err.innerHTML = ""
		const response = await makeRegister({username: username, password: password})

		if(response.message == "Ok"){
			window.location.href = "/login.html"
		}
		else {
			err.innerHTML = response.message
		}
	}
})

