class Car {
  constructor(color, manufacturer) {
    this.color = color;
    this.manufacturer = manufacturer;
  }
}

class RaceCar extends Car {
  constructor(manufacturer, numberOfSeats) {
    super(undefined, manufacturer);
    this.numberOfSeats = numberOfSeats;
  }
}

// Function to handle form submission
document.getElementById("car-form").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent default form submission

  // Get input values
  const color = document.getElementById("color").value;
  const manufacturer = document.getElementById("manufacturer").value;
  const numberOfSeats = parseInt(document.getElementById("seats").value); // Convert to integer

  // Define the available seat options and corresponding Audi car images
  const seatOptions = [2, 4, 6];
  const audiCarImages = {
    2: "audicar.jpg",
    4: "audicar4.jpg",
    6: "audicar6.png"
  };

  // Check if the selected number of seats is valid
  if (seatOptions.includes(numberOfSeats)) {
    // Instantiate a race car object
    const raceCar1 = new RaceCar(manufacturer, numberOfSeats);

    // Display race car details
    const outputElement = document.getElementById("output");
    outputElement.innerHTML = `
      <div id="race-car1-details">
        <p>Race Car 1 - Manufacturer: ${raceCar1.manufacturer}, Number of Seats: ${raceCar1.numberOfSeats}, Color: ${color}</p>
        <!-- Dynamically selected Audi car image -->
        <img src="${audiCarImages[numberOfSeats]}" alt="Audi Car">
      </div>`;
  } else {
    // Display error message for invalid number of seats
    const outputElement = document.getElementById("output");
    outputElement.innerHTML = "<p>Error: Please select 2, 4, or 6 seats.</p>";
  }
});
