function validateForm() {
    let isValid = true;

    // Validate each input field
    const inputs = document.querySelectorAll('#regForm input');
    inputs.forEach(input => {
        if (input.value.trim() === '') {
            input.className = 'invalid';
            isValid = false;
        }
    });

    // Display success message or handle form submission based on validation
    if (isValid) {
        alert('Form submitted successfully!');
        // You can submit the form here if needed
    } else {
        alert('Please fill in all fields.');
    }

    return isValid;
}