function sendMail(contactForm) {
  emailjs
    .send("gmail", "template_avBcvR14", {
      from_name: contactForm.name.value,
      from_email: contactForm.emailaddress.value,
      commission_request: contactForm.projectsummary.value
    })
    .then(
      function(response) {
        console.log("SUCCESS", response);
      },
      function(error) {
        console.log("FAILED", error);
      }
    );
  return false; // To block from loading a new page
}
