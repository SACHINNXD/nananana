const trackBtn = document.getElementById("trackBtn");
const contactInput = document.getElementById("contactInput");
const orderInput = document.getElementById("orderInput");
const errorText = document.getElementById("trackError");
const statusContainer = document.getElementById("statusContainer");

trackBtn.addEventListener("click", () => {
    const contact = contactInput.value.trim();
    const orderId = orderInput.value.trim();

    errorText.textContent = "";
    statusContainer.style.display = "none";

    if (!contact || !orderId) {
        errorText.textContent = "Please fill in all fields.";
        return;
    }

    const match = trackerData.find(item =>
        item.orderId === orderId &&
        (item.email === contact || item.mobile === contact)
    );

    if (!match) {
        errorText.textContent = "Order not found. Please check details.";
        return;
    }

    // MATCH FOUND
    statusContainer.style.display = "block";
});
