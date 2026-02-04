const loader = document.getElementById("fakeLoader");

// Always show loader first
document.documentElement.style.overflow = "hidden";

window.addEventListener("load", () => {
    setTimeout(() => {
        loader.classList.add("hide");
        document.documentElement.style.overflow = "";
    }, 1500); // 1.5 seconds fake loading
});
