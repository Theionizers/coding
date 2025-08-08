
document.querySelector("form").addEventListener("submit", function(event) {
    event.preventDefault();

    let education = document.getElementById("educationLevel").value;
    let salary = parseFloat(document.getElementById("annualSalaryINR").value) || 0;
    let assets = parseFloat(document.getElementById("assetsLakh").value) || 0;
    let property = parseFloat(document.getElementById("propertyLakh").value) || 0;
    let jewelry = parseFloat(document.getElementById("jewelryLakh").value) || 0;
    let car = document.getElementById("carName").value;
    let familyStatus = document.getElementById("familyStatus").value;
    let age = parseInt(document.getElementById("age").value) || 0;
    let cityTier = parseInt(document.getElementById("cityTier").value);
    let profession = document.getElementById("professionType").value;
    let x=document.getElementById("love-type").value;
    let dahejValue = 0;

    const eduMultiplier = {
        "High school": 1,
        "Graduate": 1.2,
        "Postgraduate": 1.4,
        "Professional": 1.6,
        "PhD": 2
    };
    dahejValue += salary * eduMultiplier[education];
    dahejValue += (assets + property + jewelry) * 100000;

    const carValues = {
        "No Car": 0,
        "Maruti Alto": 300000,
        "Wagon R": 500000,
        "Swift Dzire": 700000,
        "Hyundai i20": 800000,
        "Honda City": 1200000,
        "Hyundai Creta": 1500000,
        "Mahindra Thar": 1600000,
        "Toyota Innova": 2000000,
        "Toyota Fortuner (SUV)": 3500000,
        "Skoda Octavia": 2600000,
        "Skoda Superb": 3500000,
        "BMW 3 Series": 4500000,
        "BMW 5 Series": 6500000,
        "Mercedes C-Class": 5500000,
        "Mercedes E-Class": 7000000,
        "Audi A4": 4500000,
        "Audi A6": 6500000
    };
    dahejValue += carValues[car] || 0;

    if (familyStatus === "Comfortable") dahejValue *= 1.1;
    if (familyStatus === "Well-off") dahejValue *= 1.25;

    if (age < 25) dahejValue *= 1.2;
    else if (age > 35) dahejValue *= 0.85;

    if (cityTier === 1) dahejValue *= 1.3;
    if (cityTier === 3) dahejValue *= 0.9;

    if (profession === "high") dahejValue *= 1.4;
    let love ={
        "love" :0,
        "arrange" : 1,
    }
    dahejValue*= love[x] ??1;

    // Show modal
    document.getElementById("result-text").innerHTML =
        " ⚠ Warning: Dahej is prohibited in India <br><br>💰 Estimated Dahej Value: ₹" + dahejValue.toLocaleString();
    document.getElementById("result-modal").style.display = "flex";
});

// Close modal
document.getElementById("close-modal").addEventListener("click", function() {
    document.getElementById("result-modal").style.display = "none";
});

