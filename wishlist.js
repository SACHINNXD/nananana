const openWishlist = document.getElementById("openWishlist");
const closeWishlist = document.getElementById("closeWishlist");
const wishlistModal = document.getElementById("wishlistModal");

openWishlist.addEventListener("click", () => {
    wishlistModal.classList.add("active");
});

closeWishlist.addEventListener("click", () => {
    wishlistModal.classList.remove("active");
});
