document.addEventListener("DOMContentLoaded", () => {
    const savedData = JSON.parse(localStorage.getItem("contactFormData"));

    if (savedData) {
        const output = `
        <h2>Thank you, ${savedData.name}!</h2>
        <p>Email: ${savedData.email}</p>
        <p>Property Address: ${savedData.address}</p>
        <p>Phone: ${savedData.phone}</p>
        <p>Email Updates: ${savedData.emailUpdates}</p>
        <p>Newsletter: ${savedData.newsletter}</p>
      `;
        document.body.insertAdjacentHTML("beforeend", output);
    }
});
  

  document.addEventListener("DOMContentLoaded", () => {
    const params = new URLSearchParams(window.location.search);

    const name = params.get("customerName");
    const email = params.get("customerEmail"); // Make sure the email input has a name
    const address = params.get("address");
    const date = params.get("today'sDate");
    const phone = params.get("customerTel");
    const updates = params.get("emailUpdates");
    const newsletter = params.get("newsletter");

    const message = `
    <h2>Thank you, ${name}!</h2>
    <p>We received your request for: ${address}</p>
    <p>We'll contact you at ${email}${phone ? " or " + phone : ""}.</p>
    <p>Email updates: ${updates}</p>
    <p>Newsletter: ${newsletter}</p>
    `;

    document.body.insertAdjacentHTML("beforeend", message);
  });

