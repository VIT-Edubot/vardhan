var userName = "";
let userEmail = "";
const isSatisfied = false;

// Function to validate form input
function validateForm(event) {
    event.preventDefault(); // Prevent form submission

    // Get input values
    userName = document.getElementById("name").value.trim();
    userEmail = document.getElementById("email").value.trim();
    const satisfactionInput = document.querySelector('input[name="satisfaction"]:checked');

    // Validation checks
    if (userName === "") {
        console.error("Error: Name field cannot be empty.");
        alert("Please enter your name.");
        return;
    }

    if (!userEmail.includes("@")) {
        console.error("Error: Invalid email format.");
        alert("Please enter a valid email.");
        return;
    }

    if (!satisfactionInput) {
        console.error("Error: Satisfaction selection is required.");
        alert("Please select your satisfaction level.");
        return;
    }

    // Update isSatisfied based on user input
    const isSatisfied = satisfactionInput.value === "yes";

    console.log("User Name:", userName);
    console.log("User Email:", userEmail);
    console.log("Is Satisfied:", isSatisfied);

    // Calculate total score
    calculateTotalScore();
}

// Function to calculate the average score from three features
function calculateTotalScore() {
    // Example feature ratings (can be extended to take real inputs)
    const feature1 = Math.floor(Math.random() * 5) + 1;
    const feature2 = Math.floor(Math.random() * 5) + 1;
    const feature3 = Math.floor(Math.random() * 5) + 1;

    const totalScore = feature1 + feature2 + feature3;
    const averageScore = totalScore / 3;

    console.log("Feature 1 Score:", feature1);
    console.log("Feature 2 Score:", feature2);
    console.log("Feature 3 Score:", feature3);
    console.log("Total Score:", totalScore);
    console.log("Average Score:", averageScore.toFixed(2));

    alert(`Your average feature rating is: ${averageScore.toFixed(2)}`);
}

// Attach event listener to the form submit button
document.querySelector("form").addEventListener("submit", validateForm);
