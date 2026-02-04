const openSearch = document.getElementById("openSearch");
const closeSearch = document.getElementById("closeSearch");
const searchOverlay = document.getElementById("searchOverlay");

openSearch.addEventListener("click", () => {
    searchOverlay.classList.add("active");
});

closeSearch.addEventListener("click", () => {
    searchOverlay.classList.remove("active");
});
