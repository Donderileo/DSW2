document.getElementById("logout").addEventListener('click', (e) => {
  localStorage.removeItem('token');
  location.reload(true);
})