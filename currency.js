const currencyBtn = document.getElementById("currencyBtn");
const dropdown = document.getElementById("currencyDropdown");
const prices = document.querySelectorAll(".price");

/* FIXED RATES (AS GIVEN) */
const rates = {
    "$": 1,          // USD base
    "₹": 90.4,       // 1 USD = 90.4 INR
    "€": 0.84        // 1 USD = 0.84 EUR
};

currencyBtn.addEventListener("click", () => {
    dropdown.classList.toggle("active");
});

dropdown.querySelectorAll("button").forEach(btn => {
    btn.addEventListener("click", () => {
        const symbol = btn.dataset.currency;
        currencyBtn.textContent = symbol;
        dropdown.classList.remove("active");
        localStorage.setItem("currency", symbol);
        updatePrices(symbol);
    });
});

function updatePrices(symbol) {
    prices.forEach(price => {
        const baseUSD = parseFloat(price.dataset.baseUsd);
        let converted;

        if (symbol === "$") {
            converted = baseUSD;
        } else if (symbol === "₹") {
            converted = baseUSD * rates["₹"];
        } else if (symbol === "€") {
            converted = baseUSD * rates["€"];
        }

        price.textContent = symbol + converted.toFixed(2);
    });
}

/* LOAD SAVED CURRENCY */
const saved = localStorage.getItem("currency") || "$";
currencyBtn.textContent = saved;
updatePrices(saved);
