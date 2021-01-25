function toggleDarkMode() {
    let element = document.body
    let button = document.getElementById("darkModeButton")
    let searchBar = document.getElementById("searchBar")
    element.classList.toggle("darkMode");
    searchBar.classList.toggle("searchBarDarkMode")
    button.classList.toggle("darkModeToggleButton")
    button.classList.toggle("btn-dark")
    button.classList.toggle("btn:hover")
}
