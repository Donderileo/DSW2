var btn = document.querySelector('#btn-sand')
btn.addEventListener('click', (e) => {
    console.log("Aqui")
    var items = document.querySelector('.items-mobile')
    items.classList.toggle('none');
})