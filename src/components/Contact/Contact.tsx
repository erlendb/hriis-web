import React from "react";
import ContactPerson from "./ContactPerson/ContactPerson";

function Contact() {
  return (
    <div>
      <h2>Kontakt oss</h2>
      <p>
        Lurer du på noe rundt aktiviteten i HRiis? Har du litt lyst til å prøve speiding? Har du bare lyst til å ta kontakt?
        Ta gjerne kontakt med en av lederne i HRiis:
      </p>
      <ContactPerson
        name='Reidar Stockfleth'
        email='reidar@rvp.no'
        phone={90756041}
        />
    </div>
  );
}

export default Contact;