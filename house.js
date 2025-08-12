function predictPrice() {
    let area = parseFloat(document.getElementById("area").value);
    let bedrooms = parseInt(document.getElementById("bedrooms").value);
    let city = document.getElementById("city").value;
    let result = document.getElementById("result");

    if (isNaN(area) || isNaN(bedrooms)) {
        result.innerHTML = "⚠ Bkl pura to bhar.";
        return;
    }

    // Base price per km² for each city (in lakhs)
    let cityRates = {
        "Mumbai": 180,
        "Chhibramau": 110,
        "Delhi": 90   
    };

    // Price formula
    let baseRate = cityRates[city];
    let price = (area * baseRate) + (bedrooms * 10);

    // Limit to under 1 crore
    if (price > 100) {
        price = 99.99; // in lakhs
    }

    result.innerHTML = `💰 Estimated Price: ₹${price.toFixed(2)} Lakhs`;
}
