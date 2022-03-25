var menu = document.querySelector('#btn-sand')
menu.addEventListener('click', (e) => {
    e.preventDefault()
    var items = document.querySelector('.items-mobile')
    items.classList.toggle('none');
})