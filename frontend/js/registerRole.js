
const selec = document.getElementById('role')
var selected = "Professional"
selec.addEventListener("change", (e) => {
	selected = e.target.value
	const client_fields = document.querySelector('.client')
	const professional_fields = document.querySelector('.professional')

	if(selected == "Client") {
		client_fields.classList.remove('none')
		professional_fields.classList.add('none')
	}
	else {
		professional_fields.classList.remove('none')
		client_fields.classList.add('none')
	}

})
const parsedToken = parseJwt(token)
const confirm = document.querySelector('.btn-enviar')
confirm.addEventListener("click", async () => {
	if(selected == "Client") {
		const name = document.getElementById("name").value
		const age = document.getElementById("age").value

		await finishRegister({name: name, age: age, token: token}, '/client')
		localStorage.removeItem('token')
        window.location.href = "login.html"

	}
	else {
		const name = document.getElementById("nameProf").value
		const area = document.getElementById("area").value
		const description = document.getElementById("description").value


		await finishRegister({name: name, area: area, description: description, token: token}, '/professional')
		localStorage.removeItem('token')

        window.location.href = "login.html"
	}
})