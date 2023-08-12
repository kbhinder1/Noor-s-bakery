document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("contact-form");
    const successMessage = document.getElementById("success-message");

    successMessage.style.display = "none";

    form.addEventListener("submit", function(event) {
        let isValid = true;

        const nameInput = form.querySelector("#name");
        const phoneInput = form.querySelector("#phone");
        const emailInput = form.querySelector("#email");

        const namePattern = /^[a-zA-Z\s]+$/;
        const phonePattern = /^\d{10}$/;
        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

        if (!namePattern.test(nameInput.value)) {
            nameInput.classList.add("error");
            isValid = false;
        } else {
            nameInput.classList.remove("error");
        }

        if (!phonePattern.test(phoneInput.value)) {
            phoneInput.classList.add("error");
            isValid = false;
        } else {
            phoneInput.classList.remove("error");

        }

        if (!emailPattern.test(emailInput.value)) {
            emailInput.classList.add("error");
            isValid = false;
        } else {
            emailInput.classList.remove("error");
        }

        if (isValid) {
            successMessage.style.display = "block";
            form.reset();
            event.preventDefault();
        } else {
            // Hide success message if form is not valid
            successMessage.style.display = "none";
            event.preventDefault();
        }
    });

    // Reset the error classes when inputs are focused
    const inputs = form.querySelectorAll("input[type=text], input[type=tel], input[type=email]");
    inputs.forEach(input => {
        input.addEventListener("focus", function() {
            this.classList.remove("error");
            const errorMessage = input.nextElementSibling;
            if (errorMessage && errorMessage.classList.contains("error-message")) {
                errorMessage.style.display = "none";
            }
        });
    });
        const resetButton = form.querySelector("input[type=reset]");
    resetButton.addEventListener("click", function() {
        successMessage.style.display = "none"; 
    });
});
function toggleDescription(element) {
    var description = element.parentElement.querySelector('p');
    description.classList.toggle('show-description');
}

