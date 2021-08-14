import React from 'react';

interface ContactInfo {
  name: string,
  email: string,
  phone: number
}

function ContactPerson(props: ContactInfo) {
  return (
    <div>
      <div>{props.name}</div>
      <div>E-post: <span>{props.email}</span></div>
      <div>Mobil: <span>{props.phone}</span></div>
    </div>
  );
}

export default ContactPerson;