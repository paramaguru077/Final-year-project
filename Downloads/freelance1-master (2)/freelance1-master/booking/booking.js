

document.getElementById('bookingForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
    
  
    let name = document.getElementById('name').value.trim();
    let email = document.getElementById('email').value.trim();
    let confirmEmail = document.getElementById('confirm-email').value.trim();
    let date = document.getElementById('date').value.trim();
    let tickets = document.getElementById('tickets').value.trim();
   // let message = document.getElementById('message').value.trim();
    
    let emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
   
    if (name === '') {
        alert('Please enter your name.');
        return;
    }

    if (email === '') {
        alert('Please enter your email.');
        return;
    }

    if (!emailPattern.test(email)) {
        alert('Please enter a valid email address.');
        return;
    }

    if (confirmEmail === '') {
        alert('Please confirm your email.');
        return;
    }

    if (email !== confirmEmail) {
        alert('Email and Confirm Email do not match.');
        return;
    }

    if (date === '') {
        alert('Please select a date.');
        return;
    }

    if (tickets === '' || tickets <= 0) {
        alert('Please enter a valid number of tickets.');
        return;
    }

    // If all validations pass, submit the form
    alert('Form submitted successfully!');
    this.submit();
});