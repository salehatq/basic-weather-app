// City Input
document.getElementById("city-input").addEventListener("submit", function (e) {
    e.preventDefault();
    getWeather();
});

// Weather Information

async function getWeather() {

    const location = document.getElementById("location").value;
    const apiKey = "b793ad3d7d4444a791493152262406";
    const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${location}&aqi=no`;

    if (!location) {
        document.getElementById("result").textContent =
            "Please enter a location.";
        return;
    }
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error("Location not found");
        }
        const data = await response.json();

        document.getElementById("temp").textContent = data.current.temp_c + "°C";
        document.getElementById("city").textContent = data.location.name;
        document.getElementById("condition").textContent = "Condition: " + data.current.condition.text;
        document.getElementById("time").textContent = data.location.localtime.split(" ")[1];
        document.getElementById("date").textContent = data.location.localtime.split(" ")[0];
        document.getElementById("result").textContent = `Wind Speed: ${data.current.wind_mph} mph | Cloud: ${data.current.cloud}%`;
    }
    catch (error) {
        document.getElementById("result").textContent = error.message;
    }
}

// Feedback Form Functionalities

function getName(event) {
    event.preventDefault();
    const name = document.getElementById("username").value.trim();
    if (name === "") {
        alert("Please enter your name!");
        return false;
    }
    alert(`Hello, ${name}\nYour feedback has been submitted successfully!`);

    document.getElementById("feed").reset();
    return false;
}

function resetForm() {
    if (confirm("Are you sure you want to reset?")) {
        document.getElementById("feed").reset();
        alert("Form reset successfully!");
    }
}