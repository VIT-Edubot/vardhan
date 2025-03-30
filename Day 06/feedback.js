// feedback.js

const form = document.querySelector("form");

// Declare variables
var userName = "";
let userEmail = "";
let isSatisfied = false;
let allRatings = [];

if (!form) {
    console.error("Form element not found");
}
// Function to validate form input
function validateForm(event) {
    event.preventDefault(); // Prevent form submission

    // Get input values
    userName = document.getElementById("name").value.trim();
    userEmail = document.getElementById("email").value.trim();
    const satisfactionInput = document.querySelector('input[name="satisfaction"]:checked');
    const ratingInput = document.querySelector('input[name="rating"]:checked');

    // Validation checks
    if (userName === "") {
        console.error("Error: Name field cannot be empty.");
        alert("Please enter your name.");
        return;
    }

   

    if (!satisfactionInput) {
        console.error("Error: Satisfaction selection is required.");
        alert("Please select your satisfaction level.");
        return;
    }

    if (!ratingInput) {
        console.error("Error: Rating selection is required.");
        alert("Please provide a rating from 1 to 5.");
        return;
    }

    // Update isSatisfied based on user input
    const isSatisfied = satisfactionInput.value === "yes";
    const rating = parseInt(ratingInput.value);

    if (rating < 1 || rating > 5) {
        console.error("Error: Invalid rating value");
        alert("Please provide a rating between 1 and 5");
        return;
    }

    console.log("User Name:", userName);
    console.log("User Email:", userEmail);
    console.log("Is Satisfied:", isSatisfied);
    console.log("User Rating:", rating);

    
    calculateTotalScore(rating);
}

// Function to calculate the score based on single rating
function calculateTotalScore(rating) {
    // Add current rating to array
    allRatings.push(rating);
    
    // Calculate average
    const average = allRatings.reduce((a, b) => a + b, 0) / allRatings.length;
    
    console.log("User Rating:", rating);
    console.log("All Ratings:", allRatings);
    console.log("Average Rating:", average.toFixed(1));
    
    // Show both current rating and average
    alert(`Thank you for rating us: ${rating} out of 5\nAverage Rating: ${average.toFixed(1)} out of 5`);
}

// Function to handle rating selection event
function handleRatingChange() {
    const selectedRating = document.querySelector('input[name="rating"]:checked');
    if (selectedRating) {
        document.getElementById("rating-message").innerText = 
            `You selected: ${selectedRating.value} out of 5`;
    }
}

// Attach event listener to the form submit button
document.querySelector("form").addEventListener("submit", validateForm);

// Attach event listener to reset button
document.getElementById("resetBtn").addEventListener("click", function () {
    console.log("Form Reset!");
    document.getElementById("rating-message").innerText = "";
});

// Attach event listeners to rating radio buttons
document.querySelectorAll('input[name="rating"]').forEach(radio => {
    radio.addEventListener("change", handleRatingChange);
});
