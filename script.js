document.getElementById("city-input").addEventListener("submit", function (e) {
    e.preventDefault();
    getWeather();
});

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

function getName() {
    let name = document.getElementById("username").value;
    alert(`Hello, ${name} \nYour feedback is submitted!`);
}

function resetForm() {
    let name = document.getElementById("username").value;
    alert(`Your feedback has been reset!`)
}