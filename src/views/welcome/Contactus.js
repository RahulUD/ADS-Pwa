import ContactUsForm from "components/Form/ContactUsForm";
import React from "react";
import ExpolreBanner from "./ExpolreBanner";
export default function Contactus() {
  return (
    <>
      <div className="relative pt-16 flex content-center items-center justify-center min-h-screen-75">
        <iframe title='map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3600.9956434791457!2d86.45507531449067!3d25.505191825395844!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f1e48a50ba031f%3A0xfc8586059f737d18!2sA.D.S.%20Public%20School!5e0!3m2!1sen!2sin!4v1611900525437!5m2!1sen!2sin" width="100%" height="600" frameborder="0" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
      </div>
      <ExpolreBanner> <ContactUsForm /></ExpolreBanner>
        </>
  )
}