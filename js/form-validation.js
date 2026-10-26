// Enquiry form validation
const enquiryForm = document.getElementById("enquiryForm");
if (enquiryForm) {
  enquiryForm.addEventListener("submit", function(e) {
    e.preventDefault();
    const name = this.name.value;
    const email = this.email.value;

    if (name.length < 3) {
      alert("Name must be at least 3 characters long.");
      return;
    }
    if (!email.includes("@")) {
      alert("Invalid email address.");
      return;
    }
    alert("Enquiry submitted successfully!");
  });
}

// Contact form validation
const contactForm = document.getElementById("contactForm");
if (contactForm) {
  contactForm.addEventListener("submit", function(e) {
    e.preventDefault();
    const email = this.email.value;

    if (!email.includes("@")) {
      alert("Invalid email address.");
      return;
    }
    alert("Message sent successfully!");
  });
}
