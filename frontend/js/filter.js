const filter = document.getElementById('search')

async function getAllProfessionals () {
    const response = await searchProfessional('')
    const professionals = response.professionals
    console.log(professionals)

    const professionals_area = document.querySelector('.professionals-area')
    let text = ''
    professionals.forEach(professional => {
        text += `
        <div class="professional-single-container">
            <div class="professional-image">
                <div class="professional-icon">
                    <img src="images/ney.jpeg" class="professional-iconimage">
                </div>
            </div>
            <div class="professional-desc">
                <p class="prof1">${professional.name}</p>
                <p class="prof2">${professional.area}</p> 
            </div>
            <div class="professional-schedule">
                <a class="agendar-btn" href="appointments.html">Agendar</a> 
            </div>
        </div>
        `
    }) 
   
    professionals_area.innerHTML = text
}




filter.addEventListener("input", async (e) => {
    const value = filter.value
    const response = await searchProfessional(value)
    const professionals = response.professionals


    const professionals_area = document.querySelector('.professionals-area')
    let text = ''
    professionals.forEach(professional => {
        text += `
        <div class="professional-single-container">
            <div class="professional-image">
                <div class="professional-icon">
                    <img src="images/ney.jpeg" class="professional-iconimage">
                </div>
            </div>
            <div class="professional-desc">
                <p class="prof1">${professional.name}</p>
                <p class="prof2">${professional.area}</p> 
            </div>
            <div class="professional-schedule">
                <a class="agendar-btn" href="appointments.html">Agendar</a> 
            </div>
        </div>
        `
    })    
    professionals_area.innerHTML = text
})

getAllProfessionals()