import PresentTeachers from "components/Welcome/PresentTeachers";
import React from "react";
import ContactUsForm from "components/Form/ContactUsForm";
import Objective from "components/Aboutus/Objective";
import DeskMessage from "components/Aboutus/DeskMessage";
import AboutusDesc from "components/Aboutus/AboutusDesc";
import ExpolreBanner from "./ExpolreBanner";


export default function Aboutus() {
  return (
    <>
      <div className="justify-between pt-16 pb-16">
        <div className="bg-blue-500  px-8">
          <div className="flex justify-between text-white container mx-auto py-20">
            <AboutusDesc />
          </div>
        </div>
        <DeskMessage />
        <div className="lg:flex justify-center container py-3">
          <PresentTeachers />
        </div>
        <div className="flex justify-between container  mx-auto mt-32">
          <Objective />
        </div>
      </div>
      <ExpolreBanner> <ContactUsForm /></ExpolreBanner>
    </>
  )
}