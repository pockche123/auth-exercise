console.log("Loaded!")


const logout = document.getElementById('logout')

if (logout) {
  logout.addEventListener('click', () => {
    console.log('logout clicked')
    localStorage.removeItem('token')
    window.location.assign('login.html')
  })
}