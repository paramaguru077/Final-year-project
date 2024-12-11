document.addEventListener('DOMContentLoaded', function() {
    const scriptURL = 'https://script.google.com/macros/s/AKfycbzuZvNv1kYp9EkkosiIPlM7i7hbccES6PG4cAU7mHwZg1Oe6u8554N72L2Gd2L5iHGc/exec';
    const form = document.forms['submit-to-google-sheet'];
    const message = document.getElementById("message");

    form.addEventListener('submit', function(e) {
        e.preventDefault();

        // Validate email input
        const emailvar = document.getElementById("subbtn-input").value;
        const regex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

        if (emailvar === "") {
            alert("Please enter an email address");
            return; // Stop submission if invalid
        }
        else if (!emailvar.toLowerCase().match(regex)) {
            message.innerText = "Enter a valid email";
            setTimeout(() => { message.innerText = ""; }, 5000);
            return; // Stop submission if invalid
        }

        // Log to check if validation passed
        console.log("Form validation successful, preparing to submit");
        fetch(scriptURL, { method: 'POST', body: new FormData(form) })
            .then(response => {
                console.log('Success!', response);
                message.innerText = "Thanks for subscribing!";
                setTimeout(() => { message.innerText = ""; }, 5000);
            })
            .catch(error => {
                console.error('Error!', error.message);
                message.innerText = "Submission failed. Please try again later.";
            });
    });
});
