// script.js

function submitForm(event) {
    event.preventDefault(); // Prevent the default form submission behavior

    // Get the form data
    var name = document.getElementById('name').value;
    var nid = document.getElementById('nid').value;
    var address = document.getElementById('address').value;
    var number = document.getElementById('number').value;
    var chassisNumber = document.getElementById('chassisNumber').value;
    var engineNumber = document.getElementById('engineNumber').value;
    var cylinders = document.getElementById('cylinders').value;
    var bodyColor = document.getElementById('bodyColor').value;
    var unladenWeight = document.getElementById('unladenWeight').value;
    var ladenWeight = document.getElementById('ladenWeight').value;
    var yearOfMfg = document.getElementById('yearOfMfg').value;
    var seatingCapacity = document.getElementById('seatingCapacity').value;
    var annualTax = document.getElementById('annualTax').value;
    var registrationdate = document.getElementById('registrationdate').value;
    var expiry_date = document.getElementById('expiry_date').value;
    var renewal_status = document.getElementById('renewal_status').value;

    // Display the success message
    document.getElementById('successMessage').style.display = 'block';

    // Populate the card fields with the form data
    document.getElementById('cardName').innerText = name;
    document.getElementById('cardNumber').innerText = nid;
    document.getElementById('cardAdd').innerText = address;
    document.getElementById('cardContact').innerText = number;
    document.getElementById('cardRegDate').innerText = registrationdate;
    document.getElementById('cardExpiryDate').innerText = expiry_date;
    document.getElementById('cardTransferredTo').innerText = 'N/A'; // Replace with actual data if available
    document.getElementById('cardChassisNumber').innerText = chassisNumber;
    document.getElementById('cardEngineNumber').innerText = engineNumber;
    document.getElementById('cardCylinders').innerText = cylinders;
    document.getElementById('cardBodyColor').innerText = bodyColor;
    document.getElementById('cardUnladenWeight').innerText = unladenWeight;
    document.getElementById('cardLadenWeight').innerText = ladenWeight;
    document.getElementById('cardYearOfMfg').innerText = yearOfMfg;
    document.getElementById('cardRenewal').innerText = renewal_status;
    document.getElementById('cardSeating').innerText = seatingCapacity;
    document.getElementById('cardAssed').innerText = annualTax;

    // Display the "View Card" button
    document.getElementById('viewCardBtn').style.display = 'block';

    return false; // Prevent the default form submission behavior
}

function viewCard() {
    // Display the card container
    document.getElementById('cardContainer').style.display = 'block';
}
