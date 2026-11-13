emailjs.init({
    publicKey: "6PUYQHJ1gW5LBGnfo"
});

const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    emailjs.send("service_4egwz79", "template_i1wr0yg", {
        name: name,
        email: email,
        message: message
    })
    .then(function() {
        alert("Thank you! Your message has been sent successfully.");
        contactForm.reset();
    })
    .catch(function(error) {
        console.error("EmailJS Error:", error);
        alert("Sorry! Message could not be sent. Please try again.");
    });
});