const openCart = document.getElementById("openCart");
const closeCart = document.getElementById("closeCart");
const cartModal = document.getElementById("cartModal");

openCart.addEventListener("click", () => {
    cartModal.classList.add("active");
});

closeCart.addEventListener("click", () => {
    cartModal.classList.remove("active");
});
