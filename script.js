document.getElementById('infoForm').addEventListener('submit', function(e) {
    e.preventDefault();

    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Display values in the display-data section
    document.getElementById('display-name').innerText = 'Name: ' + name;
    document.getElementById('display-email').innerText = 'Email: ' + email;
    document.getElementById('display-message').innerText = 'Message: ' + message;

    // Optionally clear form fields
    document.getElementById('infoForm').reset();
});
