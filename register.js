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
    var vehicleCategory=document.getElementById('vehicleCategory').value;
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
    document.getElementById('cardCategory').innerText=vehicleCategory;
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

// To generate QR code
// At the end of the submitForm function, add this code to generate the QR code
var formData = {
    name: name,
    nid: nid,
    address: address,
    number: number,
    chassisNumber: chassisNumber,
    engineNumber: engineNumber,
    cylinders: cylinders,
    bodyColor: bodyColor,
    unladenWeight: unladenWeight,
    ladenWeight: ladenWeight,
    yearOfMfg: yearOfMfg,
    vehicleCategory: vehicleCategory,
    seatingCapacity: seatingCapacity,
    annualTax: annualTax,
    registrationdate: registrationdate,
    expiry_date: expiry_date,
    renewal_status: renewal_status
};

var qrcodeContainer = document.getElementById('qrcode');
qrcodeContainer.innerHTML = ""; // Clear any previous QR code
var qrcode = new QRCode(qrcodeContainer, {
    text: JSON.stringify(formData),
    width: 128,
    height: 128,
    colorDark : "#000000",
    colorLight : "#ffffff",
    correctLevel : QRCode.CorrectLevel.H
});

// To display QR code
function startScanner() {
    const html5QrCode = new Html5QrCode("reader");

    html5QrCode.start(
        { facingMode: "environment" }, // Use rear camera
        {
            fps: 10,    // Scans per second
            qrbox: 250  // size of QR scanning box
        },
        qrCodeMessage => {
            // handle the scanned QR code
            var scannedData = JSON.parse(qrCodeMessage);

            document.getElementById('cardName').innerText = scannedData.name;
            document.getElementById('cardNumber').innerText = scannedData.nid;
            document.getElementById('cardAdd').innerText = scannedData.address;
            document.getElementById('cardContact').innerText = scannedData.number;
            document.getElementById('cardRegDate').innerText = scannedData.registrationdate;
            document.getElementById('cardExpiryDate').innerText = scannedData.expiry_date;
            document.getElementById('cardTransferredTo').innerText = 'N/A';
            document.getElementById('cardChassisNumber').innerText = scannedData.chassisNumber;
            document.getElementById('cardEngineNumber').innerText = scannedData.engineNumber;
            document.getElementById('cardCylinders').innerText = scannedData.cylinders;
            document.getElementById('cardBodyColor').innerText = scannedData.bodyColor;
            document.getElementById('cardUnladenWeight').innerText = scannedData.unladenWeight;
            document.getElementById('cardLadenWeight').innerText = scannedData.ladenWeight;
            document.getElementById('cardYearOfMfg').innerText = scannedData.yearOfMfg;
            document.getElementById('cardCategory').innerText = scannedData.vehicleCategory;
            document.getElementById('cardRenewal').innerText = scannedData.renewal_status;
            document.getElementById('cardSeating').innerText = scannedData.seatingCapacity;
            document.getElementById('cardAssed').innerText = scannedData.annualTax;

            alert("QR Code Scanned Successfully: " + JSON.stringify(scannedData));
            html5QrCode.stop().then(ignore => {
                // QR Code scanning is stopped.
            }).catch(err => {
                // Stop failed, handle it.
            });
        },
        errorMessage => {
            // handle scan failure, usually better to ignore and keep scanning.
            console.log(`QR Code no longer in front of camera.`);
        }
    ).catch(err => {
        // Start failed, handle it.
        console.log(`Unable to start scanning, error: ${err}`);
    });
}

// Call the startScanner function to initiate QR code scanning
window.onload = function() {
    startScanner();
};

