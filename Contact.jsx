import React from "react";
import { Link } from "react-router-dom";

function Contact() {
  return (
    <div>
      <h1>This is Contact Page</h1>
      <Link to="/home">Go back to Home Page</Link>
    </div>
  );
}

export default Contact;
