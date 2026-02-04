const banner = document.getElementById("cookieBanner");
const modal = document.getElementById("cookieModal");

const acceptBtn = document.getElementById("acceptCookies");
const rejectBtn = document.getElementById("rejectCookies");
const manageBtn = document.getElementById("manageCookies");
const closeModalBtn = document.getElementById("closeCookieModal");
const saveBtn = document.getElementById("saveCookies");

const analytics = document.getElementById("analyticsCookies");
const marketing = document.getElementById("marketingCookies");

// Check if already set
const storedConsent = localStorage.getItem("cookieConsent");
if (storedConsent) {
    banner.style.display = "none";
}

// Accept all
acceptBtn.addEventListener("click", () => {
    localStorage.setItem("cookieConsent", JSON.stringify({
        necessary: true,
        analytics: true,
        marketing: true
    }));
    banner.style.display = "none";
});

// Reject optional
rejectBtn.addEventListener("click", () => {
    localStorage.setItem("cookieConsent", JSON.stringify({
        necessary: true,
        analytics: false,
        marketing: false
    }));
    banner.style.display = "none";
});

// Open manage modal
manageBtn.addEventListener("click", () => {
    modal.classList.add("active");
});

// Close modal
closeModalBtn.addEventListener("click", () => {
    modal.classList.remove("active");
});

// Save preferences
saveBtn.addEventListener("click", () => {
    localStorage.setItem("cookieConsent", JSON.stringify({
        necessary: true,
        analytics: analytics.checked,
        marketing: marketing.checked
    }));
    modal.classList.remove("active");
    banner.style.display = "none";
});
