// Button alert interaction
function showMessage() {
    alert("Thank you for visiting my portfolio!");
}

// Open dialog
function openDialog() {
    document.getElementById("dialogBox").style.display = "block";
}

// Close dialog
function closeDialog() {
    document.getElementById("dialogBox").style.display = "none";
}

// Form submission
function submitForm(event) {
    event.preventDefault();
    alert("Your message has been submitted successfully!");
    closeDialog();
}