// Contact Form Alert
const contactForm = document.getElementById("contactForm");

if (contactForm) {
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();
    alert("✅ Thank you! Your message has been sent.");
    contactForm.reset();
  });
}

// Blog Read More Popup
function openPost(title) {
  alert("📌 You opened: " + title + "\n\n(Next step: I can create a full blog post page for this.)");
}
